function create() {
    var box=document.createElement("textarea");
    console.log("hari");
    console.log(box);
    var container=document.getElementById("container");
    box.className="notesbox";
    box.style.backgroundColor=`rgb(${Number(Math.floor(Math.random()*250))},${Number(Math.floor(Math.random()*250))},${Number(Math.floor(Math.random()*250))})`;
    box.style.borderColor=`rgb(${Number(Math.floor(Math.random()*250))},${Number(Math.floor(Math.random()*250))},${Number(Math.floor(Math.random()*250))})`;
    box.placeholder="Enter the notes";
    container.prepend(box);

}