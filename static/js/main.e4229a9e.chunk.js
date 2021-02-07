(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{12:function(e,t,a){e.exports={Button:"Button_Button__27JFN",Button_container:"Button_Button_container__1yER2"}},14:function(e,t,a){e.exports={Overlay:"Modal_Overlay__3oepY",Modal:"Modal_Modal__3uZHM"}},25:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__3q1Ke","ImageGalleryItem-image":"ImageGalleryItem_ImageGalleryItem-image__32iek"}},26:function(e,t,a){e.exports={ImageGallery:"ImageGalleryList_ImageGallery__1KOxl"}},32:function(e,t,a){},73:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a(0),o=a.n(r),c=a(9),i=a.n(c),s=(a(32),a(4)),l=a(5),u=a(7),m=a(6),h=a(10),d=(a(33),a(8)),p=a.n(d),g=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={imageName:""},e.handleNameChange=function(t){e.setState({imageName:t.currentTarget.value.toLowerCase()})},e.handleSubmit=function(t){t.preventDefault(),""!==e.state.imageName.trim()?(e.props.onSubmit(e.state.imageName),e.setState({imageName:""})):h.b.info("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0447\u0442\u043e-\u043d\u0438\u0431\u0443\u0434\u044c \u0432 \u0441\u0442\u0440\u043e\u043a\u0443 \u043f\u043e\u0438\u0441\u043a\u0430")},e}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsx)("header",{className:p.a.Searchbar,children:Object(n.jsxs)("form",{onSubmit:this.handleSubmit,className:p.a.SearchForm,children:[Object(n.jsx)("button",{type:"submit",className:p.a.SearchForm_button,children:Object(n.jsx)("span",{className:p.a.SearchForm_button_label,children:"Search"})}),Object(n.jsx)("input",{className:p.a.SearchForm_input,type:"text",value:this.state.imageName,onChange:this.handleNameChange,autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})}}]),a}(r.Component),b=a(15),j=a(24),f=a.n(j),O=a(12),_=a.n(O);function y(e){var t=e.onLoad;return Object(n.jsx)("div",{className:_.a.Button_container,children:Object(n.jsx)("button",{className:_.a.Button,type:"button",onClick:t,children:"Load more"})})}var v=a(13),S=a.n(v);S.a.defaults.baseURL="https://pixabay.com/api/";var x=function(e,t){return S.a.get("?q=".concat(e,"\n         &page=").concat(t,"&key=").concat("19211100-bdfc54b640ca60be4b98fccbf","&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.data.hits})).catch((function(e){return console.log(e)}))},N=a(25),w=a.n(N),I=a(14),k=a.n(I),C=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleKeyDown=function(t){console.log(t.code),"Escape"===t.code&&(console.log(e.onModalOpen),e.props.onClose())},e.handleBackdropClick=function(t){t.currentTarget===t.target&&e.props.onClose()},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){var e=this.props,t=e.src,a=e.alt;return Object(n.jsx)("div",{className:k.a.Overlay,onClick:this.handleBackdropClick,children:Object(n.jsx)("div",{className:k.a.Modal,onClick:this.handleKeyDown,children:Object(n.jsx)("img",{src:t,alt:a})})})}}]),a}(r.Component),F=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={isModalOpen:!1},e.onModalOpen=function(){e.setState((function(e){return{isModalOpen:!e.isModalOpen}}))},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props,t=e.alt,a=e.largeUrl,r=e.src,o=this.state.isModalOpen;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("li",{className:w.a.ImageGalleryItem,onClick:this.onModalOpen,children:Object(n.jsx)("img",{src:r,alt:t,className:"ImageGalleryItem-image"})}),o&&Object(n.jsx)(C,{src:a,onClose:this.onModalOpen})]})}}]),a}(r.Component),M=a(26),B=a.n(M);function L(e){var t=e.images;return Object(n.jsx)("ul",{className:B.a.ImageGallery,children:t.map((function(e){var t=e.id,a=e.webformatURL,r=e.largeImageURL;return Object(n.jsx)(F,{src:a,largeUrl:r},t)}))})}a(72);var G=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={images:[],isLoading:!1,error:null,page:1},e.onLoadMore=function(){return e.setState((function(e){return{page:e.page+1}}))},e}return Object(l.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=this;e.imageName!==this.props.imageName&&(this.setState({isLoading:!0}),x(this.props.imageName,this.state.page).then((function(e){return a.setState({images:e})})).then((function(){return a.setState({isLoading:!1})})).catch((function(e){return a.setState({error:e})})).finally((function(){return window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}))),t.page!==this.state.page&&x(this.props.imageName,this.state.page).then((function(e){return a.setState((function(t){return{images:[].concat(Object(b.a)(t.images),Object(b.a)(e))}}))})).then((function(){return a.setState({isLoading:!1})})).catch((function(e){return a.setState({error:e})})).finally((function(){return window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}))}},{key:"render",value:function(){var e=this.state,t=e.images,a=e.isLoading,r=e.error;return Object(n.jsxs)(n.Fragment,{children:[r&&Object(n.jsx)("p",{children:r.message}),a&&Object(n.jsx)(f.a,{type:"Puff",color:"#00BFFF",height:100,width:100,timeout:3e3}),t.length>0&&Object(n.jsx)(L,{images:t}),t.length>0&&Object(n.jsx)(y,{onLoad:this.onLoadMore})]})}}]),a}(r.Component),U=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={imageName:""},e.formSubmitHandler=function(t){e.setState({imageName:t}),console.log(t)},e}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(g,{onSubmit:this.formSubmitHandler}),Object(n.jsx)(G,{imageName:this.state.imageName}),Object(n.jsx)(h.a,{position:"top-left"})]})}}]),a}(r.Component);i.a.render(Object(n.jsx)(o.a.StrictMode,{children:Object(n.jsx)(U,{})}),document.getElementById("root"))},8:function(e,t,a){e.exports={Searchbar:"SearchBar_Searchbar__VfzMq",SearchForm:"SearchBar_SearchForm__1sTzb",SearchForm_button:"SearchBar_SearchForm_button__2jGgs",SearchForm_button_label:"SearchBar_SearchForm_button_label__38COm",SearchForm_input:"SearchBar_SearchForm_input__1HIU0"}}},[[73,1,2]]]);
//# sourceMappingURL=main.e4229a9e.chunk.js.map