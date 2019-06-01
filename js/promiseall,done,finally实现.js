Promise.all=arr=>{
    let aResult=[];
    return new Promise(function(resolve,reject){
        let i=0;
        next();
        function next(){
            arr[i].then(function(res){
                aResult.push(res);
                i++;
                if(i==arr.length){
                    resolve(aResult);
                }else{
                    next();
                }
            })
        }
    })
}

Promise.done=function(onFulliled,onRejected){
    this.then(onFulliled,onRejected).
    catch(function(reason){setTimeout(()=>{throw reason},0)})

}

Promise.finally=function(callback){
    let P=this.constructor;
    return this.then()(
        value=>P.resolve(callback()).then(()=>value),
        reason=>P.resolve(callback()).then(()=>{throw reason})
    )
}