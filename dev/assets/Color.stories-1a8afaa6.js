import{d as o,e as t,j as e,v as se,w as le,g as n,x as de,y as ce,z as ue}from"./localeUtils-1bf681c0.js";import{S as i}from"./SectionTitle-f0c146ba.js";import{P as p}from"./Paragraph-e98746c7.js";import{O as V,a as g}from"./OmniListItem-4ce783f9.js";import{C as D}from"./CodeTag-2263cc92.js";import{g as m}from"./storiesConfigUtils-656c85e3.js";import{r as y}from"./index-c013ead5.js";import{C as he}from"./ColorSwatch-c467643c.js";import{S as T}from"./StoryLayout-d5108543.js";import{d as _}from"./storiesConfigUtils-ce156789.js";import{H as ge}from"./Hyperlink-8520adca.js";import{C as pe,r as me}from"./ColorDesignTokenListItem-df0e8f29.js";import{C as k}from"./ColorTokenTileList-82192f0b.js";import"./index-f9722e9b.js";import"./_commonjsHelpers-725317a4.js";import"./colorBaseClsConst-cda6144c.js";import"./chunk-S4VUQJ4A-00dd32b1.js";import"./iframe-5bca95c9.js";import"../sb-preview/runtime.js";import"./index-e74941a2.js";import"./index-11d98b33.js";import"./index-356e4a49.js";import"./index-062a6568.js";import"./clipboardUtils-4a738ab5.js";import"./Button-9081ff16.js";import"./BankaiSpinner-2511abed.js";import"./shared-9116ca74.js";import"./BankaiCopy-5b80d720.js";import"./BankaiCheck-06f63c6a.js";import"./ListItem-855b531e.js";import"./List-6e235f8f.js";import"./Callout-50a18acd.js";import"./BankaiTriangleAlert-c5afa4cd.js";import"./BankaiCircleInfo-dfd8189b.js";import"./BankaiCircleCheck-2e091227.js";import"./MainContent-39d70135.js";import"./BankaiTextBulletList-2f203091.js";const M=()=>o(t,{contextCls:m("color-swatch-list"),children:[e(i,{headingLvl:3,children:"When to Use Neutrals"}),e(p,{children:"Neutrals are suitable for:"}),o(V,{children:[e(g,{children:"Text"}),e(g,{children:"Backgrounds"}),e(g,{children:"Borders and Dividers"}),e(g,{children:"Disabled Elements"})]}),o(p,{children:[e("strong",{children:"Never use Neutral Color design tokens directly."})," ","When you need a neutral color, consider these as the available options for semantic and component token aliases. For example, instead of using ",e(D,{children:"core.color.neutral.100"})," as a page background, use it as the seed value for a semantic design token such as ",e(D,{children:"semantic.color.canvas"})," and use the semantic design token instead."]})]});M.__docgenInfo={description:"",methods:[],displayName:"SectionWhenToUseNeutrals"};const Q=({listData:a=[]})=>e("div",{className:m("color-token-card-list"),children:y.Children.toArray(y.useMemo(()=>a.map(d=>e(he,{...d,isCard:!0})),[a]))});Q.__docgenInfo={description:"",methods:[],displayName:"ColorTokenCardList",props:{listData:{defaultValue:{value:"[]",computed:!1},required:!1}}};const W=()=>{const a=se(),d=Object.keys(a).map(c=>({mainContent:`Neutral ${c.replace("core.color.neutral.","")}`,color:a[c],metaList:[le(c),a[c]]}));return o(t,{contextCls:m("color-swatch-list"),children:[e(i,{children:"Neutrals"}),e(t,{children:e(Q,{listData:d})}),e(M,{})]})};W.__docgenInfo={description:"",methods:[],displayName:"SectionNeutrals"};const H=()=>{const a=m("foundation-color-core");return e(T,{contextCls:a,title:n("stories.foundation.color.core.title"),subTitle:_(n("stories.foundation.color.categoryTitle")),children:e(W,{})})};H.__docgenInfo={description:"",methods:[],displayName:"StoryColorCore"};const A=()=>e(t,{contextCls:m("color-swatch-list"),children:o(p,{children:[n("designSystemName")," includes a set of palettes from"," ",e(ge,{href:"https://colorbrewer2.org/",shouldOpenInNewWindow:!0,children:"ColorBrewer"})," ","that are designed to be colorblind-friendly—meaning the colors are easier to tell apart for people with common forms of color vision deficiency. Each one sticks to the number of colors recommended by ColorBrewer for that purpose. They're great defaults for visualizations, and if you need more control, you can always build your own."]})});A.__docgenInfo={description:"",methods:[],displayName:"SectionIntro"};const C=a=>{const{color:d,mainContent:c}=a??{};return e(pe,{token:c,color:d})};C.__docgenInfo={description:"",methods:[],displayName:"DataVisPaletteListItem"};const q=()=>{const a=document.getElementsByTagName("html")[0],d=window.getComputedStyle(a),c=d.getPropertyValue("--bankai-utility-color-data-axis"),r=d.getPropertyValue("--bankai-utility-color-data-canvas"),l=d.getPropertyValue("--bankai-utility-color-data-grid");return{axisColor:c,canvasColor:r,gridColor:l}},be=()=>{const a=de();return Object.keys(a).reduce((c,r)=>{const l={...c},u={mainContent:r,color:a[r]};switch(!0){case r.includes("brbg"):l.brbg.push(u);break;case r.includes("piyg"):l.piyg.push(u);break;case r.includes("prgn"):l.prgn.push(u);break;case r.includes("puor"):l.puor.push(u);break;case r.includes("rdbu"):l.rdbu.push(u);break;case r.includes("rdylbu"):l.rdylbu.push(u);break}return l},{brbg:[],piyg:[],prgn:[],puor:[],rdbu:[],rdylbu:[]})},ye=()=>{const a=ce();return Object.keys(a).reduce((c,r)=>{const l={...c},u={mainContent:r,color:a[r]};switch(!0){case r.includes("dark2"):l.dark2.push(u);break;case r.includes("paired"):l.paired.push(u);break;case r.includes("set2"):l.set2.push(u);break}return l},{dark2:[],paired:[],set2:[]})},Ce=()=>{const a=ue();return Object.keys(a).reduce((c,r)=>{const l={...c},u={mainContent:r,color:a[r]};let s;switch(!0){case r.includes("blues"):s="blues";break;case r.includes(".bugn."):s="bugn";break;case r.includes("bupu"):s="bupu";break;case r.includes(".gnbu."):s="gnbu";break;case r.includes("greens"):s="greens";break;case r.includes("greys"):s="greys";break;case r.includes("oranges"):s="oranges";break;case r.includes(".orrd."):s="orrd";break;case r.includes(".pubu."):s="pubu";break;case r.includes("pubugn"):s="pubugn";break;case r.includes("purd"):s="purd";break;case r.includes("purples"):s="purples";break;case r.includes("rdpu"):s="rdpu";break;case r.includes("reds"):s="reds";break;case r.includes(".ylgn."):s="ylgn";break;case r.includes("ylgnbu"):s="ylgnbu";break;case r.includes("ylorbr"):s="ylorbr";break;case r.includes("ylorrd"):s="ylorrd";break}return s&&l[s].push(u),l},{blues:[],bugn:[],bupu:[],gnbu:[],greens:[],greys:[],oranges:[],orrd:[],pubu:[],pubugn:[],purd:[],purples:[],rdpu:[],reds:[],ylgn:[],ylgnbu:[],ylorbr:[],ylorrd:[]})},G=()=>{const a=document.getElementsByTagName("html")[0],[d,c]=y.useReducer(me,q()),{axisColor:r,canvasColor:l,gridColor:u}=d,s=y.useCallback((b=[])=>{b.findIndex(L=>L.attributeName==="class")>-1&&setTimeout(()=>{c(q())},0)},[]);return y.useEffect(()=>{const b=new MutationObserver(s);return b.observe(a,{attributes:!0}),d!=null&&d.axisColor||c(q()),()=>{b.disconnect()}},[s,a,d]),o(t,{children:[e(i,{children:"Foundational Colors"}),e(p,{children:"Canvas, Axis, and Grid colors provide the structural baseline for charts."}),e(k,{data:[{mainContent:"utility.color.data.canvas",color:l},{mainContent:"utility.color.data.axis",color:r},{mainContent:"utility.color.data.grid",color:u}],renderListItem:C})]})};G.__docgenInfo={description:"",methods:[],displayName:"SectionFoundationalColors"};const R=()=>{const{brbg:a,piyg:d,prgn:c,puor:r,rdbu:l,rdylbu:u}=be(),s=f=>e(k,{data:f,renderListItem:C});return o(t,{children:[e(i,{children:n("stories.foundation.color.dataVis.brewerCategory.diverging.title")}),o(t,{children:[e(p,{children:"Diverging palettes are ideal for data that centers around a meaningful midpoint—like zero, average, or a baseline—where values can go above or below that point. They use contrasting colors at each end with a neutral or lighter tone in the middle, making it easy to spot positive vs. negative trends or deviations from a norm."}),e(p,{children:"Use diverging palettes when you want to:"}),o(V,{children:[e(g,{children:"Show change, difference, or deviation (e.g., gain vs. loss)."}),e(g,{children:"Emphasize values moving in two directions from a center point."}),e(g,{children:"Help users quickly identify which side of the midpoint a value falls on."})]})]}),o(t,{children:[e(i,{headingLvl:3,children:n("stories.foundation.color.dataVis.brewerCategory.diverging.palette.brbg")}),s(a)]}),o(t,{children:[e(i,{headingLvl:3,children:n("stories.foundation.color.dataVis.brewerCategory.diverging.palette.piyg")}),s(d)]}),o(t,{children:[e(i,{headingLvl:3,children:"PRGn (Purple to Green)"}),s(c)]}),o(t,{children:[e(i,{headingLvl:3,children:n("stories.foundation.color.dataVis.brewerCategory.diverging.palette.puor")}),s(r)]}),o(t,{children:[e(i,{headingLvl:3,children:n("stories.foundation.color.dataVis.brewerCategory.diverging.palette.rdbu")}),s(l)]}),o(t,{children:[e(i,{headingLvl:3,children:n("stories.foundation.color.dataVis.brewerCategory.diverging.palette.rdylbu")}),s(u)]})]})};R.__docgenInfo={description:"",methods:[],displayName:"SectionDivergingColors"};const $=()=>{const{dark2:a,paired:d,set2:c}=ye(),r=l=>e(k,{data:l,renderListItem:C});return o(t,{children:[e(i,{children:n("stories.foundation.color.dataVis.brewerCategory.qualitative.title")}),o(t,{children:[e(p,{children:"Qualitative palettes are designed for categorical data—where colors represent distinct groups or labels without any inherent order or progression. Each color is visually distinct but carries equal weight, making these palettes great for comparisons where no single item should stand out more than another."}),e(p,{children:"Use qualitative palettes when you want to:"}),o(V,{children:[e(g,{children:"Represent categories, groups, or segments."}),e(g,{children:"Show labels like departments, user types, or regions."}),e(g,{children:"Avoid implying hierarchy or value with color."})]})]}),o(t,{children:[e(i,{headingLvl:3,children:n("stories.foundation.color.dataVis.brewerCategory.qualitative.palette.dark2")}),r(a)]}),o(t,{children:[e(i,{headingLvl:3,children:n("stories.foundation.color.dataVis.brewerCategory.qualitative.palette.paired")}),r(d)]}),o(t,{children:[e(i,{headingLvl:3,children:n("stories.foundation.color.dataVis.brewerCategory.qualitative.palette.set2")}),r(c)]})]})};$.__docgenInfo={description:"",methods:[],displayName:"SectionQualitativeColors"};const J=()=>{const{blues:a,bugn:d,bupu:c,gnbu:r,greens:l,greys:u,oranges:s,orrd:f,pubu:b,pubugn:x,purd:L,purples:K,rdpu:ee,reds:re,ylgn:oe,ylgnbu:te,ylorbr:ne,ylorrd:ae}=Ce(),h=ie=>e(k,{data:ie,renderListItem:C});return o(t,{children:[e(i,{children:n("stories.foundation.color.dataVis.brewerCategory.sequential.title")}),o(t,{children:[e(p,{children:"Sequential palettes are meant for ordered data that progresses from low to high. These palettes typically vary in lightness, sometimes hue, to create a smooth gradient. Lighter shades represent lower values; darker or more intense shades represent higher values."}),e(p,{children:"Use sequential palettes when you want to:"}),o(V,{children:[e(g,{children:"Show magnitude or quantity (e.g., counts, percentages)."}),e(g,{children:"Highlight progression, intensity, or density."}),e(g,{children:"Visualize values along a continuous scale."})]})]}),o(t,{children:[e(i,{headingLvl:3,children:n("stories.foundation.color.dataVis.brewerCategory.sequential.palette.blues")}),h(a)]}),o(t,{children:[e(i,{headingLvl:3,children:n("stories.foundation.color.dataVis.brewerCategory.sequential.palette.bugn")}),h(d)]}),o(t,{children:[e(i,{headingLvl:3,children:n("stories.foundation.color.dataVis.brewerCategory.sequential.palette.bupu")}),h(c)]}),o(t,{children:[e(i,{headingLvl:3,children:n("stories.foundation.color.dataVis.brewerCategory.sequential.palette.gnbu")}),h(r)]}),o(t,{children:[e(i,{headingLvl:3,children:n("stories.foundation.color.dataVis.brewerCategory.sequential.palette.greens")}),h(l)]}),o(t,{children:[e(i,{headingLvl:3,children:n("stories.foundation.color.dataVis.brewerCategory.sequential.palette.greys")}),h(u)]}),o(t,{children:[e(i,{headingLvl:3,children:n("stories.foundation.color.dataVis.brewerCategory.sequential.palette.oranges")}),h(s)]}),o(t,{children:[e(i,{headingLvl:3,children:n("stories.foundation.color.dataVis.brewerCategory.sequential.palette.orrd")}),h(f)]}),o(t,{children:[e(i,{headingLvl:3,children:n("stories.foundation.color.dataVis.brewerCategory.sequential.palette.pubu")}),h(b)]}),o(t,{children:[e(i,{headingLvl:3,children:n("stories.foundation.color.dataVis.brewerCategory.sequential.palette.pubugn")}),h(x)]}),o(t,{children:[e(i,{headingLvl:3,children:n("stories.foundation.color.dataVis.brewerCategory.sequential.palette.purd")}),h(L)]}),o(t,{children:[e(i,{headingLvl:3,children:n("stories.foundation.color.dataVis.brewerCategory.sequential.palette.purples")}),h(K)]}),o(t,{children:[e(i,{headingLvl:3,children:n("stories.foundation.color.dataVis.brewerCategory.sequential.palette.rdpu")}),h(ee)]}),o(t,{children:[e(i,{headingLvl:3,children:n("stories.foundation.color.dataVis.brewerCategory.sequential.palette.reds")}),h(re)]}),o(t,{children:[e(i,{headingLvl:3,children:n("stories.foundation.color.dataVis.brewerCategory.sequential.palette.ylgn")}),h(oe)]}),o(t,{children:[e(i,{headingLvl:3,children:n("stories.foundation.color.dataVis.brewerCategory.sequential.palette.ylgnbu")}),h(te)]}),o(t,{children:[e(i,{headingLvl:3,children:n("stories.foundation.color.dataVis.brewerCategory.sequential.palette.ylorbr")}),h(ne)]}),o(t,{children:[e(i,{headingLvl:3,children:n("stories.foundation.color.dataVis.brewerCategory.sequential.palette.ylorrd")}),h(ae)]})]})};J.__docgenInfo={description:"",methods:[],displayName:"SectionSequentialColors"};const X=()=>{const a=m("foundation-color-data-vis");return o(T,{contextCls:a,title:n("stories.foundation.color.dataVis.title"),subTitle:_(n("stories.foundation.color.categoryTitle")),children:[e(A,{}),e(G,{}),e(R,{}),e($,{}),e(J,{})]})};X.__docgenInfo={description:"",methods:[],displayName:"StoryColorDataVis"};const Y=()=>e(t,{contextCls:m("color-swatch-list"),children:e(p,{children:"Coming Soon."})});Y.__docgenInfo={description:"",methods:[],displayName:"SectionIntro"};const Z=()=>{const a=m("foundation-color-semantic");return e(T,{contextCls:a,title:n("stories.foundation.color.semantic.title"),subTitle:_(n("stories.foundation.color.categoryTitle")),children:e(Y,{})})};Z.__docgenInfo={description:"",methods:[],displayName:"StoryColorSemantic"};const I={a11y:{disable:!0},actions:{disable:!0},options:{showPanel:!1}},or={title:"Foundation/Color"},v={name:"Core",render:H,parameters:I},w={name:"Data Vsiualization",render:X,parameters:I},S={name:"Semantic",render:Z,parameters:I};var O,P,B;v.parameters={...v.parameters,docs:{...(O=v.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: 'Core',
  render: StoryColorCore,
  parameters
}`,...(B=(P=v.parameters)==null?void 0:P.docs)==null?void 0:B.source}}};var z,E,j;w.parameters={...w.parameters,docs:{...(z=w.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: 'Data Vsiualization',
  render: StoryColorDataVis,
  parameters
}`,...(j=(E=w.parameters)==null?void 0:E.docs)==null?void 0:j.source}}};var F,N,U;S.parameters={...S.parameters,docs:{...(F=S.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: 'Semantic',
  render: StoryColorSemantic,
  parameters
}`,...(U=(N=S.parameters)==null?void 0:N.docs)==null?void 0:U.source}}};const tr=["Core","DataVisualization","Semantic"];export{v as Core,w as DataVisualization,S as Semantic,tr as __namedExportsOrder,or as default};
//# sourceMappingURL=Color.stories-1a8afaa6.js.map
