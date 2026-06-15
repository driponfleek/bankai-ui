import{j as t}from"./jsx-runtime-Co4revrD.js";import{C as a}from"./CompImportAndUsage-Bii-HjDb.js";import{S as e,g as r}from"./localeUtils-D2w-4qCV.js";import{S as p}from"./SectionTitle-DjPwpCEG.js";import{i as m,a as l,c}from"./sharedArgs-CXlVRz76.js";import{m as u}from"./menuButtonMocks-BYjEDnAF.js";import{a as d}from"./argTypesUtils-By8Yfhfe.js";const g=`const menuOptions = [
    {
        text: 'Edit',
        value: 'EDIT_BUTTON',
    },
    {
        text: 'Delete',
        isDestructive: true,
        value: 'DELETE_BUTTON',
    },
];`,S=s=>{const{variant:o=""}=s,n=`import { SplitButton${o} } from '@driponfleek/bankai-ui-buttons';`,i=`${g}

<SplitButton${o}
    mainButtonProps={{ text: 'Main Action' }}
    menuButtonProps={{ 'aria-label': 'More options' }}
    menuOptions={menuOptions}
/>`;return t.jsxs(e,{children:[t.jsx(p,{children:r("titles.implementation")}),t.jsx(e,{children:t.jsx(a,{importCodeStr:n,usageCodeStr:i,shouldShowUsageCopy:!1})})]})};S.__docgenInfo={description:`@param {Object} props
@param {string} [props.variant] - SplitButton variant name appended to the component import/usage code strings`,methods:[],displayName:"SectionImplementation"};const D={...c,isDisabled:!1,menuOptions:u,mainButtonProps:{text:"Main Action",isDisabled:!1},menuButtonProps:{"aria-label":"More options",isDisabled:!1,onMenuToggle:()=>Promise.resolve()}},h={...l,...d({propName:"menuOptions"}),...m};export{S,h as a,D as b};
