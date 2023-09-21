var symbol=1;
var arr=[];
function game(id){
    var a=document.getElementById(id);
    if(symbol%2===0){
        b="X"
    }
    else{b='O'};
    a.innerHTML=b;
    symbol+=1;
    let one=document.getElementById('1').innerHTML;
    let two=document.getElementById('2').innerHTML;
    let three=document.getElementById('3').innerHTML;
    let four=document.getElementById('4').innerHTML;
    let five=document.getElementById('5').innerHTML;
    let six=document.getElementById('6').innerHTML;
    let seven=document.getElementById('7').innerHTML;
    let eight=document.getElementById('8').innerHTML;
    let nine=document.getElementById('9').innerHTML;
    result=document.getElementById('result');
    arr.push(b);
    console.log(arr);
    console.log(b);
    console.log(symbol);
    if((one==='X' && two==='X' && three==='X') || (one==='X' && four==='X' && seven==='X') ||(four==='X' && five==='X' && six==='X')||(two==='X' && five==='X' && eight==='X' )||(seven==='X' && eight==='X' && nine==='X')||(three==='X' && six==='X' && nine==='X') ||(one==='X' && five==='X' && nine==='X')||(three==='X' && five==='X' && seven==='X')){
        console.log("x wins!!!!");
        result.innerHTML="X WINS!!!";
        setTimeout(reset,1000);
        setTimeout(reset,1000);
        console.log(document.querySelectorAll('buttons'));
    }
    else if((one==='O' && two==='O' && three==='O') || (one==='O' && four==='O' && seven==='0') ||(four==='O' && five==='O' && six==='O')||(two==='O' && five==='O' && eight==='O' )||(seven==='O' && eight==='O' && nine==='O')||(three==='O' && six==='O' && nine==='O') ||(one==='O' && five==='O' && nine==='O')||(three==='O' && five==='O' && seven==='O')){
        console.log("O wins!!!!");
        result.innerHTML="O WINS!!!";
        console.log(setTimeout(reset,1000));
        document.getElementsByClassName('buttons').disabled=true;
    }
    else{console.log("TIE NO WINS");
    };
    if(arr.length===9 && result.innerHTML==='')
    {result.innerHTML="TIE NO ONE Wins!!!!!";
    setTimeout(reset,400);};
    console.log("1"+one+"2"+two+"3"+three+"4"+four+"5"+five+"6"+six+"7"+seven+"8"+eight+"9"+nine);
    document.getElementById(id).disabled=true;
}
function reset(){
    var reset=confirm("do you want restart");
            if(reset==true){
                location.reload();}
}
