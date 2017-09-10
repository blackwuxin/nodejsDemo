function readonly(target, key, descriptor) {
    descriptor.writable = false;
    return descriptor;
}

class People {
    @readonly
    sayName() {
        console.log(this.name);
    }
}

var p = new People();
p.sayName = 'hello';