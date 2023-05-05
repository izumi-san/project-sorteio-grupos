const btn = document.querySelector("#btn-add-name");

btn.addEventListener("click", () => {
    //console.log("addEventListener");
});

var arrNames = [];

function addName() {
    const nameInputField = document.querySelector(".input-name");

    if (nameInputField.value == "") {
        return alert("pfrv, coloque um nome meu consagrado");
    }

    const name = nameInputField.value;
    addNameToHTML(name);

    arrNames.push(name);

    nameInputField.value = ""

}

function addNameToHTML(name) {
    const pElement = document.createElement("p");
    const text = document.createTextNode(name);
    pElement.appendChild(text);
    pElement.classList.add("item-name");
    const listNames = document.querySelector("#list-names");
    listNames.appendChild(pElement);
}