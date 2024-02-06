"use strict";(self.webpackChunkdashboard=self.webpackChunkdashboard||[]).push([[632],{8033:(e,s,t)=>{t.d(s,{F:()=>l,Z:()=>c});var i=t(1087),r=t(184);function a(e){return(0,r.jsxs)("div",{className:"flex flex-row justify-start items-center",children:[(0,r.jsx)("h2",{className:"card-title",children:(0,r.jsx)("a",{href:"http://".concat(e.liveLink),target:"_blank",rel:"noreferrer",className:" hover:text-primary hover: duration-75",children:e.title})}),(0,r.jsx)("div",{children:e.isLive&&(0,r.jsx)("span",{className:"badge badge-success animate-pulse duration-75 m-1",children:"Live"})})]})}function l(e){return{title:e.projectName,description:e.projectDesc,icon:e.projectIcon,image:e.images&&e.images.length>0?e.images[0]:"",path:"preview/"+e.projectId,projectLiveLink:e.projectLink,githubLink:e.githubLink,isLive:e.isLive,completed:e.projectCompleted}}const c=function(e){const s=e.data;return(0,r.jsxs)("div",{className:"card w-[360px] bg-base-100 shadow-xl outline-double",children:[(0,r.jsx)("figure",{children:s.image?(0,r.jsx)("img",{src:s.image,alt:s.title,loading:"lazy"}):(0,r.jsx)("div",{className:"skeleton w-[360px] h-[200px] mx-2 mt-2"})}),(0,r.jsxs)("div",{className:"card-body",children:[(0,r.jsxs)("div",{className:"flex flex-row justify-between items-center p-2 drop-shadow-lg border rounded-xl",children:[(0,r.jsx)(a,{title:s.title,isLive:s.isLive,liveLink:s.projectLiveLink}),s.icon?(0,r.jsx)("img",{src:s.icon,alt:s.title,className:"w-10 h-10"}):(0,r.jsx)("div",{className:"skeleton w-16 h-16 rounded-full"})]}),(0,r.jsx)("p",{children:s.description}),(0,r.jsxs)("div",{className:"flex flex-row items-center justify-between",children:[(0,r.jsx)("progress",{className:"progress progress-primary w-[80%] mt-2",value:s.completed,max:"100"}),(0,r.jsxs)("div",{className:"text-primary text-lg font-semibold",children:[s.completed,"%"]})]}),(0,r.jsxs)("div",{className:"card-actions justify-between mt-2 ",children:[(0,r.jsx)("a",{href:s.githubLink,target:"_blank",className:"btn btn-outline",rel:"noreferrer",children:"Project link"}),(0,r.jsx)(i.OL,{to:s.path,className:"btn btn-outline btn-primary",children:"See preview"})]})]})]})}},5632:(e,s,t)=>{t.r(s),t.d(s,{default:()=>n});var i=t(4420),r=t(8033),a=t(2791),l=t(7689),c=t(184);const n=function(e){const s=(0,i.v9)((e=>e.projects)),t=s[0].projectId,[n,d]=(0,a.useState)(t),{id:o}=(0,l.UO)();return(0,a.useEffect)((()=>{d(o||t)}),[]),(0,c.jsxs)("div",{className:"overflow-auto ",children:[(0,c.jsxs)("select",{className:"select select-bordered w-full max-w-xs",onChange:e=>{d(e.target.value)},children:[(0,c.jsx)("option",{disabled:!0,selected:!0,children:"Who shot first?"}),s.map(((e,s)=>(0,c.jsx)("option",{value:e.projectId,children:e.projectName},s)))]}),(0,c.jsx)("div",{className:"m-2",children:(0,c.jsx)("div",{className:" gap-2 flex flex-wrap justify-around",children:(0,c.jsx)("div",{children:(0,c.jsx)(r.Z,{data:(0,r.F)(s.find((e=>e.projectId===n)))})})})})]})}}}]);
//# sourceMappingURL=632.530758e6.chunk.js.map