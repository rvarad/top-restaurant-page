(()=>{var e={206:(e,n,t)=>{"use strict";t.d(n,{Z:()=>c});var a=t(81),r=t.n(a),o=t(645),i=t.n(o)()(r());i.push([e.id,"* {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n    font-family: 'Chela One';\n}\n\n.content {\n    height: 100vh;\n    width: 100vw;\n}\n\nheader.header {\n    height: 10%;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-between;\n    background-color: black;\n    color: white;\n}\n\n.header #title {\n    padding: 0% 2%;\n    font-family: 'Chokokutai', cursive;\n    font-size: 2rem;\n    font-weight: bold;\n    text-shadow: 0px 3px 6px red;\n}\n\n.header .options {\n    width: 25%;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-evenly;\n}\n\n.header .options .tab-button {\n    margin: 0px 5px;\n    padding: 10px;\n    font-size: 1.3rem;\n    border: none;\n    background-color: transparent;\n    color: white;\n}\n\n.header .options .tab-button:hover {\n    text-shadow: 0px 2px 4px orange;\n}\n\n.header .options .tab-button.active {\n    text-shadow: 0px 2px 4px orange;\n    border-bottom: 2px solid orange;\n}\n\n.main {\n    height: 83%;\n    background-attachment: fixed;\n    overflow-x: hidden;\n    overflow-y: scroll;\n}\n\n/* HOME TAB */\n\n.main .home {\n    height: 100%;\n}\n\n.main .home .branding {\n    height: 100%;\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    background-color: rgba(0, 0, 0, 0.411);\n}\n\n.main .home .branding .branding-wrapper {\n    width: 45%;\n    text-align: center;\n    background-color: rgba(255, 94, 0, 0.342);\n    box-shadow: 0px 0px 10px 10px rgba(255, 94, 0, 0.342);\n    border-radius: 10px;\n    position: relative;\n    top: 65%;\n}\n\n.main .home #mainTitle {\n    font-family: 'Chokokutai', cursive;\n    font-size: 4.5rem;\n    font-weight: bolder;\n    text-shadow: 0px 5px 10px red;\n}\n\n.main .home #titleSubtext {\n    background-color: rgba(0, 0, 0, 0.411);\n    color: white;\n    border-top: 1px dashed orangered;\n    box-shadow: 0px -5px 10px orangered;\n    font-size: large;\n}\n\n.main .home .story {\n    height: 100%;\n    width: 100%;\n    background-color: black;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.main .home .story-wrapper {\n    padding: 2%;\n    height: 70%;\n    width: 75%;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-evenly;\n    background-color: rgba(255, 252, 252, 0.411);\n    box-shadow: 0px 0px 10px rgba(255, 252, 252, 0.411);\n    color: black;\n}\n\n.main .home .story .story-wrapper img {\n    height: 80%;\n    border-radius: 50%;\n}\n\n.main .home .story-wrapper .text-wrapper {\n    padding: 3%;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    gap: 10%;\n    overflow: scroll;\n}\n\n.main .home .story-wrapper .text-wrapper h2 {\n    font-size: 2.5rem;\n    text-shadow: 0px 0px 2px black;\n}\n\n.main .home .story-wrapper .text-wrapper .story-text {\n    font-size: 1.35rem;\n}\n\n/* MENU TAB */\n\n.main .menu {\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.411);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.main .menu .menu-wrapper {\n    padding: 15px 10px;\n    height: 100%;\n    width: 70%;\n    background-color: rgba(0, 0, 0, 0.411);\n    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.411);\n    overflow: scroll;\n}\n\n.main .menu .menu-wrapper section {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    column-gap: 20px;\n    row-gap: 15px;\n}\n\n.menu-wrapper section#pizza {\n    height: 100%;\n}\n\n.menu-wrapper section#appetizers {\n    margin-top: 30px;\n}\n\n.menu-wrapper section#salads {\n    margin-top: 15px;\n}\n\nsection#pizza h2 {\n    font-size: 3rem;\n}\n\nsection h2 {\n    grid-column: 1 / 3;\n    text-align: center;\n    font-size: 2rem;\n    color: white;\n}\n\n.menu .menu-wrapper .item-card {\n    padding: 5px;\n    height: 130px;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    background-color: rgba(255, 252, 252, 0.411);\n}\n\n.item-card .left {\n    width: 65%;\n}\n\n.item-card .left .item-name {\n    height: 20%;\n    font-size: 1.3rem;\n    text-shadow: 0px 0px 2px orange;\n}\n\n.item-card .left .item-description {\n    height: 60%;\n    font-size: 0.9rem;\n}\n\n.item-card .left .item-cost {\n    font-size: 1rem;\n}\n\n.item-card .item-image {\n    width: 130px;\n}\n\n/* CONTACT TAB */\n\n#content .main .contact {\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.411);\n    display: flex;\n    justify-content: center;\n}\n\n.main .contact .contact-wrapper {\n    padding: 2%;\n    height: 100%;\n    width: 50%;\n    display: flex;\n    flex-direction: column;\n    gap: 2%;\n    color: white;\n    background-color: rgba(0, 0, 0, 0.411);\n    font-size: 2.5rem;\n}\n\n.contact-wrapper #phoneNo::before {\n    content: \"\\00260E\";\n}\n\n.contact-wrapper #locationText::before {\n    content: \"\\01F3E0\";\n}\n\n.contact-wrapper #locationMap {\n    height: 80%;\n}\n\nfooter.footer {\n    height: 7%;\n    background-color: black;\n    color: white;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 1.1rem;\n}\n\n.footer .credits a {\n    color: orangered;\n    font-size: 1.3rem;\n    font-family: 'Montserrat', sans-serif;\n    text-decoration: none;\n}",""]);const c=i},645:e=>{"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",a=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),a&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),a&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,a,r,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(a)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<e.length;d++){var p=[].concat(e[d]);a&&i[p[0]]||(void 0!==o&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=o),t&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=t):p[2]=t),r&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=r):p[4]="".concat(r)),n.push(p))}},n}},81:e=>{"use strict";e.exports=function(e){return e[1]}},979:(e,n,t)=>{e.exports=t.p+"images/Screenshot from 2023-07-19 22-05-41.b387139c4d7eb72c7fd612dca65e6eea.png"},352:(e,n,t)=>{e.exports=t.p+"images/chefs-5437743_1920.2d3f6d4e0f6d32f9c167190ed16fc578.jpg"},176:(e,n,t)=>{e.exports=t.p+"images/pizza-3007395.f5d9ec33fe28026a7bb3cbca632ed6da.jpg"},960:(e,n,t)=>{e.exports=t.p+"images/buffaloChickenP.694aeab119b2df3c89db19e77a8a37b5.jpeg"},184:(e,n,t)=>{e.exports=t.p+"images/caesarSalad.997e98f21ecb84eee70fdfa44a3bc087.jpeg"},620:(e,n,t)=>{e.exports=t.p+"images/chickenTenders.4d67138694c629c03ce7d10d3ea2f5f0.jpeg"},404:(e,n,t)=>{e.exports=t.p+"images/chickenWings.173e7a5a59f79261672cf1c6358ade80.jpeg"},570:(e,n,t)=>{e.exports=t.p+"images/chipotleChickenP.517e8953713f8155a253b21f81c87074.jpeg"},48:(e,n,t)=>{e.exports=t.p+"images/garlicBread.5bba6c85a534e39fe401a114ff8eb5bb.jpeg"},104:(e,n,t)=>{e.exports=t.p+"images/houseSalad.106ffc2edb74bd62a907f0d53ec6a2d3.jpeg"},280:(e,n,t)=>{e.exports=t.p+"images/houseSpecialP.28a7a59e7363c2f0c08687c905c0256e.jpeg"},116:(e,n,t)=>{e.exports=t.p+"images/mozzarellaSticks.f9d17898e72eebb4f120284dee63a24e.jpeg"},364:(e,n,t)=>{e.exports=t.p+"images/nonnaMariaP.dd4bb0dda1b5eb2bb5d60cf76f5da343.jpeg"},590:(e,n,t)=>{e.exports=t.p+"images/pepperoniP.0fb4a78c6084dbddf8a568723c8f90f8.jpeg"},367:(e,n,t)=>{e.exports=t.p+"images/regularCheeseP.e3c8a5e9c586fe71d96290b2e917ac4b.jpeg"},379:e=>{"use strict";var n=[];function t(e){for(var t=-1,a=0;a<n.length;a++)if(n[a].identifier===e){t=a;break}return t}function a(e,a){for(var o={},i=[],c=0;c<e.length;c++){var s=e[c],d=a.base?s[0]+a.base:s[0],p=o[d]||0,l="".concat(d," ").concat(p);o[d]=p+1;var m=t(l),u={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==m)n[m].references++,n[m].updater(u);else{var h=r(u,a);a.byIndex=c,n.splice(c,0,{identifier:l,updater:h,references:1})}i.push(l)}return i}function r(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,r){var o=a(e=e||[],r=r||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var c=t(o[i]);n[c].references--}for(var s=a(e,r),d=0;d<o.length;d++){var p=t(o[d]);0===n[p].references&&(n[p].updater(),n.splice(p,1))}o=s}}},569:e=>{"use strict";var n={};e.exports=function(e,t){var a=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}},216:e=>{"use strict";e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{"use strict";e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{"use strict";e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var a="";t.supports&&(a+="@supports (".concat(t.supports,") {")),t.media&&(a+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(a+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),a+=t.css,r&&(a+="}"),t.media&&(a+="}"),t.supports&&(a+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleTagTransform(a,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{"use strict";e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(a){var r=n[a];if(void 0!==r)return r.exports;var o=n[a]={id:a,exports:{}};return e[a](o,o.exports,t),o.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var a in n)t.o(n,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:n[a]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var a=n.getElementsByTagName("script");if(a.length)for(var r=a.length-1;r>-1&&!e;)e=a[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.nc=void 0,(()=>{"use strict";var e=t(379),n=t.n(e),a=t(795),r=t.n(a),o=t(569),i=t.n(o),c=t(565),s=t.n(c),d=t(216),p=t.n(d),l=t(589),m=t.n(l),u=t(206),h={};h.styleTagTransform=m(),h.setAttributes=s(),h.insert=i().bind(null,"head"),h.domAPI=r(),h.insertStyleElement=p(),n()(u.Z,h),u.Z&&u.Z.locals&&u.Z.locals;var f=t(176),g=t.n(f),b=t(352),x=t.n(b),v=t(367),y=t.n(v),w=t(364),C=t.n(w),z=t(590),E=t.n(z),k=t(570),L=t.n(k),T=t(960),B=t.n(T),j=t(280),S=t.n(j),A=t(48),P=t.n(A),M=t(116),I=t.n(M),$=t(404),N=t.n($),H=t(620),O=t.n(H),Z=t(104),R=t.n(Z),_=t(184),F=t.n(_),U=t(979),D=t.n(U);const W={home:{chefs:x(),bgimg:g()},menu:{pizza:{"regular cheese pizza":y(),"nonna maria pizza":C(),"pepperoni pizza":E(),"chipotle chicken pizza":L(),"buffalo chicken pizza":B(),"house special pizza":S()},appetizers:{"garlic bread":P(),"mozzarella sticks":I(),"chicken wings":N(),"chicken tenders":O()},salads:{"house salad":R(),"caesar salad":F()}},contact:{map:D()}},Y=()=>{const e=document.getElementById("main");return e.innerHTML="",e.appendChild((()=>{const e=document.createElement("div");e.classList.add("home");const n=document.createElement("div");n.classList.add("branding");const t=document.createElement("div");t.classList.add("branding-wrapper");const a=document.createElement("div");a.setAttribute("id","mainTitle"),a.textContent="THE PIZZA BAR";const r=document.createElement("div");r.setAttribute("id","titleSubtext"),r.textContent="The best New York City Pizza, now in your city!",t.appendChild(a),t.appendChild(r),n.appendChild(t);const o=document.createElement("div");o.classList.add("story");const i=document.createElement("div");i.classList.add("story-wrapper");const c=new Image;c.src=W.home.chefs,c.setAttribute("alt","founder");const s=document.createElement("div");s.classList.add("text-wrapper");const d=document.createElement("h2");d.textContent="Our Story";const p=document.createElement("p");return p.classList.add("story-text"),p.textContent="Our pizzeria was established in 2004, serving the people of New York with our best - selling Nona Marie Pie—an old family recipe that has been our customer’s favorite. Today, we are now offering more flavors with only the finest ingredients at an affordable price.",s.appendChild(d),s.appendChild(p),i.appendChild(c),i.appendChild(s),o.appendChild(i),e.appendChild(n),e.appendChild(o),e})()),e},q={1:["Regular Cheese Pizza","Classic cheese pizza","$23.00"],2:["Nonna Maria Pizza","Thin crust with fresh mozzarella, homemade marinara sauce, the finest Parmesan and fresh basil.","$27.00"],3:["Pepperoni Pizza","Classic cheese and pepperoni","$28.00"],4:["Chipotle Chicken Pizza","Loaded with white meat chicken breast that has been sauteed in savory chipotle sauce.","$28.00"],5:["Buffalo Chicken Pizza","Simply the best buffalo chicken pie. Tons of chicken breast with a little kick.","$28.00"],6:["House Special Pizza","Sausage, pepperoni, chicken, mushroom, peppers, onion, spinach and broccoli.","$30.00"]},G={1:["Garlic Bread","Bread, topped with garlic & olive oil or butter, herb seasoning, baked to perfection.","$3.50"],2:["Mozzarella Sticks","Deep fried cheese sticks. Served with a side of marinara sauce.","$12.95"],3:["Chicken Wings","Deep-fried unbreaded chicken wings coated with a vinegar and cayenne-pepper hot sauce, mixed with butter.","$14.95"],4:["Chicken Tenders","Crispy chicken tenders served with blue-cheese dip.","$12.95"]},J={1:["House Salad","Mixed baby greens, sun-dried tomatoes, cucumbers, red and green peppers, tomatoes, olives and Bermuda onions.","$9.00"],2:["Caesar Salad","Romaine lettuce, fresh parmigiano-reggiano cheese and croutons.","$9.00"]},K=(e,n,t)=>{const a=document.createElement("div");a.classList.add("item-card");const r=document.createElement("div");r.classList.add("left");const o=document.createElement("p");o.classList.add("item-name"),o.textContent=e;const i=document.createElement("p");i.classList.add("item-description"),i.textContent=n;const c=document.createElement("p");c.classList.add("item-cost"),c.textContent=t,r.appendChild(o),r.appendChild(i),r.appendChild(c);let s=e.includes("Pizza")?"pizza":e.includes("Salad")?"salads":"appetizers",d=W.menu[`${s}`][`${e.toLowerCase()}`];const p=document.createElement("div");return p.classList.add("item-image"),p.style.background=`center / cover no-repeat url(${d})`,a.appendChild(r),a.appendChild(p),a};let Q="homeTab";const V=()=>{"homeTab"===Q?(document.getElementById("homeBtn").classList.add("active"),document.getElementById("menuBtn").classList.remove("active"),document.getElementById("contactBtn").classList.remove("active")):"menuTab"===Q?(document.getElementById("homeBtn").classList.remove("active"),document.getElementById("menuBtn").classList.add("active"),document.getElementById("contactBtn").classList.remove("active")):(document.getElementById("homeBtn").classList.remove("active"),document.getElementById("menuBtn").classList.remove("active"),document.getElementById("contactBtn").classList.add("active"))};(()=>{const e=document.getElementById("content");e.appendChild((()=>{const e=document.createElement("header");e.classList.add("header");const n=document.createElement("div");n.setAttribute("id","title"),n.textContent="THE PIZZA BAR";const t=document.createElement("div");t.classList.add("options");const a=document.createElement("button");a.classList.add("tab-button","current"),a.setAttribute("id","homeBtn"),a.textContent="Home",a.addEventListener("click",(()=>{"homeTab"!==Q&&(Q="homeTab",Y(),V())}));const r=document.createElement("button");r.classList.add("tab-button"),r.setAttribute("id","menuBtn"),r.textContent="Menu",r.addEventListener("click",(()=>{"menuTab"!==Q&&(Q="menuTab",(()=>{const e=document.getElementById("main");e.innerHTML="",e.appendChild((()=>{const e=document.createElement("div");e.classList.add("menu");const n=document.createElement("div");n.classList.add("menu-wrapper");const t=document.createElement("section");t.setAttribute("id","pizza");const a=document.createElement("h2");a.textContent="Pizza",t.appendChild(a);let r=Object.values(q);for(let e=0;e<r.length;e++)t.appendChild(K(r[e][0],r[e][1],r[e][2]));const o=document.createElement("section");o.setAttribute("id","appetizers");const i=document.createElement("h2");i.textContent="Appetizers",o.appendChild(i);let c=Object.values(G);for(let e=0;e<c.length;e++)o.appendChild(K(c[e][0],c[e][1],c[e][2]));const s=document.createElement("section");s.setAttribute("id","salads");const d=document.createElement("h2");d.textContent="Salads",s.appendChild(d);let p=Object.values(J);for(let e=0;e<p.length;e++)s.appendChild(K(p[e][0],p[e][1],p[e][2]));return n.appendChild(t),n.appendChild(o),n.appendChild(s),e.appendChild(n),e})())})(),V())}));const o=document.createElement("button");return o.classList.add("tab-button"),o.setAttribute("id","contactBtn"),o.textContent="Contact",o.addEventListener("click",(()=>{"contactTab"!==Q&&(Q="contactTab",(()=>{const e=document.getElementById("main");e.innerHTML="",e.appendChild((()=>{const e=document.createElement("div");e.classList.add("contact");const n=document.createElement("div");n.classList.add("contact-wrapper");const t=document.createElement("p");t.setAttribute("id","phoneNo"),t.textContent=" 123-456-7890";const a=document.createElement("p");a.setAttribute("id","locationText"),a.textContent=" E Spring St, Seattle, WA 98122, USA";const r=document.createElement("div");return r.setAttribute("id","locationMap"),r.style.background=`center / cover no-repeat url(${W.contact.map})`,n.appendChild(t),n.appendChild(a),n.appendChild(r),e.appendChild(n),e})())})(),V())})),t.appendChild(a),t.appendChild(r),t.appendChild(o),e.appendChild(n),e.appendChild(t),e})()),e.appendChild((()=>{const e=document.createElement("div");return e.classList.add("main"),e.setAttribute("id","main"),e.style.background=`top / cover no-repeat url(${W.home.bgimg})`,e})()),e.appendChild((()=>{const e=document.createElement("footer");e.classList.add("footer");const n=document.createElement("span");return n.classList.add("credits"),n.innerHTML='Brought to you by : <a href="https://github.com/rvarad" target="_blank">rvarad</a> | <a href="https://github.com/rvarad/top-library" target="_blank">Source</a>',e.appendChild(n),e})()),V(),Y()})()})()})();