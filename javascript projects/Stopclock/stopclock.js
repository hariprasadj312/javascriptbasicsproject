var ms=sec=min=hr=0;
var count=0;
function display1(){
    var ms1=ms<10?'0'+ms:ms;
    var sec1=sec<10?'0'+sec:sec;
    var min1=min<10?'0'+min:min;
    var hr1=hr<10?'0'+hr:hr;
   // console.log( hr1,min1,sec1,ms1);
    document.getElementById('msec').innerText=ms1;
    document.getElementById('hour').innerText=hr1;
    document.getElementById('min').innerText=min1;
    document.getElementById('sec').innerText=sec1;
}
function display(){
    document.getElementById('start').disabled=true;
        a=setInterval(function incrementor(){
        ms++;
        if(ms==100){
            ms=0;
            sec++;
        };
        if(sec==60){
            min++;
            sec=0;
        };
        if(min==60){
            hr++;
            min=0;
        };
        display1();
    },10);
    };
function stop(){
    document.getElementById('start').disabled=false;
    clearInterval(a);
    display1();
    
}
function reset(){
    ms=0,hr=0,min=0,sec=0;
    display1()}
