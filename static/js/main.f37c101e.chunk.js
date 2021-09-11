(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{13:function(t,e,n){t.exports={list:"contacts_list__3wcae",listItem:"contacts_listItem__2mucc",contactName:"contacts_contactName__3H0Ot",contactBtn:"contacts_contactBtn__Lf-9-"}},20:function(t,e,n){t.exports={container:"container_container__3gKmY",contactList:"container_contactList__2LHSN"}},21:function(t,e,n){t.exports={filterLabel:"filter_filterLabel__1hYoT",filterInput:"filter_filterInput__KcP-x"}},64:function(t,e,n){"use strict";n.r(e);var r={};n.r(r),n.d(r,"fetchContacts",(function(){return N})),n.d(r,"postContacts",(function(){return k})),n.d(r,"deleteContacts",(function(){return L}));var a={};n.r(a),n.d(a,"getContacts",(function(){return F})),n.d(a,"getFilter",(function(){return B}));var c=n(0),o=n.n(c),s=n(14),u=n.n(s),i=n(6),l=n(20),b=n.n(l),f=n(22),d=n(3),p={addContact:Object(d.b)("contacts/add",(function(t){return{payload:{id:t.id,name:t.name,number:t.number}}})),deleteContact:Object(d.b)("contacts/delete"),changeFilter:Object(d.b)("contacts/changeFilter")},j=n(4),m=n.n(j),h=n(8),O=n(12),x=n.n(O);function v(){return _.apply(this,arguments)}function _(){return(_=Object(h.a)(m.a.mark((function t(){var e,n;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.a.get("/contacts");case 2:return e=t.sent,n=e.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function g(t){return C.apply(this,arguments)}function C(){return(C=Object(h.a)(m.a.mark((function t(e){var n,r;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.a.post("/contacts",e);case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function w(t){return y.apply(this,arguments)}function y(){return(y=Object(h.a)(m.a.mark((function t(e){var n,r;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.a.delete("/contacts/".concat(e));case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}x.a.defaults.baseURL="http://localhost:4004";var N=Object(d.c)("user/fetchContacts",Object(h.a)(m.a.mark((function t(){var e;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v();case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)})))),k=Object(d.c)("user/postContacts",function(){var t=Object(h.a)(m.a.mark((function t(e){var n;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,g(e);case 3:return n=t.sent,t.abrupt("return",n);case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()),L=Object(d.c)("user/deleteContacts",function(){var t=Object(h.a)(m.a.mark((function t(e){var n;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,w(e);case 3:return n=t.sent,t.abrupt("return",n);case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()),F=function(t){return t.contacts},B=function(t){return t.contacts.filter},I=n(9),A=n.n(I),z=n(66),T=n(1);function S(t){var e=t.option,n=Object(c.useState)(""),a=Object(f.a)(n,2),o=a[0],s=a[1],u=Object(c.useState)(""),l=Object(f.a)(u,2),b=l[0],d=l[1],j=Object(i.b)(),m=Object(z.a)(),h=function(t){var e=t.currentTarget,n=e.name,r=e.value;switch(n){case"name":s(r);break;case"number":d(r);break;default:return}};return Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)("h1",{children:e}),Object(T.jsxs)("form",{onSubmit:function(t){t.preventDefault();var e={id:Object(z.a)(),name:o,number:b};j(p.addContact(e)),j(r.postContacts(e)),s(""),d("")},autoComplete:"off",className:A.a.phoneBookForm,children:[Object(T.jsx)("label",{htmlFor:m,className:A.a.formLabel,children:"Name"}),Object(T.jsx)("input",{className:A.a.formInput,type:"text",name:"name",placeholder:"Enter full name",id:m,value:o,onChange:h,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"The name can only consist of letters, apostrophes, dashes and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan etc.",required:!0}),Object(T.jsx)("label",{htmlFor:m,className:A.a.formLabel,children:"Number"}),Object(T.jsx)("input",{className:A.a.formInput,type:"tel",name:"number",placeholder:"Enter number",id:m,value:b,onChange:h,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"The phone number must be digits and can contain spaces, dashes and should start with +",required:!0}),Object(T.jsx)("button",{type:"submit",className:A.a.formBtn,children:"Add contact"})]})]})}var E=n(13),J=n.n(E);function q(){var t=Object(i.b)(),e=Object(i.c)(a.getContacts),n=e.items,o=e.filter,s=Z(n,o);return console.log(n),Object(c.useEffect)((function(){t(r.fetchContacts())}),[t]),Object(T.jsx)(T.Fragment,{children:Object(T.jsx)("ul",{className:J.a.list,children:s.map((function(e){var n=e.number,a=e.name,c=e.id;return Object(T.jsxs)("li",{className:J.a.listItem,children:[Object(T.jsxs)("p",{className:J.a.contactName,children:[a,": ",n]}),Object(T.jsx)("button",{className:J.a.contactBtn,onClick:function(){t(r.deleteContacts(c)),t(p.deleteContact(n))},children:"Delete"})]},n)}))})})}var Z=function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))},D=n(21),H=n.n(D);function K(){var t=Object(i.c)(a.getFilter),e=Object(i.b)();return Object(T.jsxs)("label",{htmlFor:"filter",className:H.a.filterLabel,children:["Find contacts by name",Object(T.jsx)("input",{className:H.a.filterInput,type:"text",value:t,onChange:function(t){return e(p.changeFilter(t.currentTarget.value))},id:"filter"})]})}function M(){return Object(T.jsxs)("div",{className:b.a.container,children:[Object(T.jsx)(S,{option:"Phonebook"}),Object(T.jsx)("h2",{className:b.a.contactList,children:"Contacts"}),Object(T.jsx)(K,{}),Object(T.jsx)(q,{})]})}var P,R,Y,Q=n(10),U=n(31),V=n.n(U),$=n(7),G=n(32),W=n(2),X=Object(d.d)([],(P={},Object($.a)(P,p.addContact,(function(t,e){var n=e.payload;return[].concat(Object(G.a)(t),[n])})),Object($.a)(P,p.deleteContact,(function(t,e){var n=e.payload;return t.filter((function(t){return t.number!==n}))})),Object($.a)(P,N.fulfilled,(function(t,e){return e.payload})),P)),tt=Object(d.d)("",Object($.a)({},p.changeFilter,(function(t,e){return e.payload}))),et=Object(d.d)(!1,(R={},Object($.a)(R,N.pending,(function(){return!0})),Object($.a)(R,N.fulfilled,(function(){return!0})),Object($.a)(R,N.rejected,(function(){return!0})),R)),nt=Object(d.d)(null,(Y={},Object($.a)(Y,N.rejected,(function(t,e){return e.payload})),Object($.a)(Y,N.pending,(function(){return null})),Y)),rt=Object(W.b)({items:X,filter:tt,isLoading:et,error:nt}),at=Object(d.a)({reducer:{contacts:rt},middlware:function(t){return t({serializableCheck:{ignoredActions:[Q.a,Q.f,Q.b,Q.c,Q.d,Q.e]}}).concat(V.a)},devTools:!1});n(63);u.a.render(Object(T.jsx)(o.a.StrictMode,{children:Object(T.jsx)(i.a,{store:at,children:Object(T.jsx)(M,{})})}),document.getElementById("root"))},9:function(t,e,n){t.exports={phoneBookForm:"form_phoneBookForm__2zgVQ",formLabel:"form_formLabel__1_eLj",formInput:"form_formInput__3uoAJ",formBtn:"form_formBtn__3NqgR"}}},[[64,1,2]]]);
//# sourceMappingURL=main.f37c101e.chunk.js.map