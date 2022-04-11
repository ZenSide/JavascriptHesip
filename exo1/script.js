const button1 = document.querySelector("#b1");
button1.addEventListener("click", () => {
    alert("bonjour");
})

document
    .querySelector("#b2")
    .addEventListener("click", () => {
        const name = prompt("Quel est ton nom ?");
        alert("Salut " + name);
    })

function getButton(idx) {
    return document.querySelector("#b" + idx);
}

getButton(3).addEventListener("click", () => {
    // const body = document.querySelector("body");
    const body = document.body;
    body.classList.add("dark");
})

function addButtonClickListener(idx, callback) {
    getButton(idx).addEventListener("click", callback);
}

let nbButton = 4;
const buttonsElt = document.querySelector("#buttons");

const addInceptionButton = () => {
    // un clic sur le bouton ajoute un nouveau boutton
    // on crée un nouveau bouton
    nbButton++;
    const newBtn = document.createElement("button");
    newBtn.innerText = nbButton;
    newBtn.id = "b" + nbButton;
    newBtn.classList.add("btn","btn-primary");
    // on l'ajoute au body
    buttonsElt.appendChild(newBtn);
    // un clic sur le nouveau boutton déclenche le meme traitement
    addButtonClickListener(nbButton, addInceptionButton);
};

addButtonClickListener(4, addInceptionButton);
