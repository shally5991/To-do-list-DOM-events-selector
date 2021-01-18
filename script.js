// var button = document.getElementsByTagName("button")[0];

// if we are selecting an element by tag name , it return the array  in this 
// case we have to be carefull and specify the particular array element. other
// -wise it throws error.

var button = document.getElementById("button");
var input = document.getElementById("input");
var ul = document.querySelector("ul");

function CreateNewElement(){
   
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li);
        input.value = "";
    
}
function addAListAfterClick(){
    if(input.value.length > 0){
        CreateNewElement();
    }
}
function addListAfterKeypress(event){
    if(input.value.length > 0 && event.keyCode == 13){
        CreateNewElement();
    }
}
button.addEventListener('click',addAListAfterClick);
input.addEventListener('keypress',addListAfterKeypress);