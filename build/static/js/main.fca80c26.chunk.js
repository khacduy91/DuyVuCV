(this.webpackJsonpshoppingapp=this.webpackJsonpshoppingapp||[]).push([[0],{22:function(e,t,a){},35:function(e){e.exports=JSON.parse("{}")},43:function(e,t,a){e.exports=a(69)},48:function(e,t,a){},54:function(e,t,a){},69:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(26),l=a.n(c),o=(a(48),a(5)),i=a(6),s=a(8),u=a(7),m=a(9),p=a(1),d=(a(35),a(3)),h=a(16),g=a(17),E=a(39),b=a(74),y=(a(54),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={close:!0,mobileClose:!0},a.handleClose=function(){var e=document.getElementById("menu"),t=document.getElementById("blank"),n=document.querySelector(".rightContainer");e.style.left=-.2*window.innerWidth+"px",t.style.width="0px",n.style.width="100%",n.style.transition="0.5s",a.setState(Object(p.a)({},a.state,{close:!0}))},a.handleOpen=function(){var e=document.getElementById("menu"),t=document.getElementById("blank"),n=document.querySelector(".rightContainer");e.style.left="0px",t.style.width="20%",n.style.width="80%",n.style.transition="0.5s",a.setState(Object(p.a)({},a.state,{close:!1}))},a.menuOpen=function(){a.state;var e=document.getElementById("span1"),t=document.getElementById("span2"),n=document.getElementById("span3"),r=document.getElementById("mobileMenu");t.style.display="none",e.style.transform="rotate(45deg) translateY(7px)",e.style.transition="0.2s",n.style.transform="rotate(135deg) translateY(7px)",n.style.transition="0.2s",r.style.left="0",a.setState(Object(p.a)({},a.state,{mobileClose:!a.state.mobileClose})),console.log(a.state.close)},a.menuClose=function(){a.state;var e=document.getElementById("span1"),t=document.getElementById("span2"),n=document.getElementById("span3"),r=document.getElementById("mobileMenu");t.style.display="block",e.style.transform="rotate(0) translateY(0)",e.style.transition="0.2s",n.style.transform="rotate(0) translateY(0)",n.style.transition="0.2s",r.style.left="-100%",a.setState(Object(p.a)({},a.state,{mobileClose:!a.state.mobileClose})),console.log(a.state.close)},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return window.addEventListener("scroll",(function(){var e=document.querySelector(".project").getBoundingClientRect().top,t=document.querySelector(".projecta"),a=document.querySelector(".projectb"),n=(document.querySelector(".projectc"),document.querySelector(".projectd")),r=window.innerHeight/1.3;console.log(e),console.log(r),e<r&&t.classList.add("projectAppear"),e<r&&a.classList.add("projectAppear"),e<r&&n.classList.add("projectAppear")})),r.a.createElement("div",{class:"homepage"},r.a.createElement("div",{class:"x"},r.a.createElement("button",{class:"closeButton",style:!0===this.state.close?{left:"-100px"}:{left:.2*window.innerWidth},onClick:this.handleClose},r.a.createElement(h.a,{icon:g.c})),r.a.createElement("button",{class:"openButton",style:!1===this.state.close?{left:"-100px"}:{left:"0px"},onClick:this.handleOpen},r.a.createElement(h.a,{icon:g.d}))),r.a.createElement("div",{id:"menu",class:"menu"},r.a.createElement("div",{class:"logo"},r.a.createElement("img",{src:"https://raw.githubusercontent.com/khacduy91/DuyVuCV/gh-pages/Profile.jpg"})),r.a.createElement("div",{class:"mainmenu"},r.a.createElement("div",{class:"line"},r.a.createElement("span",null)),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"https://khacduy91.github.io/DuyVuCV/"},r.a.createElement("span",null,"Home"))),r.a.createElement("li",null,r.a.createElement("a",{href:"https://khacduy91.github.io/DuyVuCV/#about"},"About")),r.a.createElement("li",null,r.a.createElement(d.b,{to:"/porfolio/list"},r.a.createElement("span",null,"My Project"))),r.a.createElement("li",null,r.a.createElement("a",{href:"https://khacduy91.github.io/DuyVuCV/#certificate"},r.a.createElement("span",null,"CERTIFICATE"))))),r.a.createElement("div",{class:"socialContact"},r.a.createElement("a",{href:"https://www.facebook.com/Assist2709"},r.a.createElement(h.a,{icon:E.a})))),r.a.createElement("a",{onClick:!1!==this.state.mobileClose?this.menuOpen:this.menuClose,class:"hamburger"},r.a.createElement("span",{id:"span1"}),r.a.createElement("span",{id:"span2"}),r.a.createElement("span",{id:"span3"})),r.a.createElement("div",{id:"mobileMenu",class:"mobileMenu"},r.a.createElement("ul",{class:"mainmenu mobile"},r.a.createElement("div",{class:"line"},r.a.createElement("span",null)),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"https://khacduy91.github.io/DuyVuCV/"},r.a.createElement("span",null,"Home"))),r.a.createElement("li",null,r.a.createElement("a",{href:"/#about"},"About")),r.a.createElement("li",null,r.a.createElement(d.b,{to:"/porfolio/list"},r.a.createElement("span",null,"My Project"))),r.a.createElement("li",null,r.a.createElement("a",{href:"/#certificate"},r.a.createElement("span",null,"CERTIFICATE")))))),r.a.createElement("div",{id:"blank"}),r.a.createElement("div",{class:"rightContainer"},r.a.createElement("section",{class:"section1"},r.a.createElement("div",{class:"intro"},r.a.createElement("p",null,"Hi! I'm Duy Vu"),r.a.createElement("span",null,"I graduated from Front End cource of Nordic Coder")),r.a.createElement("div",{class:"introImg"},r.a.createElement("img",{src:"https://raw.githubusercontent.com/khacduy91/DuyVuCV/gh-pages/Programming-removebg.png"}))),r.a.createElement("section",{class:"section2"},r.a.createElement("div",{class:"aboutMe",id:"about"},r.a.createElement("div",null,r.a.createElement("p",{class:"title"},"ABOUT ME"),r.a.createElement("p",{class:"secondTitle"},"WHO AM I?"),r.a.createElement("p",{class:"textBlock"},"Hello! My name is Khac Duy Vu and I am 29 years old. I had 5 years of exprerience as a real estate broker in Ho Chi Minh City and Phu Quoc. The job gave me the opportunity to learn about Wordpress websites to create my own sales channel. Since the first website, I found myself really interested in designing websites. That was the reason why I deciced to become a Front End Developer."),r.a.createElement("p",{class:"textBlock"},"I am highly responsible and dedicated to work. I always try to update new technical knowledge to fulfil my job successfully on schedule. I will continuously improve myself to serve my work in the best way.")),r.a.createElement("div",null,r.a.createElement("p",{class:"title"},"MY SPECIALITY"),r.a.createElement("p",{class:"secondTitle"},"MY SKILL"),r.a.createElement("div",{class:"progressBar"},r.a.createElement("p",null,"Html ",r.a.createElement(b.a,{animated:!0,striped:!0,now:70,label:"70%"})),r.a.createElement("p",null,"Css ",r.a.createElement(b.a,{animated:!0,striped:!0,variant:"danger",now:65,label:"65%"}))),r.a.createElement("div",{class:"progressBar"},r.a.createElement("p",null,"ReactJS ",r.a.createElement(b.a,{animated:!0,striped:!0,now:40,label:"40%"})),r.a.createElement("p",null,"Wordpress ",r.a.createElement(b.a,{animated:!0,striped:!0,variant:"danger",now:50,label:"50%"}))),r.a.createElement("div",{class:"progressBar"},r.a.createElement("p",null,"Photoshop ",r.a.createElement(b.a,{animated:!0,striped:!0,now:60,label:"60%"})),r.a.createElement("p",null,"Illustrator ",r.a.createElement(b.a,{animated:!0,striped:!0,variant:"danger",now:60,label:"60%"}))))),r.a.createElement("div",{class:"recentWork"},r.a.createElement("p",{class:"title"},"MY WORK"),r.a.createElement("p",{class:"secondTitle"},"RECENT WORK"),r.a.createElement("div",{class:"project"},r.a.createElement("div",{class:"projecta"},r.a.createElement("a",{href:"http://khacduyland.com/",target:"_blank"},r.a.createElement("img",{src:"https://raw.githubusercontent.com/khacduy91/DuyVuCV/gh-pages/Project1.png"}),r.a.createElement("p",{class:"projectTitle"},"khacduyland.com"))),r.a.createElement("div",{class:"projectb"},r.a.createElement("a",{href:"http://rivana.vn/",target:"_blank"},r.a.createElement("img",{src:"https://raw.githubusercontent.com/khacduy91/DuyVuCV/gh-pages/Project2.png"}),r.a.createElement("p",{class:"projectTitle"},"rivana.vn"))),r.a.createElement("div",{class:"projectd"},r.a.createElement(d.b,{to:"/porfolio/list"},r.a.createElement("img",{src:"https://raw.githubusercontent.com/khacduy91/DuyVuCV/gh-pages/Project4.png"}),r.a.createElement("p",{class:"projectTitle"},"My React Project")))))),r.a.createElement("section",{class:"section3"},r.a.createElement("div",{id:"certificate"},r.a.createElement("p",{class:"title",style:{textAlign:"center"}},"MY CERTIFICATE"),r.a.createElement("p",{class:"cerTitle"},"FRONT END DEVELOPER ",r.a.createElement("br",null),r.a.createElement("span",{style:{color:"#dc3545",fontFamily:"helvetica"}},"NORDIC ",r.a.createElement("span",{style:{color:"black"}},r.a.createElement(h.a,{icon:g.a})," CODER ",r.a.createElement(h.a,{icon:g.b})))),r.a.createElement("div",{class:"cerImg"},r.a.createElement("img",{src:"https://raw.githubusercontent.com/khacduy91/DuyVuCV/gh-pages/certificate.jpg"}))))))}}]),t}(r.a.Component)),f=a(12),v=a(10),C="https://mapi.sendo.vn",O=function(e,t){return"".concat(C,"/mob/product/search?p=").concat(e,"&q=").concat(t)},j=function(e){return{type:"FILTER",category:e}},x=function(e,t,a,n){return{type:"GET_PRODUCTS_SUCCESS",products:e,page:t,query:a,isFilter:n}},P=function(e){return{type:"GET_PRODUCTSFAIL",errMsg:e}},S=function(e){return{type:"GET_PRODUCTS_START",isNewSearch:e}},I=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return function(r){r(S(a)),fetch(O(t,e)).then((function(e){return e.json()})).then((function(a){r(x(a.data,t,e,n))})).catch((function(e){console.error(e),r(P("We have a problem with connection"))}))}},T=function(e){return function(t){fetch(function(e){return"".concat(C,"/mob/product/").concat(e,"/detail")}(e)).then((function(e){return e.json()})).then((function(e){t({type:"GET_PRODUCT",product:e})})).catch((function(e){return console.error(e)}))}},k=function(e){return{type:"LOGIN_FAIL",auth:e}},w=function(e,t){return function(a){a({type:"LOGIN_START"}),fetch("http://localhost:4000/login",{method:"POST",body:JSON.stringify({username:e,password:t}),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){e.isLogged?(localStorage.setItem("AUTH",JSON.stringify(e)),a({type:"LOGIN_SUCCESS",auth:e})):a(k(e))})).catch((function(e){console.error(e),a(k({message:e.message}))}))}},N=function(e){return{type:"GET_INDEX_CART",index:e}},_=function(e,t){return{type:"GET_INPUT_CART",num:e,index:t}},A=function(e,t){return{type:"GET_PRICE",priceIndex:e,index:t}},D=function(e){return{type:"ADD_TO_CART",index:e}},L=function(e){return{type:"GET_MIN_PRICE",minPrice:e}},R=function(e){return{type:"GET_MAX_PRICE",maxPrice:e}},M=function(e){return{type:"GET_INDEX_IMAGE",indexImage:e}},V=function(e){return{type:"ADD_TO_CART_DETAIL_PAGE",product:e}},q=function(e,t,a,n){return{type:"DELETE_CART",cart:e,totalPrice:t,inputCart:a,indexCart:n}},G=(a(22),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={username:"",password:""},a.handleChange=function(e){a.setState(Object(p.a)({},a.state,{query:e.target.value,value:e.target.value})),console.log("query "+a.state.query)},a.handleSearch=function(e){console.log("a: "+a.state.query),a.props.getProductsSendo(a.state.query,1,!0)},a.handleChangeUsername=function(e){a.setState({username:e.target.value})},a.handleChangePassword=function(e){a.setState({password:e.target.value})},a.handleSubmit=function(e){e.preventDefault(),a.props.login(a.state.username,a.state.password)},a.handleLogut=function(e){e.preventDefault(),a.props.login("logout","123456"),a.props.deleteCart()},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.getProductsSendo(this.props.query,1)}},{key:"render",value:function(){var e=this,t=this.props.auth;return r.a.createElement("div",{className:"TopMenu"},r.a.createElement("div",{className:"link"},r.a.createElement("a",{href:"/DuyVuCV/"},"My CV"),r.a.createElement(d.b,{to:"/porfolio/list"},"Product List"),r.a.createElement(d.b,{to:"/login"},"Login")),r.a.createElement("div",{className:"search"},r.a.createElement("form",{onSubmit:function(){return r.a.createElement(d.b,{to:"/porfolio/list"},e.handleSearch)}},r.a.createElement("input",{type:"text",placeholder:"type what you want",onChange:this.handleChange}),r.a.createElement(d.b,{to:"/porfolio/list"},r.a.createElement("button",{onClick:this.handleSearch},"Search")))),r.a.createElement("div",{className:"login"},!t.isLogged&&r.a.createElement("h4",{style:1==!t.isLogged?{display:"none"}:{display:"block"}},t.message),r.a.createElement("div",{className:"loginform"},r.a.createElement("input",{style:!0!==!t.isLogged?{display:"none"}:{display:"inline-block"},onChange:this.handleChangeUsername,placeholder:"username"}),r.a.createElement("input",{style:!0!==!t.isLogged?{display:"none"}:{display:"inline-block"},type:"password",onChange:this.handleChangePassword,placeholder:"password"}),r.a.createElement("button",{style:!0!==!t.isLogged?{display:"none"}:{display:"inline-block"},onClick:this.handleSubmit},"login"),r.a.createElement("button",{style:1==!t.isLogged?{display:"none"}:{display:"inline-block"},onClick:this.handleLogut},"logout"))))}}]),t}(r.a.Component)),F=Object(f.b)((function(e){return{query:e.query,value:e.value,auth:e.auth,cart:e.cart,totalPrice:e.totalPrice,inputCart:e.inputCart,indexCart:e.indexCart}}),(function(e){return Object(p.a)({},Object(v.b)({getProductsSendo:I,login:w,deleteCart:q},e))}))(G),B=a(21),U=(a(36),function(e){return isNaN(e)?"":e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")+"\u0111"}),W=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).handleAddToCart=function(e){console.log("isLogin :"+a.props.loginStatus),a.props.addToCart(e)},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.product,n=t.index;return r.a.createElement("div",{className:"product"},r.a.createElement(d.b,{to:"/detail?id=".concat(a.id,"&name=").concat(a.name,"&index=").concat(n)},r.a.createElement("img",{className:"imgProduct",src:a.img_url})),r.a.createElement("p",{className:"product-name"},a.name),r.a.createElement("p",{className:"product-price"},U(a.price)),r.a.createElement("button",{className:"addToCartDetailPage",onClick:function(){return e.handleAddToCart(n)}},r.a.createElement("span",null,"AddToCart")))}}]),t}(r.a.Component);W.defaultProps={products:[],category:""};var H=Object(f.b)((function(e){return{products:e.products,category:e.category,cart:e.cart,auth:e.auth,loginStatus:e.loginStatus}}),(function(e){return Object(p.a)({},Object(v.b)({getProductsSendo:I,addToCart:D,login:w},e))}))(W),Y=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).handleLoadmore=function(){var e=a.props,t=e.page,n=e.isFilter;t++,a.props.getProductsSendo(a.props.query,t,!1,n)},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentWillUnmount",value:function(){this.props.getProductsSendo(this.props.query,1,!0)}},{key:"render",value:function(){var e=this.props,t=e.errMsg,a=e.status,n=e.index;return console.log("index "+n),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"products"},this.props.products.map((function(e,t){return r.a.createElement(H,{product:e,index:t,key:t})}))),"start"===a&&r.a.createElement("img",{style:{marginLeft:"100px"},src:"https://raw.githubusercontent.com/khacduy91/DuyVuCV/gh-pages/newgif.gif"}),"fail"===a&&r.a.createElement("p",null,t),r.a.createElement("button",{className:"btnLoadmore",onClick:this.handleLoadmore},"Load more"))}}]),t}(r.a.Component);Y.defaultProps={products:[],category:"",cart:[],query:"",indexImage:0};var J=Object(f.b)((function(e){return{products:e.products,category:e.category,index:e.index,errMsg:e.errMsg,status:e.status,page:e.page,query:e.query,cart:e.cart,isFilter:e.isFilter}}),(function(e){return Object(p.a)({},Object(v.b)({filter:j,getProductsSendo:I},e))}))(Y),X=a(33),K=a.n(X),Q=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.product,n=t.index;return r.a.createElement(d.b,{to:"/detail?id=".concat(a.id,"&name=").concat(a.name,"&index=").concat(n)},r.a.createElement("img",{onClick:function(){return function(t){var a=t;e.props.getIndexImage(a)}(n)},style:{width:"50px"},src:"https://media3.scdn.vn"+a.images[n]}))}}]),t}(r.a.Component),$=Object(f.b)((function(e){return{indexImage:e.indexImage}}),(function(e){return Object(p.a)({},Object(v.b)({getIndexImage:M},e))}))(Q),z=a(71),Z=a(72),ee=a(73),te=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).handleAddToCart=function(){var e=a.props.product;a.props.addToCartDetailPage(e);var t=K.a.parse(window.location.search).index;a.props.getIndexCart(t)},a.previousImage=function(){var e=a.props,t=e.product,n=e.indexImage;console.log(n-1),a.props.getIndexImage(n-1==-1?n=t.images.length-1:n-1)},a.nextImage=function(){var e=a.props,t=e.product,n=e.indexImage;console.log(n+1),a.props.getIndexImage(n+1>t.images.length-1?n=0:n+1)},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=K.a.parse(window.location.search).id;this.props.getProductDetailSendo(e),console.log("ch\u1ea1y")}},{key:"render",value:function(){var e=this,t=this.props,a=t.product,n=t.indexImage;return r.a.createElement(z.a,null,a&&r.a.createElement(Z.a,{xs:1,md:2,className:"detailPage"},r.a.createElement(ee.a,{className:"rightDetailPage"},r.a.createElement("div",{className:"bigImage"},r.a.createElement("button",{className:"previousImg",onClick:this.previousImage},r.a.createElement(h.a,{icon:g.e})),r.a.createElement("button",{className:"nextImg",onClick:this.nextImage},r.a.createElement(h.a,{icon:g.f})),r.a.createElement("img",{src:"https://media3.scdn.vn"+a.images[n]})),a.images.map((function(e,t){return r.a.createElement($,{item:e,product:a,index:t})}))),r.a.createElement(ee.a,null,r.a.createElement("div",{className:"productDetail"},r.a.createElement("p",null,"category_id: ",a.category_id),r.a.createElement("p",null,"T\xean: ",a.name),r.a.createElement("p",null,"Gi\xe1: ",r.a.createElement("strong",null,a.price)),r.a.createElement("button",{className:"addToCartDetailPage",onClick:function(){return e.handleAddToCart()}},r.a.createElement("span",null,"AddToCart"))))))}}]),t}(r.a.Component);te.deafaultProps={product:void 0};var ae=Object(f.b)((function(e){return{product:e.product,index:e.index,id:e.id,loginStatus:e.loginStatus,indexImage:e.indexImage}}),(function(e){return Object(p.a)({},Object(v.b)({getProductDetailSendo:T,addToCart:D,login:w,getIndexImage:M,addToCartDetailPage:V,getIndexCart:N},e))}))(te),ne=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={username:"",password:""},a.handleChangeUsername=function(e){a.setState({username:e.target.value})},a.handleChangePassword=function(e){a.setState({password:e.target.value})},a.handleSubmit=function(e){e.preventDefault(),a.props.login(a.state.username,a.state.password)},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.auth;return e.isLogged?r.a.createElement(B.a,{to:"/porfolio"}):(console.log(e.isLogged),r.a.createElement("div",null,r.a.createElement("h1",null,"Login form"),!e.isLogged&&r.a.createElement("h4",{style:{color:"red"}},e.message),r.a.createElement("form",null,r.a.createElement("input",{onChange:this.handleChangeUsername,placeholder:"username"}),r.a.createElement("input",{type:"password",onChange:this.handleChangePassword,placeholder:"password"}),r.a.createElement("button",{onClick:this.handleSubmit},"Submit"))))}}]),t}(r.a.Component),re=Object(f.b)((function(e){return{auth:e.auth}}),(function(e){return Object(p.a)({},Object(v.b)({login:w},e))}))(ne),ce=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={query:"",minPriceValue:"",maxPriceValue:"",queryvalue:""},a.Search=function(e){a.state.query=e.target.value,a.props.getProductsSendo(a.state.query,1,!0)},a.handleChange=function(e){var t=e.target.value;a.setState(Object(p.a)({},a.state,{queryvalue:t,query:t}))},a.handleMinPriceChange=function(e){var t=parseInt(e.target.value,10);a.props.getMinPrice(t),a.setState(Object(p.a)({},a.state,{minPriceValue:t}))},a.handleMaxPriceChange=function(e){var t=parseInt(e.target.value,10);a.props.getMaxPrice(t),a.setState(Object(p.a)({},a.state,{maxPriceValue:t}))},a.handleFilterSubmit=function(){a.props.getProductsSendo(a.state.query,1,!0,!0),a.setState(Object(p.a)({},a.state,{queryvalue:"",maxPriceValue:0,minPriceValue:0}))},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",{className:"category"},r.a.createElement(d.b,{to:"/porfolio/list"},r.a.createElement("input",{type:"button",onClick:this.Search,value:"Iphone"})),r.a.createElement(d.b,{to:"/porfolio/list"},r.a.createElement("input",{type:"button",onClick:this.Search,value:"Samsung"})),r.a.createElement(d.b,{to:"/porfolio/list"},r.a.createElement("input",{type:"button",onClick:this.Search,value:"Oppo"})),r.a.createElement(d.b,{to:"/porfolio/list"},r.a.createElement("input",{type:"button",onClick:this.Search,value:"Sony"})),r.a.createElement(d.b,{to:"/porfolio/list"},r.a.createElement("input",{type:"button",onClick:this.Search,value:"Huawei"})),r.a.createElement(d.b,{to:"/porfolio/list"},r.a.createElement("input",{type:"button",onClick:this.Search,value:"Vivo"})),r.a.createElement(d.b,{to:"/porfolio/list"},r.a.createElement("input",{type:"button",onClick:this.Search,value:"Vsmart"})),r.a.createElement(d.b,{to:"/porfolio/list"},r.a.createElement("input",{type:"button",onClick:this.Search,value:"Realme"})),r.a.createElement(d.b,{to:"/porfolio/list"},r.a.createElement("input",{type:"button",onClick:this.Search,value:"Mobell"})),r.a.createElement(d.b,{to:"/porfolio/list"},r.a.createElement("input",{type:"button",onClick:this.Search,value:"Nokia"})),r.a.createElement(d.b,{to:"/porfolio/list"},r.a.createElement("input",{type:"button",onClick:this.Search,value:"BlackBerry"})),r.a.createElement(d.b,{to:"/porfolio/list"},r.a.createElement("input",{type:"button",onClick:this.Search,value:"Lenovo"})),r.a.createElement(d.b,{to:"/porfolio/list"},r.a.createElement("input",{type:"button",onClick:this.Search,value:"Coolpad"})),r.a.createElement(d.b,{to:"/porfolio/list"},r.a.createElement("input",{type:"button",onClick:this.Search,value:"Ipad"})),r.a.createElement(d.b,{to:"/porfolio/list"},r.a.createElement("input",{type:"button",onClick:this.Search,value:"Galaxy Tab"}))),r.a.createElement("div",null,r.a.createElement("form",{onSubmit:function(){return r.a.createElement(d.b,{to:"/porfolio/list"},e.handleFilterSubmit)}},r.a.createElement("div",{className:"formFilter"},r.a.createElement("input",{type:"text",onChange:this.handleChange,value:this.state.queryvalue,required:!0}),r.a.createElement("label",{className:"labelname"},r.a.createElement("span",{className:"contentname"},"T\xean s\u1ea3n ph\u1ea9m:"))),r.a.createElement("div",{className:"formFilter height"},r.a.createElement("input",{className:"price",type:"number",placeholder:"Min Price",onChange:this.handleMinPriceChange,value:this.state.minPriceValue,required:!0}),r.a.createElement("label",{className:"labelprice"},r.a.createElement("span",{className:"contentprice"},"Gi\xe1 t\u1eeb"))),r.a.createElement("div",{className:"formFilter height"},r.a.createElement("input",{className:"price",type:"number",placeholder:"Max Price",onChange:this.handleMaxPriceChange,value:this.state.maxPriceValue,required:!0}),r.a.createElement("label",{className:"labelprice"},r.a.createElement("span",{className:"contentprice"},"\u0111\u1ebfn"))),r.a.createElement(d.b,{to:"/porfolio/list"},r.a.createElement("button",{className:"submitForm",onClick:this.handleFilterSubmit},"Search")))))}}]),t}(r.a.Component),le=Object(f.b)((function(e){return{query:e.query,productsByPrice:e.productsByPrice,priceValueFilter:e.priceValueFilter,value:e.value,minPrice:e.minPrice,maxPrice:e.maxPrice}}),(function(e){return Object(p.a)({},Object(v.b)({getProductsSendo:I,getMinPrice:L,getMaxPrice:R},e))}))(ce),oe=a(14),ie=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={number:"0"},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.cart,a=e.index,n=e.indexCart;return r.a.createElement("div",null,r.a.createElement(d.b,{style:{textDecoration:"none"},to:"detail?id=".concat(t[a].id||t[a].product_id,"&name=").concat(t[a].name,"&index=").concat(n[a])},r.a.createElement("div",null,r.a.createElement("div",{className:"cartDetail"},r.a.createElement("img",{src:t[a].img_url||"https://media3.scdn.vn"+t[a].images[0]})))))}}]),t}(r.a.Component),se=Object(f.b)((function(e){return{cart:e.cart,product:e.propduct,indexCart:e.indexCart}}),(function(e){return Object(p.a)({},Object(v.b)({addToCart:D,getPrice:A},e))}))(ie),ue=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).inputChange=function(e,t){var n=t.target.value,r=a.props.cart[e].price*n;a.props.getPrice(r,e),a.props.getInputCart(n,e)},a.handleDelete=function(e){var t=a.props,n=t.cart,r=t.totalPrice,c=t.inputCart,l=t.indexCart;n.splice(e,1),r.splice(e,1),c.splice(e,1),l.splice(e,1),a.setState(Object(p.a)({},a.state,{cart:Object(oe.a)(n),totalPrice:Object(oe.a)(r)}))},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){for(var e=this,t=this.props,a=t.cart,n=t.totalPrice,c=t.inputCart,l=0,o=0;o<n.length;o++)l+=n[o];return r.a.createElement("div",{className:"cart"},r.a.createElement("div",{style:0!=a.length?{display:"block"}:{display:"none"}},r.a.createElement("strong",{style:0!=a.length?{display:"block"}:{display:"none"}},"Gi\u1ecf h\xe0ng c\u1ee7a b\u1ea1n"),r.a.createElement("table",{style:{width:"100%"}},this.props.cart.map((function(t,a){return r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("p",{className:"item-name"},t.name)),r.a.createElement("td",null),r.a.createElement("td",null,r.a.createElement("button",{type:"button",onClick:function(){return e.handleDelete(a)},className:"deleteButton"},r.a.createElement(h.a,{icon:g.g})))),r.a.createElement("tr",null,r.a.createElement("td",null," ",r.a.createElement(se,{cart:t,index:a})),r.a.createElement("td",{index:a},r.a.createElement("input",{className:"inputCart",type:"number",defaultValue:"1",onChange:function(t){return e.inputChange(a,t)},value:c[a]})),r.a.createElement("td",{className:"price"},U(n[a]))))}))),r.a.createElement("p",{style:(a.length,{textAlign:"right"})},"Total: ",r.a.createElement("strong",null,U(l))),r.a.createElement("hr",{className:"hr",style:0!=a.length?{display:"block"}:{display:"none"}})))}}]),t}(r.a.Component),me=Object(f.b)((function(e){return{cart:e.cart,totalPrice:e.totalPrice,inputCart:e.inputCart,indexCart:e.indexCart}}),(function(e){return Object(p.a)({},Object(v.b)({addToCart:D,getPrice:A,getInputCart:_},e))}))(ue),pe=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,null,r.a.createElement(z.a,null,r.a.createElement(Z.a,null,r.a.createElement(ee.a,null,r.a.createElement(F,null))),r.a.createElement(Z.a,{xs:1,md:3,className:"grid-container"},r.a.createElement(ee.a,{md:3,className:"leftCol"},r.a.createElement(le,null)),r.a.createElement(ee.a,{md:6,wider:"true"},r.a.createElement(B.d,null,r.a.createElement(B.b,{exact:!0,path:"/porfolio/list",component:J}),r.a.createElement(B.b,{exact:!0,path:"/login",component:re}),r.a.createElement(B.b,{exact:!0,path:"/detail",component:ae}))),r.a.createElement(ee.a,{md:3},r.a.createElement(me,null))))))}}]),t}(r.a.Component),de=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,null,r.a.createElement(B.d,null,r.a.createElement(B.b,{exact:!0,path:"/porfolio/list",component:pe}),r.a.createElement(B.b,{path:"/",component:y}))))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var he={products:[],productsByPrice:[],category:"",product:void 0,index:-1,id:"",status:"Start Loading",page:1,cart:[],query:"ao khoac",auth:{isLogged:!1,message:""},loginStatus:!1,totalPrice:[],minPrice:0,maxPrice:0,inputCart:[],indexCart:[],value:"",indexImage:0,isFilter:!1},ge=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:he,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FILTER":return Object(p.a)({},e,{category:t.category});case"GET_PRODUCT":return Object(p.a)({},e,{product:t.product});case"GET_PRODUCTS_START":return Object(p.a)({},e,{products:t.isNewSearch?[]:e.products,status:"start",errMsg:""});case"GET_PRODUCTS_SUCCESS":var a=e.minPrice,n=e.maxPrice,r=[].concat(Object(oe.a)(e.products),Object(oe.a)(t.products)),c=r.filter((function(e){return parseInt(e.price,10)<n})),l=c.filter((function(e){return parseInt(e.price,10)>a}));return console.log(t.isFilter),Object(p.a)({},e,{products:t.isFilter?l:r,status:"success",page:t.page,query:t.query,isFilter:t.isFilter});case"GET_PRODUCTSFAIL":return Object(p.a)({},e,{errMsg:t.errMsg,status:"fail"});case"ADD_TO_CART":var o=e.cart,i=e.products,s=e.totalPrice,u=e.inputCart,m=e.indexCart;console.log(i),console.log("index"+t.index);var d=i[t.index];console.log(d),o.push(d),s.push(d.price),u.push(1),m.push(t.index);for(var h=0;h<o.length-1;h++){var g=o[h];g.product_id!=d.product_id&&g.id!=d.id||(o.splice(o.length-1,1),u[h]=u[h]+1,u.splice(u.length-1,1),s[h]=s[h]+s[s.length-1],s.splice(s.length-1,1),m.splice(m.length-1,1))}return Object(p.a)({},e,{cart:Object(oe.a)(o),totalPrice:Object(oe.a)(s)});case"GET_INDEX_CART":var E=e.indexCart;return E.push(t.index),Object(p.a)({},e,{indexCart:Object(oe.a)(E)});case"GET_INPUT_CART":var b=e.inputCart,y=parseInt(t.num,10);return b[t.index]=y,Object(p.a)({},e,{inputCart:Object(oe.a)(b)});case"LOGIN_START":return Object(p.a)({},e,{auth:{isLogged:!1,message:""}});case"LOGIN_SUCCESS":return Object(p.a)({},e,{auth:t.auth,loginStatus:!0});case"LOGIN_FAIL":return Object(p.a)({},e,{auth:t.auth,loginStatus:!1});case"LOGIN_RESET":return Object(p.a)({},e,{auth:t.auth});case"GET_PRICE":var f=e.totalPrice;return f[t.index]=t.priceIndex,Object(p.a)({},e,{totalPrice:Object(oe.a)(f)});case"GET_MIN_PRICE":return Object(p.a)({},e,{minPrice:t.minPrice});case"GET_MAX_PRICE":return Object(p.a)({},e,{maxPrice:t.maxPrice});case"GET_INDEX_IMAGE":return Object(p.a)({},e,{indexImage:t.indexImage});case"ADD_TO_CART_DETAIL_PAGE":var v=e.cart,C=e.totalPrice,O=e.inputCart,j=e.indexCart;v.push(t.product),C.push(t.product.price),O.push(1);for(var x=0;x<v.length-1;x++){var P=v[x];P.id==t.product.id&&(v.splice(v.length-1,1),O[x]=O[x]+1,O.splice(O.length-1,1),C[x]=C[x]+C[C.length-1],C.splice(C.length-1,1),j.splice(j.length-1,1))}return Object(p.a)({},e,{cart:Object(oe.a)(v)});case"DELETE_CART":return Object(p.a)({},e,{cart:[],totalPrice:[],inputCart:[],indexCart:[]});default:return e}},Ee=[a(42).a,function(e){var t=e.getState;return function(e){return function(a){console.log("will dispatch",a);var n=e(a);return console.log("state after dispatch",t()),n}}}],be=Object(v.c)(v.a.apply(void 0,Ee)),ye=Object(v.d)(ge,be);l.a.render(r.a.createElement(f.a,{store:ye},r.a.createElement(de,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[43,1,2]]]);
//# sourceMappingURL=main.fca80c26.chunk.js.map