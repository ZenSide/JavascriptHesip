const personFields = ["firstname","lastname","address","city"];

// partie 1

const fillStatic = ()=> {
// prépare les valeurs à remplir
    const staticPerson = {
        firstname: "Nicolas",
        lastname: "Janel",
        address: "6 rue du poisson",
        city: "Funkytown"
    };

    personFields.forEach(field=>{
        const cell = document.querySelector(".display-"+field);
        cell.innerHTML = staticPerson[field];
    })
}

document.querySelector("#btn-fill-infos").addEventListener("click", fillStatic);

// partie 2
const fillDynamic = ()=> {
// récupère les valeurs des input

    personFields.forEach(field=>{
        const elt = document.querySelector("input[name="+field+"]");
        const value = elt.value;
        const cell = document.querySelector(".display-"+field);
        cell.innerHTML = value;
    })

}

document.querySelector("#dynamic-form button").addEventListener("click",fillDynamic);
