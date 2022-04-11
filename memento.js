// déclarer une variable locale
let a = 4;
// constante
const b = 5;

// fonction
function myFunc(param){
    console.log(param);
}

// fonction fléchée
const myFun = (param)=>{
    // ...
}

// tableau
const c = [3,4,5];
// executer une fonction pour chaque element d'un tableau
c.forEach((value)=>{
    console.log(value);
})
// transformer chaque element du tableau
c.map(elt=>{
    return elt+1;
})
// filtrer un tableau
const newArray = c.filter(value=>value>18);

// objet inline
const user = {
    name: "Nicolas",
    adress,
    sayHello: ()=>{
        console.log("Hello "+this.name);
    }
}
// utilisation d'objet
user.sayHello();
user.name;

// classe JS
class Person {
    name;
    surname;
    gender;
    sayHello() {
        console.log("Hello "+this.name);
    }
}

// récupérer un element html (prend un selecteur CSS en parametre)
const titleElt = document.querySelector("h1");
const allParagraphs = document.querySelectorAll("p");

// ajoute un listener d'evenement
const button = document.querySelector("button");
button.addEventListener("click", ()=>{
    // .. executé quand on clic sur le bouton
})

// ajouter un element dans la page
const newElt = document.createElement("div");
// parent où ajouter l'élement
const parent = document.querySelector("div#content");
parent.appendChild(newElt);

