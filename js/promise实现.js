const PENDING='pending'
const RESOLVED='resolved'
const REJECTED='rejected'

function MyPromise(fn){
    const that=this;
    this.state=PENDING;
    this.value=null;
    this.resolvedcallbacks=[];
    this.rejectedcallbacks=[];

    function resolve(value){
        if(that.state==PENDING){
            that.state=RESOLVED;
            that.value=value;
            that.resolvedcallbacks.map(cb=>cb(that.value));
        }
    }

    function reject(value){
        if(that.state==PENDING){
            that.state=REJECTED;
            that.value=value;
            that.rejectedcallbacks.map(cb=>cb(that.value));
        }
    }try{
        fn(resolve,reject);
    }catch(e){
      reject(e);
    }
}

MyPromise.prototype.then=function(onFullfilled,onRejected){
const that=this;
onFulfilled = 
typeof onFulfilled === 'function'
? onFulfilled 
: v => v  // onFulfilled = v => v
onRejected = 
typeof onRejected === 'function'
? onRejected
: r => {
  throw r
}

if(that.state===PENDING){
    that.resolvedcallbacks.push(onFullfilled);
    that.rejectedcallbacks.push(onRejected);
}else if(that.state==RESOLVED){
    onFullfilled(that.value);
}else{
    onRejected(that.value);
}
}