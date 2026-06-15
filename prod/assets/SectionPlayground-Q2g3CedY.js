import{j as e}from"./jsx-runtime-Co4revrD.js";import{C as m}from"./CompImportAndUsage-Bii-HjDb.js";import{c as p,S as i,g as h}from"./localeUtils-D2w-4qCV.js";import{S as C}from"./SectionTitle-DjPwpCEG.js";import{C as u}from"./ComponentPreview-CdPAgbMI.js";import{U as g,C as b}from"./Checkbox-CR8fiqU7.js";const c=n=>{const{baseCls:a,contextCls:o}=n,s=`${a}__icon`;return e.jsx("span",{className:p(s,o)})};c.__docgenInfo={description:`@param {Object} props
@param {string} [props.baseCls] - Base CSS class name used to derive the icon class
@param {string} [props.contextCls] - Additional CSS class name(s) to apply to the icon`,methods:[],displayName:"ToggleInputRadioIcon"};const t=n=>{const{contextCls:a,isDisabled:o=!1,isChecked:s=!1,renderCheckedIcon:r=c,onChange:d=t.onChange,...l}=n;return e.jsx(g,{...l,isChecked:s,isDisabled:o,renderCheckedIcon:r,contextCls:p("bankai-radio",a),onChange:d,type:"radio"})};t.onChange=()=>Promise.resolve();t.__docgenInfo={description:`@param {Object} props
@param {string} [props.baseCls] - Base CSS class name override
@param {string} [props.contextCls] - Additional CSS class name(s) to apply to the root element
@param {string} [props.id] - ID attribute for the underlying input element
@param {string} [props.name] - Name attribute for the underlying input element
@param {string} [props.value] - Value attribute for the underlying input element
@param {boolean} [props.isChecked] - Whether the radio button is selected
@param {boolean} [props.isDisabled] - Whether the radio button is disabled
@param {Object} [props.data] - Arbitrary data object passed back in the onChange callback
@param {Function} [props.onChange] - Callback fired when the radio state changes
@param {Function} [props.renderCheckedIcon] - Custom render function for the selected state icon`,methods:[{name:"onChange",docblock:null,modifiers:["static"],params:[],returns:null}],displayName:"Radio"};const f=n=>{const{isRadio:a=!1}=n,o=a?"Radio":"Checkbox",s=`import { ${o} } from '@driponfleek/bankai-ui-form-elements';`,r=`<${o} />`;return e.jsxs(i,{children:[e.jsx(C,{children:h("titles.implementation")}),e.jsx(i,{children:e.jsx(m,{importCodeStr:s,usageCodeStr:r})})]})};f.__docgenInfo={description:`@param {Object} props
@param {boolean} [props.isRadio] - When true, generates Radio import/usage code; otherwise generates Checkbox code`,methods:[],displayName:"SectionImplementation"};const x=n=>{const{isRadio:a=!1,...o}=n,s=a?t:b;return e.jsx(i,{children:e.jsx(u,{shouldCheckA11Y:!0,children:e.jsx(s,{...o})})})};x.__docgenInfo={description:`@param {Object} props
@param {boolean} [props.isRadio] - When true, renders a Radio component in the preview; otherwise renders Checkbox`,methods:[],displayName:"SectionPlayground"};export{x as S,f as a};
