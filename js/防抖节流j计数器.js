function debounce(handler,delay){
    delay=delay||300;
    var timer=null;
   
    return function(){
        var _self=this;
        _args=arguments;
        clearTimeout(timer);
timer=setTimeout(function(){
    handler.apply(_self,_args);
},delay)
    }
}

function throttle(handler,wait){
    wait=wait||300;
   var lasttime=0;
    return function(){
        var nowtime=new Date().getTime();
        var _self=this,
        _args=arguments;
        if(nowtime-lasttime>wait){
            handler.apply(_self,_args);
            lasttime=nowtime;
        }
    }
}

function myIndex(){
    var index=0;
    function foo(){
        return index++;
    }
    foo.clear=function(){
        index=0;
    }
    return foo;
}

var foo=myIndex();