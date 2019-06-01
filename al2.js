function sum(){
    var _args=[].slice.call(arguments);
    return function(){
        _args=_args.concat([].slice.call(arguments));
        return function(){
            _args=_args.concat([].slice.call(arguments));
            var compute={
                value:function(){  
                     return _args.reduce(function(prev,cur){
                         return prev+cur;
                     })
                 }
             }
           return compute;
            
        }
    }
}

console.log(sum(1)(2,3)(4,5,6).value());