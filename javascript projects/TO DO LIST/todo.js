function add(){
    var textinput=document.getElementById("inputbox");
    var list=document.createElement("li");
    console.log(textinput.value);
    var closeButtton=document.createElement("button");
    console.log(closeButtton);
    closeButtton.innerText="x";
    closeButtton.id="delete-button";
    if(textinput.value==''){alert(
        "TASK can't be empty "
    )
    }
    else{
        list.innerText=textinput.value;
        textinput.value='';
        var ulist=document.getElementById('ulist');
        ulist.appendChild(list);
        list.appendChild(closeButtton);
        console.log(list);
    };

    closeButtton.addEventListener("click", function() {
      console.log(closeButtton);
      var removeList=closeButtton.parentElement;
      removeList.remove();
    });
    list.addEventListener("click", function() {
      if (list.classList.contains("completed")) {

          list.classList.remove("completed");
        } else {
          list.classList.add("completed");
        }
      });
};

