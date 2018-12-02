(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{111:function(e,t,a){},113:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(37),o=a.n(s),c=a(10),i=a(41),l=a(1),u=a(2),d=a(4),h=a(3),m=a(5),p=a(38),f=a.n(p),g=a(12),v=a.n(g),b=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).handleTextChange=function(e){a.setState(Object(c.a)({},e.target.name,e.target.value))},a.state={value:""},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.props.submitData;return r.a.createElement("div",{className:v.a.search},r.a.createElement("input",{className:v.a.box,type:"text",name:"value",value:this.state.value,onChange:this.handleTextChange,onKeyPress:function(a){"Enter"===a.key&&(a.preventDefault(),t(e.state.value),e.setState({value:""}))}}),r.a.createElement("button",{className:v.a["btn-add"],type:"button",onClick:function(){t(e.state.value),e.setState({value:""})}},this.props.children))}}]),t}(n.Component),_=a(9),E=a.n(_),y=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).handleSelectChange=function(e){a.setState(Object(c.a)({},e.target.name,e.target.value)),a.props.updateSelect(e)},a.renderSelects=function(){var e=a.props.tagsLength;return r.a.createElement("div",{className:E.a["select-container"]},"Sort by:",r.a.createElement("select",{className:E.a.select,name:"sortBy",value:a.state.sortBy,onChange:a.handleSelectChange,disabled:!(e>0)},r.a.createElement("option",{value:"relevance"},"Relevance"),r.a.createElement("option",{value:"top"},"Top"),r.a.createElement("option",{value:"new"},"New"),r.a.createElement("option",{value:"comments"},"Comments")),"Limit:",r.a.createElement("select",{className:E.a.select,name:"limit",value:a.state.limit,onChange:a.handleSelectChange},r.a.createElement("option",{value:10},"10"),r.a.createElement("option",{value:25},"25"),r.a.createElement("option",{value:50},"50")))},a.state={sortBy:"",limit:25},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.addTag,a=e.setSubreddit,n=e.warning;return r.a.createElement("form",{className:E.a["search-form"]},r.a.createElement("div",{className:E.a["input-container"]},r.a.createElement(b,{submitData:a},"Go To Subreddit"),r.a.createElement(b,{submitData:t},"Add Tag")),n?r.a.createElement("div",{className:E.a.warning},n):null,this.renderSelects())}}]),t}(n.Component),w=a(39),j=a.n(w),O=a(7),S=a.n(O),k=11,N=13,x=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).getValidPreview=function(){var e=a.props.post.preview.images[0].resolutions.find(function(e){return e.width>=a.state.width&&e.height>=a.state.height});return e||a.props.post.preview.images[0].source},a.truncateText=function(e,t){var a=e.indexOf(" ",t);return-1===a?e:e.substring(0,a)+" ..."},a.renderBody=function(){var e=a.props.post;return r.a.createElement("div",{className:S.a.body},e.preview?r.a.createElement("a",{className:S.a["post-image"],href:e.url,target:"_blank noopener noreferrer"},r.a.createElement("img",{src:a.getValidPreview().url,alt:e.title})):r.a.createElement("div",{className:S.a.selftext},j()(e.selftext_html)))},a.renderTitle=function(){var e=a.props.post;return r.a.createElement("a",{className:S.a.title,href:"https://reddit.com".concat(e.permalink),target:"_blank noopener noreferrer"},r.a.createElement("h3",null,a.truncateText(e.title,100)))},a.renderMeta=function(){var e=a.props.post,t=new Date(1e3*e.created_utc);return r.a.createElement("div",{className:S.a["post-meta"]},r.a.createElement("a",{href:"https://reddit.com/r/".concat(e.subreddit),target:"_blank noopener noreferrer"},"r/",e.subreddit)," ","- posted by ",e.author," on ",t.toLocaleDateString()," -"," ",e.score," points -"," ",r.a.createElement("a",{href:"https://reddit.com".concat(e.permalink),target:"_blank noopener noreferrer"},e.num_comments," comments"))},a.state={span:Math.floor(Math.random()*(N-k+1))+k,width:0,height:0},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this.gridItem.getBoundingClientRect();this.setState({width:e.width,height:e.height})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{ref:function(t){return e.gridItem=t},className:S.a.post,style:{gridRowEnd:"span ".concat(this.state.span)}},this.renderBody(),r.a.createElement("div",{className:S.a["post-info"]},r.a.createElement("div",{className:S.a.padding},this.renderTitle(),this.renderMeta())))}}]),t}(n.Component),T=a(40),C=a.n(T),D=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(a=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(s)))).renderPosts=function(){var e=a.props.posts;return e.map(function(t){return t.stickied?null:r.a.createElement(x,{key:e.indexOf(t),post:t})})},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:C.a.gallery},this.renderPosts())}}]),t}(n.Component),P=a(18),B=a.n(P),L=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(a=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(s)))).renderTags=function(){var e=a.props,t=e.tags,n=e.deleteTag;return t.map(function(e){return r.a.createElement("div",{className:B.a.tag,key:e},e," ",r.a.createElement("i",{className:"material-icons",onClick:function(){return n(e)}},"remove_circle"))})},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.tags;return r.a.createElement("div",{className:B.a["tags-container"]},e?this.renderTags():null)}}]),t}(n.Component),M=a(19),A=a.n(M),R=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(a=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(s)))).renderError=function(){var e=a.props.error;return"Network Error"===e.message||404===e.response.status?r.a.createElement("h2",null,"Error: 404 not found! Did you type the subreddit name correctly?"):r.a.createElement("h2",null,"An error occured while fetching data! Is reddit.com down?")},a.renderFooter=function(){var e=a.props,t=e.isLoading,n=e.error,s=e.reachedEnd,o=e.fetchPosts;return t?r.a.createElement("h2",null,"Loading..."):s?r.a.createElement("h2",null,"Reached end!"):n?a.renderError():r.a.createElement("button",{className:A.a.btn,type:"button",name:"loadMore",onClick:o},"Load More")},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:A.a.footer},this.renderFooter())}}]),t}(n.Component),F=(a(111),"https://www.reddit.com/"),I={posts:[],after:"",reachedEnd:!1,error:null,warning:""},G=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(d.a)(this,Object(h.a)(t).call(this))).addTag=function(t){t?e.state.tags.includes(t)?e.setState({warning:"Duplicate tag detected!"}):(e.resetDefaultState(),e.setState({tags:Object(i.a)(e.state.tags).concat([t])},e.fetchPosts)):e.setState({warning:"Please enter some text first!"})},e.deleteTag=function(t){e.resetDefaultState(),e.setState({tags:e.state.tags.filter(function(e){return e!==t})},e.fetchPosts)},e.setSubreddit=function(t){e.resetDefaultState(),e.setState({subreddit:t?"r/"+t+"/":""},e.fetchPosts)},e.updateSelect=function(t){e.resetDefaultState(),e.setState(Object(c.a)({},t.target.name,t.target.value),e.fetchPosts)},e.fetchPosts=function(){e.setState({isLoading:!0}),f.a.get(e.outputUrl()).then(function(t){var a=t.data.data.children.map(function(e){return e.data}),n=t.data.data.after;e.setState({posts:e.state.posts.concat(a),after:n,isLoading:!1,reachedEnd:!n})}).catch(function(t){return e.setState({error:t,isLoading:!1})})},e.outputUrl=function(){var t=F+e.state.subreddit;return e.state.tags.length>0?"".concat(t,"search.json?q=").concat(e.outputTags(),"&limit=").concat(e.state.limit,"&sort=").concat(e.state.sortBy,"&restrict_sr=on&raw_json=1&after=").concat(e.state.after):"".concat(t,"hot.json?limit=").concat(e.state.limit,"&restrict_sr=on&raw_json=1&after=").concat(e.state.after)},e.outputTags=function(){return e.state.tags.join("+")},e.state={subreddit:"",sortBy:"relevance",limit:25,after:"",tags:[],posts:[],reachedEnd:!1,isLoading:!1,error:null,warning:""},e}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.fetchPosts()}},{key:"resetDefaultState",value:function(){this.setState(I)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Reddit Gallery Viewer -"," ",this.state.subreddit?this.state.subreddit:"Frontpage"),r.a.createElement(y,{updateSelect:this.updateSelect,tagsLength:this.state.tags.length,addTag:this.addTag,setSubreddit:this.setSubreddit,warning:this.state.warning}),r.a.createElement(L,{tags:this.state.tags,deleteTag:this.deleteTag}),r.a.createElement(D,{posts:this.state.posts}),r.a.createElement(R,{isLoading:this.state.isLoading,error:this.state.error,reachedEnd:this.state.reachedEnd,fetchPosts:this.fetchPosts}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(G,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},12:function(e,t,a){e.exports={search:"searchinput_search__27h_G",box:"searchinput_box__1V77T","btn-add":"searchinput_btn-add__38TXZ","btn-frontpage":"searchinput_btn-frontpage__37hRF"}},18:function(e,t,a){e.exports={"tags-container":"tagsdisplay_tags-container__BD71S",tag:"tagsdisplay_tag__27vhs"}},19:function(e,t,a){e.exports={footer:"footer_footer__23_xh",btn:"footer_btn__3811J"}},40:function(e,t,a){e.exports={gallery:"gallery_gallery__BcCCB"}},42:function(e,t,a){e.exports=a(113)},7:function(e,t,a){e.exports={post:"post_post__3DIaG",body:"post_body__3ta-A","post-image":"post_post-image__12cAz",selftext:"post_selftext__1UX7Q","post-info":"post_post-info__3soBC",padding:"post_padding__1fiIs",title:"post_title__1ilu_","post-meta":"post_post-meta__s1FO2"}},76:function(e,t){},9:function(e,t,a){e.exports={"search-form":"searchform_search-form__1G27x",warning:"searchform_warning__Y1ZTr","input-container":"searchform_input-container__37Qab","select-container":"searchform_select-container__2HREv",select:"searchform_select__2FyYn"}}},[[42,2,1]]]);
//# sourceMappingURL=main.e98f7957.chunk.js.map