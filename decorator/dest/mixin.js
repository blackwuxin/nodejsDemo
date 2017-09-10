'use strict';

var _class;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function nameMixin(target) {
    target.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    target.prototype.sayName = function () {
        console.log(this.name);
    };
}

function ageMixin(target) {
    target.prototype.setAge = function (age) {
        this.age = age;
        return this;
    };
    target.prototype.sayAge = function () {
        console.log(this.age);
    };
}

var People = nameMixin(_class = ageMixin(_class = function People() {
    _classCallCheck(this, People);
}) || _class) || _class;

var p = new People();
p.setName('johnny').sayName();
p.setAge('18').sayAge();