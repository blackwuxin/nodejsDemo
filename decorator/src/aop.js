function aop(before,after){
    return function(target,key,descriptor){
        const method = descriptor.value;
        descriptor.value = function(...args){
            let ret;
            before && before(...args);
            ret = method.apply(target,args);
            if(after){
                ret = after(ret);
            }
            return ret;
        }
    }
}

function beforeTest1(opt){
    opt.name = opt.name + ', haha';
}
function beforeTest2(...args){

}
function afterTest2(ret){
    console.log('haha,add 10');
    return ret + 10;
}

class Test {
    @aop(beforeTest1)
    static test1(opt){
        console.log(`hello, ${opt.name}`);
    }

    @aop(beforeTest2,afterTest2)
    static test2(...args){
        return args.reduce((a,b) => a+b);
    }
}

Test.test1({name:'johnny'});

console.log(Test.test2(1,2,3));