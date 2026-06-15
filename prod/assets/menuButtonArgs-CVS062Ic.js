import{j as t}from"./jsx-runtime-Co4revrD.js";import{C as m}from"./CompImportAndUsage-Bii-HjDb.js";import{S as o,g as u}from"./localeUtils-D2w-4qCV.js";import{S as c}from"./SectionTitle-DjPwpCEG.js";import{v as s,i as d,a,c as l}from"./sharedArgs-CXlVRz76.js";import{m as g}from"./menuButtonMocks-BYjEDnAF.js";import{f as e,a as f,s as x}from"./argTypesUtils-By8Yfhfe.js";const S=`const menuOptions = [
    {
        text: 'Edit',
        value: 'EDIT_BUTTON',
    },
    {
        text: 'Delete',
        isDestructive: true,
        value: 'DELETE_BUTTON',
    },
];`,h=i=>{const{variant:n=""}=i,r=`import { MenuButton${n} } from '@driponfleek/bankai-ui-buttons';`,p=`${S}

<MenuButton${n} menuOptions={menuOptions} />`;return t.jsxs(o,{children:[t.jsx(c,{children:u("titles.implementation")}),t.jsx(o,{children:t.jsx(m,{importCodeStr:r,usageCodeStr:p,shouldShowUsageCopy:!1})})]})};h.__docgenInfo={description:`@param {Object} props
@param {string} [props.variant] - MenuButton variant name appended to the component import/usage code strings`,methods:[],displayName:"SectionImplementation"};const D={...l,text:"Menu Button Text",isDisabled:!1,shouldCloseOnBlur:!0,shouldCloseOnSelection:!0,menuOptions:g},N={...x({description:a.contextCls.description,propName:"btnContextCls"}),...a,...d,...f({propName:"menuOptions"}),variant:{...s.variant,description:`${s.variant.description} When not defined the Default button is rendered with minimal styling and can be used as a starting point for a new button variant if one of the predefined variants do not fit your use case.`},...e({action:"selected",propName:"onSelection"}),...e({action:"menu toggled",propName:"onMenuToggle"}),...e({propName:"renderMenuOption"})};export{h as S,N as a,D as b};
