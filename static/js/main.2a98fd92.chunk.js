(this["webpackJsonpreact-recipe-app"]=this["webpackJsonpreact-recipe-app"]||[]).push([[0],{11:function(e,t,c){},13:function(e,t,c){},15:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),r=c(5),i=c.n(r),s=(c(11),c(4)),o=c.n(s),u=c(6),p=c(2),j=(c(13),c(0)),l=function(e){var t=e.title,c=e.calories,n=e.image,a=e.ingredients;return Object(j.jsxs)("div",{className:"recipe",children:[Object(j.jsx)("h1",{children:t}),Object(j.jsx)("ol",{children:a.map((function(e){return Object(j.jsx)("li",{children:e.text})}))}),Object(j.jsx)("p",{children:c}),Object(j.jsx)("img",{className:"image",src:n})]})};c(15);var b=function(){var e=Object(n.useState)([]),t=Object(p.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(""),i=Object(p.a)(r,2),s=i[0],b=i[1],h=Object(n.useState)("chicken"),d=Object(p.a)(h,2),f=d[0],m=d[1];Object(n.useEffect)((function(){O()}),[f]);var O=function(){var e=Object(u.a)(o.a.mark((function e(){var t,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.edamam.com/search?q=".concat(f,"&app_id=").concat("49568502","&app_key=").concat("f6ad0cb43b7a4962add78d5a301e6b90"));case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,a(c.hits),console.log(c.hits);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault(),m(s),b("")},className:"search-form",children:[Object(j.jsx)("input",{type:"text",className:"search-bar",value:s,onChange:function(e){b(e.target.value)}}),Object(j.jsx)("button",{className:"search-button",type:"submit",children:"search"})]}),Object(j.jsx)("div",{className:"recipes",children:c.map((function(e){return Object(j.jsx)(l,{title:e.recipe.label,calories:e.recipe.calories,image:e.recipe.image,ingredients:e.recipe.ingredients},e.recipe.label)}))})]})},h=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,17)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;c(e),n(e),a(e),r(e),i(e)}))};i.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(b,{})}),document.getElementById("root")),h()}},[[16,1,2]]]);
//# sourceMappingURL=main.2a98fd92.chunk.js.map