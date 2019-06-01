//深度遍历
function iterator(node){
    console.log(node);
    if(node.children.length){
        for(var i=0;i<node.children.length;i++){
            iterator(node.children[i]);
        }
    }
}
//广度遍历
function iterator(node){
    var arr=[];
    arr.push(node);
    while(arr.length>0){
        var temp=arr.unshift();
        console.log(temp);
        if(temp.children.length){
            for(var i=0;i<temp.children.length;i++){
                arr.push(temp.children[i]);
            }
        }
    }
}