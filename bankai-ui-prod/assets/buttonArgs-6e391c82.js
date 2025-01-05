import{d as i,c as T,j as t,e as h,g as o}from"./localeUtils-d4c6437e.js";import{r as A}from"./index-c013ead5.js";import{P as e}from"./index-f9722e9b.js";import{C as L}from"./ComponentPreview-edb4c891.js";import{a as N}from"./CodeBlock-30338c7a.js";import{g as P}from"./storiesConfigUtils-656c85e3.js";import{g as q}from"./dataMassageUtils-be95490e.js";import{l as $}from"./chunk-DXNAW7Q2-0e265de5.js";import{C as D}from"./CompImportAndUsage-61fc52a0.js";import{S as W}from"./SectionTitle-5b990959.js";import{P as j}from"./Paragraph-5fdfc491.js";import{L as V}from"./LinkButton-211a553c.js";import{c as _,d as f,a as I,e as F,i as M,v as g}from"./sharedArgs-b0b1a555.js";import{s as Y,c as U,f as r,b as G}from"./argTypesUtils-aa6861f7.js";const a=n=>{const{contextCls:s,copyText:b,copiedText:y,language:C,hasLightBg:v,shouldCheckA11Y:x,shouldShowCopy:w,shouldShowLineNumbers:k,shouldWrapLines:B,codeStrModifier:d,children:c}=n,u=q(A.Children.toArray(c)),S={codeString:d?d(u):u,copyText:b,copiedText:y,language:C,shouldShowCopy:w,shouldShowLineNumbers:k,shouldWrapLines:B},m=P("component-preview-with-code-block");return i("div",{className:T(m,s),children:[t(L,{hasLightBg:v,shouldCheckA11Y:x,children:c}),t("div",{className:`${m}__code-block-container`,children:t(N,{...S})})]})};a.defaultProps={language:"jsx",hasLightBg:!1,shouldCheckA11Y:!1,shouldShowLineNumbers:!1,shouldWrapLines:!0};a.propTypes={contextCls:e.string,copiedText:e.string,copyText:e.string,language:e.string,hasLightBg:e.bool,shouldCheckA11Y:e.bool,shouldShowCopy:e.bool,shouldShowLineNumbers:e.bool,shouldWrapLines:e.bool,codeStrModifier:e.func};const ne=a;a.__docgenInfo={description:"",methods:[],displayName:"ComponentPreviewWithCodeBlock",props:{language:{defaultValue:{value:"'jsx'",computed:!1},type:{name:"string"},required:!1,description:""},hasLightBg:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},shouldCheckA11Y:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},shouldShowLineNumbers:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},shouldWrapLines:{defaultValue:{value:"true",computed:!1},type:{name:"bool"},required:!1,description:""},contextCls:{type:{name:"string"},required:!1,description:""},copiedText:{type:{name:"string"},required:!1,description:""},copyText:{type:{name:"string"},required:!1,description:""},shouldShowCopy:{type:{name:"bool"},required:!1,description:""},codeStrModifier:{type:{name:"func"},required:!1,description:""}}};const p=n=>{const{variant:s}=n;return i(h,{children:[t(W,{children:o("titles.implementation")}),i(h,{children:[t(D,{importCodeStr:`import { Button${s} } from '@driponfleek/bankai-ui-buttons';`,usageCodeStr:`<Button${s} text="Button Text" />`}),i(j,{children:["To see the full usage please visit the"," ",t(V,{text:`${o("stories.components.buttons.buttonGuidelines.title")} documentation`,onClick:$("Components/Buttons/Button","Guidelines")}),"."]})]})]})};p.defaultProps={variant:""};p.propTypes={variant:e.string};p.__docgenInfo={description:"",methods:[],displayName:"SectionImplementation",props:{variant:{defaultValue:{value:"''",computed:!1},type:{name:"string"},required:!1,description:""}}};const H={..._,text:"Button Text",type:"button",isBusy:!1,isDisabled:!1,isDynamicText:!1},l="Passes back an object containing the native event and anything that was passed to 'props.data'. When the component is disabled or busy the event handler is not called to keep the behavior aligned with the native implementation of the disabled component.",E={"aria-label":{...f["aria-label"],description:`${f["aria-label"].description} Please note that accessibility requirements require that button text describe what happens when the button is clicked, therefore when props.text is defined we will ignore this attribute to enforce best practice so that users that can see the text get the same context that users who use this attribute would get.`},...I,...Y({description:"Useful when you want to pass data back to the consumer of the button via the props.onClick handler ",propName:"data"}),...F,...M,...U({description:"Use to set the HTML button type attribute. Can be either 'submit' or 'button'. Defaults to 'button'.",options:["button","submit"],propName:"type"}),variant:{...g.variant,description:`${g.variant.description} When not defined the Default button is rendered with minimal styling and can be used as a starting point for a new button variant if one of the predefined variants do not fit your use case.`},...r({description:`${o("propDescriptions.onBlur")} ${l}`,propName:"onBlur"}),...r({description:`${o("propDescriptions.onClick")} ${l}`,propName:"onClick"}),...r({description:`${o("propDescriptions.onFocus")} ${l}`,propName:"onFocus"})},re={...H,isDestructive:!1},le={...E,...G({propName:"isDestructive"})};export{ne as C,p as S,le as a,H as b,E as c,re as d};
//# sourceMappingURL=buttonArgs-6e391c82.js.map
