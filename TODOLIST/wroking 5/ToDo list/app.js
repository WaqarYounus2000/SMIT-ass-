var buttonobject = document.getElementById("buttonID");

// submitbuttonobj.onclick = function(){
//     // buttonobject.style.backgroundImage = URL("./submitsicons/submitgif.gif");
//     submitbuttonobj.src = "submitsicons/submitgif.gif";
//     // submitbuttonobj.backgroundImage.URL = ("./submitsicons/submitgif.gif");

// }


sno = 0;

function AddingFuntion() {
    var unorderlistobject = document.getElementById("unorderlistID");
    var submitbuttonobj = document.getElementById("buttonsubmitID");
    var invalidfeedback = document.getElementById("invalidfeedbackID");
    submitbuttonobj.src = "submitsicons/submitgif.gif";
    setTimeout(function () {

        submitbuttonobj.src = "./submitsicons/submit.png";

    }, 1000)

    var inputValue = document.getElementById("inputfielsID");
    if (inputValue.value.length == 0) {
        // alert("user must give input!")
        invalidfeedback.style.display = "block";
        inputValue.style.outline = 1 + "px";
        // inputValue.style.border = 1+"px solid red";

    }
    else {

        invalidfeedback.style.display = "none";
        inputValue.value = inputValue.value + '.';
        var textvalue = document.createTextNode(inputValue.value);
        var creatingLI = document.createElement("li");
        creatingLI.className = 'mylists';

        // adding button for close any list
        creatingLI.style.position = "relative";
        var delbutton = document.createElement("button");
        var editbutton = document.createElement("button");
        editbutton.className = "editbutton";
        delbutton.className = "delbutton";

        editbutton.value = sno;
        delbutton.value = sno;
        creatingLI.value = sno;


        // delbutton.onmouseover = function () { delbutton.style.cursor = "pointer", delbutton.style.color = "red" };
        // delbutton.onmouseout = function () { delbutton.style.color = "black" };
        // delbutton.onmouseout = function () { delbutton.style.color = "black" };

        creatingLI.appendChild(textvalue);
        creatingLI.appendChild(editbutton);
        creatingLI.appendChild(delbutton);
        document.getElementById("unorderlistID").appendChild(creatingLI);


        var items = document.querySelectorAll("#unorderlistID li");
        // console.log(creatingLI);
        // var Length = document.querySelectorAll("#unorderlistID li");
        var taskobj = document.getElementById("task");
        taskobj.innerHTML = "Task: " + eval(items.length);
        
        
        // ????????????????????????????????del funtion?????????????????????????????????????????????????
        // console.log("delbutton before");
        // var items = document.querySelectorAll("#unorderlistID li");
        delbutton.onclick = function () {
            var items = document.querySelectorAll("#unorderlistID li");
            console.log("clicked on delbutton");
            delfunction(delbutton, taskobj,items,inputValue);
            var items = document.querySelectorAll("#unorderlistID li");
            
        }
        editbutton.onclick = function () {
            var items = document.querySelectorAll("#unorderlistID li");
            console.log("clicked on edit button");
            editfunction(inputValue, creatingLI, delbutton, taskobj, submitbuttonobj, items,editbutton);
            
        }
        
        // ???????????????????????????????????????????????????????????????????????????????????????????
        
        
        if (items.length >= 1) {
            var footerobje = document.getElementById("footerID");
            footerobje.style.display = "flex";
            // console.log(items.length);
        }
        
        
        
        
        
        
    }

    sno = sno + 1;

    
    inputValue.value = '';
    
    
    for (k = 0; k < items.length; k++) {
        console.log(items[k]);

    }
}






function delfunction(delbutton, taskobj,items,inputValue) {
    var items = document.querySelectorAll("#unorderlistID li");
    // console.log("button value " + delbutton.value)
    console.log("working del");
    for (i = 0; i < items.length; i++) {
        if (items[i].value == delbutton.value) {
            console.log("find at index: "+i +" and deleted " + items[i].outerHTML)
            console.log("buttonvalue: "+delbutton.value +" and deleted li is " + items[i].value)
            items[i].outerHTML = " ";
            inputValue.value = "";
            // items[i].innerHTML = " ";
            
            
            break;
            
        }
        else{
            console.log("not found at index:"+i)
        }
        
    }
    
    
    
    // var Length = document.querySelectorAll("#unorderlistID li").length;
    taskobj.innerHTML = "Task: " + (items.length - 1);
    var items = document.querySelectorAll("#unorderlistID li");
    
    // for (k = 0; k < items.length; k++) {
    //     console.log("Remains:", items[k]);
    
    // }
    
    
    // console.log(items)
    
    
}






var updatebutton = document.createElement('button');


function editfunction(inputValue, creatingLI, delbutton, taskobj, submitbuttonobj, items,editbutton) {
    var items = document.querySelectorAll("#unorderlistID li");
    
    console.log("working edit")
    updatebutton.style.innerHTML = 'UPdte';
    updatebutton.style.display = 'block';
    updatebutton.className = "updatebutton"
    var updateimage = document.createElement('div');
    updateimage.className = 'updateimageclass';
    updatebutton.appendChild(updateimage);
    buttonobject.style.display = 'none';    
    
    var maincontainer = document.getElementById("inputandbutton");
    // maincontainer.appendChild(updatebutton);
    
    // console.log("working2")
    document.getElementById("inputandbuttonID").appendChild(updatebutton);
    console.log("working edit/1")
    
    var items = document.querySelectorAll("#unorderlistID li");
    console.log(delbutton.value)    ///yhn tk XHlrH hI
    for (var i=0 ; i<items.length;i++){
        if (items[i].value==delbutton.value){
            var trial = items[i].innerHTML;
            console.log("found:"+items[i].innerHTML+" at index "+ delbutton.value)
            break
        }
    }
    // console.log(items[delbutton]);
    // console.log("just befor slit")
    
    var items = document.querySelectorAll("#unorderlistID li");
    trial = trial.split('.');
    console.log("Trial contain "+trial[0]);
    inputValue.value = trial[0];
    var indexvaluecurrentli = items[i].value;
    
    console.log(indexvaluecurrentli)
    
    updatebutton.onclick = function () {
        
        var items = document.querySelectorAll("#unorderlistID li");
        updateFuntion(creatingLI, inputValue, items, indexvaluecurrentli);
        updatebutton.style.display = 'none';
        buttonobject.style.display = 'flex';  
        
        
    }
    
    // editbutton.value = '';
    // updatebutton.value='';
    
    
    
    var items = document.querySelectorAll("#unorderlistID li");
    for (k = 0; k < items.length; k++) {
        console.log(items[k]);
        
    }
    
    
    
    
}

var items = document.querySelectorAll("#unorderlistID li");
function updateFuntion(creatingLI, inputValue, items, indexvaluecurrentli) {
    // var creatingLI = document.createElement("li");
    // var inputValue = document.getElementById("inputfielsID");
    // console.log("creatingLI length "+items.length)
    var items = document.querySelectorAll("#unorderlistID li");
    for (j = 0; j < items.length; j++) {
        console.log(items[j].value + "to be same " + indexvaluecurrentli)
        if (items[j].value == indexvaluecurrentli) {
            indexvaluecurrentli = 0;
            console.log("yes matched and stored")
            break
            
        }
        
    }
    
    var items = document.querySelectorAll("#unorderlistID li");
    // console.log(inputValue.value)
    var V = items[j].innerHTML;
    var V1 = V.split('.');
    V1.shift();
    // console.log(inputValue.value + V1)
    // var tem = inputValue.value + V1
    items[j].innerHTML = inputValue.value + '.' + V1;   ///yahn masla hai bus
    inputValue.value = '';
    updatebutton.value = '';
    
    
    var items = document.querySelectorAll("#unorderlistID li");
    
    for (k = 0; k < items.length; k++) {
        console.log(items[k]);

    }


}
