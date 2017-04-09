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
class MessageDEO
{
    constructor()
    {
    }

    /**
     * obtiene atributos del datagrama entrante
     * @returns {DataWs}
     */
    public getIDMessage(dataWS : DataWs) : string
    {
        let ids = "";
        let listMessage = dataWS.data.split("~");
        listMessage.forEach((messageItem : string)=>
        {
            let message = messageItem.split("|");
            let _id = ArrayUtils.VerificarString(message, 0);
            let msg = ArrayUtils.VerificarString(message, 1);
            let nickUser = ArrayUtils.VerificarString(message, 2);
            let fechaHora = ArrayUtils.VerificarString(message, 3);

            ids += _id + "|" ;
        });
        ids = Utils.removerUltimosCaracteres(ids, 1);
        return ids;
    }

    /**
     * obtiene atributos del datagrama entrante
     * @returns {DataWs}
     */
    public getNuevoMessage(dataWS : DataWs) : string
    {
        let listMessage = dataWS.data.split("~");
        let nuevoMensaje = "";
        listMessage.forEach((messageItem : string)=>
        {
            let message = messageItem.split("|");
            let _id = ArrayUtils.VerificarString(message, 0);
            let msg = ArrayUtils.VerificarString(message, 1);
            let nickUser = ArrayUtils.VerificarString(message, 2);
            let fechaHora = ArrayUtils.VerificarString(message, 3);


            let isMensajeRepetido = false;
            let posicion = MessageObserver.listMensajes.length + 1;
            let mensajeCli : IMensaje =
            {
                indice : posicion,
                msg : msg,
                nickEmisor : nickUser,
                fechaHora : fechaHora,
                _id : _id
            };

            MessageObserver.listMensajes.forEach((mensajeCliente : IMensaje)=>
            {
               if((mensajeCliente.nickEmisor == nickUser) && (mensajeCliente.fechaHora == fechaHora)
               && (mensajeCliente.msg == msg))
               {
                   console.log('YA EXISTE ESTE MENSAJE - DUPLICADO');
                   isMensajeRepetido = true;
                   return false;
               }
            });
            if(!isMensajeRepetido)
            {
                MessageObserver.listMensajes.push(mensajeCli);
                console.log(`se registro nuevo mensaje ${MessageObserver.listMensajes.length} con el id ${mensajeCli.indice}`);
                // console.log(mensajeCli);
                nuevoMensaje += `${msg}|${nickUser}|${fechaHora}|${_id}~`;
            }
        });
        nuevoMensaje = Utils.removerUltimosCaracteres(nuevoMensaje, 1);
        return nuevoMensaje;
    }

}
export = MessageDEO;