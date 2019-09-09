function myinstance(L,R){
    var O=R.prototype,
    L=L._proto_;
    while(L!=null){
        if(L==O){
            return true;
        }
        L=L._proto;
    }
    return false;
}