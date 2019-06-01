function steamroller(arr){
var newArr=[];
for(var i=0;i<arr.length;i++){
    if(arr[i].constructor==Array){
        newArr.push.apply(newArr,steamroller(arr[i]));
    }else{
        newArr.push(arr[i]);                                                 
    }
}
return newArr;
}

console.log(steamroller(arr1));

function steamroller2(arr){
    while(arr.some(item=>Array.isArray(item))){
        arr=[].concat.apply([],arr);                   
        console.log(arr);
    }
    return arr;
}
var arr1=[1,2,[3,4,[5,6,7]],9,[10,11]];
console.log(steamroller2(arr1));

function steamroller3(arr){
    while(arr.some(item=>Array.isArray(item))){
        arr=[].concat(...arr);
        console.log(arr);
    }
    return arr;
}

console.log(steamroller3(arr1));