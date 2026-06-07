import{j as t}from"./jsx-runtime-Cwp8ZpSv.js";import{S as e,g as a,P as p}from"./localeUtils-D7lxN7GM.js";import{C as m}from"./CompImportAndUsage-CxQgvqiO.js";import{S as l}from"./SectionTitle-DftdsDnx.js";import{i as u,a as c,c as d}from"./sharedArgs-BISqGE2t.js";import{m as g}from"./menuButtonMocks-_Ucl9boy.js";import{a as f}from"./argTypesUtils-By8Yfhfe.js";const S=`const menuOptions = [
    {
        text: 'Edit',
        value: 'EDIT_BUTTON',
    },
    {
        text: 'Delete',
        isDestructive: true,
        value: 'DELETE_BUTTON',
    },
];`,s=n=>{const{variant:o=""}=n,i=`import { SplitButton${o} } from '@driponfleek/bankai-ui-buttons';`,r=`${S}

<SplitButton${o}
    mainButtonProps={{ text: 'Main Action' }}
    menuButtonProps={{ 'aria-label': 'More options' }}
    menuOptions={menuOptions}
/>`;return t.jsxs(e,{children:[t.jsx(l,{children:a("titles.implementation")}),t.jsx(e,{children:t.jsx(m,{importCodeStr:i,usageCodeStr:r,shouldShowUsageCopy:!1})})]})};s.propTypes={variant:p.string};s.__docgenInfo={description:"",methods:[],displayName:"SectionImplementation",props:{variant:{description:"",type:{name:"string"},required:!1}}};const O={...d,isDisabled:!1,menuOptions:g,mainButtonProps:{text:"Main Action",isDisabled:!1},menuButtonProps:{"aria-label":"More options",isDisabled:!1,onMenuToggle:()=>Promise.resolve()}},v={...c,...f({propName:"menuOptions"}),...u};export{s as S,v as a,O as b};
