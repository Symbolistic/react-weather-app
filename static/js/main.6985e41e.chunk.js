(this["webpackJsonpreact-weather-app"]=this["webpackJsonpreact-weather-app"]||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(4),o=a.n(r),i=a(2),s=a.n(i),u=a(5),p=a(1),m=(a(12),"6c737e5151227aae2ecd31335b3c5ad7"),l="https://api.openweathermap.org/data/2.5/",d="metric",h=0;var f=function(){var e=Object(n.useState)({}),t=Object(p.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)(""),i=Object(p.a)(o,2),f=i[0],y=i[1],b=Object(n.useState)("metric"),v=Object(p.a)(b,2),w=v[0],E=v[1];return Object(n.useEffect)((function(){function e(){return(e=Object(u.a)(s.a.mark((function e(t){var a,n,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.coords,n=a.latitude,c=a.longitude,e.next=5,fetch("".concat(l,"weather?lat=").concat(n,"&lon=").concat(c,"&units=").concat(w,"&appid=").concat(m)).then((function(e){return e.json()})).then((function(e){d=w,h=e.main.temp,r(e)}));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}navigator.geolocation.getCurrentPosition((function(t){return e.apply(this,arguments)}),(function(e){console.warn("ERROR(".concat(e.code,"): ").concat(e.message))}),{enableHighAccuracy:!0,timeout:5e3,maximumAge:0})}),[w]),c.a.createElement("div",{className:"undefined"!=typeof a.main?"metric"===d?a.rain?"App rain":a.snow?"App snow":a.main.temp<=5?"App cold":a.main.temp>=24?"App hot":"App":a.rain?"App rain":a.snow?"App snow":a.main.temp<=41?"App cold":a.main.temp>=75?"App hot":"App":"App"},c.a.createElement("div",{className:"main-area"},c.a.createElement("div",{className:"search-box"},c.a.createElement("input",{type:"text",className:"search-bar",placeholder:"Search...",onChange:function(e){return y(e.target.value)},value:f,onKeyPress:function(e){"Enter"===e.key&&fetch("".concat(l,"weather?q=").concat(f,"&units=").concat(w,"&appid=").concat(m)).then((function(e){return e.json()})).then((function(e){h=e.main.temp,r(e),y("")}))}})),"undefined"!=typeof a.main?c.a.createElement("div",null,c.a.createElement("div",{className:"location-box"},c.a.createElement("div",{className:"location"},a.name,", ",a.sys.country),c.a.createElement("div",{className:"date"},function(e){var t=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][e.getDay()],a=e.getDate(),n=["January","February","March","April","May","June","July","August","September","October","November","December"][e.getMonth()],c=e.getFullYear();return"".concat(t," ").concat(n," ").concat(a," ").concat(c)}(new Date))),c.a.createElement("div",{className:"weather-box",onClick:function(){return E("metric"===w?"imperial":"metric")}},c.a.createElement("p",{className:"info"},"Click anywhere to change metrics"),c.a.createElement("div",{className:"temp"},Math.round(h),"imperial"===w?"\xb0F":"\xb0c"),c.a.createElement("div",{className:"weather"},a.weather[0].main))):""))};o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(f,null)),document.getElementById("root"))},6:function(e,t,a){e.exports=a(13)}},[[6,1,2]]]);
//# sourceMappingURL=main.6985e41e.chunk.js.map