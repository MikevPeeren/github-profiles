(this["webpackJsonpgithub-profiles"]=this["webpackJsonpgithub-profiles"]||[]).push([[0],{30:function(t,e,a){t.exports=a(62)},35:function(t,e,a){},38:function(t,e,a){},39:function(t,e,a){},43:function(t,e,a){},44:function(t,e,a){},62:function(t,e,a){"use strict";a.r(e);var n=a(1),r=a.n(n),c=a(25),o=a.n(c),i=(a(35),a(36),a(9)),l=a.n(i),s=a(11),u=a(10),m=(a(38),a(14)),p=a(28),d=a(29),E=(a(39),a(12)),f=function(t){var e=Object(n.useState)(""),a=Object(u.a)(e,2),c=a[0],o=a[1],i=Object(n.useRef)(null),l=t.setNewGithubUser,s=function(){o(""),i&&i.current&&""!==i.current.value?l(i.current.value):o("Error")};return Object(n.useEffect)((function(){o(t.errorText)}),[t.errorText]),r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,{className:"SearchForm"},r.a.createElement(p.a,{ref:i,onKeyPress:function(t){"Enter"===t.key&&s()},placeholder:"Github Username"}),r.a.createElement(m.a.Append,null,r.a.createElement(d.a,{onClick:function(){s()}},r.a.createElement(E.b,null)))),c&&r.a.createElement("span",{className:"SearchForm__WarningText"},c))},b=a(8),h=(a(43),a(13)),v=function(t){var e,a=t.repository;return r.a.createElement(b.a,{className:"ProjectCard"},r.a.createElement(b.a.Body,null,r.a.createElement(b.a.Title,null,a.name),r.a.createElement(b.a.Subtitle,{className:"mb-2 text-muted"},r.a.createElement("span",null,r.a.createElement(h.a,null)," ",a.forkCount),r.a.createElement("span",{className:"ProjectCard__CardSubtitle--span"},r.a.createElement(h.c,null)," ",null===(e=a.stargazers)||void 0===e?void 0:e.totalCount)),r.a.createElement(b.a.Text,null,a.description)))},C=(a(44),function(t){var e=t.login,a=t.avatarUrl,n=t.bio,c=t.repositoriesCount,o=t.watchingCount;return r.a.createElement("div",{className:"AvatarCard"},r.a.createElement(b.a,null,r.a.createElement(b.a.Img,{variant:"top",src:a}),r.a.createElement(b.a.Body,{className:"AvatarCard__Card--body"},r.a.createElement(b.a.Title,null,e),r.a.createElement(b.a.Subtitle,{className:"mb-2 text-muted"},n))),r.a.createElement("div",{className:"AvatarCard__Username"},r.a.createElement(E.a,null),r.a.createElement("span",null,e)),r.a.createElement("div",{className:"AvatarCard__Watching"},r.a.createElement(E.c,null),r.a.createElement("span",null,o," ","Followers")),r.a.createElement("div",{className:"AvatarCard__Repositories"},r.a.createElement(h.b,null),r.a.createElement("span",null,c," ","Repositories")))}),_=a(27),g=a.n(_),O=function(){return g.a.create({baseURL:"https://api.github.com/graphql",headers:{Authorization:"bearer ".concat(Object({NODE_ENV:"production",PUBLIC_URL:"/Github-Profiles",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN)}})},w=function(){var t=Object(s.a)(l.a.mark((function t(e){var a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a='\n    {\n        user(login: "'.concat(e,'" ) {\n\t\t\tlogin\n            avatarUrl\n\t\t\tbio\n\t\t\trepositories {\n\t\t\t\ttotalCount\n\t\t\t}\n\t\t\twatching {\n\t\t\t\ttotalCount\n\t\t\t}\n        }\n    }\n    '),t.next=3,O().post("",{query:a}).then((function(t){if(t.data.errors)throw new Error("Invalid Query Provided.");return t.data.data.user})).catch((function(t){throw t}));case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),N=function(){var t=Object(s.a)(l.a.mark((function t(e){var a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a='\n\t{\n\t\tuser(login: "'.concat(e,'") {\n\t\t\trepositories(orderBy: {field: CREATED_AT, direction: DESC}, first: 4) {\n\t\t\t\tedges {\n\t\t\t\t\tnode {\n\t\t\t\t\t\tid\n\t\t\t\t\t\tname\n\t\t\t\t\t\tdescription\n\t\t\t\t\t\turl\n\t\t\t\t\t\tforkCount\n\t\t\t\t\t\tstargazers {\n\t\t\t\t\t\t\ttotalCount\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\t'),t.next=3,O().post("",{query:a}).then((function(t){if(t.data.errors)throw new Error("Invalid Query Provided.");return t.data.data.user.repositories.edges})).catch((function(t){throw t}));case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),y=function(){var t=Object(n.useState)(""),e=Object(u.a)(t,2),a=e[0],c=e[1],o=Object(n.useState)({login:"",avatarUrl:"",bio:"",repositories:{totalCount:0},watching:{totalCount:0}}),i=Object(u.a)(o,2),m=i[0],p=i[1],d=Object(n.useState)([{node:{id:"",createdAt:"",name:"",description:"",url:"",forkCount:0,stargazers:{totalCount:0}}}]),E=Object(u.a)(d,2),b=E[0],h=E[1],_=Object(n.useState)(""),g=Object(u.a)(_,2),O=g[0],y=g[1];Object(n.useEffect)((function(){function t(){return(t=Object(s.a)(l.a.mark((function t(){var e;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,w(a);case 3:e=t.sent,p(e),y(""),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),y(t.t0.message);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}0!==a.length&&function(){t.apply(this,arguments)}()}),[a]),Object(n.useEffect)((function(){function t(){return(t=Object(s.a)(l.a.mark((function t(){var e;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,N(a);case 3:e=t.sent,h(e),y(""),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),y(t.t0.message);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}0!==a.length&&function(){t.apply(this,arguments)}()}),[a]);return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"GithubProfiles"},r.a.createElement("header",{className:"GithubProfiles__header"},r.a.createElement("p",null,"Github Profiles")),r.a.createElement(f,{setNewGithubUser:function(t){c(t)},errorText:O})),r.a.createElement("div",{className:"GithubContainer"},r.a.createElement("div",{className:"GithubContainer__Wrapper"},r.a.createElement("div",{className:"GithubContainer__Avatar"},m.login&&r.a.createElement(C,{login:m.login,avatarUrl:m.avatarUrl,bio:m.bio,repositoriesCount:m.repositories.totalCount,watchingCount:m.watching.totalCount})),r.a.createElement("div",{className:"GithubContainer__Repositories"},b[0].node.id&&r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"GithubContainer__Repositories--firstRow"},r.a.createElement(v,{repository:b[0].node}),r.a.createElement(v,{repository:b[1].node})),r.a.createElement("div",{className:"GithubContainer__Repositories--secondRow"},r.a.createElement(v,{repository:b[2].node}),r.a.createElement(v,{repository:b[3].node})))))))},j=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(y,null))};o.a.render(r.a.createElement(j,null),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.b02ba734.chunk.js.map