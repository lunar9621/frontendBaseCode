Function.prototype.myBind=(target,...args)=>{
    var that=this;
    return function(){
        var _args=Array.prototype.slice.call(arguments);
       return that.apply(target,_args.concat(args));
    }

}

Function.prototype.myApply=function(context){
    context=context||window;
    var result;
    context.fn=this;
    if(arguments[1]){
        result=context.fn(...arguments[1]);
    }
    else{
        result=context.fn();
    }
    delete context.fn;
    return result
}

Function.prototype.myCall=function(context){
    context=context||window;
    var result;
    context.fn=this;
if(arguments.length>1){
    let arg=[...arguments].slice(1);
  result=context.fn(...arg);
}else{
    result=context.fn();
}
return result;
}
var obj={
    name:"limian",
}
function print(age){
    console.log("name is"+this.name,"age is"+age);
}

print.mybind(obj,23)();