function calc(n,str1,str2){
var finish=str1.split('').map(item=>item.charCodeAt()-65);
console.log("finish",finish);
var maxindex=0;
var peoples=str2.split(' ');
for(var i=0;i<13;i++){
    if(finish.indexOf(i)==-1&&peoples[i]>peoples[maxindex]){
        maxindex=i;
        console.log(i+":"+maxindex);
    }
}
console.log(i+":"+maxindex);
console.log(String.fromCharCode(65+maxindex));
}

calc(6,'ADEGHM','58 42 98 84 84 40 75 97 98 7 8 40 54 ')