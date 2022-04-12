"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var Activity = /*#__PURE__*/_createClass(function Activity(resultat) {
  _classCallCheck(this, Activity);

  _defineProperty(this, "activity", void 0);

  _defineProperty(this, "type", void 0);

  _defineProperty(this, "participants", void 0);

  _defineProperty(this, "price", void 0);

  this.activity = resultat.activity;
  this.type = resultat.type;
  this.participants = resultat.participants;
  this.price = resultat.price;
});

document.querySelector("button").addEventListener("click", function () {
  // requetePromise();
  requetePromiseAsync();
});

function requetePromise() {
  var promesseResultat = fetch("https://www.boredapi.com/api/activity");
  promesseResultat.then(function (response) {
    var promesseResultatJson = response.json();
    promesseResultatJson.then(function (resultat) {
      console.log("j'ai le resultat", resultat);
      var activity = new Activity(resultat);
    });
    console.log("la requete est terminée");
  });
  console.log("avant la requete");
}

function requetePromiseAsync() {
  return _requetePromiseAsync.apply(this, arguments);
}

function _requetePromiseAsync() {
  _requetePromiseAsync = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var response, activity;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch("https://www.boredapi.com/api/activity");

          case 2:
            response = _context.sent;
            _context.next = 5;
            return response.json();

          case 5:
            activity = _context.sent;
            console.log("resultat", activity);

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _requetePromiseAsync.apply(this, arguments);
}
//# sourceMappingURL=script.js.map