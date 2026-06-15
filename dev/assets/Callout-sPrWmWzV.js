import{j as t}from"./jsx-runtime-Co4revrD.js";import{c as C}from"./localeUtils-D2w-4qCV.js";import{B as i}from"./BankaiTriangleAlert-mRUjsZhe.js";import{B as I}from"./BankaiCircleInfo-BlhFe6mE.js";import{B as h}from"./BankaiCircleCheck-C-JkJ3Q5.js";import{M as f}from"./MainContent-BYmofmsr.js";const g={AFFIRMATIVE:"AFFIRMATIVE",CAUTIONARY:"CAUTIONARY",DANGER:"DANGER",INFO:"INFO"},{AFFIRMATIVE:A,INFO:x,CAUTIONARY:N,DANGER:R}=g,v={[A]:h,[x]:I,[N]:i,[R]:i},p=e=>{const{contextCls:n,variant:a}=e,o=v[a]||i;return t.jsx(o,{contextCls:n})};p.__docgenInfo={description:`@param {Object} props
@param {string} [props.contextCls] - Additional CSS class name(s) to apply to the icon
@param {string} [props.variant] - Variant key that determines which status icon to render`,methods:[],displayName:"CalloutStatusIcon"};const m=e=>{const{baseCls:n,variant:a,renderIcon:o=p}=e,s=`${n}__icon`;return t.jsx("div",{className:`${n}__icon-container`,children:t.jsx(o,{variant:a,contextCls:s})})};m.__docgenInfo={description:`@param {Object} props
@param {string} [props.baseCls] - Base CSS class name passed from the parent Callout component
@param {string} [props.variant] - Visual variant used to select the default status icon
@param {Function} [props.renderIcon] - Custom render function for the icon; defaults to CalloutStatusIcon`,methods:[],displayName:"CalloutIcon"};const j=e=>{const{contextCls:n,renderIcon:a,variant:o,title:s,headingLvl:d=2,msg:c,children:l}=e,r="bankai-callout",u=!!a||!!o;return t.jsx("div",{className:C(r,n),children:t.jsxs("div",{className:`${r}__inner`,children:[!l&&t.jsxs(t.Fragment,{children:[u&&t.jsx(m,{baseCls:r,variant:o,renderIcon:a}),(s||c)&&t.jsx(f,{baseCls:r,msg:c,title:s,headingLvl:d})]}),l]})})};j.__docgenInfo={description:`@param {Object} props
@param {string} [props.contextCls] - Additional CSS class name(s) to apply to the root element
@param {string|React.ReactElement} [props.msg] - Body content of the callout
@param {string|React.ReactElement} [props.title] - Heading content of the callout
@param {string} [props.variant] - Visual variant that determines the status icon (affirmative, cautionary, danger, info)
@param {number} [props.headingLvl] - Heading level for the title
@param {Function} [props.renderIcon] - Custom render function for the callout icon`,methods:[],displayName:"Callout"};export{j as C};
