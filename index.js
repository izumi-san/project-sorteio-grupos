const btn = document.querySelector("#btn-add-name");

btn.addEventListener("click", () => {
    //console.log("addEventListener");
});

var arrNames = [];
var auxArrNames = [];

function addName() {
    const nameInputField = document.querySelector(".input-name");

    if (nameInputField.value == "") {
        return alert("pfrv, coloque um nome meu consagrado");
    }

    const name = nameInputField.value;
    addNameToHTML(name, "#list-names");

    arrNames.push(name);

    nameInputField.value = ""
    nameInputField.focus();
}

function addNameToHTML(name, destination) {
    const pElement = document.createElement("p");
    const text = document.createTextNode(name);
    pElement.appendChild(text);
    pElement.classList.add("item-name");
    const listNames = document.querySelector(destination);
    listNames.appendChild(pElement);
}


function shuffle() {
    if (arrNames.length == 0) {
        return alert('digite pelo menos um nome, jovem')
    }
    copyArray(arrNames, auxArrNames);
    const shuffledArray = shuffleArray(arrNames);
    removeElements("#list-names");
    removeElements("#list-groups");
    createGroups(shuffledArray);
    enableRerunBtn();
    disableNewInputs();
}

function createGroups(listNames) {
    let groupNum = 1;
    let groupName = `GRUPO_${groupNum}`
    addDivGroup(groupName);
    let i = 0;
    while (listNames.length > 0) {
        const name = listNames.pop();
        addNameToHTML(name, `.${groupName}`)
        i++;
        if (i % 4 == 0 && listNames.length > 0) {
            groupNum++;
            groupName = `GRUPO_${groupNum}`;
            addDivGroup(groupName)
        }
    }
}

function copyArray(arrFrom, arrTo) {
    arrFrom.forEach(element => {
        arrTo.push(element);
    });
}

function addDivGroup(groupName) {
    const listGroup = document.querySelector("#list-groups");
    const divElement = document.createElement("div");
    const text = document.createTextNode(groupName);
    divElement.classList.add(groupName);
    divElement.classList.add("grupo-sorteado");
    divElement.appendChild(text);
    listGroup.appendChild(divElement)
    return
}

function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
}

function removeElements(querySelectorName) {
    let menu = document.querySelector(querySelectorName);
    while (menu.firstChild) {
        menu.removeChild(menu.firstChild);
    }
}

function reShuffle() {
    const shuffledArray = shuffleArray(auxArrNames);
    auxArrNames = [];
    copyArray(shuffledArray, auxArrNames);
    removeElements("#list-names");
    removeElements("#list-groups");
    createGroups(shuffledArray);
    enableRerunBtn();
}

function cleanInterface() {
    removeElements("#list-names");
    removeElements("#list-groups");
    arrNames = [];
    auxArrNames = [];
    disableRerunBtn();
    enableNewInputs();
}

function enableRerunBtn() {
    const rerunSection = document.querySelector(".btn-rerun-section");
    rerunSection.classList.remove("invisible");
}

function disableRerunBtn() {
    const rerunSection = document.querySelector(".btn-rerun-section");
    rerunSection.classList.add("invisible");
}

function enableNewInputs() {
    const newInput = document.querySelector(".div-input-name");
    const btnShuffle = document.querySelector(".btn-shuffle");
    const listTitle = document.querySelector(".list-title");
    newInput.classList.remove("invisible");
    btnShuffle.classList.remove("invisible");
    listTitle.classList.remove("invisible");
}

function disableNewInputs() {
    const newInput = document.querySelector(".div-input-name");
    const btnShuffle = document.querySelector(".btn-shuffle");
    const listTitle = document.querySelector(".list-title");
    newInput.classList.add("invisible");
    btnShuffle.classList.add("invisible");
    listTitle.classList.add("invisible");
}