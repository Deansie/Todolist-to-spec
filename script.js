// Declaration of variables outside the functions
const addText = document.querySelector("#addText")
const listedItems = [];
const label = document.querySelector("p")
let completedCount = 0;
label.innerText = `${completedCount} completed`;
document.getElementById('mainDiv').classList.add('with-animation');

// An event listener to listen for clicks on the 'add' button. Condition where if the box is empty, an error message is returned,
// while if text is written, the code snippet that creates a new element in our todo list and lists it in index.html is run.
// There is also a function with an event listener that detects if items in the list are clicked, so it is marked as complete and counted up in a count.
// The function also allows unmarking the completed item and then the item is also deducted in the count.

addText.addEventListener("click",
    function () {

const input = document.querySelector("#input1");
const text = input.value; 
const list = document.querySelector("ul");

if (text !== "" && text !== "Input must not be empty") { // Error handling to avoid the text "This field cannot be empty" being added to the list by mistake
    listedItems.push(text);
    const item = document.createElement("li");
    list.appendChild(item);

    item.classList.add ('item-animation');

    const itemLabel = document.createElement("span");
    itemLabel.innerText = text;
    item.appendChild(itemLabel);

    const trashButton = document.createElement("button"); // Added a trash can/button that allows removal of items in the list
    trashButton.innerHTML = "&#x1F5D1;"; 
    trashButton.classList.add("trash-button");
    item.appendChild(trashButton);

    trashButton.addEventListener("click", function() {
        list.removeChild(item);
        const index = listedItems.indexOf(text);
        if (index > -1) {
            listedItems.splice(index, 1);
        }
        if (item.classList.contains("completed")) {
            completedCount--;
            label.innerText = `${completedCount} completed`;
        }});

    itemLabel.addEventListener("click", function () {  // Changed from getAttribute and setAttribute since it interfered with the animation
        if (item.classList.contains("completed")) {
            item.classList.remove("completed");
            item.classList.add('undo-completedTask-animation');
            completedCount--;                
        } else {
            item.classList.add("completed");
            item.classList.add('completedTask-animation');
            completedCount++;
        }
    
        label.innerText = `${completedCount} completed`;
    
        function removeAnimationClasses() {
            item.classList.remove('completedTask-animation');
            item.classList.remove('undo-completedTask-animation');
        }
        
        setTimeout(removeAnimationClasses, 900);
    });

    input.value = "";

    function removeAnimation1() {
        item.classList.remove('item-animation');
    }
    
    setTimeout(removeAnimation1, 300);
    

    } else {
            input.value = "Input must not be empty";
            input.classList.add('input-error');
            input.addEventListener("click", function() {  // Listener to clear the input field on click
                if (this.value === "Input must not be empty") {
                    this.value = "";
                    this.classList.remove('input-error');
                }
            });

        };}); 
