function ADD(){
    var userinput = document.getElementById('inputfieldID').value;
    var textarea = document.getElementById('unorderlist');
    
    // var Newlist = `<li>${userinput} <button>Edit</button> <button onclick = "delfunction()" id = "delbutton">Del</button> </li>`;
    // textarea.innerHTML += Newlist;
    
    var newLi = document.createElement('li');
    var delbutton = document.createElement('button');
    var editbutton = document.createElement('button');
    
    delbutton.onclick = function(){
        delfunction();
    }
    editbutton.onclick = function(){
        editfunction();
    }
    
    var usertext = document.createTextNode(userinput);
    newLi.appendChild(usertext);
    newLi.appendChild(delbutton);
    newLi.appendChild(editbutton);
    textarea.appendChild(newLi);
    
    
    
    
}


function delfunction(){
    event.target.parentNode.remove()
}
function editfunction(){
    var userinput = document.getElementById('inputfieldID');
    userinput.value = event.target.parentNode.innerText;
    // console.log(event.target.parentNode.innerText)
    
}