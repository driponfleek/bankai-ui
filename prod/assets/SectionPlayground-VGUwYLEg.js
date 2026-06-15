import{j as t}from"./jsx-runtime-Co4revrD.js";import{C as d}from"./CompImportAndUsage-Bii-HjDb.js";import{S as i,g as h}from"./localeUtils-D2w-4qCV.js";import{I as n}from"./storyConst-BYTaXXPf.js";import{S as g}from"./SectionTitle-DjPwpCEG.js";import{U as f,T as C}from"./TextInput-CAaghimd.js";import{T as b}from"./Textarea-t72PNrzd.js";import{g as x}from"./inputUtils-DvGj3Sbx.js";import{C as P}from"./ComponentPreview-CdPAgbMI.js";const s=o=>{const{autoComplete:r="off",hasError:e=!1,isDisabled:a=!1,isProtected:p=!0,isReadOnly:m=!1,shouldAutoFocus:l=!1,onChange:c=s.onChange,...u}=o;return t.jsx(f,{...u,autoComplete:r,hasError:e,isDisabled:a,isProtected:p,isReadOnly:m,shouldAutoFocus:l,onChange:c,baseCls:"bankai-protected-input",getExtantProps:x})};s.onChange=()=>Promise.resolve();s.__docgenInfo={description:`@param {Object} props
@param {string} [props.autoComplete] - autocomplete attribute for the input
@param {string} [props.baseCls] - Base CSS class name override
@param {string} [props.contextCls] - Additional CSS class name(s) to apply to the root element
@param {string} [props.id] - ID attribute for the input element
@param {string} [props.name] - Name attribute for the input element
@param {string} [props.placeholder] - Placeholder text
@param {string} [props.value] - Current value of the input
@param {boolean} [props.hasError] - Whether the input is in an error state
@param {boolean} [props.isDisabled] - Whether the input is disabled
@param {boolean} [props.isProtected] - Whether to render as a password input
@param {boolean} [props.isReadOnly] - Whether the input is read-only
@param {boolean} [props.shouldAutoFocus] - Whether the input should auto-focus on mount
@param {Function} [props.onChange] - Callback fired when the input value changes`,methods:[{name:"onChange",docblock:null,modifiers:["static"],params:[],returns:null}],displayName:"ProtectedInput"};const I=o=>{const{compName:r}=o;let e;switch(r){case n.PROTECTED:e="ProtectedInput";case n.TEXTAREA:e="Textarea";default:e="TextInput"}const a=`import { ${e} } from '@driponfleek/bankai-ui-form-elements';`,p=`<${e} />`;return t.jsxs(i,{children:[t.jsx(g,{children:h("titles.implementation")}),t.jsx(i,{children:t.jsx(d,{importCodeStr:a,usageCodeStr:p})})]})};I.__docgenInfo={description:`@param {Object} props
@param {string} [props.compName] - Component name key used to select the appropriate import/usage code string`,methods:[],displayName:"SectionImplementation"};const S=o=>{switch(o){case n.PROTECTED:return s;case n.TEXTAREA:return b;default:return C}},T=o=>{const{compName:r,...e}=o,a=S(r);return t.jsx(i,{children:t.jsx(P,{shouldCheckA11Y:!0,children:t.jsx(a,{...e})})})};T.__docgenInfo={description:`@param {Object} props
@param {string} [props.compName] - Component name key used to resolve the playground component`,methods:[],displayName:"SectionPlayground"};export{s as P,T as S,I as a};
