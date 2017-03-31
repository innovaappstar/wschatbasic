/**
 * Created by innovaapps on 28/02/2017.
 */
var AbstractEntity = (function () {
    function AbstractEntity() {
    }
    Object.defineProperty(AbstractEntity.prototype, "ID", {
        get: function () {
            return this._ID;
        },
        set: function (value) {
            this._ID = value;
        },
        enumerable: true,
        configurable: true
    });
    return AbstractEntity;
}());
//# sourceMappingURL=AbstractEntity.js.map