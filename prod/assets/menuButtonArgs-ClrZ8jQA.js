import{j as e}from"./jsx-runtime-DN5Rltsz.js";import{S as s,g as l,P as u}from"./localeUtils--UUmbdnw.js";import{C as d}from"./CompImportAndUsage-8urofnI3.js";import{S as c}from"./SectionTitle-39xke60s.js";import{v as a,i as f,a as i,c as g}from"./sharedArgs-xfTyUM37.js";import{m as v}from"./menuButtonMocks-es5lWwf5.js";import{f as t,a as x,s as T}from"./argTypesUtils-By8Yfhfe.js";const S=`const menuOptions = [
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

<MenuButton${o} menuOptions={menuOptions} />`;return e.jsxs(s,{children:[e.jsx(c,{children:l("titles.implementation")}),e.jsx(s,{children:e.jsx(d,{importCodeStr:p,usageCodeStr:m,shouldShowUsageCopy:!1})})]})};n.defaultProps={variant:""};n.propTypes={variant:u.string};n.__docgenInfo={description:"",methods:[],displayName:"SectionImplementation",props:{variant:{defaultValue:{value:"''",computed:!1},description:"",type:{name:"string"},required:!1}}};const N={...g,text:"Menu Button Text",isDisabled:!1,shouldCloseOnBlur:!0,shouldCloseOnSelection:!0,menuOptions:v},j={...T({description:i.contextCls.description,propName:"btnContextCls"}),...i,...f,...x({propName:"menuOptions"}),variant:{...a.variant,description:`${a.variant.description} When not defined the Default button is rendered with minimal styling and can be used as a starting point for a new button variant if one of the predefined variants do not fit your use case.`},...t({action:"selected",propName:"onSelection"}),...t({action:"menu toggled",propName:"onMenuToggle"}),...t({propName:"renderMenuOption"})};export{n as S,j as a,N as b};
