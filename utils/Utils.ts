/**
 * Created by innovaapps on 15/03/2017.
 */

class Utils
{
    constructor() {
    }

    /**
     * comprueba si el valor n es un número
     * @param n any
     * @returns {boolean}
     */
    public static isNumber(n : any) : boolean
    {
        return !isNaN(n) && isFinite(n);
    }

    /**
     * remueve n carácteres finales
     * @param s string
     * @param n number
     * @returns {string}
     */
    public static removerUltimosCaracteres(s : string, n : number) : string
    {
        if (s.length > 0) s = s.substring(0, (s.length - n));
        return s;
    }



}

export = Utils;