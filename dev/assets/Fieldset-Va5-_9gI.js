import{j as t}from"./jsx-runtime-Co4revrD.js";import{c as f}from"./localeUtils-D2w-4qCV.js";const g=o=>{const{contextCls:a,formId:s,name:n,isDisabled:r=!1,shouldIndentContent:d=!1,legendProps:l,legend:i,children:p,...m}=o,e="bankai-fieldset",c={...s&&{form:s},...n&&{name:n},disabled:r,...m},h={[`${e}--indent`]:d};return t.jsxs("fieldset",{className:f(e,h,a),...c,children:[t.jsx("legend",{...l,className:`${e}__legend`,children:i}),t.jsx("div",{className:`${e}__content-container`,children:p})]})};g.__docgenInfo={description:`@param {Object} props
@param {string} [props.contextCls] - Additional CSS class name(s) to apply to the root element
@param {string} [props.formId] - Associates the fieldset with a form by ID
@param {string} [props.name] - Name attribute for the fieldset
@param {boolean} [props.isDisabled] - Whether the fieldset and all its controls are disabled
@param {boolean} [props.shouldIndentContent] - Whether to indent the fieldset content
@param {Object} [props.legendProps] - Additional props to spread onto the legend element
@param {string|React.ReactElement} props.legend - Content rendered inside the legend element`,methods:[],displayName:"Fieldset"};export{g as F};
