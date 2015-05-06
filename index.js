function _once (func) {
    var result
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
    var cache = {}
    function inner_memoize (arg) {
        var key
        if (callback){
            key = callback(arg)
        }
        if (cache.hasOwnProperty(key?key:arg)) {
            return cache[key?key:arg];
        }
        else {
            result = func(arg);
            cache[key?key:arg] = result;
            return cache[key?key:arg];
        }
    }
    return inner_memoize;
}

function _bind (fn, context) {
    var self = context;
    function inner_bind (arg) {
        return fn.call(self, arg)
    };
    return inner_bind;
};

var _ = {
    once : _once,
    memoize : _memoize,
    bind : _bind
    };

module.exports = _;