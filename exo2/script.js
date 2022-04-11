// partie 1

const fillStatic = ()=> {
// récupérer les cellules
    const firstnameCell = document.querySelector(".display-firstname");
    const lastnameCell = document.querySelector(".display-lastname");
    const addressCell = document.querySelector(".display-address");
    const cityCell = document.querySelector(".display-city");

// prépare les valeurs à remplir
    const person = {
        firstname: "Nicolas",
        lastname: "Janel",
        address: "6 rue du poisson",
        city: "Funkytown"
    };

// les ajouter aux cellules
    firstnameCell.innerHTML = person.firstname;
    lastnameCell.innerHTML = person.lastname;
    addressCell.innerHTML = person.address;
    cityCell.innerHTML = person.city;
}

document.querySelector("#btn-fill-infos").addEventListener("click", fillStatic);

// partie 2
const fillDynamic = ()=> {
// récupère les valeurs des input

    const lastnameElt = document.querySelector("input[name=lastname]");
    const lastname = lastnameElt.value;
    const lastnameCell = document.querySelector(".display-lastname");
    lastnameCell.innerHTML = lastname;

    const firstnameElt = document.querySelector("input[name=firstname]");
    const firstname = firstnameElt.value;
    const firstnameCell = document.querySelector(".display-firstname");
    firstnameCell.innerHTML = firstname;

    const addressElt = document.querySelector("input[name=address]");
    const address = addressElt.value;
    const addressCell = document.querySelector(".display-address");
    addressCell.innerHTML = address;

    const cityElt = document.querySelector("input[name=city]");
    const city = cityElt.value;
    const cityCell = document.querySelector(".display-city");
    cityCell.innerHTML = city;

}

document.querySelector("#dynamic-form button").addEventListener("click",fillDynamic);
