var buttonobject = document.getElementById("buttonID");


// function AddingFuntion(){
//     var unorderlistobject = document.getElementById("unorderlistID");
//     var inputValue = document.getElementById("inputfielsID");
//     var creatingLI = document.createElement("li");
//     var t = document.createTextNode(inputValue.value);
//     console.log(t);
//     creatingLI.appendChild(t);

//     document.getElementById("unorderlistID").appendChild(creatingLI);

// }

var sno = 0;
function AddingFuntion() {
    var unorderlistobject = document.getElementById("unorderlistID");
    var inputValue = document.getElementById("inputfielsID");
    if (inputValue.value === "") {
        alert("user must give input!")
    }
    else {
        
        
        var textvalue = document.createTextNode(inputValue.value);
        var creatingLI = document.createElement("li");
        
        // adding button for close any list
        var delbutton = document.createElement("button");
        delbutton.textContent = 'x';
        // delbutton.value = sno;
        // delbutton.value = `"${sno}"`;
        delbutton.value = sno;
        creatingLI.value = sno;
        delbutton.style.border = "none";
        delbutton.style.outline = "none";
        delbutton.style.backgroundColor = "transparent";
        
        delbutton.onmouseover = function () { delbutton.style.cursor = "pointer", delbutton.style.color = "red" };
        delbutton.onmouseout = function () { delbutton.style.color = "black" };
        
        
        
        delbutton.onclick = function () {
            // sno-=1;
            
            var items = document.querySelectorAll("#unorderlistID li");
            // var delbutton = document.createElement("button");
            // var delbutton = document.querySelectorAll("#button");
            // console.log(delbutton1.length);
            // var items = document.getElementById("unorderlistID");
            // console.log("length before remove " + items.length)
            
            // items.removeChild(items.childNodes[delbutton.value]);
            console.log("button value "+delbutton.value)
            // console.log(delbutton)
            
            // console.log(items[delbutton.value].outerHTML.getAttribute);
            console.log(items[delbutton.value].outerHTML);
            items[delbutton.value].outerHTML = ' ';
           

            console.log("///////////////////////////////")
            console.log(items)
            var items = document.querySelectorAll("#unorderlistID li");
            console.log(items)
            console.log("///////////////////////////////")
            
            // console.log("length after remove " + items.length)
            
            // console.log(items[delbutton.value].outerHTML[11]);
            // console.log(items[items[delbutton.value].outerHTML[11]].attributes);
            // items[delbutton.value].
            
            // w[11] = "";
            // console.log(w[11])
            
            
            
            // items.values[delbutton.value].outerHTML = '';
            
            
            // document.getElementById("unorderlistID").removeChild(items[delbutton.value]);
            // unorderlistobject.removeChild(unorderlistobject[delbutton.value])
            // delbutton.removeChild(delbutton.value)
            // console.log(items[delbutton.value])
            // console.log("closed button number "+ delbutton.value + "corresponding list" + items[delbutton.value])
            // sno -= 1;
            // console.log(items[delbutton.value-1].outerHTML)
            // items[delbutton.value-1].outerHTML.removeChild(items[delbutton.value]);
            // items[delbutton.value-1].outerHTML.removeChild(delbutton.value);
            // items[delbutton.value].outerHTML = '';
            // items[delbutton.value].outerHTML.removeChild(items[delbutton.value])
            // console.log(items[delbutton.value].parentElement.removeChild(items[delbutton.value]))
            
        }
        
        // /////////////////////////////////////////////////////////////////////////
        
        
        
        
        creatingLI.innerHTML = (sno + ". ");
        creatingLI.appendChild(textvalue);
        creatingLI.appendChild(delbutton);
        inputValue.value = " ";
        
        
        // creatingLI.innerHTML = inputValue.value + delbutton;
        document.getElementById("unorderlistID").appendChild(creatingLI);
        var items = document.querySelectorAll("#unorderlistID li");
        console.log("length" + items.length)
        
    }
    
    sno += 1;
}