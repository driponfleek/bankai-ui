import{j as t}from"./jsx-runtime-DN5Rltsz.js";import{S as s,g as r,P as p}from"./localeUtils--UUmbdnw.js";import{C as m}from"./CompImportAndUsage-8urofnI3.js";import{S as l}from"./SectionTitle-39xke60s.js";import{i as u,a as c,c as d}from"./sharedArgs-xfTyUM37.js";import{m as f}from"./menuButtonMocks-es5lWwf5.js";import{a as g}from"./argTypesUtils-By8Yfhfe.js";const S=`const menuOptions = [
    {
        text: 'Edit',
        value: 'EDIT_BUTTON',
    },
    {
        text: 'Delete',
        isDestructive: true,
        value: 'DELETE_BUTTON',
    },
];`,e=n=>{const{variant:o}=n,i=`import { SplitButton${o} } from '@driponfleek/bankai-ui-buttons';`,a=`${S}

<SplitButton${o}
    mainButtonProps={{ text: 'Main Action' }}
    menuButtonProps={{ 'aria-label': 'More options' }}
    menuOptions={menuOptions}
/>`;return t.jsxs(s,{children:[t.jsx(l,{children:r("titles.implementation")}),t.jsx(s,{children:t.jsx(m,{importCodeStr:i,usageCodeStr:a,shouldShowUsageCopy:!1})})]})};e.defaultProps={variant:""};e.propTypes={variant:p.string};e.__docgenInfo={description:"",methods:[],displayName:"SectionImplementation",props:{variant:{defaultValue:{value:"''",computed:!1},description:"",type:{name:"string"},required:!1}}};const D={...d,isDisabled:!1,menuOptions:f,mainButtonProps:{text:"Main Action",isDisabled:!1},menuButtonProps:{"aria-label":"More options",isDisabled:!1,onMenuToggle:()=>Promise.resolve()}},O={...c,...g({propName:"menuOptions"}),...u};export{e as S,O as a,D as b};
