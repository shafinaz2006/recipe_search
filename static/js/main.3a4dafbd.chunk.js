(this.webpackJsonprecipe_search=this.webpackJsonprecipe_search||[]).push([[0],{19:function(e,c,t){},38:function(e,c,t){},40:function(e,c,t){"use strict";t.r(c);var n=t(2),i=t.n(n),r=t(13),a=t.n(r),s=(t(19),t(3)),l=t(14),p=t.n(l),o=(t(38),t(0));var j=function(){var e=Object(n.useState)([]),c=Object(s.a)(e,2),t=c[0],i=c[1],r=Object(n.useState)(""),a=Object(s.a)(r,2),l=a[0],j=a[1],u=Object(n.useState)(!1),b=Object(s.a)(u,2),h=b[0],d=b[1];return Object(n.useEffect)((function(){d(!0)}),[t]),Object(o.jsxs)("main",{className:"App",children:[Object(o.jsx)("h1",{children:" Recipe Search App"}),Object(o.jsxs)("form",{onSubmit:function(e){return function(e){e.preventDefault(),p.a.get("https://api.edamam.com/api/recipes/v2?type=public&q=".concat(l,"&app_id=202b54b2&app_key=aacb28831d67e34e10029db642233e04%09&imageSize=REGULAR")).then((function(e){return i(e.data.hits)})).catch((function(e){return console.log("Error in response data",e)}))}(e)},children:[Object(o.jsx)("label",{htmlFor:"search",children:"Enter your query: "}),Object(o.jsx)("input",{type:"text",id:"search",name:"recipeSearch",onChange:function(e){j(e.target.value)},value:l,placeholder:"query"}),Object(o.jsx)("button",{children:"Search"})]}),Object(o.jsx)("div",{className:"allRecipes",children:h?t.map((function(e,c){return Object(o.jsxs)("section",{className:"recipe",children:[Object(o.jsx)("img",{src:e.recipe.image,alt:"recipeImage",className:"recipeImage"}),Object(o.jsx)("p",{className:"recipeLabel",children:e.recipe.label}),Object(o.jsxs)("p",{className:"recipeCalorie",children:["Calories: ",e.recipe.calories]}),Object(o.jsxs)("div",{className:"recipeIngredient",children:[Object(o.jsx)("p",{className:"recipeIngLabel",children:"Ingredients:"}),e.recipe.ingredientLines?e.recipe.ingredientLines.map((function(e,c){return Object(o.jsxs)("p",{children:[" ",e]},c)})):""]}),Object(o.jsx)("a",{href:e.recipe.url,target:"__blank",className:"recipeDetails",children:" Details "})]},c)})):"<h1> No recipe found in this category </h1>"})]})},u=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,41)).then((function(c){var t=c.getCLS,n=c.getFID,i=c.getFCP,r=c.getLCP,a=c.getTTFB;t(e),n(e),i(e),r(e),a(e)}))};a.a.render(Object(o.jsx)(i.a.StrictMode,{children:Object(o.jsx)(j,{})}),document.getElementById("root")),u()}},[[40,1,2]]]);
//# sourceMappingURL=main.3a4dafbd.chunk.js.map