/**
 * Created by innovaapps on 28/02/2017.
 */
abstract class AbstractEntity
{
    private _ID : String;

    get ID(): String {
        return this._ID;
    }

    set ID(value: String) {
        this._ID = value;
    }
}