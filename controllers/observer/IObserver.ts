/**
 * Created by innovaapps on 20/03/2017.
 */
import DataWs = require('../entities/DataWs');
import WebSocket = require("ws");

interface IObserver
{
    update(dataWs : DataWs, cliente : WebSocket) : void;
}
export = IObserver;
