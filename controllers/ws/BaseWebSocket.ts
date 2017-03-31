/**
 * Created by innovaapps on 14/03/2017.
 */
import WebSocketServer = require('ws');
import config from '../../config/Config';
import WebSocket = require("ws");
//https://medium.com/@Zenkilies/express-session-with-typescript-85bf6dff3dc9#.ptzk6z5uy
import session = require('express-session');
import qs = require("query-string");
import URLUtils = require('../../utils/URLUtils');
import SesionObserver = require("../observer/SesionObserver");

// const express = require('express');
// const app = express();

abstract class BaseWebSocket{

   //http://stackoverflow.com/questions/22429744/how-to-setup-route-for-websocket-server-in-express
   private ws : WebSocketServer.Server = new WebSocketServer.Server({
      verifyClient: (info, done) =>{
         // var url  = info.req.url;
         // if (URLUtils.VerificarInteger(url, Header.codDispositivo) &&
         //     URLUtils.VerificarInteger(url, Header.codTipoDispositivo) &&
         //     URLUtils.VerificarInteger(url, Header.codEmpresa) &&
         //     URLUtils.VerificarString(url, Header.imei))
         //    done(true);
         // else
         //    done(false);
          done(true);
      }, port: config.puertows, path : '/ws'});

   constructor()
   {
      this.ws.on('connection', (client: WebSocket) => {
         this.onOpen(client);

         client.on('message', (data: any) => {
            if (typeof data === 'string')
               this.onTextMessage(data, client);
            else if (typeof data === 'binary')
               this.onBinaryMessage(data, client);
            // else if (data === ArrayBuffer)//(Buffer.isBuffer(data))  //if (message.type === 'binary')
            //    this.onBinaryMessage(data);
         });

         client.on('close', (code : Number, reason : string) => {
            this.onClose(code, reason, client);
         });
      });
   }


   abstract onOpen(client: WebSocket) : void;
   abstract onTextMessage(data : string, client : WebSocket) : void;
   abstract onBinaryMessage(binary : any, client : WebSocket) : void;  // array binary => binary : byte[]
   abstract onClose(code : Number, reason : string, client : WebSocket);


   /**
    * envía data para clientes que coincidan con los códigos...
    * codTipoDispositivo es alternativo..
    * @param data string
    * @param codDispositivo number
    * @param codEmpresa number
    * @param codTipoDispositivo ?number
    */
   protected sendTextMessageByCodigos(data : string, codDispositivo : number, codEmpresa : number, codTipoDispositivo ?: number) : void
   {
      //    forEach(callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any): void;
      this.ws.clients.forEach((cliente : WebSocket, index : number, listClientes : WebSocket[])=>
      {
         if (cliente[Header.codDispositivo] == codDispositivo && cliente[Header.codEmpresa] == codEmpresa)
         {
            if ((codTipoDispositivo != null) && cliente[Header.codTipoDispositivo] == codTipoDispositivo)
               this.sendTextMessage(data, cliente);
            else
               this.sendTextMessage(data, cliente);
         }
      });
   }

    /**
     * envía data para clientes que coincidan con los códigos...
     * codTipoDispositivo es alternativo..
     * @param data string
     * @param codDispositivo number
     * @param codEmpresa number
     * @param codTipoDispositivo ?number
     */
    public sendTextMessageByCliente(data : string, cliente : WebSocket) : void
    {
        this.ws.clients.forEach((clienteList : WebSocket, index : number, listClientes : WebSocket[])=>
        {
            if (clienteList[Header.codDispositivo] == cliente[Header.codDispositivo] &&
                clienteList[Header.codEmpresa] == cliente[Header.codEmpresa] &&
                clienteList[Header.codTipoDispositivo] == cliente[Header.codTipoDispositivo])
            {
                this.sendTextMessage(data, cliente);
            }
        });
    }


   /**
    * comprueba si cliente esta conectado y le envía una cadena..
    * @param data string
    * @param cliente WebSocket
    */
   protected sendTextMessage(data : string, cliente : WebSocket) : void
   {
      if (cliente.readyState === WebSocket.OPEN)
         cliente.send(data);
   }

}

class Header
{
   public static codDispositivo : string = 'codDispositivo';
   public static codEmpresa : string = 'codEmpresa';
   public static codTipoDispositivo : string = 'codTipoDispositivo';
   public static imei : string = 'imei';
}
export {BaseWebSocket, WebSocket, Header};