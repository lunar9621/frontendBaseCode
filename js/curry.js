function sum(){
  var slice=function(arg){
      return [].slice.call(arg);
  }
  var args=slice(arguments);
  function computer(){
      args=args.concat(slice(arguments));
      return computer;
  }
computer.value=function(){
    return args.reduce(function(total,cur){
        return total+cur;
    });
}
return computer;
}

console.log(sum(1)(2,3)(4,5,6).value());
//柯里化通用函数，将普通函数柯里化
function curry(fn,args=[]){
return function(){
    let rest=[...args,...arguments];
    console.log("rest",rest);
    console.log("args",args);
    console.log("arguments",arguments);
    console.log("fnlength",fn.length);
    if(rest.length<fn.length){
        return curry.call(this,fn,rest);
    }else{
        return fn.apply(this,rest);
    }
}
}

function sum(a,b,c){
    return a+b+c;
}
var sumFn=curry(sum);
console.log(sumFn(1)(2,3));

function curry(fn,args=[]){
    return function(){
        let rest=[...args,...arguments];
        if(rest.length<fn.length){
            return curry.call(this,fn,rest);
        }else{
            return fn.apply(this,rest)
        }
    }
}
