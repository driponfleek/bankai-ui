import{j as o,d as h,F as y,c as v}from"./localeUtils-1bf681c0.js";import{r as c}from"./index-c013ead5.js";import{P as e}from"./index-f9722e9b.js";import{B as x}from"./ListItem-855b531e.js";import{B as L}from"./Callout-50a18acd.js";import{B as b}from"./BankaiTextBulletList-2f203091.js";const d=a=>{const{contextCls:r,msg:t,title:i,headingLvl:l}=a;return o(L,{contextCls:r,msg:t,title:i,headingLvl:l,renderIcon:b})};d.propTypes={contextCls:e.string,msg:e.string,title:e.string,headingLvl:e.number};const _=d;d.__docgenInfo={description:"",methods:[],displayName:"ListEmptyState",props:{contextCls:{type:{name:"string"},required:!1,description:""},msg:{type:{name:"string"},required:!1,description:""},title:{type:{name:"string"},required:!1,description:""},headingLvl:{type:{name:"number"},required:!1,description:""}}};const s=a=>{const{contextCls:r,data:t,emptyStateProps:i,shouldAlternateColors:l,renderEmptyState:u,renderListItem:m}=a,n="bankai-list",f={[`${n}--alternate-item-bg-colors`]:l},p=t.length===0,g=c.useMemo(()=>c.Children.toArray(t.map(C=>o("li",{className:`${n}__li`,children:m(C)}))),[t,m]);return h(y,{children:[p&&u({...i,contextCls:`${n}--empty-state`}),!p&&o("ul",{className:v(n,f,r),children:g})]})};s.defaultProps={shouldAlternateColors:!1,data:[],renderEmptyState:_,renderListItem:x};s.propTypes={contextCls:e.string,emptyStateProps:e.shape({msg:e.string,title:e.string,headingLvl:e.number}),data:e.arrayOf(e.shape({meta:e.string,title:e.string})),shouldAlternateColors:e.bool,renderEmptyState:e.func,renderListItem:e.func};const $=s;s.__docgenInfo={description:"",methods:[],displayName:"List",props:{shouldAlternateColors:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},data:{defaultValue:{value:"[]",computed:!1},type:{name:"arrayOf",value:{name:"shape",value:{meta:{name:"string",required:!1},title:{name:"string",required:!1}}}},required:!1,description:""},renderEmptyState:{defaultValue:{value:`(props) => {
    const { contextCls, msg, title, headingLvl } = props;
    // const renderIcon = ({ iconCls }) => {
    //     return <BankaiTextBulletList contextCls={iconCls} />;
    // };

    return (
        <Callout
            contextCls={contextCls}
            msg={msg}
            title={title}
            headingLvl={headingLvl}
            renderIcon={BankaiTextBulletList}
        />
    );
}`,computed:!1},type:{name:"func"},required:!1,description:""},renderListItem:{defaultValue:{value:`(props) => {
    const {
        contextCls,
        meta,
        text,
        shouldSwapTextAndMeta,
        renderAfter,
        renderBefore,
        children,
    } = props;
    const baseCls = 'bankai-list-item';

    return (
        <div className={cx(baseCls, contextCls)}>
            {renderBefore && (
                <div className={\`\${baseCls}__before-content\`}>
                    {renderBefore()}
                </div>
            )}
            <div className={\`\${baseCls}__content\`}>
                {!children && (
                    <Fragment>
                        {shouldSwapTextAndMeta && meta && (
                            <div className={\`\${baseCls}__meta\`}>{meta}</div>
                        )}
                        {text && (
                            <div className={\`\${baseCls}__text\`}>{text}</div>
                        )}
                        {!shouldSwapTextAndMeta && meta && (
                            <div className={\`\${baseCls}__meta\`}>{meta}</div>
                        )}
                    </Fragment>
                )}
                {children}
            </div>
            {renderAfter && (
                <div className={\`\${baseCls}__after-content\`}>
                    {renderAfter()}
                </div>
            )}
        </div>
    );
}`,computed:!1},type:{name:"func"},required:!1,description:""},contextCls:{type:{name:"string"},required:!1,description:""},emptyStateProps:{type:{name:"shape",value:{msg:{name:"string",required:!1},title:{name:"string",required:!1},headingLvl:{name:"number",required:!1}}},required:!1,description:""}}};export{$ as B};
//# sourceMappingURL=List-6e235f8f.js.map
