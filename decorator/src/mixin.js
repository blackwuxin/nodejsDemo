function nameMixin(target){
    target.prototype.setName = function(name){
        this.name = name;
        return this;
    }
    target.prototype.sayName = function(){
        console.log(this.name);
    }
}

function ageMixin(target){
    target.prototype.setAge =function(age){
        this.age = age;
        return this;
    }
    target.prototype.sayAge = function(){
        console.log(this.age);
    }
}

@nameMixin
@ageMixin
class People{

}

var p = new People();
p.setName('johnny').sayName();
p.setAge('18').sayAge();