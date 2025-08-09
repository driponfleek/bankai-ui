import{j as a}from"./jsx-runtime-DN5Rltsz.js";import{c as o,P as e}from"./localeUtils--UUmbdnw.js";import{L as i}from"./LoadingSpinners-c4WhpGif.js";import{C as l}from"./Callout-BmX6hn_o.js";const n=s=>{const{contextCls:t,...r}=s;return a.jsx(l,{...r,contextCls:o("bankai-loading-state",t)})};n.defaultProps={renderIcon:i};n.propTypes={contextCls:e.string,title:e.string,msg:e.string,renderIcon:e.func};n.__docgenInfo={description:"",methods:[],displayName:"LoadingState",props:{renderIcon:{defaultValue:{value:`(props) => {
    const { contextCls, variant } = props;
    const baseCls = 'bankai-loading-spinners';
    const modCls = getModCls(variant, baseCls);
    const shouldRenderInner = getShouldRenderInner(variant);

    return (
        <span className={cx(baseCls, modCls, contextCls)}>
            {shouldRenderInner && <span className={\`\${baseCls}__inner\`} />}
        </span>
    );
}`,computed:!1},description:"",type:{name:"func"},required:!1},contextCls:{description:"",type:{name:"string"},required:!1},title:{description:"",type:{name:"string"},required:!1},msg:{description:"",type:{name:"string"},required:!1}}};export{n as L};
