/**
 * Created by innovaapps on 15/03/2017.
 */
import {WebSocket} from '../controllers/BaseWebSocket';

class Dispositivo
{
    private _codDispositivo : number;
    private _codEmpresa : number;
    private _codTipoDispositivo : number;
    private _imei : string;
    private _webSocket : WebSocket;

    /**
     * @param codDispositivo number
     * @param codEmpresa number
     * @param codTipoDispositivo number
     * @param imei string - 11 || 16 dgts
     * @param webSocket WebSocket
     */
    constructor(codDispositivo: number, codEmpresa: number, codTipoDispositivo: number, imei: string, webSocket ?: WebSocket) {
        this._codDispositivo = codDispositivo;
        this._codEmpresa = codEmpresa;
        this._codTipoDispositivo = codTipoDispositivo;
        this._imei = imei;
        this._webSocket = webSocket;
    }

    get codDispositivo(): number {
        return this._codDispositivo;
    }

    get codEmpresa(): number {
        return this._codEmpresa;
    }

    get codTipoDispositivo(): number {
        return this._codTipoDispositivo;
    }

    get imei(): string {
        return this._imei;
    }

    get webSocket(): WebSocket {
        return this._webSocket;
    }
}

export = Dispositivo;