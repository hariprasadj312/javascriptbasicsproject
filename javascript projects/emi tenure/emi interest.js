function fdrate(){
    let m=Number(document.getElementById('month').value);
    let res=m<3?"5.8%":m<6?"6.5%":m<9?"6.8%":"7%";
    console.log(res)
    let resul=document.getElementById('result');
    resul.innerHTML=res
}