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
})({"iT9NB":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "9fb4b59fea78cf76";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {};
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
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
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
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
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
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
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
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

},{}],"6NEfT":[function(require,module,exports) {
var _bootstrapCss = require("bootstrap/dist/css/bootstrap.css");
var _itSpaScss = require("./sass/it-spa.scss");
var _home = require("./views/Home");
var _roomsList = require("./views/RoomsList");
var _nav = require("./navigation/Nav");
const main = document.querySelector('main');
main.before(_nav.Nav());
main.append(_home.Home());
document.body.addEventListener('navigate', (event)=>{
    const { detail: Component  } = event;
    main.innerHTML = '';
    main.append(Component());
});

},{"bootstrap/dist/css/bootstrap.css":"jJvnD","./views/Home":"ehLdr","./views/RoomsList":"57BoQ","./navigation/Nav":"cvLHC","./sass/it-spa.scss":"ax6lx"}],"jJvnD":[function() {},{}],"ehLdr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Home", ()=>Home
);
var _slider = require("./Slider");
var _sliderDefault = parcelHelpers.interopDefault(_slider);
function Home() {
    const section = document.createElement('section');
    const img = document.createElement('img');
    img.style.width = '100vw';
    section.innerHTML = `
        <h1 class="name">CYBER SPA</h1>
    `;
    section.append(img);
    section.innerHTML += _sliderDefault.default();
    return section;
}
exports.default = Home;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./Slider":"kYWLE"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
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

},{}],"kYWLE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const images = [];
images[0] = require("../assets/spa.jpg");
images[1] = require("../assets/spa2.jpg");
images[2] = require("../assets/spa3.jpg");
images[3] = require("../assets/spa4.jpg");
function slide() {
    const img = document.getElementById("sliderImg");
    if (img) {
        let x = images.indexOf(img.getAttribute("src"));
        if (x == images.length - 1) x = 0;
        else x = x + 1;
        img.src = images[x];
    }
}
function Slider() {
    const div = `
        <div class="slider">
            <div id="silder-container">
                <img id="sliderImg" class="slide" src="src/assets/spa.jpg" />
            </div>
        </div>
    `;
    setInterval(slide, 3000);
    return div;
}
exports.default = Slider;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../assets/spa.jpg":"3ouog","../assets/spa2.jpg":"9SqKt","../assets/spa3.jpg":"233iQ","../assets/spa4.jpg":"e9NSC"}],"3ouog":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('dI6RG') + "spa.5cfa0e5e.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ('' + err.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return '/';
}
function getBaseURL(url) {
    return ('' + url).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/, '$1') + '/';
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ('' + url).match(/(https?|file|ftp):\/\/[^/]+/);
    if (!matches) throw new Error('Origin not found');
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"9SqKt":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('dI6RG') + "spa2.c3437251.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"233iQ":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('dI6RG') + "spa3.acf6f4fb.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"e9NSC":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('dI6RG') + "spa4.b1f24a38.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"57BoQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "RoomsList", ()=>RoomsList
);
var _roomsListItem = require("./RoomsListItem");
function RoomsList() {
    const section = document.createElement('section');
    section.innerHTML = `
        <h2>Lista Pokoi</h2>
        <header>Loading...</header>
    `;
    fetch('http://localhost:3000/rooms').then((response)=>response.json()
    ).then((rooms)=>{
        const ul = document.createElement('ul');
        const lis = rooms.map((room)=>_roomsListItem.RoomsListItem(room)
        );
        ul.append(...lis);
        section.querySelector('header').remove();
        section.append(ul);
    });
    return section;
}

},{"./RoomsListItem":"60CGB","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"60CGB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "RoomsListItem", ()=>RoomsListItem
);
var _button = require("../common/Button");
var _roomDetails = require("./RoomDetails");
var _addToCartButton = require("../common/AddToCartButton");
function RoomsListItem(room) {
    const li = document.createElement('li');
    li.style.margin = '2em 1em';
    li.style.backgroundColor = 'rgba(200, 200, 200, 0.193)';
    li.style.padding = '2em 1em';
    li.style.listStyleType = 'none';
    li.innerHTML = `
            <h4>${room.name}</h4>
            <p>
                <strong>${room.price.toFixed(2)} PLN</strong>
            </p>
        `;
    li.append(_button.Button({
        text: 'Więcej',
        classes: 'btn btn-light',
        onClick: ()=>{
            const customEvent = new CustomEvent('navigate', {
                detail: ()=>_roomDetails.RoomDetails(room.id)
            });
            document.body.dispatchEvent(customEvent);
        }
    }));
    li.append(_addToCartButton.AddToCartButton(room));
    return li;
}

},{"../common/Button":"eXHsu","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./RoomDetails":"5WtVA","../common/AddToCartButton":"aOxDA"}],"eXHsu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Button", ()=>Button
);
function Button(options) {
    const { text ='' , classes ='' , onClick =()=>{}  } = options;
    const button = document.createElement('button');
    button.setAttribute('type', 'button');
    button.innerText = text;
    button.className = classes;
    button.addEventListener('click', onClick);
    return button;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5WtVA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "RoomDetails", ()=>RoomDetails
);
var _button = require("../common/Button");
var _roomsList = require("./RoomsList");
const backButton = _button.Button({
    text: 'Cofnij',
    classes: 'btn',
    onClick: ()=>{
        const customEvent = new CustomEvent('navigate', {
            detail: _roomsList.RoomsList
        });
        document.body.dispatchEvent(customEvent);
    }
});
function RoomDetails(id) {
    const section = document.createElement('section');
    section.innerHTML = `
            <header>Loading...</header>
        `;
    fetch(`http://localhost:3000/rooms/${id}`).then((response)=>response.json()
    ).then((room)=>{
        section.querySelector('header').remove();
        const article = document.createElement('article');
        article.innerHTML = `
                <h3 class="room_header">${room.name}</h3>
                <hr>
                <p class="room_description">${room.description}</p>
                <hr>
                <p class="room_price">
                    <strong>${room.price.toFixed(2)} PLN</strong>
                </p>
            `;
        section.append(article, backButton);
        section.append(img);
    });
    return section;
}

},{"../common/Button":"eXHsu","./RoomsList":"57BoQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aOxDA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AddToCartButton", ()=>AddToCartButton
);
var _button = require("./Button");
var _cartManager = require("../cart/cart-manager");
function AddToCartButton(item) {
    return _button.Button({
        text: 'Dodaj do koszyka',
        classes: 'btn btn-light',
        onClick: ()=>{
            _cartManager.cartManager.addItem(item);
        }
    });
}

},{"./Button":"eXHsu","../cart/cart-manager":"iWcCY","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iWcCY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "cartManager", ()=>cartManager
);
const key = 'it-spa-cart';
const cartManager = {
    addItem (item) {
        const cart = localStorage.getItem(key);
        if (cart === null) {
            const serializedContent = JSON.stringify([
                item
            ]);
            localStorage.setItem(key, serializedContent);
        } else {
            const parsedContent = JSON.parse(cart);
            parsedContent.push(item);
            const serializedContent = JSON.stringify(parsedContent);
            localStorage.setItem(key, serializedContent);
        }
    },
    removeItem (item) {
        const cart = localStorage.getItem(key);
        if (cart !== null) {
            const parsedContent = JSON.parse(cart);
            const filteredContent = parsedContent.filter((cartItem)=>cartItem.name !== item.name
            );
            const serializedContent = JSON.stringify(filteredContent);
            localStorage.setItem(key, serializedContent);
        }
    },
    getAllItems () {
        const cart = localStorage.getItem(key);
        if (cart === null) return [];
        else return JSON.parse(cart);
    },
    getTotal () {
        const cart = localStorage.getItem(key);
        if (cart === null) return 0;
        else {
            const parsedContent = JSON.parse(cart);
            return parsedContent.map((item)=>item.price
            ).reduce((a, b)=>a + b
            , 0);
        }
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cvLHC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Nav", ()=>Nav
);
var _home = require("../views/Home");
var _roomsList = require("../views/RoomsList");
var _button = require("../common/Button");
var _treatmentsList = require("../views/TreatmentsList");
var _cart = require("../views/Cart");
var _contact = require("../views/Contact");
const navItems = [
    {
        name: 'Strona główna',
        component: _home.Home
    },
    {
        name: 'Pokoje',
        component: _roomsList.RoomsList
    },
    {
        name: 'Zabiegi',
        component: _treatmentsList.TreatmentsList
    },
    {
        name: 'Kontakt',
        component: _contact.Contact
    },
    {
        name: '🛒',
        component: _cart.Cart
    }, 
];
function Nav() {
    const nav = document.createElement('nav');
    const navButtons = navItems.map((item)=>{
        return _button.Button({
            text: item.name,
            classes: 'btn',
            onClick: (event)=>{
                const siblings = event.target.parentElement.children;
                Array.from(siblings).forEach((element)=>{
                    element.classList.remove('btn-active');
                });
                event.target.classList.add('btn-active');
                const customEvent = new CustomEvent('navigate', {
                    detail: item.component
                });
                document.body.dispatchEvent(customEvent);
            }
        });
    });
    navButtons[0].classList.add('btn-active');
    nav.append(...navButtons);
    return nav;
}

},{"../views/Home":"ehLdr","../views/RoomsList":"57BoQ","../common/Button":"eXHsu","../views/TreatmentsList":"6TWtU","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../views/Cart":"6Qsfx","../views/Contact":"jt1jl"}],"6TWtU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "TreatmentsList", ()=>TreatmentsList
);
var _treatmentsListItem = require("./TreatmentsListItem");
function TreatmentsList() {
    const section = document.createElement('section');
    section.innerHTML = `
        <h2>Zabiegi</h2>
        <header>Loading...</header>
    `;
    fetch('http://localhost:3000/treatments').then((response)=>response.json()
    ).then((treatments)=>{
        const articles = treatments.map((treatment)=>_treatmentsListItem.TreatmentsListItem(treatment)
        );
        section.querySelector('header').remove();
        section.append(...articles);
    });
    return section;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./TreatmentsListItem":"e7gRN"}],"e7gRN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "TreatmentsListItem", ()=>TreatmentsListItem
);
var _addToCartButton = require("../common/AddToCartButton");
function TreatmentsListItem(treatment) {
    const article = document.createElement('article');
    article.style.margin = '2em 1em';
    article.style.backgroundColor = 'rgba(200, 200, 200, 0.193)';
    article.style.padding = '2em 1em';
    article.innerHTML = `
        <h4>${treatment.name}</h4>
        <p>${treatment.time} minutes</p>
        <p>
            <strong>${treatment.price.toFixed(2)} PLN</strong>
        </p>
    `;
    article.append(_addToCartButton.AddToCartButton(treatment));
    return article;
}

},{"../common/AddToCartButton":"aOxDA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6Qsfx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Cart", ()=>Cart
);
var _cartManager = require("../cart/cart-manager");
var _removeFromCartButton = require("../common/RemoveFromCartButton");
function Cart() {
    const section = document.createElement('section');
    section.innerHTML = `
        <h2>Zamówienie</h2>
        <p>Oto zawartość Twojego zamówienia.</p>
    `;
    const table = document.createElement('table');
    table.classList.add('table');
    const tableHead = document.createElement('tr');
    tableHead.innerHTML = `
        <th>Zamówienie</th>
        <th>Cena</th>
        <th></th>
    `;
    const tableRows = _cartManager.cartManager.getAllItems().map((item)=>{
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${item.name}</td>
            <td>${item.price.toFixed(2)} zł</td>
            <td></td>
        `;
        tr.lastElementChild.append(_removeFromCartButton.RemoveFromCartButton(item));
        return tr;
    });
    const tableFooter = document.createElement('tr');
    tableFooter.innerHTML = `
        <td></td>
        <td>
            <strong>${_cartManager.cartManager.getTotal().toFixed(2)} zł</strong>
        </td>
        <td></td>
    `;
    table.append(tableHead, ...tableRows, tableFooter);
    section.append(table);
    return section;
}

},{"../cart/cart-manager":"iWcCY","../common/RemoveFromCartButton":"krLMc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"krLMc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "RemoveFromCartButton", ()=>RemoveFromCartButton
);
var _button = require("./Button");
var _cartManager = require("../cart/cart-manager");
var _cart = require("../views/Cart");
function RemoveFromCartButton(item) {
    return _button.Button({
        text: '🗑️',
        classes: 'btn',
        onClick: ()=>{
            _cartManager.cartManager.removeItem(item);
            const customEvent = new CustomEvent('navigate', {
                detail: _cart.Cart
            });
            document.body.dispatchEvent(customEvent);
        }
    });
}

},{"./Button":"eXHsu","../cart/cart-manager":"iWcCY","../views/Cart":"6Qsfx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jt1jl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Contact", ()=>Contact
);
function Contact() {
    const section = document.createElement('section');
    section.innerHTML = `
        <div class="container">
            <h1 class="contact_us-h1">Kontakt</h1>
            <div class="contact_box">
                <div class="contact_left">
                  
                    <form>
                        <div class="input-row">
                            <div class="input_group">
                                <label>Imię</label>
                                <input class="input_contact" type="text">
                            </div>
                            <div class="input-group">
                                <label>Nazwisko</label>
                                <input class="input_contact" type="text">
                            </div>
                        </div>
                        <div class="input_row">
                            <div class="input_group">
                                <label>Telefon:</label>
                                <input class="input_contact" type="text">
                            </div>
                            <div class="input_group">
                                <label>Email:</label>
                                <input class="input_contact" type="text">
                            </div>                     
                        </div>
                        <label>Message</label>
                        <textarea rows="5"></textarea>
                        <button class="btn btn-light btn-sm btn-lg btn-radius" type="submit">Wyślij</button>
                    </form>
                </div>
                <div class="contact_right">
                    <h3>Dane firmy</h3>
                    <table>
                        <tr>
                           <td>Nazwa</td>
                           <td>IT SPA</td>
                      </tr>
                       <tr>
                           <td>Email</td>
                           <td>cyberspa@cyberspa.com</td>
                      </tr>
                       <tr>
                           <td>Telefon:</td>
                           <td>+48 123 456 778</td>
                      </tr>
                       <tr>
                           <td>Adres:</td>
                           <td>ul. Wrocławska 8 <br>
                           70-777 Poznań</td>
                     </tr>
                    </table>
                 </div>
            </div>
        </div>    
        `;
    return section;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ax6lx":[function() {},{}]},["iT9NB","6NEfT"], "6NEfT", "parcelRequire39e8")

//# sourceMappingURL=index.ea78cf76.js.map
