"use strict";

document.querySelector("button").addEventListener("click", function () {
  var promesseResultat = fetch("https://www.boredapi.com/api/activity");
  promesseResultat.then(function (response) {
    var promesseResultatJson = response.json();
    promesseResultatJson.then(function (resultat) {
      console.log("j'ai le resultat", resultat);
    });
    console.log("la requete est terminée");
  });
  console.log("avant la requete");
});
//# sourceMappingURL=script.js.map