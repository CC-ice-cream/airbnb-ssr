import { track, trigger } from './effect.js';
var isObject = function (target) { return target != null && typeof target == 'object'; };
export var reactive = function (target) {
    return new Proxy(target, {
        get: function (target, key, receiver) {
            var res = Reflect.get(target, key, receiver);
            track(target, key);
            if (isObject(res)) {
                return reactive(res);
            }
            return res;
        },
        set: function (target, key, value, receiver) {
            var res = Reflect.set(target, key, value, receiver);
            trigger(target, key);
            return res;
        },
    });
};
