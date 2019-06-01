function deepClone(oringin,target){
    target=target||{};
    for(let prop in origin){
     if(origin.hasOwnProperty(prop)){
     if(typeof (oringin[prop])=='object'&&oringin[prop]){
         if(oringin[prop] instanceof Array){
             target[prop]=[];
             deepClone(oringin[prop],target[prop]);
         }
         target[prop]={};
         deepClone(oringin[prop],target[prop]);
     }
     else{
         target[prop]=oringin[prop];
     }
     }
    }
    return target;
}