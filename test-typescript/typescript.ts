let maVar: number = 12;
let monObjet = "bonjour";
const isOk: boolean = true;

class Activity {
    title: string;
    type: "recreational" | "charity";
}

class Events {
    activity: Activity;
}

async function getActivity(){
    const response = await fetch("....");
    const activity:Activity = await response.json();

}
