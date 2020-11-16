(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{14:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var s=a(0),c=a(1),n=a.n(c),r=a(26),l=a.n(r),i=a(10),o=a(2);var j=function(){var e=Object(o.e)();return Object(s.jsxs)("ul",{className:"nav nav-tabs",children:[Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)(i.b,{to:"/",className:"/"===e.pathname?"nav-link active":"nav-link",children:"Home"})}),Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)(i.b,{to:"/Employees",className:"/Employees"===e.pathname?"nav-link active":"nav-link",children:"Employees"})}),Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)(i.b,{to:"/about",className:"/about"===e.pathname?"nav-link active":"nav-link",children:"About"})})]})};a(14);var d=function(){return Object(s.jsxs)("div",{children:[Object(s.jsx)("h1",{children:"Hello, Welcome to Employees Finder"}),Object(s.jsx)("p",{children:"An employee or manager would benefit greatly from being able to view non-sensitive data about other employees. It would be particularly helpful to be able to filter employees by name."})]})};var u=function(){return Object(s.jsx)("div",{class:"containerCard",children:Object(s.jsx)("div",{class:"row",children:Object(s.jsx)("div",{class:"col-9",children:Object(s.jsx)("div",{class:"card",children:Object(s.jsxs)("div",{class:"card-body",children:[Object(s.jsx)("p",{children:"Email:"}),Object(s.jsx)("a",{href:" mailto:stevenmogbo@yahoo.com",children:" Stevenmogbo@yahoo.com "}),Object(s.jsx)("p",{children:"Github:"})," ",Object(s.jsx)("a",{href:"https://github.com/SBMogbo",children:"SBMogbo "})]})})})})})},m=a(28),b=a(29),h=a(32),p=a(31),O=a(30),v=a.n(O),f=function(){return v.a.get("https://randomuser.me/api/?results=20&nat=US")};a(60);var x=function(e){return Object(s.jsxs)("div",{className:"card",children:[Object(s.jsx)("img",{className:"card-img-top",src:e.image,alt:"Employees: ".concat(e.firstName," ").concat(e.lastName)}),Object(s.jsxs)("div",{className:"card-body information",children:[Object(s.jsx)("h5",{className:"card-title",children:"".concat(e.firstName," ").concat(e.lastName)}),Object(s.jsxs)("p",{className:"Card-text",children:["Email: ",e.email]}),Object(s.jsxs)("p",{className:"Card-text",children:["Phone: ",e.phoneNum]})]})]})},N=a(9);var y=function(e){return Object(s.jsx)("div",Object(N.a)({className:"row".concat(e.fluid?"-fluid":"")},e))};a(61);var g=function(e){return Object(s.jsx)("div",Object(N.a)({className:"container".concat(e.fluid?"-fluid":"")},e))};var S=function(e){return Object(s.jsx)("div",Object(N.a)({},e))},w=function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(m.a)(this,a);for(var s=arguments.length,c=new Array(s),n=0;n<s;n++)c[n]=arguments[n];return(e=t.call.apply(t,[this].concat(c))).state={allResults:[],allResultsParsed:[],results:[]},e.handleSearchFirst=function(t){var a=t.target.value;e.sortPeopleFirst(a)},e.handleSearchLast=function(t){var a=t.target.value;e.sortPeopleLast(a)},e.sortPeopleFirst=function(t){var a=e.state.allResults.filter((function(e){return e.name.first.toLowerCase().includes(t)}));e.setState({allResultsParsed:a})},e.sortPeopleLast=function(t){var a=e.state.allResults.filter((function(e){return e.name.last.toLowerCase().includes(t)}));e.setState({allResultsParsed:a})},e}return Object(b.a)(a,[{key:"componentDidMount",value:function(){var e=this;f().then((function(t){e.setState({allResults:t.data.results,allResultsParsed:t.data.results,results:t.data.results})}))}},{key:"render",value:function(){var e=this.state.allResultsParsed;return Object(s.jsxs)("div",{children:[Object(s.jsx)("h1",{className:"text-center",children:"Employees Finder"}),Object(s.jsx)("form",{className:"search-form form-inline",children:Object(s.jsx)("div",{children:Object(s.jsx)("input",{className:"employeeSearch",placeholder:"Search for a Last Name",onChange:this.handleSearchLast})})}),Object(s.jsx)(g,{children:Object(s.jsx)(y,{children:e.map((function(e,t){return Object(s.jsx)(S,{children:Object(s.jsx)(x,{image:e.picture.large,fullname:e.name.first+e.name.last,firstName:e.name.first,lastName:e.name.last,phoneNum:e.phone,email:e.email})},t)}))})})]})}}]),a}(c.Component);a(62);var E=function(e){return Object(s.jsx)("main",{className:"wrapper",children:e.children})};a(63);var k=function(){return Object(s.jsx)("footer",{className:"footer",children:Object(s.jsx)("span",{children:"Employee Directory 2020"})})};var P=function(){return Object(s.jsx)(i.a,{children:Object(s.jsxs)("div",{children:[Object(s.jsx)(j,{}),Object(s.jsxs)(E,{children:[Object(s.jsx)(o.a,{exact:!0,path:"/",component:d}),Object(s.jsx)(o.a,{exact:!0,path:"/about",component:u}),Object(s.jsx)(o.a,{exact:!0,path:"/Employees",component:w})]}),Object(s.jsx)(k,{})]})})};a(64);l.a.render(Object(s.jsx)(n.a.StrictMode,{children:Object(s.jsx)(P,{})}),document.getElementById("root"))}},[[65,1,2]]]);
//# sourceMappingURL=main.26c063bc.chunk.js.map