import{j as o}from"./jsx-runtime-Co4revrD.js";import{g as h,r as p}from"./iframe-BWkWyXRs.js";import{a as b}from"./colorVariantsGenStoryUtils-DzN1koFK.js";import{S as _}from"./storyConst-DFy4yjNW.js";import{C as y}from"./ColorPickerField-Cra5hseN.js";import{T as V}from"./ToggleSwitchField-BlmJ8Z0i.js";import{c as w,S as g,v,g as L}from"./localeUtils-D2w-4qCV.js";import{F as T,a as E,D as O}from"./DynamicFormRow-zLkzQOIj.js";import{C as F}from"./ColorSwatch-Dndk4nqh.js";import{C as I}from"./Callout-sPrWmWzV.js";import{B as k}from"./BankaiColorPalette-uky9RKYj.js";import{S as N}from"./StoryLayout-Z8_4Fuwz.js";/* empty css                                 */import"./preload-helper-D9Z9MdNV.js";import"./storiesConfigUtils-wXaRFw-7.js";import"./blocks-BsZfStwa.js";import"./index--di1HZ0R.js";import"./IFLFormFieldComposer-C7zSq7XU.js";import"./FFCHints-DFsukNlH.js";import"./v4-CtRu48qb.js";import"./index-BPCQv4CE.js";import"./TextInput-CAaghimd.js";import"./inputUtils-DvGj3Sbx.js";import"./FormFieldComposer-a0s2fzzV.js";import"./ToggleSwitch-CWRCvoEv.js";import"./BankaiSpinner-DzopGSY5.js";import"./shared-DXswWVrZ.js";import"./colorBaseClsConst-C97eKpzO.js";import"./Paragraph-DiQNqjyv.js";import"./BankaiTriangleAlert-mRUjsZhe.js";import"./BankaiCircleInfo-BlhFe6mE.js";import"./BankaiCircleCheck-C-JkJ3Q5.js";import"./MainContent-BYmofmsr.js";const u=t=>{const a=h("color-variants-list__item"),{item:r}=t;return o.jsx("li",{className:a,children:o.jsx(F,{...r})})};u.__docgenInfo={description:`@param {Object} props
@param {Object} [props.item] - Color swatch data object spread into ColorSwatch`,methods:[],displayName:"ColorVariantsLI"};const S=t=>{const{contextCls:a,emptyStateTitle:r,variants:n=[],shouldScrollList:s=!0}=t,e=h("color-variants-list"),i=n.length===0,m={[`${e}--scrollable`]:!i&&s,[`${e}--empty`]:i},d=p.Children.toArray(n.map(C=>o.jsx(u,{item:C}))),j=C=>o.jsx(k,{contextCls:C});return o.jsxs("div",{className:w(e,m,a),children:[!i&&o.jsx("ul",{className:`${e}__inner`,children:d}),i&&o.jsx(I,{title:r,renderIcon:j})]})};S.__docgenInfo={description:`@param {Object} props
@param {string} [props.contextCls] - Additional CSS class name(s) to apply to the root element
@param {string} [props.emptyStateTitle] - Title shown in the empty state callout
@param {boolean} [props.shouldScrollList] - Enables scrolling on the variants list
@param {Array<Object>} [props.variants] - List of color variant configurations passed to ColorSwatch`,methods:[],displayName:"ColorVariantsList"};const l=t=>{const{baseCls:a,sourceColor:r,shouldShowMaxVariants:n=!0,onColorChange:s=l.onColorChange,onToggleChange:e=l.onToggleChange}=t;return o.jsx(g,{children:o.jsx(T,{children:o.jsx(E,{children:o.jsxs(O,{contextCls:`${a}__settings-container`,children:[o.jsx(y,{value:r,color:r,labelProps:{content:"Source Color"},onChange:s,isLeftAlignedLabel:!0}),o.jsx(V,{isChecked:n,labelProps:{content:"Show Max Variants?"},onChange:e})]})})})})};l.onColorChange=()=>Promise.resolve();l.onToggleChange=()=>Promise.resolve();l.__docgenInfo={description:`@param {Object} props
@param {string} [props.baseCls] - Base BEM class applied to the settings form row container
@param {string} [props.sourceColor] - Current source color value for the color picker
@param {boolean} [props.shouldShowMaxVariants] - Whether the "Show Max Variants?" toggle is checked
@param {Function} [props.onColorChange] - Called when the color picker value changes
@param {Function} [props.onToggleChange] - Called when the toggle switch value changes`,methods:[{name:"onColorChange",docblock:null,modifiers:["static"],params:[],returns:null},{name:"onToggleChange",docblock:null,modifiers:["static"],params:[],returns:null}],displayName:"SectionForm"};const x=t=>{const{contextCls:a,variants:r=[]}=t;return o.jsx(g,{children:o.jsx(S,{contextCls:a,variants:r,shouldScrollList:!1})})};x.__docgenInfo={description:`@param {Object} props
@param {string} [props.contextCls] - Additional CSS class name(s) forwarded to ColorVariantsList
@param {Array<Object>} [props.variants] - Array of color variant objects forwarded to ColorVariantsList`,methods:[],displayName:"SectionVariants"};const f=()=>{const[t,a]=p.useState(v),[r,n]=p.useState(!0),s=h("color-variant-generator"),e=p.useMemo(()=>b(t,r?1:5),[t,r]),i=()=>{n(!r)},m=d=>{a(d)};return o.jsxs(N,{contextCls:s,title:L("stories.designers.workingWithColor.colorVariantsGenerator.title"),subTitle:_,children:[o.jsx(l,{baseCls:s,sourceColor:t,shouldShowMaxVariants:r,onColorChange:m,onToggleChange:i}),o.jsx(x,{contextCls:`${s}__variants-list`,variants:e})]})};f.__docgenInfo={description:"",methods:[],displayName:"StoryColorVariantsGen"};const go={title:"Designers/Working With Color"},c={name:"Color Variants Generator",render:f,parameters:{a11y:{disable:!0},actions:{disable:!0},options:{showPanel:!1}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'Color Variants Generator',
  render: StoryColorVariantsGen,
  parameters: {
    a11y: {
      disable: true
    },
    actions: {
      disable: true
    },
    options: {
      showPanel: false
    }
  }
}`,...c.parameters?.docs?.source}}};const uo=["ColorVariantsGenerator"];export{c as ColorVariantsGenerator,uo as __namedExportsOrder,go as default};
