import{j as n,c as y,d as l}from"./localeUtils-d4c6437e.js";import{r as m}from"./index-c013ead5.js";import{P as a}from"./index-f9722e9b.js";import{D as u,F as f,a as h}from"./DynamicFormRow-4f63fb60.js";const t=o=>{const{contextCls:s,children:i}=o;return n("div",{className:y("bankai-form-layout-actions-container",s),children:i})};t.propTypes={contextCls:a.string};const C=t;t.__docgenInfo={description:"",methods:[],displayName:"FormLayoutActionsContainer",props:{contextCls:{type:{name:"string"},required:!1,description:""}}};const d=o=>{const{children:s}=o,i=m.Children.toArray(s).map(r=>r.props.shouldRetainLayout?r:n(u,{children:r},r==null?void 0:r.key));return n(f,{...o,children:i})},F=d;d.__docgenInfo={description:"",methods:[],displayName:"DynamicFormSection"};const c=o=>{const{renderActions:s,contextCls:i,children:r}=o,p=m.Children.toArray(r).map(e=>e.props.shouldRetainLayout?e:n(F,{children:e},e==null?void 0:e.key));return l(h,{contextCls:i,children:[p,s&&n(C,{children:s()})]})};c.propTypes={contextCls:a.string,renderActions:a.func};const g=c;c.__docgenInfo={description:"",methods:[],displayName:"DynamicFormLayout",props:{contextCls:{type:{name:"string"},required:!1,description:""},renderActions:{type:{name:"func"},required:!1,description:""}}};export{g as D,F as a};
//# sourceMappingURL=DynamicFormLayout-42667080.js.map
