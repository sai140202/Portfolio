import{j as e,m as r,s as l,p as x}from"./index-4829d323.js";import{T as m}from"./index-6c4248cd.js";import{S as p,t as h,f as i}from"./SectionWrapper-bdd1cd00.js";const j="/assets/github-3b4e1609.png",f=({index:t,name:s,description:c,tags:o,image:n,source_code_link:d})=>e.jsx(r.div,{variants:i("up","spring",t*.5,.75),children:e.jsxs(m,{options:{max:45,scale:1,speed:450},className:"bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full",children:[e.jsxs("div",{className:"relative w-full h-[230px]",children:[e.jsx("img",{src:n,alt:"project_image",className:"w-full h-full object-cover rounded-2xl"}),e.jsx("div",{className:"absolute inset-0 flex justify-end m-3 card-img_hover",children:e.jsx("div",{onClick:()=>window.open(d,"_blank"),className:"black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer",children:e.jsx("img",{src:j,alt:"source code",className:"w-1/2 h-1/2 object-contain"})})})]}),e.jsxs("div",{className:"mt-5",children:[e.jsx("h3",{className:"text-white font-bold text-[24px]",children:s}),e.jsx("p",{className:"mt-2 text-secondary text-[14px]",children:c})]}),e.jsx("div",{className:"mt-4 flex flex-wrap gap-2",children:o.map(a=>e.jsxs("p",{className:`text-[14px] ${a.color}`,children:["#",a.name]},`${s}-${a.name}`))})]})}),u=()=>e.jsxs(e.Fragment,{children:[e.jsxs(r.div,{variants:h(),children:[e.jsx("p",{className:`${l.sectionSubText} `,children:"My work"}),e.jsx("h2",{className:`${l.sectionHeadText}`,children:"Projects."})]}),e.jsx("div",{className:"w-full flex",children:e.jsx(r.p,{variants:i("","",.1,1),className:"mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]",children:"Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos in it. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively."})}),e.jsx("div",{className:"mt-20 flex flex-wrap gap-7",children:x.map((t,s)=>e.jsx(f,{index:s,...t},`project-${s}`))})]}),N=p(u,"work");export{N as default};