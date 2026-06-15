import{j as m}from"./jsx-runtime-Co4revrD.js";import{c as C}from"./localeUtils-D2w-4qCV.js";import{b as x}from"./inputUtils-DvGj3Sbx.js";const e=a=>{const{autoComplete:n="on",baseCls:o,hasError:s=!1,isDisabled:r=!1,isReadOnly:p=!1,isTextarea:t=!1,shouldAutoFocus:l=!1,shouldSpellCheck:i=!1,contextCls:h,getExtantProps:c=e.getExtantProps,onChange:d=e.onChange,...b}=a,g=c({...b,autoComplete:n,hasError:s,isDisabled:r,isReadOnly:p,isTextarea:t,shouldAutoFocus:l,shouldSpellCheck:i}),f=t?"textarea":"input";return m.jsx(f,{...g,className:C(o,h),onChange:d})};e.onChange=()=>Promise.resolve();e.getExtantProps=()=>Promise.resolve();e.__docgenInfo={description:`@param {Object} props
@param {string} [props.autoComplete] - autocomplete attribute for the input
@param {string} [props.baseCls] - Base CSS class name for the input element
@param {string} [props.contextCls] - Additional CSS class name(s) to apply to the root element
@param {string} [props.id] - ID attribute for the input element
@param {string} [props.name] - Name attribute for the input element
@param {string} [props.placeholder] - Placeholder text
@param {string} [props.value] - Current value of the input
@param {boolean} [props.hasError] - Whether the input is in an error state
@param {boolean} [props.isDisabled] - Whether the input is disabled
@param {boolean} [props.isReadOnly] - Whether the input is read-only
@param {boolean} [props.isTextarea] - Whether to render as a textarea instead of an input
@param {boolean} [props.shouldAutoFocus] - Whether the input should auto-focus on mount
@param {boolean} [props.shouldSpellCheck] - Whether spell checking is enabled
@param {Function} [props.getExtantProps] - Function that filters and maps props to native input attributes
@param {Function} [props.onChange] - Callback fired when the input value changes`,methods:[{name:"onChange",docblock:null,modifiers:["static"],params:[],returns:null},{name:"getExtantProps",docblock:null,modifiers:["static"],params:[],returns:null}],displayName:"UniversalTextInput"};const u=a=>{const{autoComplete:n="on",hasError:o=!1,isDisabled:s=!1,isReadOnly:r=!1,shouldAutoFocus:p=!1,shouldSpellCheck:t=!1,onChange:l=u.onChange,...i}=a;return m.jsx(e,{...i,baseCls:"bankai-text-input",hasError:o,isDisabled:s,isReadOnly:r,autoComplete:n,shouldAutoFocus:p,shouldSpellCheck:t,onChange:l,type:"text",getExtantProps:x})};u.onChange=()=>Promise.resolve();u.__docgenInfo={description:`@param {Object} props
@param {string} [props.autoComplete] - autocomplete attribute for the input
@param {string} [props.baseCls] - Base CSS class name override
@param {string} [props.contextCls] - Additional CSS class name(s) to apply to the root element
@param {string} [props.id] - ID attribute for the input element
@param {string} [props.name] - Name attribute for the input element
@param {string} [props.placeholder] - Placeholder text
@param {string} [props.value] - Current value of the input
@param {boolean} [props.hasError] - Whether the input is in an error state
@param {boolean} [props.isDisabled] - Whether the input is disabled
@param {boolean} [props.isReadOnly] - Whether the input is read-only
@param {boolean} [props.shouldAutoFocus] - Whether the input should auto-focus on mount
@param {boolean} [props.shouldSpellCheck] - Whether spell checking is enabled
@param {Function} [props.onChange] - Callback fired when the input value changes`,methods:[{name:"onChange",docblock:null,modifiers:["static"],params:[],returns:null}],displayName:"TextInput"};export{u as T,e as U};
