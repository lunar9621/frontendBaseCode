function objectFactory(){
    var obj=new Object();
    const Constructor=[].shift.call(arguments);
    obj._proto_=Constructor.prototype;
    const ret=Constructor.apply(obj,arguments);
    return typeof ret ==="object"?ret:obj;
}