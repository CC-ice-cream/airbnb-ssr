var activeEffect;
export var effect = function (fn) {
    var _effect = function () {
        activeEffect = _effect;
        fn();
    };
    _effect();
};
var targetMap = new WeakMap();
export var track = function (target, key) {
    var depsMap = targetMap.get(target);
    if (!depsMap) {
        depsMap = new Map();
        targetMap.set(target, depsMap);
    }
    var deps = depsMap.get(key);
    if (!deps) {
        deps = new Set();
        depsMap.set(key, deps);
    }
    deps.add(activeEffect);
};
export var trigger = function (target, key) {
    var depsMap = targetMap.get(target);
    var deps = depsMap.get(key);
    deps.forEach(function (effect) { return effect(); });
};
