import{j as r,c as o}from"./localeUtils-1bf681c0.js";import{P as n}from"./index-f9722e9b.js";import{B as i}from"./LoadingSpinners-385c5922.js";import{B as l}from"./Callout-50a18acd.js";const e=s=>{const{contextCls:t,...a}=s;return r(l,{...a,contextCls:o("bankai-loading-state",t)})};e.defaultProps={renderIcon:i};e.propTypes={contextCls:n.string,title:n.string,msg:n.string,renderIcon:n.func};const u=e;e.__docgenInfo={description:"",methods:[],displayName:"LoadingState",props:{renderIcon:{defaultValue:{value:`(props) => {
    const { contextCls, variant } = props;
    const baseCls = 'bankai-loading-spinners';
    const modCls = getModCls(variant, baseCls);
    const shouldRenderInner = getShouldRenderInner(variant);

    return (
        <span className={cx(baseCls, modCls, contextCls)}>
            {shouldRenderInner && <span className={\`\${baseCls}__inner\`} />}
        </span>
    );
}`,computed:!1},type:{name:"func"},required:!1,description:""},contextCls:{type:{name:"string"},required:!1,description:""},title:{type:{name:"string"},required:!1,description:""},msg:{type:{name:"string"},required:!1,description:""}}};export{u as B};
//# sourceMappingURL=LoadingState-3e1b0304.js.map
