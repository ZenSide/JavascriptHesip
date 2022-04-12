class Activity {
    activity;
    type;
    participants;
    price;
    constructor(resultat) {
        this.activity = resultat.activity;
        this.type = resultat.type;
        this.participants = resultat.participants;
        this.price = resultat.price;
    }
}

document.querySelector("button").addEventListener("click", async () => {
    // requetePromise();
    await requetePromiseAsync();
    // ....
})

function requetePromise() {

    const promesseResultat = fetch("https://www.boredapi.com/api/activity");
    promesseResultat
        .then((response) => {
            const promesseResultatJson = response.json();
            promesseResultatJson.then(resultat => {
                console.log("j'ai le resultat", resultat);
                const activity = new Activity(resultat);
            })
            console.log("la requete est terminée")
        })

    console.log("avant la requete");
}

async function requetePromiseAsync() {

    const response = await fetch("https://www.boredapi.com/api/activity");
    const activity = await response.json();
    console.log("resultat", activity);
}
