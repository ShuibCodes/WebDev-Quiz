// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"app.js":[function(require,module,exports) {
// Selecting Elements
var hint = document.querySelector(".hintBtn");
var form = document.querySelector('.quiz-form');
var answers = ['B', 'B', 'B', 'B', 'B'];
var btn = document.querySelector(".submit");
var difficultyBox = document.querySelector(".difficulty"); //getting buttons

var answerTab = document.querySelector(".ansbtn");
var Easybtn = document.querySelector(".Easybtn");
var Hardbtn = document.querySelector(".Hardbtn");
var backbtn = document.querySelector(".back");
var wellDone = document.querySelector(".well-done"); // answer cards

var questionCard1 = document.querySelector(".questionCard1");
var questionCard2 = document.querySelector(".questionCard2");
var questionCard3 = document.querySelector(".questionCard3");
var questionCard4 = document.querySelector(".questionCard4");
var questionCard5 = document.querySelector(".questionCard5");
var answerCard1 = document.querySelector(".answerCard1");
var answerCard2 = document.querySelector(".answerCard2");
var answerCard3 = document.querySelector(".answerCard3");
var answerCard4 = document.querySelector(".answerCard4");
var answerCard5 = document.querySelector(".answerCard5"); // when page is loaded, automatically hide the answers

window.addEventListener('DOMContentLoaded', function (event) {
  answerTab.style.display = "none";
  difficultyBox.style.display = "none";
  backbtn.style.display = "none";
}); // Click "Need a Hint?" to see Hint:

seeHint(); // When submit is clicked-

ScrollTop();
hidePrompt();
seeAnswerTab();
seeAnswerCards();
changeColors();

function seeAnswerCards() {
  var allAnswers = [answerCard1, answerCard2, answerCard3, answerCard4, answerCard5];
  var allQuestions = [questionCard1, questionCard2, questionCard3, questionCard4, questionCard5];
  answerTab.addEventListener("click", function () {
    answerTab.style.display = "none";
    backbtn.style.display = "block";
    allAnswers.forEach(function (e) {
      e.style.display = "block";
    });
    allQuestions.forEach(function (e) {
      e.style.display = "none";
    });
  });
} // When Submit is pressed 


btn.addEventListener("click", function (e) {
  e.preventDefault();
  ScrollTop();
  var score = 0;
  var userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value]; // check the answers and add 25% for each correct answer

  userAnswers.forEach(function (answer, index) {
    if (answer === answers[index]) {
      score += 20;
    }

    if (score < 100) {
      backbtn.style.display = "block";
      answerTab.style.display = "none";
      wellDone.style.display = "none";
    } else if (score === 100) {
      backbtn.style.display = "none";
      wellDone.style.display = "block";
    }
  }); // Display Results Message:

  var finalResult = document.querySelector('.thisspan');
  finalResult.textContent = "".concat(score, "%");
  finalResult.style.display = "block";
  var percentage = document.querySelector('.resultMessage');

  if (percentage.style.display === "none") {
    percentage.style.display = "block";
  } else {
    hint.style.display = "none";
  }
}); // change color of easy of answerCards 

function changeColors() {
  Easybtn.addEventListener("click", function () {
    difficultyBox.classList.toggle("Green");
  });
  Hardbtn.addEventListener("click", function () {
    difficultyBox.classList.toggle("Red");
  });
} // creating a button to display hints 


function seeHint() {
  var questions = document.getElementsByClassName("question"); //Get all questions

  for (var i = 0; i < questions.length; i++) {
    //Iterate for each one of the questions
    questions[i].addEventListener("click", function (e) {
      //Attach an event listener on the question, in order to understand this a bit better search for event delegation in JS
      if (e.target.classList[0] == "hintBtn") {
        //Check if the target that triggered the event is the hint button
        this.getElementsByClassName('msg')[0].classList.toggle("hidehint"); //Inside every question find the message and toggle the class
      }
    });
  }
} // function to hide answer button and show when quiz is finished


function seeAnswerTab() {
  btn.addEventListener("click", function () {
    answerTab.style.display = "block";
  });
} // Creating btn that takes user to top of page for results after submit:


function ScrollTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
} // function to hide " on with the questions" after results are shown:


function hidePrompt() {
  var prompt = document.querySelector(".prompt");
  btn.addEventListener('click', function () {
    prompt.style.display = "none";
  });
}

function seeHint() {
  var questions = document.getElementsByClassName("question"); //Get all questions

  for (var i = 0; i < questions.length; i++) {
    //Iterate for each one of the questions
    questions[i].addEventListener("click", function (e) {
      //Attach an event listener on the question, in order to understand this a bit better search for event delegation in JS
      if (e.target.classList[0] == "hintBtn") {
        //Check if the target that triggered the event is the hint button
        this.getElementsByClassName('msg')[0].classList.toggle("hidehint"); //Inside every question find the message and toggle the class
      }
    });
  }
}
},{}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "50437" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","app.js"], null)
//# sourceMappingURL=/app.c328ef1a.js.map