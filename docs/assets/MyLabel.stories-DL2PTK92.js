import{j as S}from"./jsx-runtime-D_zvdyIk.js";const f=({label:s,size:g="normal",allCaps:x=!1,color:v,fontColor:h})=>S.jsx("span",{className:`${g} ${v}`,style:{color:h},children:x?s.toUpperCase():s});f.__docgenInfo={description:"",methods:[],displayName:"MyLabel",props:{label:{required:!0,tsType:{name:"string"},description:"Text to display"},size:{required:!1,tsType:{name:"union",raw:"'normal' | 'h1' | 'h2' | 'h3'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'h1'"},{name:"literal",value:"'h2'"},{name:"literal",value:"'h3'"}]},description:"Label size",defaultValue:{value:"'normal'",computed:!1}},allCaps:{required:!1,tsType:{name:"boolean"},description:"Capitalize all letters",defaultValue:{value:"false",computed:!1}},color:{required:!1,tsType:{name:"union",raw:"'text-primary' | 'text-secondary' | 'text-tertiary '",elements:[{name:"literal",value:"'text-primary'"},{name:"literal",value:"'text-secondary'"},{name:"literal",value:"'text-tertiary '"}]},description:"Label colors"},fontColor:{required:!1,tsType:{name:"string"},description:"font color"}}};const L={title:"UI/Labels/MyLabel",component:f,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{size:{control:"inline-radio"},fontColor:{control:"color"}}},e={args:{label:"Basic label"}},a={args:{label:"All Caps label",allCaps:!0}},r={args:{label:"Secundary label",color:"text-secondary"}},l={args:{label:"CustomColor",fontColor:"#5517ac"}};var o,t,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    label: 'Basic label'
  }
}`,...(n=(t=e.parameters)==null?void 0:t.docs)==null?void 0:n.source}}};var c,i,p;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    label: 'All Caps label',
    allCaps: true
  }
}`,...(p=(i=a.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var m,u,d;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: 'Secundary label',
    color: 'text-secondary'
  }
}`,...(d=(u=r.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var y,b,C;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    label: 'CustomColor',
    fontColor: '#5517ac'
  }
}`,...(C=(b=l.parameters)==null?void 0:b.docs)==null?void 0:C.source}}};const q=["Basic","AllCaps","Secundary","CustomColor"];export{a as AllCaps,e as Basic,l as CustomColor,r as Secundary,q as __namedExportsOrder,L as default};
