import{j as s}from"./jsx-runtime-Co4revrD.js";import{c as l}from"./localeUtils-D2w-4qCV.js";import{a as k}from"./inputUtils-DvGj3Sbx.js";import{B as x}from"./BankaiCheck-Cz810uGy.js";const t=n=>{const{contextCls:o,value:r,isChecked:e=!1,isDisabled:c=!1,data:p,onChange:i=t.onChange,renderCheckedIcon:h=t.renderCheckedIcon}=n,C=k(n),a="bankai-universal-toggle-input",b=u=>{i({value:r,isChecked:e,data:p,evt:u})},g={[`${a}--checked`]:e,[`${a}--disabled`]:c};return s.jsxs("span",{className:l(a,g,o),children:[s.jsx("input",{...C,className:`${a}__input`,onChange:b}),s.jsx("span",{className:`${a}__container`,children:e&&h({baseCls:a})})]})};t.onChange=()=>Promise.resolve();t.renderCheckedIcon=()=>s.jsx("span",{});t.__docgenInfo={description:`@param {Object} props
@param {string} [props.contextCls] - Additional CSS class name(s) to apply to the root element
@param {string} [props.id] - ID attribute for the hidden input element
@param {string} [props.name] - Name attribute for the hidden input element
@param {string} [props.value] - Value passed back in the onChange callback
@param {boolean} [props.isChecked] - Whether the toggle input is checked
@param {boolean} [props.isDisabled] - Whether the toggle input is disabled
@param {Object} [props.data] - Arbitrary data object passed back in the onChange callback
@param {Function} [props.onChange] - Callback fired when the toggle state changes
@param {Function} [props.renderCheckedIcon] - Custom render function for the checked state icon`,methods:[{name:"onChange",docblock:null,modifiers:["static"],params:[],returns:null},{name:"renderCheckedIcon",docblock:null,modifiers:["static"],params:[],returns:null}],displayName:"UniversalToggleInput"};const m=n=>{const{baseCls:o,contextCls:r}=n,e=`${o}__icon`;return s.jsx(x,{className:l(e,r)})};m.__docgenInfo={description:`@param {Object} props
@param {string} [props.baseCls] - Base CSS class name used to derive the icon class
@param {string} [props.contextCls] - Additional CSS class name(s) to apply to the icon`,methods:[],displayName:"ToggleInputCheckboxIcon"};const d=n=>{const{contextCls:o,isDisabled:r=!1,isChecked:e=!1,renderCheckedIcon:c=m,onChange:p=d.onChange,...i}=n;return s.jsx(t,{...i,isDisabled:r,isChecked:e,renderCheckedIcon:c,onChange:p,contextCls:l("bankai-checkbox",o),type:"checkbox"})};d.onChange=()=>Promise.resolve();d.__docgenInfo={description:`@param {Object} props
@param {string} [props.baseCls] - Base CSS class name override
@param {string} [props.contextCls] - Additional CSS class name(s) to apply to the root element
@param {string} [props.id] - ID attribute for the underlying input element
@param {string} [props.name] - Name attribute for the underlying input element
@param {string} [props.value] - Value attribute for the underlying input element
@param {boolean} [props.isChecked] - Whether the checkbox is checked
@param {boolean} [props.isDisabled] - Whether the checkbox is disabled
@param {Object} [props.data] - Arbitrary data object passed back in the onChange callback
@param {Function} [props.onChange] - Callback fired when the checkbox state changes
@param {Function} [props.renderCheckedIcon] - Custom render function for the checked state icon`,methods:[{name:"onChange",docblock:null,modifiers:["static"],params:[],returns:null}],displayName:"Checkbox"};export{d as C,t as U};
