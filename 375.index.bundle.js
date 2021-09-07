"use strict";(self.webpackChunkgarden_game=self.webpackChunkgarden_game||[]).push([[375],{8375:(e,t,n)=>{n.r(t),n.d(t,{default:()=>b});var a=n(7294);function r(e){var t=e.plantStatus,n=e.sale;return a.createElement("div",null,2==t&&a.createElement("img",{src:"./assets/images/coins/".concat(n>=25&&n<50?"silver":n>=50&&n<100?"gold":"diamond",".gif"),className:"gd-coin-image"}))}var o=n(710);function l(e){var t=e.plant,n=e.plantStatus,r=e.plantOpacity;return a.createElement("div",{className:"gd-garden-image"},a.createElement("img",{src:t["image".concat(n+1)]}),(0,o.Q)(t)&&a.createElement("img",{className:"gd-garden-image-opacity",src:r}))}function s(e){var t=e.plantStatus,n=e.timer;return a.createElement("div",{className:"gd-garden-item-timer".concat(2===t?" over-timer":"")},n)}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,r,o=[],l=!0,s=!1;try{for(n=n.call(e);!(l=(a=n.next()).done)&&(o.push(a.value),!t||o.length!==t);l=!0);}catch(e){s=!0,r=e}finally{try{l||null==n.return||n.return()}finally{if(s)throw r}}return o}}(e,t)||function(e,t){if(e){if("string"==typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var c=new Audio("./assets/sounds/plant.ogg"),d=new Audio("./assets/sounds/plant-grow.ogg"),m=new Audio("./assets/sounds/coin.ogg"),g=new Audio("./assets/sounds/diamond.wav"),f=new Audio("./assets/sounds/tree-food.ogg"),p=new Audio("./assets/sounds/watering-can.ogg"),v=new Audio("./assets/sounds/bug-spray.ogg"),y=new Audio("./assets/sounds/phonograph.ogg"),h=new Audio("./assets/sounds/pause.ogg");const w=(0,a.memo)((function(e){var t=e.plant,n=e.choosePlant,o=e.setPlant,u=e.deletePlant,w=e.tool,b=e.coinBankVal,E=e.setCoinBankVal,k=e.costTreeFood,S=e.costWateringCan,A=i((0,a.useState)(null),2),P=A[0],C=A[1],B=i((0,a.useState)(0),2),N=B[0],V=B[1],F=i((0,a.useState)(0),2),I=F[0],O=F[1],T=i((0,a.useState)(!1),2),j=T[0],M=T[1],W=i((0,a.useState)(0),2),_=W[0],x=W[1];(0,a.useEffect)((function(){if(j){if(3===N&&(V(1),x(_+1),O(null==t?void 0:t.timer)),1===N&&-1===I&&(d.load(),d.play()),-1===I&&(V(N+1),O(null==t?void 0:t.timer)),3===_)return void L();var e=setInterval((function(){O(I-1)}),1e3);return function(){clearInterval(e)}}}),[I]);var L=function(){u(),C(null),V(0),O(null),M(!1),x(0)},Q=null==t?void 0:t.salePrice;return a.createElement("div",{className:"gd-garden-item",onClick:function(){return function(){if(null===w){if(n&&!j&&b>=(null==n?void 0:n.salePrice))return V(0),M(!0),O(null==n?void 0:n.timer),void o();if(!n&&2===N)return Q>=100?(g.load(),g.play()):(m.load(),m.play()),E(b+(null==t?void 0:t.salePrice)?b+(null==t?void 0:t.salePrice):0),V(1),x(_+1),void O(null==t?void 0:t.timer)}if(j)switch(w){case"shovel":c.load(),c.play(),L();break;case"tree-food":2!=N&&b>=k&&(f.load(),f.play(),E(b-k?b-k:0),O(I-3),3>I&&(V(N+1),O(null==t?void 0:t.timer)));break;case"watering-can":2!=N&&b>=S&&(p.load(),p.play(),E(b-S?b-S:0),O(I-1),1>I&&(V(N+1),O(null==t?void 0:t.timer)));break;case"bug-spray":v.load(),v.play();break;case"phonograph":y.load(),y.play()}else h.load(),h.play()}()},onMouseEnter:function(){C(null==n?void 0:n.image2)},onMouseLeave:function(){C(null)}},t&&a.createElement(a.Fragment,null,a.createElement(l,{plant:t,plantStatus:N,plantOpacity:P}),j&&a.createElement(a.Fragment,null,a.createElement(s,{plantStatus:N,timer:I}),a.createElement(r,{plantStatus:N,sale:Q}))))})),b=(0,a.memo)((function(e){var t=e.plants,n=e.choosePlant,r=e.setPlant,o=e.deletePlant,l=e.tool,s=e.coinBankVal,i=e.setCoinBankVal,u=e.costTreeFood,c=e.costWateringCan;return a.createElement("div",{className:"gd-garden"},t.map((function(e,t){return a.createElement(w,{key:t,plant:e,choosePlant:n,setPlant:function(){return r(t)},deletePlant:function(){return o(t)},tool:l,coinBankVal:s,setCoinBankVal:i,costTreeFood:u,costWateringCan:c})})))}))}}]);