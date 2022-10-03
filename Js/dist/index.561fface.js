// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"aleya":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "770b8518561fface";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"a2PJv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "page", ()=>page);
var _homeView = require("./Views/HomeView");
var _homeViewDefault = parcelHelpers.interopDefault(_homeView);
var _model = require("./model/model");
// import config from "../config.js";
var _config = require("./config");
var _configDefault = parcelHelpers.interopDefault(_config);
const paginate = document.querySelector(".paginate");
paginate.style.opacity = 0;
if (module.hot) module.hot.accept();
async function Land() {
    try {
        //Fetching data
        _model.UpcomingMovies();
        _model.NowPlayingMovies();
        _model.TopRatedMovies();
        _model.MostPopularMovies();
        (0, _homeViewDefault.default).renderHeader();
        //Page Change
        (0, _homeViewDefault.default).renderMove();
        (0, _homeViewDefault.default).renderMove2();
        (0, _homeViewDefault.default).renderMove3();
        (0, _homeViewDefault.default).renderMove4();
        (0, _homeViewDefault.default).UP1(_model.Up1);
        (0, _homeViewDefault.default).Down1(_model.Down1);
        (0, _homeViewDefault.default).UP2(_model.Up2);
        (0, _homeViewDefault.default).Down2(_model.Down2);
        (0, _homeViewDefault.default).UP3(_model.Up3);
        (0, _homeViewDefault.default).Down3(_model.Down3);
        (0, _homeViewDefault.default).UP4(_model.Up4);
        (0, _homeViewDefault.default).Down4(_model.Down4);
        LoadEach();
    } catch (err) {
        console.error(err);
    }
}
Land();
let btnUp;
let btnDown;
let page = 1;
const sectNav = document.querySelector(".main--sect--nav");
function age() {
    setTimeout(()=>{
        const res = document.querySelector(".result--search--container");
        _model.SEARCH();
        paginate.textContent = `Page ${page} of ${_model.Total - 1}`;
        paginate.style.opacity = 1;
        console.log(_model.Val2);
        _model.Val2.forEach((data)=>{
            (0, _homeViewDefault.default).renderSearchResult(data, res);
            if (_model.testSecond.length > 1) LoadEach();
        });
    }, (0, _configDefault.default).time);
}
function LoadEach() {
    // alert(model.testSecond);
    setTimeout(()=>{
        const allView = document.querySelectorAll(".spread");
        allView.forEach((element)=>{
            element.addEventListener("click", function() {
                sectNav.innerHTML = "";
                (0, _homeViewDefault.default).clearsecParent();
                (0, _homeViewDefault.default).ins2();
                _model.EACH(element.dataset.id);
                setTimeout(()=>{
                    const body = document.querySelector(".target");
                    (0, _homeViewDefault.default).renderTarget(_model.LaunchB, body);
                    setTimeout(()=>{
                        const revBody = document.querySelector("#Num--3");
                        if (_model.rev3.length === 0) {
                            const you = `<h1 style="font-size:2em; color:red; padding:1%; height:2.2em; width: max-content; border-radius:10%;margin:10%;">No reviews yet !!</h1>`;
                            revBody.insertAdjacentHTML("afterbegin", you);
                        }
                        _model.rev3.forEach((elem)=>{
                            (0, _homeViewDefault.default).renderRev(elem, revBody);
                        });
                    }, 1000);
                    setTimeout(()=>{
                        const RECBODY = document.querySelector("#rec-list");
                        _model.rec3.forEach((elem)=>{
                            (0, _homeViewDefault.default).RecInfo(elem, RECBODY);
                        });
                    }, 1000);
                }, 1000);
                setTimeout(slide, 1000);
            });
        });
    }, 2000);
}
/*
function LoadEach() {
  setTimeout(() => {
    const allView = document.querySelectorAll(".spread");
    allView.forEach((element) => {
      element.addEventListener("click", function () {
        sectNav.innerHTML = "";
        HomeView.clearsecParent();
        HomeView.ins2();
        model.EACH(element.dataset.id);

        setTimeout(() => {
          const body = document.querySelector(".target");

          HomeView.renderTarget(model.LaunchB, body);
          setTimeout(() => {
            const revBody = document.querySelector("#Num--3");
            if (model.rev3.length === 0) {
              const you = `<h1 style="font-size:2em; color:red; padding:1%; height:2.2em; width: max-content; border-radius:2%;background:white; margin:10% 40% 20% 30%;">No reviews yet !!😣😏</h1>`;
              revBody.insertAdjacentHTML("afterbegin", you);
            }
            model.rev3.forEach((elem) => {
              HomeView.renderRev(elem, revBody);
            });
          }, 3000);

          setTimeout(() => {
            const RECBODY = document.querySelector("#rec-list");
            model.rec3.forEach((elem) => {
              HomeView.RecInfo(elem, RECBODY);
              
            });
          }, 3000);
        }, 2000);
        setTimeout(slide, 4000);
      });
    });
  }, 5000);
}
*/ function slide() {
    const container = document.querySelector(".pushover1");
    const btn = document.querySelectorAll(".btn--tab");
    const content = document.querySelectorAll(".stack");
    container.addEventListener("click", (e)=>{
        const link = e.target.closest(".tab-container");
        content.forEach((c)=>c.classList.remove("content--active"));
        btn.forEach((b)=>b.classList.remove("tab--active"));
        link.classList.add("tab--active");
        console.log(link);
        document.querySelector(`.Num--${link.dataset.move}`).classList.add("content--active");
    });
}
function timer() {
    setTimeout(()=>{
        const res = document.querySelector(".result--search--container");
        console.log(_model.Val2);
        _model.Val2.forEach((data)=>{
            (0, _homeViewDefault.default).renderSearchResult(data, res);
        });
        paginate.style.opacity = 1;
        console.log(res);
        (0, _homeViewDefault.default).renderMoveRes(res, page);
        btnUp = document.querySelector("#arru5");
        btnDown = document.querySelector("#arrd5");
        // if(model.Val2) LoadEach();
        if (_model.testSecond.length > 1) LoadEach();
        console.log(btnDown);
        function clear6() {
            res.innerHTML = "";
        }
        btnUp.addEventListener("click", function() {
            console.log("UP2 CLICKED");
            Up5();
        });
        btnDown.addEventListener("click", function() {
            console.log("UP2 CLICKED");
            Down5();
        });
        let tPages = _model.Total;
        console.log(tPages);
        function Up5() {
            if (page !== 0) {
                page--;
                clear6();
                age();
                console.log(page);
            }
            if (page === 0) {
                page = 1;
                age();
            }
        }
        function Down5() {
            if (page === tPages) {
                page = tPages;
                clear6();
                age();
            } else {
                page++;
                clear6();
                age();
                console.log(page);
            }
        }
    }, (0, _configDefault.default).time);
}
(0, _configDefault.default).searchform.addEventListener("submit", (e)=>{
    e.preventDefault();
    sectNav.innerHTML = "";
    (0, _homeViewDefault.default).clearsecParent();
    (0, _homeViewDefault.default).ins();
    _model.SEARCH();
    //   config.clearInput();
    timer();
}); // config.searchbtn.addEventListener("click", (e) => {
 //   e.preventDefault();
 //   sectNav.innerHTML = "";
 //   HomeView.clearsecParent();
 //   HomeView.ins();
 //   model.SEARCH();
 //   //   config.clearInput();
 //   timer();
 // });

},{"./Views/HomeView":"i1koT","./model/model":"a6WF2","./config":"bSr8D","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"i1koT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _model = require("../model/model");
const upcomingData = (0, _model.movies).upcoming;
// console.log(upcomingData);
class HomeView {
    parent = document.querySelector("#content--space");
    secParent = document.querySelector(".main--section--main");
    house1 = document.querySelector("#house1");
    house2 = document.querySelector("#house2");
    // house3 = document.querySelector("#house3");
    house4 = document.querySelector("#house4");
    house5 = document.querySelector("#house5");
    accHouse1 = document.querySelector("#place1");
    accHouse2 = document.querySelector("#place2");
    // accHouse3 = document.querySelector("#place3");
    accHouse4 = document.querySelector("#place4");
    accHouse5 = document.querySelector("#place5");
    resHouse = document.querySelector(".result--search--container");
    clearsecParent() {
        this.secParent.innerHTML = "";
    }
    ins() {
        const html = ` <section class="result--search--container">  </section>`;
        this.secParent.insertAdjacentHTML("afterbegin", html);
    }
    ins2() {
        const html = `<section class="target"></section>`;
        this.secParent.insertAdjacentHTML("afterbegin", html);
    }
    renderRev(data, body) {
        const pics = data.author_details ? `https://image.tmdb.org/t/p/w500/${data.author_details.avatar_path}` : "Devsldpi.a7b5d534.svg";
        const html = `
    <div  style="overflow-y:scroll; padding:3%;" class="review">
                               <div class="img--holder">
                                <img src="${pics}" class="revImg" alt="Author's Image">
                                <h3>${data.author}</h3>
                                <small>${data.created_at}</small>
                               </div>
                               <div  style="overflow-y:hidden" class="reviewHolder">
                                <p style="overflow-y:hidden; margin: 0 0 2% 0">${data.content}</p>
                               </div>
                            </div> 
    `;
        body.insertAdjacentHTML("beforeend", html);
    }
    renderTarget(data, body) {
        const genres = data.genres.map((e)=>e.name).join(" , ");
        const country = data.production_countries[0].name;
        const html = `
  
                <section  style="background-image:url(https://image.tmdb.org/t/p/w500/${data.poster_path});backgrounf-size:cover; background-repeat: repeat-x" class="partA tar">
                    <div class="space1 just"> 
                        <a href="https://www.youtube.com/results?search_query=${data.title}">
                            <img src="YU.svg" alt="youtube link" class="youtube--link">
                        </a>
                       
                    </div>

                </section>
                 <a style="text-decoration:none;text-align:center; padding:1%; margin:5% 10% 5% 30%; font-weight:900; background: rgb(2, 157, 91); color:white; width:max-content;border-radius:5px;" id="homepage" href="${data.homepage}">
                           <small> Visit video homepage</small>
                        </a>
                <section class="partB tar">

                    <div class="pushover1">

                        <button class="btn--tab tab-container tab--active" data-move="1">Info</button>

                        <button class="btn--tab tab-container" data-move="2">Overview</button>

                        <button class="btn--tab tab-container" data-move="3">Reviews</button>

                        <button class="btn--tab tab-container" data-move="4">Recommended</button>




                    </div>
                    <div class="pushover2">
                        <article id="Num--1" class="stack Num--1 content--active">
                            
                          <table>
                            <tr>
                                <td>Title</td>
                                <td>${data.title}</td>
                            </tr>

                            <tr>
                                <td>Genre</td>
                                <td>${genres}</td>
                            </tr>


                            <tr>
                                <td>Release Date</td>
                                <td>${data.release_date}</td>
                            </tr>
                            <tr>
                                <td>Production Country</td>
                                <td>${country}</td>
                            </tr>
                            <tr>
                                <td>Ratings</td>
                                <td>${data.vote_average}</td>
                            </tr>

                          </table>
                        
                        </article>
                        <article id="Num--2" class="stack Num--2">
                            <p>${data.overview}</p>
                        </article>
                        <article id="Num--3" class="stack Num--3">
                            
                        </article>
                        <article id="Num--4" class="stack Num--4">
                            <section id="rec-list">
                           
                               
                              
                               
                                

                            </section>
                        </article>
                    </div>
                </section> 
    
    
    `;
        body.insertAdjacentHTML("afterbegin", html);
    }
    RecInfo(data, body) {
        const html = `
             <div style="background-image:url(https://image.tmdb.org/t/p/w500/${data.poster_path}" class="rec--movies eachRec"  data-id="${data.id}">
                                        <aside class="internal">
                                <h5 class="textA intro">${data.title}  </h5>
                                <h6 class="textB intro">${data.release_date}</h6>
                                <h6 class="textC intro">
                                
                                    <img src="st.svg" alt="Not available" class="rate"> 
                                </h6>
                            </aside>
                                    </div>
    `;
        body.insertAdjacentHTML("beforeend", html);
    }
    // insRec(body) {
    //   const html = `  <section id="rec-list">    </section>`;
    //   body.insertAdjacentHTML("afterbegin", html);
    // }
    renderSearchResult(data, body) {
        const html = `
            <div class="each-result spread" style="background-image:url(https://image.tmdb.org/t/p/w500/${data.poster_path || data.backdrop_path}); overflow: hidden" data-id="${data.id}"">
                   <aside class="internal">
                                <h5 class="textA intro">${data.original_title || data.name}  </h5>
                                <h6 class="textB intro">${data.release_date || data.first_air_date}</h6>
                                <h6 class="textC intro">
                                
                                    <img src="st.svg" alt="Not available" class="rate"> 
                                </h6>
                            </aside>
                </div>
    `;
        body.insertAdjacentHTML("beforeend", html);
        return html;
    }
    renderSpinner() {
        const spinner = `
        <section class="spinner">
              <img src="spinner-gap.82a45b17.svg"  alt="" class="spin">
            </section>
        `;
        this.parent.insertAdjacentHTML("afterbegin", spinner);
        return spinner;
    }
    UP1(func) {
        const btnUp = document.querySelector(".arrowUp");
        btnUp.addEventListener("click", function() {
            func();
        });
    }
    Down1(func) {
        const btnDown = document.querySelector(".arrowDown");
        btnDown.addEventListener("click", function() {
            func();
        });
    }
    UP2(func) {
        const btnUp = document.querySelector("#arru1");
        btnUp.addEventListener("click", function() {
            func();
        });
    }
    Down2(func) {
        const btnDown = document.querySelector("#arrd1");
        btnDown.addEventListener("click", function() {
            func();
        });
    }
    UP3(func) {
        const btnUp = document.querySelector("#arru2");
        btnUp.addEventListener("click", function() {
            func();
        });
    }
    Down3(func) {
        const btnDown = document.querySelector("#arrd2");
        btnDown.addEventListener("click", function() {
            func();
        });
    }
    UP4(func) {
        const btnUp = document.querySelector("#arru3");
        btnUp.addEventListener("click", function() {
            func();
        });
    }
    Down4(func) {
        const btnDown = document.querySelector("#arrd3");
        btnDown.addEventListener("click", function() {
            func();
        });
    }
    clear1() {
        this.house1.innerHTML = "";
    }
    clear2() {
        this.house2.innerHTML = "";
    }
    clear3() {
        this.house3.innerHTML = "";
    }
    clear4() {
        this.house4.innerHTML = "";
    }
    clear5() {
        this.house5.innerHTML = "";
    }
    renderMove() {
        const html = `
   <section class="accordion first--acordion">
                        <div class="arrowUp"> <img class="move--to" src="UI.svg"  alt="l"> </div>
                        <div class="arrowDown"> <img class="move--to" src="DI.svg" alt="">
                        </div>
                    </section>
  `;
        this.accHouse1.insertAdjacentHTML("beforeend", html);
    }
    renderMoveRes(place) {
        const html = `
   <section class="accordion first--acordion" >

                        <div id="arru5" class="arrowUp"> <img  class="move--to " src="CaretU.svg" style="filter:sepia(27%)" alt="ccc"> </div>
                        <div id="arrd5" class="arrowDown"> <img class="move--to" src="next11.svg" alt="">
                        </div>
                    </section>
  `;
        place.insertAdjacentHTML("beforebegin", html);
    }
    renderMove2() {
        const html = `
   <section class="accordion first--acordion">
                        <div id="arru1" class="arrowUp"> <img class="move--to " src="UI.svg" alt="ttt"> </div>
                        <div id="arrd1" class="arrowDown"> <img class="move--to" src="DI.svg" alt="">
                        </div>
                    </section>
  `;
        this.accHouse2.insertAdjacentHTML("beforeend", html);
    }
    renderMove3() {
        const html = `
   <section class="accordion first--acordion">
                        <div id="arru2" class="arrowUp"> <img class="move--to " src="UI.svg" alt=""> </div>
                        <div id="arrd2" class="arrowDown"> <img class="move--to" src="DI.svg" alt="">
                        </div>
                    </section>
  `;
        this.accHouse4.insertAdjacentHTML("beforeend", html);
    }
    renderMove4() {
        const html = `
   <section class="accordion first--acordion">
                        <div id="arru3" class="arrowUp"> <img class="move--to " src="UI.svg" alt=""> </div>
                        <div id="arrd3" class="arrowDown"> <img class="move--to" src="DI.svg" alt="">
                        </div>
                    </section>
  `;
        this.accHouse5.insertAdjacentHTML("beforeend", html);
    }
    renderUpcoming(data) {
        const elem = `
       
                        <div  style="background-image:url(https://image.tmdb.org/t/p/w500/${data.poster_path}); overflow: hidden" class="upcoming--display all--view spread" data-id="${data.id}"">
                            <aside class="internal">
                                <h5 class="textA intro">${data.title}  </h5>
                                <h6 class="textB intro">${data.release_date}</h6>
                                <h6 class="textC intro">
                                
                                    <img src="st.svg" alt="Not available" class="rate"> 
                                </h6>
                            </aside>
                        </div>
                         
      `;
        this.house1.insertAdjacentHTML("beforeend", elem);
        return elem;
    }
    renderNowPlaying(data) {
        const elem = `
       
                        <div  style="background-image:url(https://image.tmdb.org/t/p/w500/${data.poster_path}); overflow: hidden" class="upcoming--display all--view spread" data-id="${data.id}"">
                            <aside class="internal">
                                <h5 class="textA intro">${data.title}  </h5>
                                <h6 class="textB intro">${data.release_date}</h6>
                                <h6 class="textC intro">
                                
                                    <img src="st.svg" alt="Not available" class="rate"> 
                                </h6>
                            </aside>
                        </div>
                         
      `;
        this.house2.insertAdjacentHTML("beforeend", elem);
        return elem;
    }
    renderTopRated(data) {
        const elem = `
       
                        <div  style="background-image:url(https://image.tmdb.org/t/p/w500/${data.poster_path}); overflow: hidden" class="upcoming--display all--view spread" data-id="${data.id}"">
                            <aside class="internal">
                                <h5 class="textA intro">${data.title}  </h5>
                                <h6 class="textB intro">${data.release_date}</h6>
                                <h6 class="textC intro">
                                
                                    <img src="st.svg" alt="Not available" class="rate"> 
                                </h6>
                            </aside>
                        </div>
                         
      `;
        this.house4.insertAdjacentHTML("beforeend", elem);
        return elem;
    }
    renderMostPopular(data) {
        const elem = `
       
                        <div  style="background-image:url(https://image.tmdb.org/t/p/w500/${data.poster_path}); overflow: hidden" class="upcoming--display all--view spread" data-id="${data.id}"">
                            <aside class="internal">
                                <h5 class="textA intro">${data.title}  </h5>
                                <h6 class="textB intro">${data.release_date}</h6>
                                <h6 class="textC intro">
                                
                                    <img src="st.svg" alt="Not available" class="rate"> 
                                </h6>
                            </aside>
                        </div>
                         
      `;
        this.house5.insertAdjacentHTML("beforeend", elem);
        return elem;
    }
    renderHeader() {
        const header = `
    <section class="main--sect--nav">
                <div class="main--list">
                    <a id="linkA" href="#" class="list one">Upcoming</a>
                    <a  id="linkB" href="#" class="list two"> Now Playing</a>
                   
                    <a  id="linkC" href="#" class="list four">Top Rated</a>
                    <a  id="linkD" href="#" class="list five">Most Popular</a>
                </div>

            </section>`;
        this.parent.insertAdjacentHTML("afterbegin", header);
        return header;
    }
}
exports.default = new HomeView();

},{"../model/model":"a6WF2","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"a6WF2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "movies", ()=>movies);
parcelHelpers.export(exports, "LaunchB", ()=>LaunchB);
parcelHelpers.export(exports, "rev3", ()=>rev3);
parcelHelpers.export(exports, "rec3", ()=>rec3);
parcelHelpers.export(exports, "EACH", ()=>EACH);
parcelHelpers.export(exports, "page", ()=>page);
parcelHelpers.export(exports, "tPages", ()=>tPages);
parcelHelpers.export(exports, "testSecond", ()=>testSecond);
parcelHelpers.export(exports, "UpcomingMovies", ()=>UpcomingMovies);
parcelHelpers.export(exports, "Up1", ()=>Up1);
parcelHelpers.export(exports, "Down1", ()=>Down1);
parcelHelpers.export(exports, "NowPlayingMovies", ()=>NowPlayingMovies);
parcelHelpers.export(exports, "Up2", ()=>Up2);
parcelHelpers.export(exports, "Down2", ()=>Down2);
parcelHelpers.export(exports, "TopRatedMovies", ()=>TopRatedMovies);
parcelHelpers.export(exports, "Up3", ()=>Up3);
parcelHelpers.export(exports, "Down3", ()=>Down3);
parcelHelpers.export(exports, "MostPopularMovies", ()=>MostPopularMovies);
parcelHelpers.export(exports, "Up4", ()=>Up4);
parcelHelpers.export(exports, "Down4", ()=>Down4);
parcelHelpers.export(exports, "Val2", ()=>Val2);
parcelHelpers.export(exports, "Total", ()=>Total);
parcelHelpers.export(exports, "SEARCH", ()=>SEARCH);
var _homeView = require("../Views/HomeView");
var _homeViewDefault = parcelHelpers.interopDefault(_homeView);
var _configJs = require("../config.js");
var _configJsDefault = parcelHelpers.interopDefault(_configJs);
var _controller = require("../controller");
var _regeneratorRuntime = require("regenerator-runtime");
const movies = {
    upcoming: {},
    reviews: {}
};
let LaunchB;
let rev3;
let rec3;
async function EACH(A) {
    // const LaunchA = await fetch(`${config.eachURL}${id}${config.eachKEY}`)
    const LaunchA = await fetch(`https://api.themoviedb.org/3/movie/${A}?api_key=${(0, _configJsDefault.default).API_KEY}&language=en-US`);
    LaunchB = await LaunchA.json();
    console.log(LaunchB);
    const rev = await fetch(`https://api.themoviedb.org/3/movie/${A}/reviews?api_key=${(0, _configJsDefault.default).API_KEY}&language=en-US&page=1`);
    let rev2 = await rev.json();
    console.log(rev2);
    rev2 = rev2.results;
    rev3 = rev2;
    console.log(rev3);
    const recA = await fetch(`https://api.themoviedb.org/3/movie/${A}/recommendations?api_key=${(0, _configJsDefault.default).API_KEY}&language=en-US&page=1`);
    let recB = await recA.json();
    recB = recB.results;
    rec3 = recB;
    console.log(recB);
}
let page = 1;
let tPages;
let testSecond;
async function UpcomingMovies() {
    try {
        const first = await fetch(`${(0, _configJsDefault.default).upcomingURL}${(0, _configJsDefault.default).API_KEY}${(0, _configJsDefault.default).LANG}${page}`);
        let second = await first.json();
        tPages = second.total_pages;
        second = second.results;
        testSecond = second;
        console.log(testSecond.length);
        second.forEach((element)=>{
            (0, _homeViewDefault.default).renderUpcoming(element);
        });
    } catch (err) {
        console.log(err, "I am the");
    }
}
function Up1() {
    if (page !== 0) {
        page--;
        (0, _homeViewDefault.default).clear1();
        UpcomingMovies();
    }
    if (page === 0) {
        page = 1;
        UpcomingMovies();
    }
}
function Down1() {
    if (page === tPages) {
        page = tPages;
        (0, _homeViewDefault.default).clear1();
        UpcomingMovies();
    } else {
        page++;
        (0, _homeViewDefault.default).clear1();
        UpcomingMovies();
    }
}
async function NowPlayingMovies() {
    try {
        const first = await fetch(`${(0, _configJsDefault.default).nowPlayingURL}${(0, _configJsDefault.default).API_KEY}${(0, _configJsDefault.default).LANG}${page}`);
        let second = await first.json();
        tPages = second.total_pages;
        second = second.results;
        second.forEach((element)=>{
            (0, _homeViewDefault.default).renderNowPlaying(element);
        });
    } catch (err) {
        console.log(err, "I am the");
    }
}
function Up2() {
    console.log("UP2 CLICKED");
    if (page !== 0) {
        page--;
        (0, _homeViewDefault.default).clear2();
        NowPlayingMovies();
    }
    if (page === 0) {
        page = 1;
        NowPlayingMovies();
    }
}
function Down2() {
    if (page === tPages) {
        page = tPages;
        (0, _homeViewDefault.default).clear2();
        NowPlayingMovies();
    } else {
        page++;
        (0, _homeViewDefault.default).clear2();
        NowPlayingMovies();
    }
}
async function TopRatedMovies() {
    try {
        const first = await fetch(`${(0, _configJsDefault.default).TopRatedURL}${(0, _configJsDefault.default).API_KEY}${(0, _configJsDefault.default).LANG}${page}`);
        let second = await first.json();
        tPages = second.total_pages;
        second = second.results;
        second.forEach((element)=>{
            (0, _homeViewDefault.default).renderTopRated(element);
        });
    } catch (err) {
        console.log(err, "I am the");
    }
}
function Up3() {
    console.log("UP2 CLICKED");
    if (page !== 0) {
        page--;
        (0, _homeViewDefault.default).clear4();
        TopRatedMovies();
    }
    if (page === 0) {
        page = 1;
        TopRatedMovies();
    }
}
function Down3() {
    if (page === tPages) {
        page = tPages;
        (0, _homeViewDefault.default).clear4();
        TopRatedMovies();
    } else {
        page++;
        (0, _homeViewDefault.default).clear4();
        TopRatedMovies();
    }
}
async function MostPopularMovies() {
    try {
        const first = await fetch(`${(0, _configJsDefault.default).MostPopular}${(0, _configJsDefault.default).API_KEY}${(0, _configJsDefault.default).LANG}${page}`);
        let second = await first.json();
        tPages = second.total_pages;
        second = second.results;
        second.forEach((element)=>{
            (0, _homeViewDefault.default).renderMostPopular(element);
        });
    } catch (err) {
        console.log(err, "I am the");
    }
}
function Up4() {
    console.log("UP2 CLICKED");
    if (page !== 0) {
        page--;
        (0, _homeViewDefault.default).clear5();
        MostPopularMovies();
    }
    if (page === 0) {
        page = 1;
        MostPopularMovies();
    }
}
function Down4() {
    if (page === tPages) {
        page = tPages;
        (0, _homeViewDefault.default).clear5();
        MostPopularMovies();
    } else {
        page++;
        (0, _homeViewDefault.default).clear5();
        MostPopularMovies();
    }
}
let Val2;
let Total;
async function SEARCH() {
    try {
        const value = (0, _configJsDefault.default).searchbox.value;
        const Val1 = await fetch(`https://api.themoviedb.org/3/search/multi?api_key=${(0, _configJsDefault.default).API_KEY}&query=${value}&language=en-US&page=${(0, _controller.page)}&include_adult=fals`);
        console.log((0, _controller.page));
        Val2 = await Val1.json();
        console.log(Val2);
        Total = Val2.total_pages;
        Val2 = Val2.results;
        if (Val2.length === 0) throw new Error(`No result found for your search (${value})`);
    // Val2.forEach(data =>{
    //     HomeView.renderSearchResult(data,res)
    // })
    } catch (err) {
        const mes = `<h1 style="color:red; transform:translate(20vw)">${err.message}</h1>`;
        (0, _homeViewDefault.default).parent.insertAdjacentHTML("beforeend", mes);
        setTimeout(()=>{
            (0, _homeViewDefault.default).parent.innerHTML = "";
        }, 5000);
        console.error(err, "Please am here");
    }
}

},{"../Views/HomeView":"i1koT","../config.js":"bSr8D","../controller":"a2PJv","regenerator-runtime":"dXNgZ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bSr8D":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class config {
    API_KEY = "e454020bbcf8fdaccdf0027d6b28b698";
    LANG = "&language=en-US&page=";
    upcomingURL = "https://api.themoviedb.org/3/movie/upcoming?api_key=";
    nowPlayingURL = "https://api.themoviedb.org/3/movie/now_playing?api_key=";
    latestURL = "https://api.themoviedb.org/3/movie/latest?api_key=";
    TopRatedURL = "https://api.themoviedb.org/3/movie/top_rated?api_key=";
    MostPopular = "https://api.themoviedb.org/3/movie/popular?api_key=";
    searchbox = document.querySelector(".input--text");
    searchform = document.querySelector(".form--search");
    eachKEY = `api_key=${this.API_KEY}&language=en-US`;
    eachURL = "https://api.themoviedb.org/3/movie/";
    time = 2000;
    clearInput() {
        this.searchbox.value = "";
    }
}
exports.default = new config();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"dXNgZ":[function(require,module,exports) {
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var runtime = function(exports) {
    "use strict";
    var Op = Object.prototype;
    var hasOwn = Op.hasOwnProperty;
    var undefined; // More compressible than void 0.
    var $Symbol = typeof Symbol === "function" ? Symbol : {};
    var iteratorSymbol = $Symbol.iterator || "@@iterator";
    var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
    var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
    function define(obj, key, value) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
        return obj[key];
    }
    try {
        // IE 8 has a broken Object.defineProperty that only works on DOM objects.
        define({}, "");
    } catch (err) {
        define = function(obj, key, value) {
            return obj[key] = value;
        };
    }
    function wrap(innerFn, outerFn, self, tryLocsList) {
        // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
        var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
        var generator = Object.create(protoGenerator.prototype);
        var context = new Context(tryLocsList || []);
        // The ._invoke method unifies the implementations of the .next,
        // .throw, and .return methods.
        generator._invoke = makeInvokeMethod(innerFn, self, context);
        return generator;
    }
    exports.wrap = wrap;
    // Try/catch helper to minimize deoptimizations. Returns a completion
    // record like context.tryEntries[i].completion. This interface could
    // have been (and was previously) designed to take a closure to be
    // invoked without arguments, but in all the cases we care about we
    // already have an existing method we want to call, so there's no need
    // to create a new function object. We can even get away with assuming
    // the method takes exactly one argument, since that happens to be true
    // in every case, so we don't have to touch the arguments object. The
    // only additional allocation required is the completion record, which
    // has a stable shape and so hopefully should be cheap to allocate.
    function tryCatch(fn, obj, arg) {
        try {
            return {
                type: "normal",
                arg: fn.call(obj, arg)
            };
        } catch (err) {
            return {
                type: "throw",
                arg: err
            };
        }
    }
    var GenStateSuspendedStart = "suspendedStart";
    var GenStateSuspendedYield = "suspendedYield";
    var GenStateExecuting = "executing";
    var GenStateCompleted = "completed";
    // Returning this object from the innerFn has the same effect as
    // breaking out of the dispatch switch statement.
    var ContinueSentinel = {};
    // Dummy constructor functions that we use as the .constructor and
    // .constructor.prototype properties for functions that return Generator
    // objects. For full spec compliance, you may wish to configure your
    // minifier not to mangle the names of these two functions.
    function Generator() {}
    function GeneratorFunction() {}
    function GeneratorFunctionPrototype() {}
    // This is a polyfill for %IteratorPrototype% for environments that
    // don't natively support it.
    var IteratorPrototype = {};
    define(IteratorPrototype, iteratorSymbol, function() {
        return this;
    });
    var getProto = Object.getPrototypeOf;
    var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
    if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
    var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
    GeneratorFunction.prototype = GeneratorFunctionPrototype;
    define(Gp, "constructor", GeneratorFunctionPrototype);
    define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
    GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction");
    // Helper for defining the .next, .throw, and .return methods of the
    // Iterator interface in terms of a single ._invoke method.
    function defineIteratorMethods(prototype) {
        [
            "next",
            "throw",
            "return"
        ].forEach(function(method) {
            define(prototype, method, function(arg) {
                return this._invoke(method, arg);
            });
        });
    }
    exports.isGeneratorFunction = function(genFun) {
        var ctor = typeof genFun === "function" && genFun.constructor;
        return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
    };
    exports.mark = function(genFun) {
        if (Object.setPrototypeOf) Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
        else {
            genFun.__proto__ = GeneratorFunctionPrototype;
            define(genFun, toStringTagSymbol, "GeneratorFunction");
        }
        genFun.prototype = Object.create(Gp);
        return genFun;
    };
    // Within the body of any async function, `await x` is transformed to
    // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
    // `hasOwn.call(value, "__await")` to determine if the yielded value is
    // meant to be awaited.
    exports.awrap = function(arg) {
        return {
            __await: arg
        };
    };
    function AsyncIterator(generator, PromiseImpl) {
        function invoke(method, arg, resolve, reject) {
            var record = tryCatch(generator[method], generator, arg);
            if (record.type === "throw") reject(record.arg);
            else {
                var result = record.arg;
                var value = result.value;
                if (value && typeof value === "object" && hasOwn.call(value, "__await")) return PromiseImpl.resolve(value.__await).then(function(value) {
                    invoke("next", value, resolve, reject);
                }, function(err) {
                    invoke("throw", err, resolve, reject);
                });
                return PromiseImpl.resolve(value).then(function(unwrapped) {
                    // When a yielded Promise is resolved, its final value becomes
                    // the .value of the Promise<{value,done}> result for the
                    // current iteration.
                    result.value = unwrapped;
                    resolve(result);
                }, function(error) {
                    // If a rejected Promise was yielded, throw the rejection back
                    // into the async generator function so it can be handled there.
                    return invoke("throw", error, resolve, reject);
                });
            }
        }
        var previousPromise;
        function enqueue(method, arg) {
            function callInvokeWithMethodAndArg() {
                return new PromiseImpl(function(resolve, reject) {
                    invoke(method, arg, resolve, reject);
                });
            }
            return previousPromise = // If enqueue has been called before, then we want to wait until
            // all previous Promises have been resolved before calling invoke,
            // so that results are always delivered in the correct order. If
            // enqueue has not been called before, then it is important to
            // call invoke immediately, without waiting on a callback to fire,
            // so that the async generator function has the opportunity to do
            // any necessary setup in a predictable way. This predictability
            // is why the Promise constructor synchronously invokes its
            // executor callback, and why async functions synchronously
            // execute code before the first await. Since we implement simple
            // async functions in terms of async generators, it is especially
            // important to get this right, even though it requires care.
            previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
            // invocations of the iterator.
            callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
        }
        // Define the unified helper method that is used to implement .next,
        // .throw, and .return (see defineIteratorMethods).
        this._invoke = enqueue;
    }
    defineIteratorMethods(AsyncIterator.prototype);
    define(AsyncIterator.prototype, asyncIteratorSymbol, function() {
        return this;
    });
    exports.AsyncIterator = AsyncIterator;
    // Note that simple async functions are implemented on top of
    // AsyncIterator objects; they just return a Promise for the value of
    // the final result produced by the iterator.
    exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
        if (PromiseImpl === void 0) PromiseImpl = Promise;
        var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
        return exports.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
         : iter.next().then(function(result) {
            return result.done ? result.value : iter.next();
        });
    };
    function makeInvokeMethod(innerFn, self, context) {
        var state = GenStateSuspendedStart;
        return function invoke(method, arg) {
            if (state === GenStateExecuting) throw new Error("Generator is already running");
            if (state === GenStateCompleted) {
                if (method === "throw") throw arg;
                // Be forgiving, per 25.3.3.3.3 of the spec:
                // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
                return doneResult();
            }
            context.method = method;
            context.arg = arg;
            while(true){
                var delegate = context.delegate;
                if (delegate) {
                    var delegateResult = maybeInvokeDelegate(delegate, context);
                    if (delegateResult) {
                        if (delegateResult === ContinueSentinel) continue;
                        return delegateResult;
                    }
                }
                if (context.method === "next") // Setting context._sent for legacy support of Babel's
                // function.sent implementation.
                context.sent = context._sent = context.arg;
                else if (context.method === "throw") {
                    if (state === GenStateSuspendedStart) {
                        state = GenStateCompleted;
                        throw context.arg;
                    }
                    context.dispatchException(context.arg);
                } else if (context.method === "return") context.abrupt("return", context.arg);
                state = GenStateExecuting;
                var record = tryCatch(innerFn, self, context);
                if (record.type === "normal") {
                    // If an exception is thrown from innerFn, we leave state ===
                    // GenStateExecuting and loop back for another invocation.
                    state = context.done ? GenStateCompleted : GenStateSuspendedYield;
                    if (record.arg === ContinueSentinel) continue;
                    return {
                        value: record.arg,
                        done: context.done
                    };
                } else if (record.type === "throw") {
                    state = GenStateCompleted;
                    // Dispatch the exception by looping back around to the
                    // context.dispatchException(context.arg) call above.
                    context.method = "throw";
                    context.arg = record.arg;
                }
            }
        };
    }
    // Call delegate.iterator[context.method](context.arg) and handle the
    // result, either by returning a { value, done } result from the
    // delegate iterator, or by modifying context.method and context.arg,
    // setting context.delegate to null, and returning the ContinueSentinel.
    function maybeInvokeDelegate(delegate, context) {
        var method = delegate.iterator[context.method];
        if (method === undefined) {
            // A .throw or .return when the delegate iterator has no .throw
            // method always terminates the yield* loop.
            context.delegate = null;
            if (context.method === "throw") {
                // Note: ["return"] must be used for ES3 parsing compatibility.
                if (delegate.iterator["return"]) {
                    // If the delegate iterator has a return method, give it a
                    // chance to clean up.
                    context.method = "return";
                    context.arg = undefined;
                    maybeInvokeDelegate(delegate, context);
                    if (context.method === "throw") // If maybeInvokeDelegate(context) changed context.method from
                    // "return" to "throw", let that override the TypeError below.
                    return ContinueSentinel;
                }
                context.method = "throw";
                context.arg = new TypeError("The iterator does not provide a 'throw' method");
            }
            return ContinueSentinel;
        }
        var record = tryCatch(method, delegate.iterator, context.arg);
        if (record.type === "throw") {
            context.method = "throw";
            context.arg = record.arg;
            context.delegate = null;
            return ContinueSentinel;
        }
        var info = record.arg;
        if (!info) {
            context.method = "throw";
            context.arg = new TypeError("iterator result is not an object");
            context.delegate = null;
            return ContinueSentinel;
        }
        if (info.done) {
            // Assign the result of the finished delegate to the temporary
            // variable specified by delegate.resultName (see delegateYield).
            context[delegate.resultName] = info.value;
            // Resume execution at the desired location (see delegateYield).
            context.next = delegate.nextLoc;
            // If context.method was "throw" but the delegate handled the
            // exception, let the outer generator proceed normally. If
            // context.method was "next", forget context.arg since it has been
            // "consumed" by the delegate iterator. If context.method was
            // "return", allow the original .return call to continue in the
            // outer generator.
            if (context.method !== "return") {
                context.method = "next";
                context.arg = undefined;
            }
        } else // Re-yield the result returned by the delegate method.
        return info;
        // The delegate iterator is finished, so forget it and continue with
        // the outer generator.
        context.delegate = null;
        return ContinueSentinel;
    }
    // Define Generator.prototype.{next,throw,return} in terms of the
    // unified ._invoke helper method.
    defineIteratorMethods(Gp);
    define(Gp, toStringTagSymbol, "Generator");
    // A Generator should always return itself as the iterator object when the
    // @@iterator function is called on it. Some browsers' implementations of the
    // iterator prototype chain incorrectly implement this, causing the Generator
    // object to not be returned from this call. This ensures that doesn't happen.
    // See https://github.com/facebook/regenerator/issues/274 for more details.
    define(Gp, iteratorSymbol, function() {
        return this;
    });
    define(Gp, "toString", function() {
        return "[object Generator]";
    });
    function pushTryEntry(locs) {
        var entry = {
            tryLoc: locs[0]
        };
        if (1 in locs) entry.catchLoc = locs[1];
        if (2 in locs) {
            entry.finallyLoc = locs[2];
            entry.afterLoc = locs[3];
        }
        this.tryEntries.push(entry);
    }
    function resetTryEntry(entry) {
        var record = entry.completion || {};
        record.type = "normal";
        delete record.arg;
        entry.completion = record;
    }
    function Context(tryLocsList) {
        // The root entry object (effectively a try statement without a catch
        // or a finally block) gives us a place to store values thrown from
        // locations where there is no enclosing try statement.
        this.tryEntries = [
            {
                tryLoc: "root"
            }
        ];
        tryLocsList.forEach(pushTryEntry, this);
        this.reset(true);
    }
    exports.keys = function(object) {
        var keys = [];
        for(var key in object)keys.push(key);
        keys.reverse();
        // Rather than returning an object with a next method, we keep
        // things simple and return the next function itself.
        return function next() {
            while(keys.length){
                var key = keys.pop();
                if (key in object) {
                    next.value = key;
                    next.done = false;
                    return next;
                }
            }
            // To avoid creating an additional object, we just hang the .value
            // and .done properties off the next function object itself. This
            // also ensures that the minifier will not anonymize the function.
            next.done = true;
            return next;
        };
    };
    function values(iterable) {
        if (iterable) {
            var iteratorMethod = iterable[iteratorSymbol];
            if (iteratorMethod) return iteratorMethod.call(iterable);
            if (typeof iterable.next === "function") return iterable;
            if (!isNaN(iterable.length)) {
                var i = -1, next = function next() {
                    while(++i < iterable.length)if (hasOwn.call(iterable, i)) {
                        next.value = iterable[i];
                        next.done = false;
                        return next;
                    }
                    next.value = undefined;
                    next.done = true;
                    return next;
                };
                return next.next = next;
            }
        }
        // Return an iterator with no values.
        return {
            next: doneResult
        };
    }
    exports.values = values;
    function doneResult() {
        return {
            value: undefined,
            done: true
        };
    }
    Context.prototype = {
        constructor: Context,
        reset: function(skipTempReset) {
            this.prev = 0;
            this.next = 0;
            // Resetting context._sent for legacy support of Babel's
            // function.sent implementation.
            this.sent = this._sent = undefined;
            this.done = false;
            this.delegate = null;
            this.method = "next";
            this.arg = undefined;
            this.tryEntries.forEach(resetTryEntry);
            if (!skipTempReset) {
                for(var name in this)// Not sure about the optimal order of these conditions:
                if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) this[name] = undefined;
            }
        },
        stop: function() {
            this.done = true;
            var rootEntry = this.tryEntries[0];
            var rootRecord = rootEntry.completion;
            if (rootRecord.type === "throw") throw rootRecord.arg;
            return this.rval;
        },
        dispatchException: function(exception) {
            if (this.done) throw exception;
            var context = this;
            function handle(loc, caught) {
                record.type = "throw";
                record.arg = exception;
                context.next = loc;
                if (caught) {
                    // If the dispatched exception was caught by a catch block,
                    // then let that catch block handle the exception normally.
                    context.method = "next";
                    context.arg = undefined;
                }
                return !!caught;
            }
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                var record = entry.completion;
                if (entry.tryLoc === "root") // Exception thrown outside of any try block that could handle
                // it, so set the completion value of the entire function to
                // throw the exception.
                return handle("end");
                if (entry.tryLoc <= this.prev) {
                    var hasCatch = hasOwn.call(entry, "catchLoc");
                    var hasFinally = hasOwn.call(entry, "finallyLoc");
                    if (hasCatch && hasFinally) {
                        if (this.prev < entry.catchLoc) return handle(entry.catchLoc, true);
                        else if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
                    } else if (hasCatch) {
                        if (this.prev < entry.catchLoc) return handle(entry.catchLoc, true);
                    } else if (hasFinally) {
                        if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
                    } else throw new Error("try statement without catch or finally");
                }
            }
        },
        abrupt: function(type, arg) {
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
                    var finallyEntry = entry;
                    break;
                }
            }
            if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) // Ignore the finally entry if control is not jumping to a
            // location outside the try/catch block.
            finallyEntry = null;
            var record = finallyEntry ? finallyEntry.completion : {};
            record.type = type;
            record.arg = arg;
            if (finallyEntry) {
                this.method = "next";
                this.next = finallyEntry.finallyLoc;
                return ContinueSentinel;
            }
            return this.complete(record);
        },
        complete: function(record, afterLoc) {
            if (record.type === "throw") throw record.arg;
            if (record.type === "break" || record.type === "continue") this.next = record.arg;
            else if (record.type === "return") {
                this.rval = this.arg = record.arg;
                this.method = "return";
                this.next = "end";
            } else if (record.type === "normal" && afterLoc) this.next = afterLoc;
            return ContinueSentinel;
        },
        finish: function(finallyLoc) {
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                if (entry.finallyLoc === finallyLoc) {
                    this.complete(entry.completion, entry.afterLoc);
                    resetTryEntry(entry);
                    return ContinueSentinel;
                }
            }
        },
        "catch": function(tryLoc) {
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                if (entry.tryLoc === tryLoc) {
                    var record = entry.completion;
                    if (record.type === "throw") {
                        var thrown = record.arg;
                        resetTryEntry(entry);
                    }
                    return thrown;
                }
            }
            // The context.catch method must only be called with a location
            // argument that corresponds to a known catch block.
            throw new Error("illegal catch attempt");
        },
        delegateYield: function(iterable, resultName, nextLoc) {
            this.delegate = {
                iterator: values(iterable),
                resultName: resultName,
                nextLoc: nextLoc
            };
            if (this.method === "next") // Deliberately forget the last sent value so that we don't
            // accidentally pass it on to the delegate.
            this.arg = undefined;
            return ContinueSentinel;
        }
    };
    // Regardless of whether this script is executing as a CommonJS module
    // or not, return the runtime object so that we can declare the variable
    // regeneratorRuntime in the outer scope, which allows this module to be
    // injected easily by `bin/regenerator --include-runtime script.js`.
    return exports;
}(module.exports);
try {
    regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
    // This module should not be running in strict mode, so the above
    // assignment should always work unless something is misconfigured. Just
    // in case runtime.js accidentally runs in strict mode, in modern engines
    // we can explicitly access globalThis. In older engines we can escape
    // strict mode using a global Function call. This could conceivably fail
    // if a Content Security Policy forbids using Function, but in that case
    // the proper solution is to fix the accidental strict mode problem. If
    // you've misconfigured your bundler to force strict mode and applied a
    // CSP to forbid Function, and you're not willing to fix either of those
    // problems, please detail your unique predicament in a GitHub issue.
    if (typeof globalThis === "object") globalThis.regeneratorRuntime = runtime;
    else Function("r", "regeneratorRuntime = r")(runtime);
}

},{}]},["aleya","a2PJv"], "a2PJv", "parcelRequireff24")

//# sourceMappingURL=index.561fface.js.map
