//
// setTimeout(()=>{
//     document.body.style.backgroundColor = "green";
// }, 2000);
//
const timeElt = document.querySelector("#current-time");

setInterval(()=>{
    const dateStr = new Date().toLocaleTimeString();
    timeElt.innerHTML = dateStr;

    const hours = new Date().getHours();
    const minutes = new Date().getMinutes();
    const seconds = new Date().getSeconds();

    document.querySelector("#hours")
        .style.transform = "rotate("+(360/12*hours)+"deg)";
    document.querySelector("#minutes")
        .style.transform = "rotate("+(360/60*minutes)+"deg)";
    document.querySelector("#seconds")
        .style.transform = "rotate("+(360/60*seconds)+"deg)";

},1000);
