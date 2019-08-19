// Set variables
var submitButton = document.getElementById("submitNote");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");
var item = document.getElementsByTagName("li");

// Calculate input length
function inputLength(){
    return input.value.length;
}

//Calculate list length
function listLength(){
    return item.length;
}

// Create new note
function createListElement(){
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";

    // Marks note as complete
    function crossOut(){
        li.classList.toggle("done");
    }

    li.addEventListener("click", crossOut);

    var deleteBtn = document.createElement("button");
    deleteBtn.appendChild(document.createTextNode("X"));
    li.appendChild(deleteBtn);
    deleteBtn.addEventListener("click", deleteListItem);

    // Removes note from list
    function deleteListItem(){
        li.classList.add("delete");
    }
}

// Submit note after click
function addListAfterClick(){
    if (inputLength() > 0) {
        createListElement();
    }
}

// Submit note after pressing enter key
function addListAfterKeypress(event){
    if (inputLength() > 0 && event.which === 13){
        createListElement();
    }
}

submitButton.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);