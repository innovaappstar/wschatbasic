/**
 * Created by innovaapps on 20/03/2017.
 */
import ArrayUtils = require('../../utils/ArrayUtils')
import DataWs = require("../entities/DataWs");
import Constantes = require("../../constantes/Constantes");
import Utils = require("../../utils/Utils");
import {MessageObserver, IMensaje} from "../observer/MessageObserver";

/**
 * DEO : Objeto deserializador de objetos
 */
class SolicitudDEO
{
    constructor()
    {
    }

    /**
     * obtiene atributos del datagrama entrante
     * @returns {DataWs}
     */
    public getUltimosMessages(dataWS : DataWs) : string
    {
        // let listMessage = dataWS.data.split("~");
        let nuevoMensaje = "";

        let message = dataWS.data.split("|"); //messageItem.split("|");
        let capacidad = ArrayUtils.VerificarInteger(message, 0);
        capacidad = MessageObserver.listMensajes.length - capacidad;

        MessageObserver.listMensajes.forEach((mensajeCliente : IMensaje, index : number)=>
        {
            if(index >= capacidad)
            {
                nuevoMensaje += `${mensajeCliente.msg}|${mensajeCliente.nickEmisor}|${mensajeCliente.fechaHora}|${mensajeCliente._id}~`;
            }
        });

        nuevoMensaje = Utils.removerUltimosCaracteres(nuevoMensaje, 1);
        return nuevoMensaje;
    }

}
export = SolicitudDEO;