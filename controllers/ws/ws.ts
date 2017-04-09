/**
 * Created by innovaapps on 14/03/2017.
 */
import express = require('express');
import {BaseWebSocket, WebSocket, Header} from './BaseWebSocket';
import Dispositivo = require('../entities/Dispositivo');
import Obsservable = require('../observer/Observable');
import Observable = require("../observer/Observable");
import DataWsDEO = require("../deo/DataWsDEO");
import {URLUtils} from '../../utils/URLUtils';

/**
 * objeto ws-servidor que se encargará
 * de recepcionar toda la data de los
 * clientes (validadores-configuración-cards-nfc)
 * https://laracasts.com/discuss/channels/elixir/class-is-not-a-constructor
 */
export default class ws extends BaseWebSocket
{
    public listDispositivo = new Array<Dispositivo>();
    private static observable : Obsservable = new Observable();
    private static instance: ws;

    constructor() {
        super();
        console.log('constructor-ws-iniciado');
    }

    static getInstance() : ws{
        if (!ws.instance)
        {
            ws.instance = new ws();
            ws.observable.agregarObservadoresPredeterminados();
            console.log('servicio iniciado.. ws singleton');
        }
        return ws.instance;
    }

    onOpen(client: WebSocket): void {
        var url  = client.upgradeReq.url;
        let codDispositivo : string = URLUtils.VerificarString(url, Header.codDispositivo);
        let imei : string = URLUtils.VerificarString(url, Header.imei);
        client[Header.codDispositivo] = codDispositivo;
        client[Header.imei] = imei;

        let dispositivo : Dispositivo = new Dispositivo(codDispositivo, imei, client);
        this.listDispositivo.push(dispositivo);
        console.log(this.listDispositivo.length + ' => tamanio de clientes : ' + codDispositivo);
        client.send('estas conectado :D');
    }

    onTextMessage(data: string, cliente : WebSocket): void {
        console.log(data);
        ws.observable.notificar(new DataWsDEO(data).getDataWs(), cliente);
    }

    onBinaryMessage(binary: any, cliente : WebSocket): void {
    }

    onClose(code: Number, reason: string, cliente : WebSocket) {
    }
}