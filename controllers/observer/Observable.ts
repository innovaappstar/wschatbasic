import IObserver = require("./IObserver");
import IObservable = require("./IObservable");
import SesionObserver = require("./SesionObserver");
import DataWs = require("../entities/DataWs");
import WebSocket = require("ws");
import {MessageObserver} from "../observer/MessageObserver";

/**
 * Created by innovaapps on 20/03/2017.
 */
class Observable implements IObservable
{
    public static listObservadores : Array<IObserver> = [];

    agregarObservadoresPredeterminados(): void {
        Observable.listObservadores.push(new SesionObserver());
        Observable.listObservadores.push(new MessageObserver());
    }

    removerObservadoresPredeterminados(): void {
        Observable.listObservadores = [];
    }

    agregarObservador(iObserver: IObserver): void {
        Observable.listObservadores.push(iObserver);
    }

    removerObservador(iObserver: IObserver): void {
        Observable.listObservadores.forEach((iObserverItem : IObserver, index : number, listObservadores : Array<IObserver>)=>
        {
           if (iObserver === iObserverItem)
           {
               Observable.listObservadores.splice(index, 1);// elimina un elemento que coincida- probar
               return;
           }
        });
    }

    notificar(dataWs: DataWs, cliente : WebSocket): void {
        Observable.listObservadores.forEach((iObserverItem : IObserver, index : number, listObservadores : Array<IObserver>)=>
        {
            iObserverItem.update(dataWs, cliente);
        });
    }
}
export = Observable;