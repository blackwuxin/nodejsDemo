'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _desc, _value, _class;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
        desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
        return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
        Object['define' + 'Property'](target, property, desc);
        desc = null;
    }

    return desc;
}

function aop(before, after) {
    return function (target, key, descriptor) {
        var method = descriptor.value;
        descriptor.value = function () {
            var ret = void 0;

            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            before && before.apply(undefined, args);
            ret = method.apply(target, args);
            if (after) {
                ret = after(ret);
            }
            return ret;
        };
    };
}

function beforeTest1(opt) {
    opt.name = opt.name + ', haha';
}
function beforeTest2() {}
function afterTest2(ret) {
    console.log('haha,add 10');
    return ret + 10;
}

var Test = (_dec = aop(beforeTest1), _dec2 = aop(beforeTest2, afterTest2), (_class = function () {
    function Test() {
        _classCallCheck(this, Test);
    }

    _createClass(Test, null, [{
        key: 'test1',
        value: function test1(opt) {
            console.log('hello, ' + opt.name);
        }
    }, {
        key: 'test2',
        value: function test2() {
            for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                args[_key2] = arguments[_key2];
            }

            return args.reduce(function (a, b) {
                return a + b;
            });
        }
    }]);

    return Test;
}(), (_applyDecoratedDescriptor(_class, 'test1', [_dec], Object.getOwnPropertyDescriptor(_class, 'test1'), _class), _applyDecoratedDescriptor(_class, 'test2', [_dec2], Object.getOwnPropertyDescriptor(_class, 'test2'), _class)), _class));


Test.test1({ name: 'johnny' });

console.log(Test.test2(1, 2, 3));