(()=>{var e={426:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var r=n(81),o=n.n(r),i=n(645),a=n.n(i)()(o());a.push([e.id,".battleship {\n    height: 100%;\n    width: 100%;\n}\n\n.header, .footer {\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n.header {\n    height: 20vh;\n}\n\n.gameboardsContainer {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-evenly;\n    align-items: center;\n    height: 70vh;\n}\n.userBoard, .aiBoard {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n.userBoardMenu {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    width: 100%;\n    justify-content: space-between;\n}\n.userBoard {\n    z-index: 2;\n}\n\n.shipsContainer {\n    display: none;\n    z-index: 1;\n}\n.offsetDiv, .content {\n    width: 35rem;\n}\n.content {\n    background-color: #eeeeee;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n.vessel {\n    display: flex;\n    justify-content: center;\n    margin: 20px;\n    width: min-content;\n}\n.vessel:hover {\n    cursor: pointer;\n    background-color: lightgray;\n}\n.shipsContainer.Active {\n    position: absolute;\n    display: flex;\n    justify-content: space-evenly;\n    width: 100%;\n    height: 35rem;\n}\n.confirm #confirmPlacement {\n    display: none;\n    padding: 1rem;\n    font-size: large;\n}\n.confirm #confirmPlacement:hover {\n    cursor: pointer;\n}\n\n\n.gameBoard {\n    display: flex;\n}\n.gameBoardBox, .vesselBox {\n    border: 1px solid black;\n    height: 3rem;\n    width: 3rem;\n}\n\n.footer {\n    height: 10vh;\n}",""]);const s=a},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);r&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},81:e=>{"use strict";e.exports=function(e){return e[1]}},379:e=>{"use strict";var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var i={},a=[],s=0;s<e.length;s++){var c=e[s],d=r.base?c[0]+r.base:c[0],l=i[d]||0,u="".concat(d," ").concat(l);i[d]=l+1;var h=n(u),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==h)t[h].references++,t[h].updater(m);else{var p=o(m,r);r.byIndex=s,t.splice(s,0,{identifier:u,updater:p,references:1})}a.push(u)}return a}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var s=n(i[a]);t[s].references--}for(var c=r(e,o),d=0;d<i.length;d++){var l=n(i[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}i=c}}},569:e=>{"use strict";var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{"use strict";e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{"use strict";e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},498:e=>{e.exports=function(e){return{player:e,ships:[],misses:[],placeShip(e,[t,n]){return e.startCoord=[t,n],"horizontal"===e.direction?e.endCoord=[t+(e.length-1),n]:e.endCoord=[t,n-(e.length-1)],this.ships.push(e),e.endCoord},receiveAttack([e,t]){let n=!1;for(let r=0;r<this.ships.length;r++)"horizontal"===this.ships[r].direction&&t===this.ships[r].startCoord[1]&&e>=this.ships[r].startCoord[0]&&e<=this.ships[r].endCoord[0]&&(this.ships[r].hit(),n=!0,this.ships[r].isSunk()),"vertical"===this.ships[r].direction&&e===this.ships[r].startCoord[0]&&t<=this.ships[r].startCoord[1]&&t>=this.ships[r].endCoord[1]&&(this.ships[r].hit(),n=!0,this.ships[r].isSunk());return!1===n&&this.misses.push([e,t]),n},allSunk(){return this.ships.every((e=>!0===e.sunk))}}}},507:(e,t,n)=>{const r=n(498);e.exports=function(e){return{turn:!1,player:e,gameboard:null,enemy:null,attacks:[],createBoard(){return this.gameboard=r(this.player)},createEnemy(e){return this.enemy=e},switchTurn(){return this.turn=!this.turn},attack([e,t]){!0===this.turn&&!1===this.attacks.includes([e,t])&&(this.enemy.gameboard.receiveAttack([e,t]),this.attacks.push([e,t]),this.switchTurn(),this.enemy.switchTurn())}}}},643:e=>{e.exports=function(e){return{length:e,hits:0,sunk:!1,startCoord:null,endCoord:null,direction:"horizontal",rotate(){return"horizontal"===this.direction?this.direction="vertical":this.direction="horizontal"},hit(){return this.hits++},isSunk(){return this.hits===this.length?this.sunk=!0:this.sunk}}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={id:r,exports:{}};return e[r](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{"use strict";var e=n(379),t=n.n(e),r=n(795),o=n.n(r),i=n(569),a=n.n(i),s=n(565),c=n.n(s),d=n(216),l=n.n(d),u=n(589),h=n.n(u),m=n(426),p={};p.styleTagTransform=h(),p.setAttributes=c(),p.insert=a().bind(null,"head"),p.domAPI=o(),p.insertStyleElement=l(),t()(m.Z,p),m.Z&&m.Z.locals&&m.Z.locals;var f=n(643),g=n.n(f),y=n(507),b=n.n(y);function v(e){if("Ships"===e.target.innerHTML)return function(){let e,t;document.querySelector(".shipsContainer").classList.toggle("Active");const n=document.querySelectorAll(".vessel"),r=document.getElementById("usersGameboard").querySelectorAll(".gameBoardBox");return n.forEach((n=>{let o=[];n.addEventListener("dragstart",(e=>{t=e.target.id,r.forEach((e=>{e.addEventListener("dragenter",(e=>{e.preventDefault(),o.push(e.target.id)}))}))})),n.addEventListener("dragend",(()=>{e=o.pop(),function(e,t){let n=[];const r={carrier:5,battleship:4,cruiser:3,submarine:3,destroyer:2}[t],o=e.split(","),i=Number(o[0]),a=Number(o[1]);for(let e=0;e<r;e++){const t=document.getElementById(`${i+e}, ${a}`);if(t.classList.contains("placed"))return;if(null===t)return;n.push(t)}n.forEach((e=>{e.style.backgroundColor="black",e.setAttribute("data-vessel",t),e.classList.toggle("placed")}));const s=document.getElementById(t);s.style.backgroundColor="gray",s.classList.toggle("deployed"),s.draggable=!1,5===document.querySelectorAll(".vessel.deployed").length&&(document.getElementById("confirmPlacement").style.display="flex")}(e,t)}))})),e}();"confirmPlacement"!==e.currentTarget.id||document.querySelector(".shipsContainer").classList.toggle("Active")}function C(e){const t=document.getElementById("aisGameboard").querySelectorAll(".gameBoardBox"),n=e.attacks,r=e.enemy.gameboard.misses,o=[],i=[];n.forEach((e=>o.push(`${e[0]}, ${e[1]}`))),r.forEach((e=>i.push(`${e[0]}, ${e[1]}`))),o.filter((e=>!i.includes(e))).forEach((n=>{1===e.player?t.forEach((e=>{e.id===n&&(e.style.backgroundColor="red")})):2===e.player&&(document.getElementById(n).style.backgroundColor="red")})),i.forEach((n=>{1===e.player?t.forEach((e=>{e.id===n&&(e.style.backgroundColor="gray")})):2===e.player&&(document.getElementById(n).style.backgroundColor="gray")}))}function E(e){const t=e,n=[0,1],r=["horizontal","vertical"][n[Math.floor(Math.random()*n.length)]];let o,i,a,s,c;return"horizontal"===r?("carrier"===e?o=[0,1,2,3,4]:"battleship"===e?o=[0,1,2,3,4,5]:"cruiser"===e||"submarine"===e?o=[0,1,2,3,4,5,6]:"destroyer"===e&&(o=[0,1,2,3,4,5,6,7]),i=[0,1,2,3,4,5,6,7,8,9],a=o[Math.floor(Math.random()*o.length)],s=i[Math.floor(Math.random()*i.length)],c=[a,s],{randomCoordinate:c,direction:r,name:t}):("carrier"===e?i=[9,8,7,6,5]:"battleship"===e?i=[9,8,7,6,5,4]:"cruiser"===e||"submarine"===e?i=[9,8,7,6,5,4,3]:"destroyer"===e&&(i=[9,8,7,6,5,4,3,2]),o=[0,1,2,3,4,5,6,7,8,9],a=o[Math.floor(Math.random()*o.length)],s=i[Math.floor(Math.random()*i.length)],c=[a,s],{randomCoordinate:c,direction:r,name:t})}function x(e){let t=[];const n={carrier:5,battleship:4,cruiser:3,submarine:3,destroyer:2},r=E("carrier"),o=E("battleship"),i=E("cruiser"),a=E("submarine"),s=E("destroyer");if([r,o,i,a,s].forEach((e=>{for(let r=0;r<n[e.name];r++){let n;"horizontal"===e.direction?n=`${e.randomCoordinate[0]+r}, ${e.randomCoordinate[1]}`:"vertical"===e.direction&&(n=`${e.randomCoordinate[0]}, ${e.randomCoordinate[1]-r}`),t.push(n)}for(let e=0;e<t.length;e++)document.getElementById("aisGameboard").querySelectorAll(".gameBoardBox").forEach((n=>{n.id===t[e]&&(n.style.backgroundColor="blue")}))})),t.length!==new Set(t).size)return document.getElementById("aisGameboard").querySelectorAll(".gameBoardBox").forEach((e=>e.style.backgroundColor="white")),x(e);const c=g()(5);c.direction=r.direction,e.gameboard.placeShip(c,r.randomCoordinate);const d=g()(4);d.direction=o.direction,e.gameboard.placeShip(d,o.randomCoordinate);const l=g()(3);l.direction=i.direction,e.gameboard.placeShip(l,i.randomCoordinate);const u=g()(3);u.direction=a.direction,e.gameboard.placeShip(u,a.randomCoordinate);const h=g()(2);h.direction=s.direction,e.gameboard.placeShip(h,s.randomCoordinate)}function S(e,t){if(e.gameboard.allSunk()||e.enemy.gameboard.allSunk())return"Game Over";!function(e,t){if(!0===e.turn){const n=t.target.id.split(","),r=Number(n[0]),o=Number(n[1]);e.attack([r,o]),C(e),S(e,t)}}(e,t),function(e){const t=e.enemy;if(!0===t.turn){const e=document.getElementById("usersGameboard").querySelectorAll(".gameBoardBox"),n=e[Math.floor(Math.random()*e.length)].id.split(","),r=Number(n[0]),o=Number(n[1]);t.attack([r,o]),C(t)}}(e)}!function(){document.getElementById("shipsBtn").addEventListener("click",(e=>v(e))),document.querySelectorAll(".gameBoard").forEach((e=>{for(let t=0;t<10;t++){const n=document.createElement("div");e.appendChild(n);for(let e=9;e>=0;e--){const r=document.createElement("div");r.classList="gameBoardBox",r.setAttribute("id",`${t}, ${e}`),n.id.concat(`, ${e}`),n.appendChild(r)}}}));const e=b()(1);e.createBoard(),e.switchTurn();const t=b()(2);t.createBoard(),e.createEnemy(t),t.createEnemy(e),document.getElementById("confirmPlacement").addEventListener("click",(t=>{v(t),function(e){const t=document.getElementById("shipsBtn");t.setAttribute("disabled",!0),t.style.display="none";const n=document.querySelector('[data-vessel = "carrier"]'),r=document.querySelector('[data-vessel = "battleship"]'),o=document.querySelector('[data-vessel = "cruiser"]'),i=document.querySelector('[data-vessel = "submarine"]'),a=document.querySelector('[data-vessel = "destroyer"]'),s=n.id.split(","),c=[Number(s[0]),Number(s[1])],d=r.id.split(","),l=[Number(d[0]),Number(d[1])],u=o.id.split(","),h=[Number(u[0]),Number(u[1])],m=i.id.split(","),p=[Number(m[0]),Number(m[1])],f=a.id.split(","),y=[Number(f[0]),Number(f[1])],b=g()(5);e.gameboard.placeShip(b,c);const v=g()(4);e.gameboard.placeShip(v,l);const C=g()(3);e.gameboard.placeShip(C,h);const E=g()(3);e.gameboard.placeShip(E,p);const x=g()(2);e.gameboard.placeShip(x,y)}(e)})),x(t),document.getElementById("aisGameboard").addEventListener("click",(t=>{v(t),S(e,t)}))}()})()})();