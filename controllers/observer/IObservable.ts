/**
 * Created by innovaapps on 20/03/2017.
 */
import DataWs = require('../entities/DataWs');
import IObserver = require('./IObserver');
import WebSocket = require("ws");

interface IObservable
{
    agregarObservadoresPredeterminados() : void;
    removerObservadoresPredeterminados() : void;
    agregarObservador(iObserver : IObserver): void;
    removerObservador(iObserver : IObserver): void;
    notificar(dataWs : DataWs, cliente : WebSocket) : void;
}
export = IObservable;