var Singleton=function(name){
    this.name=name;
    this.instance=null;
}

Singleton.prototype.getName=function(){
    return this.name;
}

Singleton.getInstance=function(name){
    if(!this.instance){
        this.instance=new Singleton(name)
    }
    return this.instance;
}

var a=Singleton.getInstance("aa");
var b=Singleton.getInstance("bb");
console.log(a===b);