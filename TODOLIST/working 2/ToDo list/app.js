var buttonobject = document.getElementById("buttonID");




sno = 0;

function AddingFuntion() {
    var unorderlistobject = document.getElementById("unorderlistID");
    
    // console.log(taskobj.outerHTML)
    
    var inputValue = document.getElementById("inputfielsID");
    if (inputValue.value.length == 0) {
        alert("user must give input!")
    }
    else {
        
        
        var textvalue = document.createTextNode(inputValue.value);
        var creatingLI = document.createElement("li");
        
        // adding button for close any list
        creatingLI.style.position = "relative";
        var delbutton = document.createElement("button");   
        delbutton.className = "delbutton";
        
        delbutton.value = sno;
        creatingLI.value = sno;
        
        
        // delbutton.onmouseover = function () { delbutton.style.cursor = "pointer", delbutton.style.color = "red" };
        // delbutton.onmouseout = function () { delbutton.style.color = "black" };
        // delbutton.onmouseout = function () { delbutton.style.color = "black" };
        
        creatingLI.appendChild(textvalue);
        creatingLI.appendChild(delbutton);
        document.getElementById("unorderlistID").appendChild(creatingLI);
        
        var items = document.querySelectorAll("#unorderlistID li");
        // var Length = document.querySelectorAll("#unorderlistID li");
        var taskobj = document.getElementById("task");
        taskobj.innerHTML = "Task: " + eval(items.length);

        
        // ????????????????????????????????del funtion?????????????????????????????????????????????????
        delbutton.onclick = function () {
            delfunction(delbutton,taskobj);
            
        }
        // ???????????????????????????????????????????????????????????????????????????????????????????
        
        
        if(items.length>=1){
            var footerobje = document.getElementById("footerID");
            footerobje.style.display = "flex";
            console.log(items.length);
        }
    
        
 
    
        
        
    }
    
    sno = sno + 1;
    
    
    inputValue.value = '';
}
  





function delfunction(delbutton,taskobj){
    var items = document.querySelectorAll("#unorderlistID li");
            // console.log("button value " + delbutton.value)
            for (i = 0; i < items.length; i++) 
            {
                if (items[i].value == delbutton.value) 
                {
                    items[i].outerHTML = " ";
                }
                
            }
            
            // var Length = document.querySelectorAll("#unorderlistID li").length;
            taskobj.innerHTML = "Task: " + (items.length-1);
            // console.log(items.length)

            
}