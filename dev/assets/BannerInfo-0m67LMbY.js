import{j as n}from"./jsx-runtime-Co4revrD.js";import{c as l}from"./localeUtils-D2w-4qCV.js";import{M as d}from"./MainContent-BYmofmsr.js";const a=r=>{const{baseCls:o,renderIcon:t=a.renderIcon}=r,e=`${o}__icon`;return n.jsx("div",{className:`${e}-container`,children:t({contextCls:e})})};a.renderIcon=()=>"";a.__docgenInfo={description:`@param {Object} props
@param {string} [props.baseCls] - Base CSS class name passed from the parent Banner component
@param {Function} [props.renderIcon] - Custom render function for the icon`,methods:[{name:"renderIcon",docblock:null,modifiers:["static"],params:[],returns:null}],displayName:"BannerIcon"};const m=r=>{const{contextCls:o,headingLvl:t=3,title:e,msg:c,renderIcon:i,children:p}=r,s="bankai-banner";return n.jsx("div",{className:l(s,o),children:n.jsxs("div",{className:`${s}__inner`,children:[!p&&n.jsxs(n.Fragment,{children:[i&&n.jsx(a,{baseCls:s,renderIcon:i}),(e||c)&&n.jsx(d,{baseCls:s,msg:c,title:e,headingLvl:t})]}),p]})})};m.__docgenInfo={description:`@param {Object} props
@param {string} [props.contextCls] - Additional CSS class name(s) to apply to the root element
@param {string|React.ReactElement} [props.msg] - Body content of the banner
@param {string|React.ReactElement} [props.title] - Heading content of the banner
@param {number} [props.headingLvl] - Heading level for the title
@param {Function} [props.renderIcon] - Custom render function for the banner icon`,methods:[],displayName:"Banner"};const f=r=>{const{contextCls:o,...t}=r;return n.jsx(m,{...t,contextCls:l("bankai-banner--info",o)})};f.__docgenInfo={description:`@param {Object} props
@param {string} [props.contextCls] - Additional CSS class name(s) to apply to the root element`,methods:[],displayName:"BannerInfo"};export{m as B,f as a};
