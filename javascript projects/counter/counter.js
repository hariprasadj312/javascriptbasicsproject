var total=0;
function add(){
    let steps=Number(document.getElementById("number").value);
    total+=steps;
    if(!Number(total)&& total!=0){
        steps=0;
        total=0;
        alert("ENTER NUMBERS ONLY");
    }
    console.log(total);
    document.getElementById("result").innerHTML=total;
    document.getElementById("add-button").innerHTML="ADD "+steps;
    document.getElementById("minus-button").innerHTML="MINUS "+steps;
}
function sub(){
    let steps=Number(document.getElementById("number").value);
    total-=steps;
    if(!Number(total) && total!=0){
        steps=0;
        total=0;
        alert("ENTER NUMBERS ONLY");
    }
    console.log(total);
    document.getElementById("result").innerHTML=total;
    document.getElementById("add-button").innerHTML="ADD "+steps;
    document.getElementById("minus-button").innerHTML="MINUS "+steps;
}
function reset(){
    document.getElementById("result").innerHTML=0;
    total=0;
    }