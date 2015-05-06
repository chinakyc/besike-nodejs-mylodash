function _once (func) {
    var result;
    function inner_once () {
        if (result) {
            return result;
        }
        else{
            result = func();
            return result;
        }
    };
    return inner_once;
};

function _memoize (func, callback) {
    var cache = {};
    function inner_memoize (arg) {
        var key;
        if (callback){
            key = callback(arg);
        }
        else{
            key = arg;
        }
        if (cache.hasOwnProperty(key)) {
            return cache[key];
        }
        else {
            result = func(arg);
            cache[key] = result;
            return cache[key];
        }
    }
    return inner_memoize;
}

function _bind (fn, context) {
    var self = context;
    function inner_bind () {
        return fn.apply(self, arguments)
    };
    return inner_bind;
};

var _ = {
    once : _once,
    memoize : _memoize,
    bind : _bind
    };

module.exports = _;
