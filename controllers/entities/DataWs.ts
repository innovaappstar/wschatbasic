/**
 * Created by innovaapps on 20/03/2017.
 */
import ArrayUtils = require('../../utils/ArrayUtils')
import INDICES from "../../config/indices";

/**
 * entidad de datos entrantes
 */
class DataWs
{
    private _indiceWs : number = 0;
    private _subIndiceWs : number = 0;
    private _codigoData : number = 0;
    private _data : string = '';

    /**
     * @param indiceWs number
     * @param subIndiceWs number
     * @param codigoData number
     * @param data string
     */
    constructor(indiceWs: number, subIndiceWs: number, codigoData: number, data: string) {
        this._indiceWs = indiceWs;
        this._subIndiceWs = subIndiceWs;
        this._codigoData = codigoData;
        this._data = data;
    }

    get indiceWs(): number {
        return this._indiceWs;
    }

    get subIndiceWs(): number {
        return this._subIndiceWs;
    }

    get codigoData(): number {
        return this._codigoData;
    }

    get data(): string {
        return this._data;
    }

    isTipoSesion(): boolean
    {
        return (this._indiceWs == INDICES.TIPOSESION.indice);
    }
    isInicioSesion(): boolean
    {
        return (this._subIndiceWs == INDICES.TIPOSESION.subIndices.inicioSesion);
    }
    isCierreSesion(): boolean
    {
        return (this._subIndiceWs == INDICES.TIPOSESION.subIndices.cierreSesion);
    }

    isTipoMessage(): boolean
    {
        return (this._indiceWs == INDICES.TIPOMESSAGE.indice);
    }
    isRegistroMessage(): boolean
    {
        return (this._subIndiceWs == INDICES.TIPOMESSAGE.subIndices.registroMessage);
    }
    isNuevoMessage(): boolean
    {
        return (this._subIndiceWs == INDICES.TIPOMESSAGE.subIndices.nuevoMessage);
    }

    isTipoSolicitud(): boolean
    {
        return (this._indiceWs == INDICES.TIPOSOLICITUD.indice);
    }
    isRecargarMensaje(): boolean
    {
        return (this._subIndiceWs == INDICES.TIPOSOLICITUD.subIndices.recargarMensajes);
    }
}
export = DataWs;