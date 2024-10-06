
// Deklaration av variabler som deklareras utanför funktionerna

const addText = document.querySelector("#addText")
const listedItems = [];
const label = document.querySelector("p")
let completedCount = 0;
label.innerText = `${completedCount} completed`;

// En eventlistener för att avlyssna klick på 'add'-knappen. Condition där om rutan är tom så returneras ett felmeddelande medans
// om det finns text skriven så körs kodsnippet som skapar ett nytt element i våran todo-lista och listar detta i index.html
// Finns även en funktion med en eventlistener som känner av om föremålen i listan trycks på så markeras den som klar och räknas upp i en count.
// Funktionen möjliiggör även att avmarkera det klarmarkerade föremålet och då avräknas föremålet även i counten.

addText.addEventListener("click",
    function () {

const input = document.querySelector("#input1");
const text = input.value; 
const list = document.querySelector("ul");

if (text !== "" && text !== "This field cannot be empty") { // Felhantering för att undvika att texten "This field cannot be empty" läggs till i listan av misstag
    listedItems.push(text);
    const item = document.createElement("li");
    list.appendChild(item);

    const itemLabel = document.createElement("span");
    itemLabel.innerText = text;
    item.appendChild(itemLabel);

    itemLabel.addEventListener ("click",
        function () {
            if (item.getAttribute("class") == "completed") {
                item.setAttribute("class", "");
                completedCount--;
            }
            else {
                item.setAttribute("class", "completed");
                completedCount++;
            }

            label.innerText = `${completedCount} completed`;
        });

    input.value = "";

    } else {
            input.value = "This field cannot be empty";
            setTimeout(() => {
                input.value = ""
              }, 2500);            // Liten timeout för att ta bort varningsmeddelandet efter 2,5sekunder
        };});





        




