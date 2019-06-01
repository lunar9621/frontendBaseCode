const sleep=time=>{
    return new Promise(resolve=>setTimeout(resolve,time));
}
sleep(1000).then(value=>console.log(value));

function sleep(callback,time){
    if(typeof callback=='function'){
        setTimeout(callback,time);
    }
}

function output(){
    console.log(1);
}

sleep(output,1);