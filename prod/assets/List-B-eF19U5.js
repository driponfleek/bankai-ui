import{j as n}from"./jsx-runtime-DN5Rltsz.js";import{r as c}from"./iframe-X-brMXKZ.js";import{P as e,c as C}from"./localeUtils--UUmbdnw.js";import{L as h}from"./ListItem-C3bGe29c.js";import{C as v}from"./Callout-BmX6hn_o.js";import{B as y}from"./BankaiTextBulletList-Dv5rxD5P.js";const o=r=>{const{contextCls:a,msg:t,title:l,headingLvl:i}=r;return n.jsx(v,{contextCls:a,msg:t,title:l,headingLvl:i,renderIcon:y})};o.propTypes={contextCls:e.string,msg:e.string,title:e.string,headingLvl:e.number};o.__docgenInfo={description:"",methods:[],displayName:"ListEmptyState",props:{contextCls:{description:"",type:{name:"string"},required:!1},msg:{description:"",type:{name:"string"},required:!1},title:{description:"",type:{name:"string"},required:!1},headingLvl:{description:"",type:{name:"number"},required:!1}}};const d=r=>{const{contextCls:a,data:t,emptyStateProps:l,shouldAlternateColors:i,renderEmptyState:u,renderListItem:m}=r,s="bankai-list",f={[`${s}--alternate-item-bg-colors`]:i},p=t.length===0,g=c.useMemo(()=>c.Children.toArray(t.map(x=>n.jsx("li",{className:`${s}__li`,children:m(x)}))),[t,m]);return n.jsxs(n.Fragment,{children:[p&&u({...l,contextCls:`${s}--empty-state`}),!p&&n.jsx("ul",{className:C(s,f,a),children:g})]})};d.defaultProps={shouldAlternateColors:!1,data:[],renderEmptyState:o,renderListItem:h};d.propTypes={contextCls:e.string,emptyStateProps:e.shape({msg:e.string,title:e.string,headingLvl:e.number}),data:e.arrayOf(e.shape({meta:e.string,title:e.string})),shouldAlternateColors:e.bool,renderEmptyState:e.func,renderListItem:e.func};d.__docgenInfo={description:"",methods:[],displayName:"List",props:{shouldAlternateColors:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},data:{defaultValue:{value:"[]",computed:!1},description:"",type:{name:"arrayOf",value:{name:"shape",value:{meta:{name:"string",required:!1},title:{name:"string",required:!1}}}},required:!1},renderEmptyState:{defaultValue:{value:`(props) => {
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
}`,computed:!1},description:"",type:{name:"func"},required:!1},renderListItem:{defaultValue:{value:`(props) => {
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
}`,computed:!1},description:"",type:{name:"func"},required:!1},contextCls:{description:"",type:{name:"string"},required:!1},emptyStateProps:{description:"",type:{name:"shape",value:{msg:{name:"string",required:!1},title:{name:"string",required:!1},headingLvl:{name:"number",required:!1}}},required:!1}}};export{d as L};
