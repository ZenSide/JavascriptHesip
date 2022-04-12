// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC1yvhXWyTZLJp5Yvix0lh93PCgnNek2ow",
    authDomain: "tasklistgen2020.firebaseapp.com",
    databaseURL: "https://tasklistgen2020.firebaseio.com",
    projectId: "tasklistgen2020",
    storageBucket: "tasklistgen2020.appspot.com",
    messagingSenderId: "1050802789538",
    appId: "1:1050802789538:web:b41578230fb9989baa0bfb"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();

const input = document.querySelector("input");
document.querySelector("button").addEventListener("click",function(){
    const text = input.value;
    const doc = {
        author: "Nicolas",
        message: text
    }
    db.collection('discussions').doc().set(doc);
})

const ulElt = document.querySelector("ul");
async function displayMessageList(){
    ulElt.innerHTML = "";
    const messages = await db.collection('discussions').get();
    messages.forEach(message=>{
        const newLi = document.createElement("li");
        const doc = message.data();
        newLi.innerText = doc.message + ' ('+doc.author+')';
        ulElt.appendChild(newLi);
    })
}

displayMessageList();
setInterval(()=>{
    displayMessageList();
},5000);


// Get a list of cities from your database
async function getCities(db) {
    // const citiesCol = db.collection('chat');
    // const citySnapshot = await citiesCol.get();
    // citySnapshot.forEach(doc=>{
    //     console.log(doc.id, doc.data());
    // })
    //
    // return cityList;
}
getCities(db);
