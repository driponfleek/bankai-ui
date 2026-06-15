import{j as r}from"./jsx-runtime-Co4revrD.js";import{c as k}from"./localeUtils-D2w-4qCV.js";import{M as u}from"./MainContent-DzNbjrSS.js";import{h as b}from"./Button-DEF2vb8O.js";const t=n=>{const{contextCls:e,text:s,data:o,onClick:i=t.onClick,renderIcon:c,children:l}=n,a="bankai-link-button",p=b(n),m=d=>{i({e:d,...o&&{data:o}})};return r.jsx("button",{...p,className:k(a,e),type:"button",onClick:m,children:r.jsx(u,{baseCls:a,text:s,renderIcon:c,children:l})})};t.onClick=()=>Promise.resolve();t.__docgenInfo={description:`@param {Object} props
@param {string} [props.contextCls] - Additional CSS class name(s) to apply to the root element
@param {string} [props.text] - Text label for the button
@param {Object} [props.data] - Arbitrary data passed to event handler callbacks
@param {Function} [props.onClick] - Callback fired on button click
@param {Function} [props.renderIcon] - Render function for the button icon`,methods:[{name:"onClick",docblock:null,modifiers:["static"],params:[],returns:null}],displayName:"LinkButton"};export{t as L};
