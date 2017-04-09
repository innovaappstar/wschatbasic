/**
 * Created by innovaapps on 15/03/2017.
 */
import {WebSocket} from '../ws/BaseWebSocket';

class Dispositivo
{
    private _codDispositivo : string;
    private _imei : string;
    private _webSocket : WebSocket;

    /**
     * @param codDispositivo number
     * @param imei string - 11 || 16 dgts
     * @param webSocket WebSocket
     */
    constructor(codDispositivo: string, imei: string, webSocket ?: WebSocket) {
        this._codDispositivo = codDispositivo;
        this._imei = imei;
        this._webSocket = webSocket;
    }

    get codDispositivo(): string {
        return this._codDispositivo;
    }

    get imei(): string {
        return this._imei;
    }

    get webSocket(): WebSocket {
        return this._webSocket;
    }
}

export = Dispositivo;