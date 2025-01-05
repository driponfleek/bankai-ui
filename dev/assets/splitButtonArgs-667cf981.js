import{d as r,e as s,j as t,g as p}from"./localeUtils-d4c6437e.js";import{P as m}from"./index-f9722e9b.js";import{C as l}from"./CompImportAndUsage-61fc52a0.js";import{S as u}from"./SectionTitle-5b990959.js";import{c,a as d,i as f}from"./sharedArgs-b0b1a555.js";import{m as g}from"./menuButtonMocks-4375f140.js";import{a as S}from"./argTypesUtils-aa6861f7.js";const T=`const menuOptions = [
    {
        text: 'Edit',
        value: 'EDIT_BUTTON',
    },
    {
        text: 'Delete',
        isDestructive: true,
        value: 'DELETE_BUTTON',
    },
];`,e=a=>{const{variant:o}=a,n=`import { SplitButton${o} } from '@driponfleek/bankai-ui-buttons';`,i=`${T}

<SplitButton${o}
    mainButtonProps={{ text: 'Main Action' }}
    menuButtonProps={{ 'aria-label': 'More options' }}
    menuOptions={menuOptions}
/>`;return r(s,{children:[t(u,{children:p("titles.implementation")}),t(s,{children:t(l,{importCodeStr:n,usageCodeStr:i,shouldShowUsageCopy:!1})})]})};e.defaultProps={variant:""};e.propTypes={variant:m.string};e.__docgenInfo={description:"",methods:[],displayName:"SectionImplementation",props:{variant:{defaultValue:{value:"''",computed:!1},type:{name:"string"},required:!1,description:""}}};const O={...c,isDisabled:!1,menuOptions:g,mainButtonProps:{text:"Main Action",isDisabled:!1},menuButtonProps:{"aria-label":"More options",isDisabled:!1,onMenuToggle:()=>Promise.resolve()}},P={...d,...S({propName:"menuOptions"}),...f};export{e as S,O as a,P as b};
//# sourceMappingURL=splitButtonArgs-667cf981.js.map
