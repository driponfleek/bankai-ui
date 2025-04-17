import{d as l,e as s,j as e,g as u}from"./localeUtils-28c44f90.js";import{P as d}from"./index-f9722e9b.js";import{C as c}from"./CompImportAndUsage-7debdd45.js";import{S as f}from"./SectionTitle-8a3c0176.js";import{c as g,a,i as v,v as i}from"./sharedArgs-ce857805.js";import{m as T}from"./menuButtonMocks-9cbe986c.js";import{s as y,a as C,f as t}from"./argTypesUtils-aa6861f7.js";const S=`const menuOptions = [
    {
        text: 'Edit',
        value: 'EDIT_BUTTON',
    },
    {
        text: 'Delete',
        isDestructive: true,
        value: 'DELETE_BUTTON',
    },
];`,n=r=>{const{variant:o}=r,p=`import { MenuButton${o} } from '@driponfleek/bankai-ui-buttons';`,m=`${S}

<MenuButton${o} menuOptions={menuOptions} />`;return l(s,{children:[e(f,{children:u("titles.implementation")}),e(s,{children:e(c,{importCodeStr:p,usageCodeStr:m,shouldShowUsageCopy:!1})})]})};n.defaultProps={variant:""};n.propTypes={variant:d.string};n.__docgenInfo={description:"",methods:[],displayName:"SectionImplementation",props:{variant:{defaultValue:{value:"''",computed:!1},type:{name:"string"},required:!1,description:""}}};const B={...g,text:"Menu Button Text",isDisabled:!1,shouldCloseOnBlur:!0,shouldCloseOnSelection:!0,menuOptions:T},E={...y({description:a.contextCls.description,propName:"btnContextCls"}),...a,...v,...C({propName:"menuOptions"}),variant:{...i.variant,description:`${i.variant.description} When not defined the Default button is rendered with minimal styling and can be used as a starting point for a new button variant if one of the predefined variants do not fit your use case.`},...t({action:"selected",propName:"onSelection"}),...t({action:"menu toggled",propName:"onMenuToggle"}),...t({propName:"renderMenuOption"})};export{n as S,B as a,E as b};
//# sourceMappingURL=menuButtonArgs-c43130bb.js.map
