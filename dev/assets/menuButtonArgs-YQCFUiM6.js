import{j as e}from"./jsx-runtime-DPRqAL_8.js";import{S as o,g as l,P as u}from"./localeUtils-Aiv3wvLF.js";import{C as d}from"./CompImportAndUsage-COyTe5cm.js";import{S as c}from"./SectionTitle-Dobuq_Hg.js";import{v as s,i as g,a as i,c as f}from"./sharedArgs-DoD0aK8F.js";import{m as x}from"./menuButtonMocks-Cmv5WGOC.js";import{f as t,a as T,s as S}from"./argTypesUtils-By8Yfhfe.js";const v=`const menuOptions = [
    {
        text: 'Edit',
        value: 'EDIT_BUTTON',
    },
    {
        text: 'Delete',
        isDestructive: true,
        value: 'DELETE_BUTTON',
    },
];`,r=a=>{const{variant:n=""}=a,p=`import { MenuButton${n} } from '@driponfleek/bankai-ui-buttons';`,m=`${v}

<MenuButton${n} menuOptions={menuOptions} />`;return e.jsxs(o,{children:[e.jsx(c,{children:l("titles.implementation")}),e.jsx(o,{children:e.jsx(d,{importCodeStr:p,usageCodeStr:m,shouldShowUsageCopy:!1})})]})};r.propTypes={variant:u.string};r.__docgenInfo={description:"",methods:[],displayName:"SectionImplementation",props:{variant:{description:"",type:{name:"string"},required:!1}}};const N={...f,text:"Menu Button Text",isDisabled:!1,shouldCloseOnBlur:!0,shouldCloseOnSelection:!0,menuOptions:x},j={...S({description:i.contextCls.description,propName:"btnContextCls"}),...i,...g,...T({propName:"menuOptions"}),variant:{...s.variant,description:`${s.variant.description} When not defined the Default button is rendered with minimal styling and can be used as a starting point for a new button variant if one of the predefined variants do not fit your use case.`},...t({action:"selected",propName:"onSelection"}),...t({action:"menu toggled",propName:"onMenuToggle"}),...t({propName:"renderMenuOption"})};export{r as S,j as a,N as b};
