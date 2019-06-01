function supertype(){
this.name=name;
}

supertype.prototype.sayname=function(){
    console.log(this.name);
}

function subtype(name,age){
    supertype.call(this,name);
    this.age=age;
}

subtype.prototype=new supertype();