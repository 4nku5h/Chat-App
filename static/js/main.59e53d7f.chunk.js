(this["webpackJsonpchat-app"]=this["webpackJsonpchat-app"]||[]).push([[0],{25:function(e,t,s){},26:function(e,t,s){},27:function(e,t,s){},34:function(e,t,s){},35:function(e,t,s){},36:function(e,t,s){},37:function(e,t,s){},38:function(e,t,s){},39:function(e,t,s){},40:function(e,t,s){"use strict";s.r(t);var a=s(7),n=s.n(a),i=s(16),c=s.n(i),r=(s(25),s(9)),o=(s(26),s(17)),d=s(18),l=s(12),u=s(20),m=s(19),g=(s(27),s(28),s(3));var j=function(e){return Object(g.jsxs)("div",{className:"Login_Page",children:[e.attemptLogin(),Object(g.jsxs)("div",{className:"LoginSignUp_divider_first",children:[Object(g.jsx)("h3",{id:"LoginSignup_AppName",children:"Newton Messenger"}),Object(g.jsxs)("form",{className:"LoginSignUp_form",children:[Object(g.jsx)("p",{id:"Login_text",children:"Login"}),Object(g.jsx)("input",{type:"text",class:"login_Inputtext",placeholder:"Enter Your Name",name:"name",onChange:function(t){e.data.username=t.target.value}})]}),Object(g.jsx)("div",{className:"LoginSignup_btn_divider",children:Object(g.jsx)("button",{id:"btn_attempt_login_signup",onClick:function(){return e.handleLogin()},children:"Login"})})]})]})},p=s(11);p.a.apps.length?p.a.app():p.a.initializeApp({apiKey:"AIzaSyB3f6X2Bn6pyfPGy4Hr4MdtYVkqZNu8eFk",authDomain:"chat-app-70d02.firebaseapp.com",projectId:"chat-app-70d02",storageBucket:"chat-app-70d02.appspot.com",messagingSenderId:"1024507157310",appId:"1:1024507157310:web:f9977d8dbf733b58972a6f",measurementId:"G-EJ5QMC3CVE"});var h=function(e){Object(u.a)(s,e);var t=Object(m.a)(s);function s(e){var a;return Object(o.a)(this,s),(a=t.call(this)).state={props:e,loginDetails:{username:null,password:null},signupDetails:{username:null,email:null,password:null}},a.handleLogin=a.handleLogin.bind(Object(l.a)(a)),a.attemptLogin=a.attemptLogin.bind(Object(l.a)(a)),a}return Object(d.a)(s,[{key:"attemptLogin",value:function(){if(window.localStorage.getItem("chat-app-isloggedin")){var e=window.localStorage.getItem("chat-app-isloggedin");this.state.loginDetails.username=e,this.state.props.setLoggedIn(!0),this.state.props.setUserName(e)}}},{key:"handleLogin",value:function(e){if(null!=this.state.loginDetails.username){var t=this.state.loginDetails.username;!function(e){p.a.database().ref("users").push({userName:e})}(t),this.saveUserNameToLocalStorage(t),this.state.props.setLoggedIn(!0),this.state.props.setUserName(t)}}},{key:"saveUserNameToLocalStorage",value:function(e){localStorage.setItem("chat-app-isloggedin",e)}},{key:"render",value:function(){return Object(g.jsx)("div",{className:"LoginSignUp",children:Object(g.jsx)("div",{className:"LoginSignUp_inner",children:Object(g.jsx)(j,{data:this.state.loginDetails,handleLogin:this.handleLogin,attemptLogin:this.attemptLogin})})})}}]),s}(a.Component),b=(s(34),s(35),null);function v(){var e=[];return p.a.database().ref("users").on("child_added",(function(t){e.push(t.val())})),e}var f=function(e){var t=n.a.useState([]),s=Object(r.a)(t,2),a=s[0],i=s[1];return setInterval((function(){i(v())}),900),Object(g.jsx)("div",{className:"UserComponent",children:a.map((function(t){return Object(g.jsxs)("div",{className:"Card",children:[Object(g.jsxs)("div",{className:"User",children:[Object(g.jsx)("img",{id:"img_user",src:"https://www.pinclipart.com/picdir/big/164-1640717_free-user-icon-flat-189024-download-user-icon.png"}),Object(g.jsx)("p",{onClick:function(t){e.set_message_to(t.target.textContent),e.setChatVisibility(!0),function(e){null!=b&&b.remove("User_selected"),e.target.parentNode.classList.add("User_selected"),b=e.target.parentNode.classList}(t)},id:"btn_user",children:t.userName})]}),Object(g.jsx)("p",{className:"divider_line"})]})}))})};s(36);function O(e,t,s){!function(e,t,s){p.a.database().ref("messages").push({msg:e,from:t,to:s})}(e,t,s)}var _=function(e){var t="Hii";return Object(g.jsxs)("div",{className:"SendMessageComponent",children:[Object(g.jsx)("input",{type:"text",class:"send_message",placeholder:"Send Hii to "+e.to,onChange:function(e){return t=e.target.value}}),Object(g.jsx)("button",{class:"button_send_message",onClick:function(){return O(t,e.from,e.to)},children:"Send Message"})]})};s(37);function x(){var e=[];return p.a.database().ref("messages").on("child_added",(function(t){e.push(t.val())})),e}var N=function(e){var t=n.a.useState([]),s=Object(r.a)(t,2),a=s[0],i=s[1];return setInterval((function(){i(x())}),50),Object(g.jsx)("div",{className:"UserMessages",children:a.map((function(t){return t.from==e.message_from&&t.to==e.message_to?Object(g.jsx)("p",{id:"User_message_sent",children:t.msg}):t.from==e.message_to&&t.to==e.message_from?Object(g.jsx)("p",{id:"User_message_recieved",children:t.msg}):void 0}))})},L=(s(38),{fontWeight:"900",marginLeft:"50px"});var S=function(e){return Object(g.jsx)("div",{className:"Navbar",children:Object(g.jsxs)("div",{className:"Navbar_inner_divider_first",children:[Object(g.jsx)("p",{id:"Navbar_home",style:L,children:"Newton Messenger"}),Object(g.jsxs)("p",{className:"Navbar_Content",id:"Navbar_name",children:[" Logged in as ",Object(g.jsxs)("span",{children:[" ",e.UserName]})]})]})})},C=(s(39),{fontWeight:"900",marginLeft:"50px"});var w=function(e){return Object(g.jsx)("div",{className:"Navbar_Chat",children:Object(g.jsxs)("div",{className:"Navbar_chat_inner_divider_first",children:[Object(g.jsx)("img",{id:"img_user",src:"https://www.pinclipart.com/picdir/big/164-1640717_free-user-icon-flat-189024-download-user-icon.png"}),Object(g.jsx)("p",{id:"Navbar_chat_home",style:C,children:e.recieverName})]})})};var U=function(e){var t=e.userName,s=n.a.useState(null),a=Object(r.a)(s,2),i=a[0],c=a[1],o=n.a.useState(!1),d=Object(r.a)(o,2),l=d[0],u=d[1];return Object(g.jsxs)("div",{className:"ChatComponent",children:[Object(g.jsxs)("div",{className:"div_users",children:[Object(g.jsx)(S,{UserName:t}),Object(g.jsx)(f,{set_message_to:c,setChatVisibility:u})]}),1==l?Object(g.jsxs)("div",{className:"div_chat",children:[Object(g.jsx)(w,{recieverName:i}),Object(g.jsx)("div",{className:"div_messages",children:Object(g.jsx)(N,{message_to:i,message_from:t})}),Object(g.jsx)("div",{className:"div_send_message",children:Object(g.jsx)(_,{from:e.userName,to:i})})]}):Object(g.jsx)("div",{className:"div_chat"})]})};var I=function(){var e=n.a.useState(!1),t=Object(r.a)(e,2),s=t[0],a=t[1],i=n.a.useState("null"),c=Object(r.a)(i,2),o=c[0],d=c[1];return Object(g.jsx)("div",{className:"App",children:0==s?Object(g.jsx)(h,{setLoggedIn:a,setUserName:d}):Object(g.jsx)(U,{userName:o})})},y=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,41)).then((function(t){var s=t.getCLS,a=t.getFID,n=t.getFCP,i=t.getLCP,c=t.getTTFB;s(e),a(e),n(e),i(e),c(e)}))};c.a.render(Object(g.jsx)(n.a.StrictMode,{children:Object(g.jsx)(I,{})}),document.getElementById("root")),y()}},[[40,1,2]]]);
//# sourceMappingURL=main.59e53d7f.chunk.js.map