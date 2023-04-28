const btn = document.querySelector("#btn-add-name");

btn.addEventListener("click", ()=>{
    //console.log("addEventListener");
});
var arrNames = [];
function addName() {
    const nameInputField = document.querySelector(".input-name");

    if (nameInputField.value == "") {
        return alert("pfrv, coloque um nome meu consagrado");
    }
    
    const pElement = document.createElement("p");
    const text = document.createTextNode(nameInputField.value);
    pElement.appendChild(text);
    const listTile = document.querySelector("#list-title");
    listTile.appendChild(pElement);
    arrNames.push(nameInputField.value)

    nameInputField.value=""

}