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
    if (arrNames.length == 0){
        return alert('digite pelo menos um nome, jovem')
    }
    const shuffledArray = shuffleArray(arrNames);
    removeElements("#list-names");
    removeElements("#list-groups");
    let groupNum = 1;
    let groupName = `GRUPO_${groupNum}`
    addDivGroup(groupName);
    let i = 0;
    while (shuffledArray.length > 0) {
        const name = shuffledArray.pop();
        addNameToHTML(name, `.${groupName}`)
        console.log(groupName);
        i++;
        if (i % 4 == 0 ) {
            groupNum++;
            groupName = `GRUPO_${groupNum}`;
            addDivGroup(groupName)
        }
    }
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