"use strict";

document.querySelector("button").addEventListener("click", function () {
  var promesseResultat = fetch("https://www.boredapi.com/api/activity");
  promesseResultat.then(function (response) {
    console.log("la requete est terminée");
  })["catch"](function (error) {
    console.error("une erreur est survenue", error);
  });
  console.log("avant la requete");
});
//# sourceMappingURL=script.js.map