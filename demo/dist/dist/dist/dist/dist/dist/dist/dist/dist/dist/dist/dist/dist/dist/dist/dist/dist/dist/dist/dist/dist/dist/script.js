"use strict";

fetch("https://www.boredapi.com/api/activity").then(function (r) {
  console.log(r.json());
  console.log(JSON.parse(r.json()));
});
//# sourceMappingURL=script.js.map