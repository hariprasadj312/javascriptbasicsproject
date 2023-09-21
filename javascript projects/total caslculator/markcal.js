function add(){
    let tam=Number(document.getElementById('tamil').value);
    let eng=Number(document.getElementById('english').value);
    let mat=Number(document.getElementById('maths').value);
    let sci=Number(document.getElementById('science').value);
    let soc=Number(document.getElementById('social').value);
    let sum=tam+eng+mat+sci+soc;
    if(tam<=100 && eng<=100 && mat<=100 && sci<=100 && soc<=100){
        console.log(sum)
        let result=document.getElementById('total');
        result.style.color="green";
        result.innerHTML=sum
    }
    else{
        alert("Enter the valid input")
    }
    if(tam<35 || eng<35 || mat<35 || sci<35 || soc<35){
        console.log(sum)
        let result=document.getElementById('grade');
        result.style.color="red";
        result.innerHTML="FAIL"
    }
    else{
        console.log(sum)
        let result=document.getElementById('grade');
        result.style.color="green";
        result.innerHTML="PASS"
    }
};
function reload(){
    location.reload();
}