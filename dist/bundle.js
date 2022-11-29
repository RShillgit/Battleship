(()=>{var e={426:(e,t,n)=>{"use strict";n.d(t,{Z:()=>y});var r=n(81),o=n.n(r),a=n(645),i=n.n(a),s=n(667),c=n.n(s),l=new URL(n(458),n.b),d=new URL(n(117),n.b),u=new URL(n(551),n.b),h=new URL(n(60),n.b),m=i()(o()),p=c()(l),g=c()(d),f=c()(u),b=c()(h);m.push([e.id,"@font-face {\n    font-family: Alegreya;\n    src: url("+p+");\n}\n@font-face {\n    font-family: Bungee;\n    src: url("+g+");\n}\n\nhtml, button {\n    font-family: Alegreya;\n    font-size: large;\n}\nbutton {\n    background-color: rgba(0, 0, 0, 0.8);\n    border: 2px solid white;\n    color: white;\n}\nbutton:hover {\n    background-color: rgba(0, 0, 0, 0.6);\n    cursor: pointer;\n}\nbutton:active {\n    border: 2px solid black;\n    color: black;\n}\n\n#shipsBtn, #rotateBtn {\n    border-radius: 0.5rem;\n}\n#clearPlacement, #confirmPlacement {\n    border-radius: 1rem;\n}\n\n.header .title, .winnerScreen p {\n    font-family: Bungee;\n}\n\n.battleship {\n    height: 100%;\n    width: 100%;\n}\n\n.header, .footer {\n    background-color: rgba(0, 0, 0, 0.5);\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n.header {\n    height: 15vh;\n}\n.header .title {\n    font-size: xxx-large;\n}\n\n.gameboardsContainer {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-evenly;\n    align-items: baseline;\n    height: 75vh;\n    background-color: whitesmoke;\n}\n.userBoard, .aiBoard {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n.userBoardMenu {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    width: 100%;\n    justify-content: space-between;\n}\n.userBoard .boardTitle {\n    display: flex;\n    justify-content: center;\n    width: 100%;\n}\n.userBoard {\n    z-index: 2;\n}\n\n.shipsContainer {\n    display: none;\n    z-index: 1;\n}\n.offsetDiv, .content {\n    width: 35rem;\n}\n.content {\n    background-repeat: no-repeat;\n    background-size: cover;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    height: 35rem;\n}\n.content, #usersGameboard, #aisGameboard{\n    background-image: url("+f+");\n    background-size: cover;\n    background-repeat: no-repeat;\n}\n\n.vesselContainer {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    height: 28rem;\n}\n\n.vesselContainer.rotated {\n    display: flex;\n    flex-direction: row;\n}\n\n.vessel, .vessel.rotated {\n    display: flex;\n    justify-content: center;\n    margin: 20px;\n    width: min-content;\n}\n.vessel.vertical {\n    flex-direction: column;\n}\n.vessel.deployed {\n    background-color: rgba(0, 0, 0, 0.8);\n}\n\n.vessel:hover {\n    cursor: pointer;\n    background-color: rgba(0, 0, 0, 0.6);\n}\n.shipsContainer.Active {\n    position: absolute;\n    display: flex;\n    justify-content: space-evenly;\n    width: 100%;\n    height: 75vh;\n    align-items: center;\n}\n\n.confirm-clear {\n    height: 4rem;\n    flex-direction: row;\n    display: flex;\n    align-items: baseline;\n    gap: 1rem;\n}\n.confirm-clear button {\n    display: none;\n    padding: 1rem;\n    font-size: large;\n}\n.confirm-clear button:hover {\n    cursor: pointer;\n}\n\n.gameBoard {\n    display: flex;\n}\n\n.gameBoardBox, .vesselBox {\n    border: 1px solid white;\n    height: 3rem;\n    width: 3rem;\n}\n.gameBoardBox.placed {\n    background-color: rgba(0, 0, 0, 0.8);\n}\n#aisGameboard .gameBoardBox:hover {\n    cursor: pointer;\n    border: 1px solid black;\n    background-color: rgba(0, 0, 0, 0.5);\n}\n#aisGameboard .gameBoardBox:active {\n    background-color: rgba(0, 0, 0, 0.7);\n}\n\n.footer {\n    height: 10vh;\n    transition: all 1s ease-in-out;\n}\n#github {\n    width: 32px;\n    height: 32px;\n    background-image: url("+b+");\n}\n\n#github:hover {\n    animation: rotate 0.4s linear;\n}\n@keyframes rotate{\n    0%{\n        transform: rotate(0deg);\n    }\n    50%{\n        transform: rotate(180deg);\n    }\n    100%{\n        transform: rotate(360deg);\n    }\n}\n\n.winnerScreen {\n    background-color: rgba(0, 0, 0, 0.7);\n    position: absolute;\n    height: 75vh;\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    z-index: 5;\n}\n.winnerScreen p {\n    font-size: xx-large;\n    color: white;\n}\n.winnerScreen button {\n    color: white;\n    background-color: transparent;\n    height: 3rem;\n    width: 8rem;\n    font-size: larger;\n    border-radius: 2rem;\n    border: 3px solid white;\n}\n.winnerScreen button:hover {\n    background-color: rgba(0, 0, 0, 0.8);\n    cursor: pointer;\n}\n.winnerScreen button:active {\n    border: 3px solid black;\n    color: black;\n}",""]);const y=m},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);r&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),t.push(d))}},t}},667:e=>{"use strict";e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{"use strict";e.exports=function(e){return e[1]}},379:e=>{"use strict";var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},i=[],s=0;s<e.length;s++){var c=e[s],l=r.base?c[0]+r.base:c[0],d=a[l]||0,u="".concat(l," ").concat(d);a[l]=d+1;var h=n(u),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==h)t[h].references++,t[h].updater(m);else{var p=o(m,r);r.byIndex=s,t.splice(s,0,{identifier:u,updater:p,references:1})}i.push(u)}return i}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var s=n(a[i]);t[s].references--}for(var c=r(e,o),l=0;l<a.length;l++){var d=n(a[l]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}a=c}}},569:e=>{"use strict";var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{"use strict";e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{"use strict";e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},498:e=>{e.exports=function(e){return{player:e,ships:[],misses:[],placeShip(e,[t,n]){return e.startCoord=[t,n],"horizontal"===e.direction?e.endCoord=[t+(e.length-1),n]:e.endCoord=[t,n-(e.length-1)],this.ships.push(e),e.endCoord},receiveAttack([e,t]){let n=!1;for(let r=0;r<this.ships.length;r++)"horizontal"===this.ships[r].direction&&t===this.ships[r].startCoord[1]&&e>=this.ships[r].startCoord[0]&&e<=this.ships[r].endCoord[0]&&(this.ships[r].hit(),n=!0,this.ships[r].isSunk()),"vertical"===this.ships[r].direction&&e===this.ships[r].startCoord[0]&&t<=this.ships[r].startCoord[1]&&t>=this.ships[r].endCoord[1]&&(this.ships[r].hit(),n=!0,this.ships[r].isSunk());return!1===n&&this.misses.push([e,t]),n},allSunk(){return this.ships.every((e=>!0===e.sunk))}}}},507:(e,t,n)=>{const r=n(498);e.exports=function(e){return{turn:!1,player:e,gameboard:null,enemy:null,attacks:[],winner:null,createBoard(){return this.gameboard=r(this.player)},createEnemy(e){return this.enemy=e},switchTurn(){return this.turn=!this.turn},attack([e,t]){!0===this.turn&&!1===this.attacks.includes([e,t])&&(this.enemy.gameboard.receiveAttack([e,t]),this.attacks.push([e,t]),this.switchTurn(),this.enemy.switchTurn())}}}},643:e=>{e.exports=function(e){return{length:e,hits:0,sunk:!1,startCoord:null,endCoord:null,direction:"horizontal",rotate(){return"horizontal"===this.direction?this.direction="vertical":this.direction="horizontal"},hit(){return this.hits++},isSunk(){return this.hits===this.length?this.sunk=!0:this.sunk}}}},458:(e,t,n)=>{"use strict";e.exports=n.p+"d215c944a70a1f2ba744.ttf"},117:(e,t,n)=>{"use strict";e.exports=n.p+"3d95fa68283102c29cd9.ttf"},60:(e,t,n)=>{"use strict";e.exports=n.p+"0035c307a36c17babb8d.png"},551:(e,t,n)=>{"use strict";e.exports=n.p+"04c3feedd6318f942012.jpg"}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,n.nc=void 0,(()=>{"use strict";var e=n(379),t=n.n(e),r=n(795),o=n.n(r),a=n(569),i=n.n(a),s=n(565),c=n.n(s),l=n(216),d=n.n(l),u=n(589),h=n.n(u),m=n(426),p={};p.styleTagTransform=h(),p.setAttributes=c(),p.insert=i().bind(null,"head"),p.domAPI=o(),p.insertStyleElement=d(),t()(m.Z,p),m.Z&&m.Z.locals&&m.Z.locals;var g=n(643),f=n.n(g),b=n(507),y=n.n(b);function v(e){return"Ships"===e.target.innerHTML||"rotateBtn"===e.target.id?function(e){const t=document.querySelector(".shipsContainer");"rotateBtn"===e.target.id&&(document.querySelector(".vesselContainer").classList.toggle("rotated"),document.querySelectorAll(".vessel").forEach((e=>e.classList.toggle("vertical"))),t.classList.toggle("Active"));let n,r;t.classList.toggle("Active");const o=document.querySelectorAll(".vessel"),a=document.getElementById("usersGameboard").querySelectorAll(".gameBoardBox");return o.forEach((e=>{let t=[];e.addEventListener("dragstart",(e=>{r=e.target.id,a.forEach((e=>{e.addEventListener("dragenter",(e=>{e.preventDefault(),t.push(e.target.id)}))}))})),e.addEventListener("dragend",(()=>{n=t.pop(),function(e,t){const n=document.getElementById(t);let r=[];const o={carrier:5,battleship:4,cruiser:3,submarine:3,destroyer:2}[t],a=e.split(","),i=Number(a[0]),s=Number(a[1]);for(let e=0;e<o;e++){let t;if(n.classList.value.includes("vertical")&&(t=document.getElementById(`${i}, ${s-e}`)),n.classList.value.includes("vertical")||(t=document.getElementById(`${i+e}, ${s}`)),t.classList.contains("placed"))return;if(null===t)return;r.push(t)}r.forEach((e=>{e.setAttribute("data-vessel",t),e.classList.toggle("placed"),n.classList.value.includes("vertical")?e.classList.toggle("vertical"):e.classList.toggle("horizontal")}));const c=document.getElementById(t);c.classList.toggle("deployed"),c.draggable=!1,5===document.querySelectorAll(".vessel.deployed").length&&(document.getElementById("confirmPlacement").style.display="flex",document.getElementById("clearPlacement").style.display="flex")}(n,r)}))})),n}(e):"clearPlacement"===e.currentTarget.id?(document.querySelectorAll("[data-vessel]").forEach((e=>e.removeAttribute("data-vessel"))),document.querySelectorAll(".gameBoardBox.placed").forEach((e=>{e.classList="gameBoardBox"})),document.querySelectorAll(".vessel.deployed").forEach((e=>{e.classList.toggle("deployed")})),void document.querySelectorAll(".vessel").forEach((e=>e.draggable=!0))):void("confirmPlacement"!==e.currentTarget.id||document.querySelector(".shipsContainer").classList.toggle("Active"))}function x(e){const t=document.getElementById("aisGameboard").querySelectorAll(".gameBoardBox"),n=e.attacks,r=e.enemy.gameboard.misses,o=[],a=[];n.forEach((e=>o.push(`${e[0]}, ${e[1]}`))),r.forEach((e=>a.push(`${e[0]}, ${e[1]}`))),o.filter((e=>!a.includes(e))).forEach((n=>{1===e.player?t.forEach((e=>{e.id===n&&(e.style.backgroundColor="rgba(255, 0, 0, 0.5)")})):2===e.player&&(document.getElementById(n).style.backgroundColor="rgba(255, 0, 0, 0.5)")})),a.forEach((n=>{1===e.player?t.forEach((e=>{e.id===n&&(e.style.backgroundColor="rgba(220, 220, 220, 0.5)")})):2===e.player&&(document.getElementById(n).style.backgroundColor="rgba(220, 220, 220, 0.5)")}))}function E(e){const t=document.querySelector(".gameboardsContainer"),n=document.createElement("div");n.classList="winnerScreen";const r=document.createElement("p");r.innerHTML=1===e?"You Won!":"You Lost!";const o=document.createElement("button");o.setAttribute("id","playAgain"),o.innerHTML="Play Again",n.appendChild(r),n.appendChild(o),t.appendChild(n)}function B(e){const t=e,n=[0,1],r=["horizontal","vertical"][n[Math.floor(Math.random()*n.length)]];let o,a,i,s,c;return"horizontal"===r?("carrier"===e?o=[0,1,2,3,4]:"battleship"===e?o=[0,1,2,3,4,5]:"cruiser"===e||"submarine"===e?o=[0,1,2,3,4,5,6]:"destroyer"===e&&(o=[0,1,2,3,4,5,6,7]),a=[0,1,2,3,4,5,6,7,8,9],i=o[Math.floor(Math.random()*o.length)],s=a[Math.floor(Math.random()*a.length)],c=[i,s],{randomCoordinate:c,direction:r,name:t}):("carrier"===e?a=[9,8,7,6,5]:"battleship"===e?a=[9,8,7,6,5,4]:"cruiser"===e||"submarine"===e?a=[9,8,7,6,5,4,3]:"destroyer"===e&&(a=[9,8,7,6,5,4,3,2]),o=[0,1,2,3,4,5,6,7,8,9],i=o[Math.floor(Math.random()*o.length)],s=a[Math.floor(Math.random()*a.length)],c=[i,s],{randomCoordinate:c,direction:r,name:t})}function k(e){let t=[];const n={carrier:5,battleship:4,cruiser:3,submarine:3,destroyer:2},r=B("carrier"),o=B("battleship"),a=B("cruiser"),i=B("submarine"),s=B("destroyer");if([r,o,a,i,s].forEach((e=>{for(let r=0;r<n[e.name];r++){let n;"horizontal"===e.direction?n=`${e.randomCoordinate[0]+r}, ${e.randomCoordinate[1]}`:"vertical"===e.direction&&(n=`${e.randomCoordinate[0]}, ${e.randomCoordinate[1]-r}`),t.push(n)}})),t.length!==new Set(t).size)return document.getElementById("aisGameboard").querySelectorAll(".gameBoardBox").forEach((e=>e.style.backgroundColor="white")),k(e);const c=f()(5);c.direction=r.direction,e.gameboard.placeShip(c,r.randomCoordinate);const l=f()(4);l.direction=o.direction,e.gameboard.placeShip(l,o.randomCoordinate);const d=f()(3);d.direction=a.direction,e.gameboard.placeShip(d,a.randomCoordinate);const u=f()(3);u.direction=i.direction,e.gameboard.placeShip(u,i.randomCoordinate);const h=f()(2);h.direction=s.direction,e.gameboard.placeShip(h,s.randomCoordinate)}function w(e,t){return 5===e.gameboard.ships.length&&e.gameboard.allSunk()?(E(2),S()):5===e.enemy.gameboard.ships.length&&e.enemy.gameboard.allSunk()?(E(1),S()):void(!0===e.turn?function(e,t){let n=[];if(e.attacks.forEach((e=>n.push(`${e[0]}, ${e[1]}`))),n.includes(t.target.id))return;const r=t.target.id.split(","),o=Number(r[0]),a=Number(r[1]);e.attack([o,a]),x(e),w(e,t)}(e,t):!1===e.turn&&function(e){const t=e.enemy,n=t.attacks,r=e.gameboard.misses,o=[],a=[];n.forEach((e=>o.push(`${e[0]}, ${e[1]}`))),r.forEach((e=>a.push(`${e[0]}, ${e[1]}`))),o.filter((e=>!a.includes(e)));let i,s=[];t.attacks.forEach((e=>s.push(`${e[0]}, ${e[1]}`)));const c=document.getElementById("usersGameboard").querySelectorAll(".gameBoardBox");for(i=c[Math.floor(Math.random()*c.length)];s.includes(i.id);)i=c[Math.floor(Math.random()*c.length)];const l=i.id.split(","),d=Number(l[0]),u=Number(l[1]);t.attack([d,u]),x(t)}(e))}function S(){document.getElementById("playAgain").addEventListener("click",(()=>{window.location.reload()}))}!function(){document.getElementById("shipsBtn").addEventListener("click",(e=>v(e))),document.getElementById("rotateBtn").addEventListener("click",(e=>{v(e)})),document.querySelectorAll(".gameBoard").forEach((e=>{for(let t=0;t<10;t++){const n=document.createElement("div");e.appendChild(n);for(let e=9;e>=0;e--){const r=document.createElement("div");r.classList="gameBoardBox",r.setAttribute("id",`${t}, ${e}`),n.id.concat(`, ${e}`),n.appendChild(r)}}}));const e=y()(1);e.createBoard(),e.switchTurn();const t=y()(2);t.createBoard(),e.createEnemy(t),t.createEnemy(e),document.getElementById("clearPlacement").addEventListener("click",(e=>v(e))),document.getElementById("confirmPlacement").addEventListener("click",(t=>{v(t),function(e){const t=document.getElementById("shipsBtn");t.setAttribute("disabled",!0),t.style.display="none";const n=document.querySelector('[data-vessel = "carrier"]'),r=document.querySelector('[data-vessel = "battleship"]'),o=document.querySelector('[data-vessel = "cruiser"]'),a=document.querySelector('[data-vessel = "submarine"]'),i=document.querySelector('[data-vessel = "destroyer"]'),s=n.id.split(","),c=[Number(s[0]),Number(s[1])],l=r.id.split(","),d=[Number(l[0]),Number(l[1])],u=o.id.split(","),h=[Number(u[0]),Number(u[1])],m=a.id.split(","),p=[Number(m[0]),Number(m[1])],g=i.id.split(","),b=[Number(g[0]),Number(g[1])],y=f()(5),v=f()(4),x=f()(3),E=f()(3),B=f()(2);n.classList.value.includes("vertical")&&y.rotate(),r.classList.value.includes("vertical")&&v.rotate(),o.classList.value.includes("vertical")&&x.rotate(),a.classList.value.includes("vertical")&&E.rotate(),i.classList.value.includes("vertical")&&B.rotate(),e.gameboard.placeShip(y,c),e.gameboard.placeShip(v,d),e.gameboard.placeShip(x,h),e.gameboard.placeShip(E,p),e.gameboard.placeShip(B,b)}(e),document.getElementById("aisGameboard").addEventListener("click",(t=>{v(t),w(e,t)}))})),k(t)}()})()})();