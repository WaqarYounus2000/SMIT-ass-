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
        console.log(creatingLI);
        // var Length = document.querySelectorAll("#unorderlistID li");
        var taskobj = document.getElementById("task");
        taskobj.innerHTML = "Task: " + eval(items.length);


        // ????????????????????????????????del funtion?????????????????????????????????????????????????
        delbutton.onclick = function () {
            delfunction(delbutton, taskobj);

        }
        editbutton.onclick = function () {
            editfunction(inputValue, creatingLI, delbutton, taskobj, submitbuttonobj, items);

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
}






function delfunction(delbutton, taskobj) {
    var items = document.querySelectorAll("#unorderlistID li");
    // console.log("button value " + delbutton.value)
    for (i = 0; i < items.length; i++) {
        if (items[i].value == delbutton.value) {
            items[i].outerHTML = " ";
            break;
        }

    }



    // var Length = document.querySelectorAll("#unorderlistID li").length;
    taskobj.innerHTML = "Task: " + (items.length - 1);

    // console.log(items.length)


}






var updatebutton = document.createElement('button');

function editfunction(inputValue, creatingLI, delbutton, taskobj, submitbuttonobj, items) {

    console.log("working")
    updatebutton.style.innerHTML = 'UPdte';
    updatebutton.style.display = 'block';
    updatebutton.className = "updatebutton"

    var maincontainer = document.getElementById("inputandbutton");
    // maincontainer.appendChild(updatebutton);

    // console.log("working2")
    document.getElementById("inputandbuttonID").appendChild(updatebutton);

    var trial = creatingLI.innerHTML;
    trial = trial.split('.');
    // console.log(trial[0]);
    inputValue.value = trial[0];
    var indexvaluecurrentli = creatingLI.value;
    // console.log(indexvaluecurrentli)

    updatebutton.onclick = function () {

        updateFuntion(creatingLI, inputValue, items, indexvaluecurrentli);

    }








}

function updateFuntion(creatingLI, inputValue, items, indexvaluecurrentli) {
    // var creatingLI = document.createElement("li");
    // var inputValue = document.getElementById("inputfielsID");
    // console.log("creatingLI length "+items.length)
    for (j = 0; j < items.length; j++) {
        console.log(items[j].value + "to be same " + indexvaluecurrentli)
        if (items[j].value == indexvaluecurrentli) {
            console.log("yes matched and stored")
            break

        }

    }

    // console.log(inputValue.value)
    var V = items[j].innerHTML;
    var V1 = V.split('.');
    V1.shift();
    // console.log(inputValue.value + V1)
    // var tem = inputValue.value + V1
    items[j].innerHTML = inputValue.value + '.' + V1;   ///yahn masla hai bus
    inputValue.value = '';



    for (k = 0; k < items.length; k++) {
        console.log(items[k]);

    }


}
