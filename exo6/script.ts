const API_URL = "http://www.boredapi.com/api/activity";

const weekBtn = document.querySelector("#week-btn");
const weekendBtn = document.querySelector("#weekend-btn");
const activitiesElt = document.querySelector("#activities");

class Activity {
    activity: string;
}
class Day {
    name: string;
    morningActivity: Activity;
    afternoonActivity: Activity;
}

const days:Day[] = [];

const dayNames = ["Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi","Dimanche"];

async function getActivity() {
    const response = await fetch(API_URL);
    const activity:Activity = await response.json();
    return activity;
}

async function addActivityDay(dayName: string) {
    const day = new Day();
    day.name = dayName;
    day.morningActivity = await getActivity();
    day.afternoonActivity = await getActivity();

    days.push(day);
}

function displayActivities() {
    days.forEach(day=>{
        const newTr = document.createElement("tr");
        const dayTd = document.createElement("td");
        const morActTd = document.createElement("td");
        const aftActTd = document.createElement("td");

        dayTd.innerHTML = day.name;
        morActTd.innerHTML = day.morningActivity.activity;
        aftActTd.innerHTML = day.afternoonActivity.activity;

        newTr.appendChild(dayTd);
        newTr.appendChild(morActTd);
        newTr.appendChild(aftActTd);

        activitiesElt.appendChild(newTr);
    })
    document.querySelector(".rainbow").classList.remove("show");
    document.querySelector(".rainbow").classList.add("hide");
}

weekBtn.addEventListener("click",async ()=>{

    document.querySelector(".rainbow").classList.add("show");

    for (let dayName of dayNames) {
        await addActivityDay(dayName);
    }
    displayActivities();
})
