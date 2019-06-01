function curry(fn,args=[]){
return function(){
    var rest=[...args,...arguments];
    if(rest.length<fn.length){
       return curry.call(this,fn,rest);
    }else{
        return fn.apply(this,rest);
    }
}
}