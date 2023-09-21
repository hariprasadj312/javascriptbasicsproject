var boxvalue='';
function insert(n){
    console.log(n,typeof n);
    var box=document.getElementById('inputbox');
    boxvalue+=String(n);
    console.log(`THE VALUE IS ${boxvalue},TYPE IS ${typeof boxvalue}`);
    box.value=boxvalue;
}
function result(){
    console.log(boxvalue);  
    let a=inputbox.value;
    boxvalue='';  
    console.log(boxvalue);  
    var box=document.getElementById('inputbox');
    box.value=eval(a);
}
function erase(){
    console.log(boxvalue);
    box=document.getElementById('inputbox');
    boxvalue='';
    box.value=boxvalue;
    console.log("hari");
}
/*var a='2+6*6-65*652/5';
var op=[];
var num='';
var no=[];
for(var i=0;i<a.length;i++){
    if((a[i]=='+')||(a[i]=='-')||(a[i]=='*')||(a[i]=='/'))
    {
        console.log(a[i]);
        op.push(a[i]);
        console.log(op);
        no.push(num);
        console.log(no);
        num='';
    }
    else{
        num+=a[i];
        //console.log(a[i]);
        console.log(num);
    }
}
no.push(num);
console.log(num);
console.log(op);*/