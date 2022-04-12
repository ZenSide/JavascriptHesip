const participantElt = document.querySelector("#activity-participants");
const titleElt = document.querySelector("#activity-title");
const priceElt = document.querySelector("#activity-price");
const typeElt = document.querySelector("#activity-type");


class Activity {
    activity;
    price;
    type;
    participants;
}

function displayActivity(activity) {
    titleElt.innerHTML = activity.activity;
    typeElt.innerHTML = activity.type;
    participantElt.innerHTML = activity.participants;

    // price est entre 0 et 1
    // pour avoir une taille entre 0 et 100px, on multiplie par 100
    const priceWidth = Math.floor(activity.price * 100);
    priceElt.style.width = priceWidth+"px";
}

async function searchActivity(filter) {

    if (filter==null) filter = "";

    const response = await fetch("http://www.boredapi.com/api/activity"+filter);
    const activity = await response.json();
    displayActivity(activity);
}

const form = document.querySelector("form#search-form");
const typeSelect = form.querySelector("#type-filter");
const participantSelect = form.querySelector("#participant-filter");
const radioNoFilter = form.querySelector("#btnradio1");
const radioTypeFilter = form.querySelector("#btnradio2");
const radioParticipantFilter = form.querySelector("#btnradio3");

form.addEventListener("submit",(event)=>{
    event.preventDefault();

    // quel type de filtre ?

    if (radioNoFilter.checked) {
        searchActivity();
    }
    else if (radioTypeFilter.checked) {
        const type = typeSelect.value;
        searchActivity("?type="+type);
    }
    else if (radioParticipantFilter.checked) {
        const nbParticipants = participantSelect.value;
        searchActivity("?participants="+nbParticipants);
    }
})

// masquer les select qui ne sont pas du filtre en cours
radioNoFilter.addEventListener("click",()=>{
    typeSelect.style.display = "none";
    participantSelect.style.display = "none";
})
radioTypeFilter.addEventListener("click",()=>{
    typeSelect.style.display = "block";
    participantSelect.style.display = "none";
})
radioParticipantFilter.addEventListener("click",()=>{
    typeSelect.style.display = "none";
    participantSelect.style.display = "block";
})

// lancement de l'app
function onAppLaunch(){
    searchActivity();
}

onAppLaunch();
