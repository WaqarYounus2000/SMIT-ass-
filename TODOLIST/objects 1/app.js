class todo{

    textarea1 = document.getElementById("orderlistID");
    
    

    
    constructor(a) {
        this.licontent = a;
        var delbutton = document.createElement('button');
        delbutton.className="delButton";
        
        var newLI = document.createElement('li');
        newLI.className="myLI";
        newLI.appendChild(this.licontent)
        newLI.appendChild(delbutton)
        this.textarea1.appendChild(newLI)
        
        ////
        
        // console.log(delbutto);
        
        
        
        
        
        
    }
    
    delli() {
        console.log('before del')
        // var delbutton = document.createElement('button');
        delbutton.parentElement.remove;
        console.log('del clicked')
    
        
    }
    
}




// var userinput = document.getElementById("inputfield").value;


var postbutton = document.getElementById('postbutton');
function adding(){
    var gettinginput = document.getElementById("inputfield").value;
    var createTextNode = document.createTextNode(gettinginput);
    obj = new todo(createTextNode);
}

// delbutton.onclick = function() {
//     obj.delli();
// }







