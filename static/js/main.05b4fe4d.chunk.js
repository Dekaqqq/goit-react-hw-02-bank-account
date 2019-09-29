(window["webpackJsonpgoit-react-hw-01-components"]=window["webpackJsonpgoit-react-hw-01-components"]||[]).push([[0],{16:function(e,t,a){e.exports={dashboard:"Dashboard_dashboard__kN3g5"}},2:function(e,t,a){e.exports={history:"TransactionHistory_history__3kCqF",headlineRow:"TransactionHistory_headlineRow__1cDOT",headlineRowItem:"TransactionHistory_headlineRowItem__3C5yX",row:"TransactionHistory_row__2H416",rowItem:"TransactionHistory_rowItem__3RGmJ"}},22:function(e,t,a){e.exports=a(41)},27:function(e,t,a){},3:function(e,t,a){e.exports={balance:"Balance_balance__2QSh1",description:"Balance_description__2QCax",imgSpan:"Balance_imgSpan__T9xmS"}},41:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(5),c=a.n(o),s=(a(27),a(21)),i=a(9),l=a(10),u=a(12),m=a(11),d=a(13),h=a(16),p=a.n(h),b=a(17),f=a(4),_=(a(28),a(18)),E=a.n(_),w=a(6),y=a.n(w),v=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(b.a)({},n,r))},a.handleClick=function(e){var t=e.target,n=a.state.amount,r=t.name,o=a.props,c=o.balance,s=o.handleTransactions,i=Number(n),l={id:E.a.generate(),type:r,amount:i,date:(new Date).toLocaleString()};return n>c&&"withdraw"===r?(a.notifyNotEnough(),void a.reset()):n<=0?(a.notifyEmptyInput(),void a.reset()):(s(l),void a.reset())},a.reset=function(){return a.setState({amount:""})},a.notifyNotEnough=function(){f.b.error("\u041d\u0430 \u0441\u0447\u0435\u0442\u0443 \u043d\u0435\u0434\u043e\u0441\u0442\u0430\u0442\u043e\u0447\u043d\u043e \u0441\u0440\u0435\u0434\u0441\u0442\u0432 \u0434\u043b\u044f \u043f\u0440\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u044f \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438!",{position:f.b.POSITION.TOP_RIGHT})},a.notifyEmptyInput=function(){f.b.error("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u0443\u044e \u0441\u0443\u043c\u043c\u0443  \u0434\u043b\u044f \u043f\u0440\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u044f \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438!",{position:f.b.POSITION.TOP_RIGHT})},a.state={amount:""},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state.amount;return r.a.createElement("div",null,r.a.createElement("section",{className:y.a.controls},r.a.createElement("input",{type:"number",className:y.a.valueInput,name:"amount",value:e,onChange:this.handleChange}),r.a.createElement("button",{type:"button",className:y.a.button,name:"deposit",onClick:this.handleClick},"Deposit"),r.a.createElement("button",{type:"button",className:y.a.button,name:"withdraw",onClick:this.handleClick},"Withdraw"),r.a.createElement(f.a,{autoClose:1500})))}}]),t}(n.Component),N=a(3),g=a.n(N),I=function(e){var t=e.balance,a=e.transactions;return r.a.createElement("section",{className:g.a.balance},r.a.createElement("span",{className:g.a.description},r.a.createElement("span",{role:"img","aria-label":"img",className:g.a.imgSpan},"\u2b06\ufe0f",function(e){return e.length?e.filter((function(e){return"deposit"===e.type})).reduce((function(e,t){return e+t.amount}),0):0}(a)),"$"),r.a.createElement("span",{className:g.a.description},r.a.createElement("span",{role:"img","aria-label":"img",className:g.a.imgSpan},"\u2b07\ufe0f",function(e){return e.length?e.filter((function(e){return"withdraw"===e.type})).reduce((function(e,t){return e+t.amount}),0):0}(a)),"$"),r.a.createElement("span",{className:g.a.description},"Balance: ",t,"$"))};I.defaultProps={transactions:[]};var O=I,T=a(2),C=a.n(T),S=function(e){var t=e.transactions;return r.a.createElement("table",{className:C.a.history},r.a.createElement("thead",null,r.a.createElement("tr",{className:C.a.headlineRow},r.a.createElement("th",{className:C.a.headlineRowItem},"Transaction"),r.a.createElement("th",{className:C.a.headlineRowItem},"Amount"),r.a.createElement("th",{className:C.a.headlineRowItem},"Date"))),r.a.createElement("tbody",null,t.map((function(e){var t=e.id,a=e.type,n=e.amount,o=e.date;return r.a.createElement("tr",{className:C.a.row,key:t},r.a.createElement("td",{className:C.a.rowItem},a),r.a.createElement("td",{className:C.a.rowItem},n,"$"),r.a.createElement("td",{className:C.a.rowItem},o))}))))};S.defaultProps={transactions:[]};var j=S,k=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(u.a)(this,Object(m.a)(t).call(this))).handleTransactions=function(t){e.setState((function(e){return{transactions:[].concat(Object(s.a)(e.transactions),[t]),balance:"deposit"===t.type?e.balance+t.amount:e.balance-t.amount}}))},e.state={transactions:[],balance:0},e}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state,t=e.transactions,a=e.balance;return r.a.createElement("div",{className:p.a.dashboard},r.a.createElement(v,{balance:a,handleTransactions:this.handleTransactions}),r.a.createElement(O,{balance:a,transactions:t}),r.a.createElement(j,{transactions:t}))}}]),t}(n.Component);var R=function(){return r.a.createElement("div",null,r.a.createElement(k,null))};c.a.render(r.a.createElement(R,null),document.getElementById("root"))},6:function(e,t,a){e.exports={controls:"Controls_controls__MI2QK",valueInput:"Controls_valueInput__2bCSz",button:"Controls_button__2rBTd"}}},[[22,1,2]]]);
//# sourceMappingURL=main.05b4fe4d.chunk.js.map