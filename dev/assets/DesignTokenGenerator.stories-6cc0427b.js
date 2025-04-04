var io=Object.defineProperty;var co=(o,e,n)=>e in o?io(o,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):o[e]=n;var I=(o,e,n)=>(co(o,typeof e!="symbol"?e+"":e,n),n);import{j as t,c as Ee,m as lo,x as Co,y as uo,d as G,z as To,h as ko,A as g,u as mo,B as So,e as Ce,D as po,E as W,g as Oo}from"./localeUtils-d2d3068e.js";import{r as _}from"./index-c013ead5.js";import{C as _o,r as Ao}from"./ColorDesignTokenListItem-565b691b.js";import{C as fo}from"./ComponentPreview-4bf09486.js";import{g as Me}from"./storiesConfigUtils-656c85e3.js";import{I as Ne}from"./IFLFormFieldComposer-8d5f3473.js";import{B as ve}from"./Dropdown-ebacefe0.js";import{F as Ae,a as fe,D as ue}from"./DynamicFormRow-51dd8b49.js";import{B as ho}from"./Avatar-96b751b1.js";import{B as Do,a as go,b as Ro,c as Io,d as bo}from"./BadgeInfo-aa14d8a1.js";import{B as yo,a as Eo,b as Mo,c as No}from"./BannerInfo-64930787.js";import{B as vo,C as Lo,a as Bo,b as Po}from"./BannerCautionary-8d6dd02d.js";import{B as Le}from"./BankaiUser-341817d3.js";import{B as Be}from"./BankaiCircleInfo-22651979.js";import{B as Pe}from"./BankaiTriangleAlert-e0700520.js";import{B as Fe}from"./BankaiCircleCheck-59d6b5c8.js";import{b as Fo}from"./Button-57fc1fde.js";import{B as wo}from"./ButtonSecondary-6d80490a.js";import{B as $o}from"./ButtonPrimary-bb6b88b1.js";import{B as Vo}from"./Callout-f7c4c799.js";import{C as xo}from"./CalloutDanger-d19a5312.js";import{S as Yo}from"./storyConst-55c0aa21.js";import{T as De}from"./ToggleSwitchField-ac0c79aa.js";import{P as Te}from"./index-f9722e9b.js";import{C as Wo}from"./ColorPickerField-71a8d7fb.js";import{S as we}from"./SectionTitle-f02a1499.js";import{B as Uo}from"./List-c96e451e.js";import{S as Go}from"./StoryLayout-da914988.js";import"./_commonjsHelpers-725317a4.js";import"./index-062a6568.js";import"./clipboardUtils-4a738ab5.js";import"./ListItem-d37b9949.js";import"./colorBaseClsConst-cda6144c.js";import"./BankaiCopy-4af8950d.js";import"./shared-3e287694.js";import"./BankaiCheck-211871f4.js";import"./FFCHints-3d6b61f2.js";import"./extantPropsUtils-1c17bdf8.js";import"./chunk-S4VUQJ4A-897becdf.js";import"./iframe-dd9158ff.js";import"../sb-preview/runtime.js";import"./index-e74941a2.js";import"./index-11d98b33.js";import"./index-356e4a49.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./SelectIcon-72fd3990.js";import"./useDropdownToggle-4003ea8a.js";import"./PropTypes-94435e28.js";import"./BankaiSpinner-4ae227ab.js";import"./BankaiChevronDown-32a4dc49.js";import"./PickerCaret-eecb53f7.js";import"./useAutoFocus-aa837e29.js";import"./Localization-9ecb6ac0.js";import"./MainContent-42aac1a0.js";import"./storiesConfigUtils-51add329.js";import"./FormFieldComposer-a5fa55e7.js";import"./ToggleSwitch-4fc67f15.js";import"./inputUtils-609392c2.js";import"./TextInput-e35d17f7.js";import"./index-173f824e.js";import"./BankaiTextBulletList-89b89343.js";class de extends _.PureComponent{constructor(){super(...arguments);I(this,"handleSetRef",n=>{n&&(this.containerDOM=n)});I(this,"handleScroll",()=>{const n=this.getBrowserReqAniFrame(),a=this.getScrollingContainerDOM();this.lastScrollY=a.scrollTop,!this.isScrolling&&this.containerDOM&&(n(this.handleConfigModCls),this.isScrolling=!0)});I(this,"handleConfigModCls",()=>{const n=`${this.baseCls}--slim`,a=this.getScrollingContainerDOM(),{top:r,height:l}=this.containerDOM.getBoundingClientRect();if(this.lastScrollY===a.scrollTop){const s=this.containerDOM.classList.contains(n),i=r<=0;!s&&i?(this.containerDOM.classList.add(n),this.containerDOM.style.minHeight=`${l}px`):s&&!i&&(this.containerDOM.classList.remove(n),this.containerDOM.style.minHeight="")}this.isScrolling=!1});I(this,"getScrollingContainerDOM",()=>{const{scrollingContainerCSSClass:n}=this.props;return document.getElementsByClassName(n)[0]});I(this,"getBrowserReqAniFrame",()=>window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||window.oRequestAnimationFrame);I(this,"baseCls","bankai-sb-sticky-section")}render(){const{contextCls:n,children:a}=this.props;return t("div",{className:Ee(this.baseCls,n),ref:this.handleSetRef,children:t("div",{className:`${this.baseCls}__inner`,children:a})})}componentDidMount(){this.getScrollingContainerDOM().addEventListener("scroll",this.handleScroll)}componentWillUnmount(){this.getScrollingContainerDOM().removeEventListener("scroll",this.handleScroll)}}I(de,"defaultProps",{scrollingContainerCSSClass:"bankai-sb-layout"}),I(de,"propTypes",{contextCls:Te.string,scrollingContainerCSSClass:Te.string});const qo=de;de.__docgenInfo={description:"",methods:[{name:"handleSetRef",docblock:null,modifiers:[],params:[{name:"el",type:null}],returns:null},{name:"handleScroll",docblock:null,modifiers:[],params:[],returns:null},{name:"handleConfigModCls",docblock:null,modifiers:[],params:[],returns:null},{name:"getScrollingContainerDOM",docblock:null,modifiers:[],params:[],returns:null},{name:"getBrowserReqAniFrame",docblock:null,modifiers:[],params:[],returns:null}],displayName:"StickySection",props:{scrollingContainerCSSClass:{defaultValue:{value:"'bankai-sb-layout'",computed:!1},type:{name:"string"},required:!1,description:""},contextCls:{type:{name:"string"},required:!1,description:""}}};const Ko=(o={})=>{const e=Object.keys(o),n=[];for(let a=0;a<e.length;a+=1){const r={},l=e[a];l.indexOf("color")>-1&&(r.token=l,r.color=o[l],n.push(r))}return n},jo=(o={})=>{var se,ie;const{isDarkMode:e,shouldAutoCorrectForA11y:n,avatarSourceColorToken:a,badgeAffirmativeSourceColorToken:r,badgeCautionarySourceColorToken:l,badgeDangerSourceColorToken:s,badgeInfoSourceColorToken:i,bannerAffirmativeSourceColorToken:C,bannerCautionarySourceColorToken:O,bannerDangerSourceColorToken:f,bannerInfoSourceColorToken:A,buttonPrimarySourceColorToken:k,buttonPrimaryStyle:T,buttonPrimaryDestructiveSourceColorToken:v,buttonPrimaryDestructiveStyle:L,buttonSecondarySourceColorToken:B,buttonSecondaryStyle:P,buttonSecondaryDestructiveSourceColorToken:F,buttonSecondaryDestructiveStyle:w,calloutAffirmativeSourceColorToken:$,calloutCautionarySourceColorToken:m,calloutDangerSourceColorToken:te,calloutInfoSourceColorToken:ne,...K}=o,j={},re=Object.keys(K);for(let R=0;R<re.length;R+=1){const b=re[R],h=K[b];j[lo(b)]=h}const V=Ko(Co(j,{isDarkMode:e,shouldAutoCorrectColors:n,componentConfigs:{avatar:{sourceColorToken:a},btnPrimary:{style:T,sourceColorToken:k},btnPrimaryDestructive:{style:L,sourceColorToken:v},btnSecondary:{style:P,sourceColorToken:B},btnSecondaryDestructive:{style:w,sourceColorToken:F},badgeAffirmative:{sourceColorToken:r},badgeCautionary:{sourceColorToken:l},badgeDanger:{sourceColorToken:s},badgeInfo:{sourceColorToken:i},bannerAffirmative:{sourceColorToken:C},bannerCautionary:{sourceColorToken:O},bannerDanger:{sourceColorToken:f},bannerInfo:{sourceColorToken:A},calloutAffirmative:{sourceColorToken:$},calloutCautionary:{sourceColorToken:m},calloutDanger:{sourceColorToken:te},calloutInfo:{sourceColorToken:ne}}})),ae=Object.keys(V);for(let R=0;R<ae.length;R+=1){const b=ae[R],h=V[b];(se=h==null?void 0:h.color)!=null&&se.includes(",")&&!((ie=h==null?void 0:h.color)!=null&&ie.includes("rgb"))&&(h.color=`rgb(${h.color})`),V[b]=h}return V},zo=o=>{const e={accordionTokens:[],avatarTokens:[],badgeTokens:[],badgeAffirmativeTokens:[],badgeCautionaryTokens:[],badgeDangerTokens:[],badgeInfoTokens:[],bannerTokens:[],bannerAffirmativeTokens:[],bannerCautionaryTokens:[],bannerDangerTokens:[],bannerInfoTokens:[],btnPrimaryTokens:[],btnPrimaryDestructiveTokens:[],btnSecondaryTokens:[],btnSecondaryDestructiveTokens:[],calloutAffirmativeTokens:[],calloutCautionaryTokens:[],calloutDangerTokens:[],calloutInfoTokens:[],dndDropzoneTokens:[],formMenuTokens:[],formToggleTokens:[],formToggleSwitchTokens:[],formTokens:[],linkTokens:[],loadingTokens:[],modalTokens:[],remainingTokens:[],semanticTokens:[],tabsTokens:[],toasterAffirmativeTokens:[],toasterCautionaryTokens:[],toasterErrorTokens:[],toasterInfoTokens:[],tooltipTokens:[]};for(let n=0;n<o.length;n+=1){const a=o[n]??{},{token:r=""}=a;switch(!0){case r.startsWith("accordion"):e.accordionTokens.push(a);break;case r.startsWith("avatar"):e.avatarTokens.push(a);break;case r.startsWith("badge.affirmative"):e.badgeAffirmativeTokens.push(a);break;case r.startsWith("badge.cautionary"):e.badgeCautionaryTokens.push(a);break;case r.startsWith("badge.danger"):e.badgeDangerTokens.push(a);break;case r.startsWith("badge.info"):e.badgeInfoTokens.push(a);break;case r.startsWith("badge"):e.badgeTokens.push(a);break;case r.startsWith("banner.affirmative"):e.bannerAffirmativeTokens.push(a);break;case r.startsWith("banner.cautionary"):e.bannerCautionaryTokens.push(a);break;case r.startsWith("banner.danger"):e.bannerDangerTokens.push(a);break;case r.startsWith("banner.info"):e.bannerInfoTokens.push(a);break;case r.startsWith("banner"):e.bannerTokens.push(a);break;case(r.startsWith("button.primary.destructive")||r.startsWith("button.split.primary.destructive")):e.btnPrimaryDestructiveTokens.push(a);break;case(r.startsWith("button.primary")||r.startsWith("button.split.primary")):e.btnPrimaryTokens.push(a);break;case(r.startsWith("button.secondary.destructive")||r.startsWith("button.split.secondary.destructive")):e.btnSecondaryDestructiveTokens.push(a);break;case(r.startsWith("button.secondary")||r.startsWith("button.split.secondary")):e.btnSecondaryTokens.push(a);break;case r.startsWith("callout.affirmative"):e.calloutAffirmativeTokens.push(a);break;case r.startsWith("callout.cautionary"):e.calloutCautionaryTokens.push(a);break;case r.startsWith("callout.danger"):e.calloutDangerTokens.push(a);break;case r.startsWith("callout.info"):e.calloutInfoTokens.push(a);break;case r.startsWith("dnd."):e.dndDropzoneTokens.push(a);break;case r.startsWith("form.check"):e.formToggleTokens.push(a);break;case r.startsWith("form.menu"):e.formMenuTokens.push(a);break;case r.startsWith("form.toggle"):e.formToggleSwitchTokens.push(a);break;case r.startsWith("form"):e.formTokens.push(a);break;case r.startsWith("link"):e.linkTokens.push(a);break;case r.startsWith("loading"):e.loadingTokens.push(a);break;case r.startsWith("modal"):e.modalTokens.push(a);break;case r.startsWith("tabs"):e.tabsTokens.push(a);break;case r.startsWith("toaster.affirmative"):e.toasterAffirmativeTokens.push(a);break;case r.startsWith("toaster.cautionary"):e.toasterCautionaryTokens.push(a);break;case r.startsWith("toaster.error"):e.toasterErrorTokens.push(a);break;case r.startsWith("toaster.info"):e.toasterInfoTokens.push(a);break;case r.startsWith("tooltip"):e.tooltipTokens.push(a);break;case r.startsWith("semantic"):e.semanticTokens.push(a);break;default:e.remainingTokens.push(a);break}}return e},Ho=(o=[])=>{const e={activeTokens:[],focusTokens:[],hoverTokens:[],restingTokens:[]};for(let n=0;n<o.length;n+=1){const a=o[n]??{},{token:r=""}=a;switch(!0){case r.includes(".active."):e.activeTokens.push(a);break;case r.includes(".focus."):e.focusTokens.push(a);break;case r.includes(".hover."):e.hoverTokens.push(a);break;default:e.restingTokens.push(a);break}}return e},Jo=(o=[])=>{const e={};for(let n=0;n<o.length;n+=1){const a=o[n]??{},{token:r="",color:l=""}=a;e[r]=l}return e};const q=o=>{const{contextCls:e,tokensData:n=[],semanticTokens:a,renderOps:r,opsProps:l,children:s}=o,i=Me("comp-preview-with-ops"),C=n.length>0,O=uo(Jo([...n,...a||[]]),`.${e??i} .${i}__preview-container`);return G("div",{className:Ee(i,e),children:[C&&t(To,{children:t("style",{children:O})}),s&&t(fo,{contextCls:`${i}__preview-container`,children:s}),r&&t("div",{className:`${i}__ops-container`,children:t(r,{...l})})]})};q.__docgenInfo={description:"",methods:[],displayName:"CompPreviewWithOps"};const Qo=Ne(ve),oe=o=>{const{label:e,value:n,sourceTokenOps:a=[],onChange:r=()=>Promise.resolve()}=o;return t(Ae,{children:t(fe,{children:t(ue,{children:t(Qo,{labelProps:{content:e},data:a,value:n,textField:"text",onChange:r})})})})};oe.__docgenInfo={description:"",methods:[],displayName:"SourceTokenOps"};const $e=o=>{const{baseCls:e,opsProps:n,dispatch:a,...r}=o,l=(i={})=>{i!=null&&i.id&&a({avatarSourceColorToken:i.id})},s=_.useMemo(()=>n==null?void 0:n.sourceTokenOps.find(i=>i.id===(n==null?void 0:n.value)),[n]);return t(q,{...r,contextCls:`${e}__avatar-preview`,renderOps:oe,opsProps:{...n,onChange:l,value:s},children:t(ho,{children:"DY"})})};$e.__docgenInfo={description:"",methods:[],displayName:"AvatarCompPreview"};const Xo=o=>{switch(o){case"affirmative":return bo;case"cautionary":return Io;case"danger":return Ro;case"info":return go;default:return Do}},x=o=>{const{baseCls:e,variant:n,dispatch:a,opsProps:r,...l}=o,s=n==null?void 0:n.toLowerCase(),i=`badge${n||""}SourceColorToken`,C=(k={})=>{k!=null&&k.id&&a({[i]:k.id})},O=_.useMemo(()=>Xo(s),[s]),f=_.useMemo(()=>r==null?void 0:r.sourceTokenOps.find(k=>k.id===(r==null?void 0:r.value)),[r]),A={...l,...n&&{renderOps:oe,opsProps:{...r,onChange:C,value:f}}};return t(q,{...A,contextCls:`${e}__badge-${n?`${s}-`:""}preview`,children:t(O,{children:"Badge Text"})})};x.__docgenInfo={description:"",methods:[],displayName:"BadgeCompPreview"};const Zo=o=>{switch(o){case"affirmative":return No;case"cautionary":return vo;case"danger":return Mo;case"info":return Eo;default:return yo}},et=o=>{switch(o){case"affirmative":return Fe;case"cautionary":case"danger":return Pe;case"info":return Be;default:return Le}},Y=o=>{const{baseCls:e,variant:n,dispatch:a,opsProps:r,...l}=o,s=n==null?void 0:n.toLowerCase(),i=`banner${n||""}SourceColorToken`,C=(T={})=>{T!=null&&T.id&&a({[i]:T.id})},O=_.useMemo(()=>Zo(s),[s]),f=_.useMemo(()=>et(s),[s]),A=_.useMemo(()=>r==null?void 0:r.sourceTokenOps.find(T=>T.id===(r==null?void 0:r.value)),[r]),k={...l,...n&&{renderOps:oe,opsProps:{...r,onChange:C,value:A}}};return t(q,{...k,contextCls:`${e}__banner-${n?`${s}-`:""}preview`,children:t(O,{renderIcon:f,title:"Banner Title",msg:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."})})};Y.__docgenInfo={description:"",methods:[],displayName:"BannerCompPreview"};const ge=Ne(ve),Ve=o=>{const{sourceTokenLabel:e,sourceTokenValue:n,sourceTokenOps:a=[],styleLabel:r,styleValue:l,styleOps:s=[],onSourceTokenChange:i=()=>Promise.resolve(),onStyleChange:C=()=>Promise.resolve()}=o;return t(Ae,{children:G(fe,{children:[t(ue,{children:t(ge,{labelProps:{content:e},data:a,value:n,textField:"text",onChange:i})}),t(ue,{children:t(ge,{labelProps:{content:r},data:s,value:l,textField:"text",onChange:C})})]})})};Ve.__docgenInfo={description:"",methods:[],displayName:"ButtonOps"};const ot=o=>{switch(o){case"primary":return $o;case"secondary":return wo;default:return Fo}},H=o=>{const{baseCls:e,variant:n,dispatch:a,opsProps:r,isDestructive:l=!1,...s}=o,{sourceTokenOps:i=[],sourceTokenValue:C,styleOps:O=[],styleValue:f}=r??{},A=n==null?void 0:n.toLowerCase(),k=`button${n||""}${l?"Destructive":""}`,T=`${k}SourceColorToken`,v=`${k}Style`,L=(m={})=>{m!=null&&m.id&&a({[T]:m.id})},B=(m={})=>{m!=null&&m.id&&a({[v]:m.id})},P=_.useMemo(()=>ot(A),[A]),F=_.useMemo(()=>i.find(m=>m.id===C),[i,C]),w=_.useMemo(()=>O.find(m=>m.id===f),[O,f]),$={...s,...n&&{renderOps:Ve,opsProps:{...r,sourceTokenValue:F,styleValue:w,onSourceTokenChange:L,onStyleChange:B}}};return t(q,{...$,contextCls:`${e}__button${n?`-${A}`:""}${l?"-destructive":""}-preview`,children:t(P,{text:"Button Text",isDestructive:l})})};H.__docgenInfo={description:"",methods:[],displayName:"ButtonCompPreview"};const tt=o=>{switch(o){case"affirmative":return Po;case"cautionary":return Bo;case"danger":return xo;case"info":return Lo;default:return Vo}},nt=o=>{switch(o){case"affirmative":return Fe;case"cautionary":case"danger":return Pe;case"info":return Be;default:return Le}},J=o=>{const{baseCls:e,variant:n,dispatch:a,opsProps:r,...l}=o,s=n==null?void 0:n.toLowerCase(),i=`callout${n||""}SourceColorToken`,C=(T={})=>{T!=null&&T.id&&a({[i]:T.id})},O=_.useMemo(()=>tt(s),[s]),f=_.useMemo(()=>nt(s),[s]),A=_.useMemo(()=>r==null?void 0:r.sourceTokenOps.find(T=>T.id===(r==null?void 0:r.value)),[r]),k={...l,...n&&{renderOps:oe,opsProps:{...r,onChange:C,value:A}}};return t(q,{...k,contextCls:`${e}__callout-${n?`${s}-`:""}preview`,children:t(O,{renderIcon:f,title:"Callout Title",msg:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."})})};J.__docgenInfo={description:"",methods:[],displayName:"CalloutCompPreview"};const{SEMANTIC_COLOR_ACCENT_PRIMARY:xe,SEMANTIC_COLOR_ACCENT_SECONDARY:Ye,SEMANTIC_COLOR_ACCENT_TERTIARY:We,SEMANTIC_COLOR_AFFIRMATIVE:Ue,SEMANTIC_COLOR_BRAND:Ge,SEMANTIC_COLOR_CAUTIONARY:qe,SEMANTIC_COLOR_CANVAS_BRAND:Ke,SEMANTIC_COLOR_DESTRUCTIVE:je,SEMANTIC_COLOR_ERROR:ze,SEMANTIC_COLOR_INFO:He,SEMANTIC_COLOR_PRIMARY:Je,SEMANTIC_COLOR_SECONDARY:Qe}=mo,Xe={CORE_COLOR_NEUTRAL_SEED:So,SEMANTIC_COLOR_ACCENT_PRIMARY:xe,SEMANTIC_COLOR_ACCENT_SECONDARY:Ye,SEMANTIC_COLOR_ACCENT_TERTIARY:We,SEMANTIC_COLOR_AFFIRMATIVE:Ue,SEMANTIC_COLOR_BRAND:Ge,SEMANTIC_COLOR_CAUTIONARY:qe,SEMANTIC_COLOR_CANVAS_BRAND:Ke,SEMANTIC_COLOR_DESTRUCTIVE:je,SEMANTIC_COLOR_ERROR:ze,SEMANTIC_COLOR_INFO:He,SEMANTIC_COLOR_PRIMARY:Je,SEMANTIC_COLOR_SECONDARY:Qe},rt={CORE_COLOR_NEUTRAL_SEED:"Neutral Seed Color",SEMANTIC_COLOR_ACCENT_PRIMARY:"Accent Primary Color",SEMANTIC_COLOR_ACCENT_SECONDARY:"Accent Secondary Color",SEMANTIC_COLOR_ACCENT_TERTIARY:"Accent Tertiary Color",SEMANTIC_COLOR_AFFIRMATIVE:"Affirmative Color",SEMANTIC_COLOR_BRAND:"Brand Color",SEMANTIC_COLOR_CAUTIONARY:"Cautionary Color",SEMANTIC_COLOR_CANVAS_BRAND:"Canvas Brand Color",SEMANTIC_COLOR_DESTRUCTIVE:"Destructive Color",SEMANTIC_COLOR_ERROR:"Error Color",SEMANTIC_COLOR_INFO:"Info Color",SEMANTIC_COLOR_PRIMARY:"Primary Color",SEMANTIC_COLOR_SECONDARY:"Secondary Color"},D={CORE_COLOR_NEUTRAL_SEED:ko,SEMANTIC_COLOR_ACCENT_PRIMARY:g[xe],SEMANTIC_COLOR_ACCENT_SECONDARY:g[Ye],SEMANTIC_COLOR_ACCENT_TERTIARY:g[We],SEMANTIC_COLOR_AFFIRMATIVE:g[Ue],SEMANTIC_COLOR_BRAND:g[Ge],SEMANTIC_COLOR_CAUTIONARY:g[qe],SEMANTIC_COLOR_CANVAS_BRAND:g[Ke],SEMANTIC_COLOR_DESTRUCTIVE:g[je],SEMANTIC_COLOR_ERROR:g[ze],SEMANTIC_COLOR_INFO:g[He],SEMANTIC_COLOR_PRIMARY:g[Je],SEMANTIC_COLOR_SECONDARY:g[Qe]},p=o=>{const{fieldId:e,fieldValues:n,...a}=o;return t(Wo,{...a,value:n[e],color:n[e],labelProps:{content:rt[e]},fieldId:e})};p.defaultProps={fieldValues:{}};p.propTypes={fieldId:Te.string.isRequired,fieldValues:Te.object};p.__docgenInfo={description:"",methods:[],displayName:"DesignTokenColorPicker",props:{fieldValues:{defaultValue:{value:"{}",computed:!1},type:{name:"object"},required:!1,description:""},fieldId:{type:{name:"string"},required:!0,description:""}}};const{CORE_COLOR_NEUTRAL_SEED:at,SEMANTIC_COLOR_ACCENT_PRIMARY:st,SEMANTIC_COLOR_ACCENT_SECONDARY:it,SEMANTIC_COLOR_ACCENT_TERTIARY:ct,SEMANTIC_COLOR_AFFIRMATIVE:lt,SEMANTIC_COLOR_BRAND:Ct,SEMANTIC_COLOR_CAUTIONARY:ut,SEMANTIC_COLOR_CANVAS_BRAND:Tt,SEMANTIC_COLOR_DESTRUCTIVE:dt,SEMANTIC_COLOR_ERROR:kt,SEMANTIC_COLOR_INFO:mt,SEMANTIC_COLOR_PRIMARY:St,SEMANTIC_COLOR_SECONDARY:pt}=Xe,Ze=o=>{const{baseCls:e,fieldValues:n={},onChange:a=()=>Promise.resolve(),onAutoCorrectForA11yChange:r=()=>Promise.resolve(),onDarkModeChange:l=()=>Promise.resolve()}=o,{isDarkMode:s=!1,shouldAutoCorrectForA11y:i=!0}=n,C={fieldValues:n,onChange:a,isLeftAlignedLabel:!0};return t(Ce,{children:t(qo,{contextCls:`${e}__form-container`,scrollingContainerCSSClass:e,children:t(Ae,{children:t(fe,{children:G(ue,{contextCls:`${e}__settings-container`,children:[t(p,{...C,fieldId:Ct}),t(p,{...C,fieldId:St}),t(p,{...C,fieldId:pt}),t(p,{...C,fieldId:Tt}),t(p,{...C,fieldId:lt}),t(p,{...C,fieldId:ut}),t(p,{...C,fieldId:kt}),t(p,{...C,fieldId:mt}),t(p,{...C,fieldId:dt}),t(p,{...C,fieldId:st}),t(p,{...C,fieldId:it}),t(p,{...C,fieldId:ct}),t(p,{...C,fieldId:at}),t(De,{labelProps:{content:"Generate For Dark Mode"},isChecked:s,onChange:l,fieldId:"isDarkMode"}),t(De,{labelProps:{content:"Auto-Correct For Accessibility"},isChecked:i,onChange:r,fieldId:"shouldAutoCorrectForA11y"})]})})})})})};Ze.__docgenInfo={description:`SectionForm component
@param {SectionFormProps} props`,methods:[],displayName:"SectionForm"};const c=o=>{const{baseCls:e,sectionTitle:n,headingLvl:a=2,tokensData:r=[],children:l}=o,s=i=>t(_o,{...i});return G(Ce,{contextCls:`${e}__tokens-section-container`,children:[t(we,{headingLvl:a,children:n}),l&&t("div",{className:`${e}__children-container`,children:l}),t(Ce,{contextCls:`${e}__token-list-container`,children:t(Uo,{renderListItem:s,data:r})})]})};c.__docgenInfo={description:"",methods:[],displayName:"SectionTokens"};const Q=o=>{const{baseCls:e,sectionTitle:n,tokensData:a=[],children:r}=o,{activeTokens:l=[],focusTokens:s=[],hoverTokens:i=[],restingTokens:C=[]}=Ho(a);return G(Ce,{contextCls:`${e}__tokens-section-container`,children:[t(we,{children:n}),r&&t("div",{className:`${e}__children-container`,children:r}),t(c,{baseCls:e,sectionTitle:"Resting State",headingLvl:3,tokensData:C}),t(c,{baseCls:e,sectionTitle:"Hover State",headingLvl:3,tokensData:i}),t(c,{baseCls:e,sectionTitle:"Active State",headingLvl:3,tokensData:l}),t(c,{baseCls:e,sectionTitle:"Focus State",headingLvl:3,tokensData:s})]})};Q.__docgenInfo={description:"",methods:[],displayName:"SectionButtonTokens"};const{CORE_COLOR_NEUTRAL_SEED:Re,SEMANTIC_COLOR_ACCENT_PRIMARY:ke,SEMANTIC_COLOR_ACCENT_SECONDARY:me,SEMANTIC_COLOR_ACCENT_TERTIARY:Se,SEMANTIC_COLOR_AFFIRMATIVE:y,SEMANTIC_COLOR_BRAND:pe,SEMANTIC_COLOR_CAUTIONARY:E,SEMANTIC_COLOR_CANVAS_BRAND:X,SEMANTIC_COLOR_DESTRUCTIVE:U,SEMANTIC_COLOR_ERROR:M,SEMANTIC_COLOR_INFO:N,SEMANTIC_COLOR_PRIMARY:Z,SEMANTIC_COLOR_SECONDARY:ee}=Xe,u=po({SEMANTIC_COLOR_ACCENT_PRIMARY:ke,SEMANTIC_COLOR_ACCENT_SECONDARY:me,SEMANTIC_COLOR_ACCENT_TERTIARY:Se,SEMANTIC_COLOR_AFFIRMATIVE:y,SEMANTIC_COLOR_BRAND:pe,SEMANTIC_COLOR_CAUTIONARY:E,SEMANTIC_COLOR_CANVAS_BRAND:X,SEMANTIC_COLOR_DESTRUCTIVE:U,SEMANTIC_COLOR_ERROR:M,SEMANTIC_COLOR_INFO:N,SEMANTIC_COLOR_PRIMARY:Z,SEMANTIC_COLOR_SECONDARY:ee}),S=[{id:u[Z],text:"Primary"},{id:u[ee],text:"Secondary"},{id:u[pe],text:"Brand"},{id:u[X],text:"Canvas Brand"},{id:u[ke],text:"Accent (Primary)"},{id:u[me],text:"Accent (Secondary)"},{id:u[Se],text:"Accent (Tertiary)"},{id:u[y],text:"Affirmative"},{id:u[E],text:"Cautionary"},{id:u[U],text:"Destructive"},{id:u[M],text:"Error"},{id:u[N],text:"Info"}],ce=[{id:W.FLAT,text:"Flat"},{id:W.GHOST,text:"Ghost"}],Ot={[Re]:D[Re],[ke]:D[ke],[me]:D[me],[Se]:D[Se],[y]:D[y],[pe]:D[pe],[E]:D[E],[X]:D[X],[U]:D[U],[M]:D[M],[N]:D[N],[Z]:D[Z],[ee]:D[ee],avatarSourceColorToken:u[X],badgeAffirmativeSourceColorToken:u[y],badgeCautionarySourceColorToken:u[E],badgeDangerSourceColorToken:u[M],badgeInfoSourceColorToken:u[N],bannerAffirmativeSourceColorToken:u[y],bannerCautionarySourceColorToken:u[E],bannerDangerSourceColorToken:u[M],bannerInfoSourceColorToken:u[N],buttonPrimarySourceColorToken:u[Z],buttonPrimaryStyle:W.FLAT,buttonPrimaryDestructiveSourceColorToken:u[U],buttonPrimaryDestructiveStyle:W.FLAT,buttonSecondarySourceColorToken:u[ee],buttonSecondaryStyle:W.GHOST,buttonSecondaryDestructiveSourceColorToken:u[U],buttonSecondaryDestructiveStyle:W.GHOST,calloutAffirmativeSourceColorToken:u[y],calloutCautionarySourceColorToken:u[E],calloutDangerSourceColorToken:u[M],calloutInfoSourceColorToken:u[N],isDarkMode:!1,shouldAutoCorrectForA11y:!0},eo=()=>{const o=Me("design-token-generator"),[e,n]=_.useReducer(Ao,Ot),a=(Oe,z)=>{n({[z]:Oe})},r=(Oe,z)=>{const{isDarkMode:_e}=e;n({[z]:!_e})},l=(Oe,z)=>{const{shouldAutoCorrectForA11y:_e}=e;n({[z]:!_e})},{accordionTokens:s,avatarTokens:i,badgeTokens:C,badgeAffirmativeTokens:O,badgeCautionaryTokens:f,badgeDangerTokens:A,badgeInfoTokens:k,bannerTokens:T,bannerAffirmativeTokens:v,bannerCautionaryTokens:L,bannerDangerTokens:B,bannerInfoTokens:P,btnPrimaryTokens:F,btnPrimaryDestructiveTokens:w,btnSecondaryTokens:$,btnSecondaryDestructiveTokens:m,calloutAffirmativeTokens:te,calloutCautionaryTokens:ne,calloutDangerTokens:K,calloutInfoTokens:j,dndDropzoneTokens:re,formMenuTokens:V,formToggleSwitchTokens:ae,formToggleTokens:se,formTokens:ie,linkTokens:R,loadingTokens:b,modalTokens:h,remainingTokens:he,semanticTokens:d,tabsTokens:oo,toasterAffirmativeTokens:to,toasterCautionaryTokens:no,toasterErrorTokens:ro,toasterInfoTokens:ao,tooltipTokens:so}=_.useMemo(()=>zo(jo(e)),[e]);return G(Go,{contextCls:o,title:Oo("stories.everyone.designTokens.designTokenGenerator.title"),subTitle:Yo,children:[t(Ze,{baseCls:o,fieldValues:e,onChange:a,onDarkModeChange:r,onAutoCorrectForA11yChange:l}),t(c,{baseCls:o,tokensData:d,sectionTitle:"Semantic"}),t(c,{baseCls:o,tokensData:s,sectionTitle:"Accordion"}),t(c,{baseCls:o,tokensData:i,sectionTitle:"Avatar",children:t($e,{baseCls:o,isDarkMode:e.isDarkMode,semanticTokens:d,tokensData:i,dispatch:n,opsProps:{label:"Avatar Source Color Token",sourceTokenOps:S,value:e.avatarSourceColorToken}})}),t(c,{baseCls:o,tokensData:C,sectionTitle:"Badge",children:t(x,{baseCls:o,isDarkMode:e.isDarkMode,semanticTokens:d,tokensData:C})}),t(c,{baseCls:o,tokensData:O,sectionTitle:"Badge (Affirmative)",children:t(x,{baseCls:o,variant:"Affirmative",isDarkMode:e.isDarkMode,semanticTokens:d,tokensData:O,dispatch:n,opsProps:{label:"Badge (Affirmative) Source Color Token",sourceTokenOps:S,value:e.badgeAffirmativeSourceColorToken}})}),t(c,{baseCls:o,tokensData:f,sectionTitle:"Badge (Cautionary)",children:t(x,{baseCls:o,variant:"Cautionary",isDarkMode:e.isDarkMode,semanticTokens:d,tokensData:f,dispatch:n,opsProps:{label:"Badge (Cautionary) Source Color Token",sourceTokenOps:S,value:e.badgeCautionarySourceColorToken}})}),t(c,{baseCls:o,tokensData:A,sectionTitle:"Badge (Danger)",children:t(x,{baseCls:o,variant:"Danger",isDarkMode:e.isDarkMode,semanticTokens:d,tokensData:A,dispatch:n,opsProps:{label:"Badge (Danger) Source Color Token",sourceTokenOps:S,value:e.badgeDangerSourceColorToken}})}),t(c,{baseCls:o,tokensData:k,sectionTitle:"Badge (Info)",children:t(x,{baseCls:o,variant:"Info",isDarkMode:e.isDarkMode,semanticTokens:d,tokensData:k,dispatch:n,opsProps:{label:"Badge (Info) Source Color Token",sourceTokenOps:S,value:e.badgeInfoSourceColorToken}})}),t(c,{baseCls:o,tokensData:T,sectionTitle:"Banner",children:t(Y,{baseCls:o,semanticTokens:d,tokensData:T})}),t(c,{baseCls:o,tokensData:v,sectionTitle:"Banner (Affirmative)",children:t(Y,{baseCls:o,variant:"Affirmative",isDarkMode:e.isDarkMode,semanticTokens:d,tokensData:v,dispatch:n,opsProps:{label:"Banner (Affirmative) Source Color Token",sourceTokenOps:S,value:e.bannerAffirmativeSourceColorToken}})}),t(c,{baseCls:o,tokensData:L,sectionTitle:"Banner (Cautionary)",children:t(Y,{baseCls:o,variant:"Cautionary",isDarkMode:e.isDarkMode,semanticTokens:d,tokensData:L,dispatch:n,opsProps:{label:"Banner (Cautionary) Source Color Token",sourceTokenOps:S,value:e.bannerCautionarySourceColorToken}})}),t(c,{baseCls:o,tokensData:B,sectionTitle:"Banner (Danger)",children:t(Y,{baseCls:o,variant:"Danger",isDarkMode:e.isDarkMode,semanticTokens:d,tokensData:B,dispatch:n,opsProps:{label:"Banner (Danger) Source Color Token",sourceTokenOps:S,value:e.bannerDangerSourceColorToken}})}),t(c,{baseCls:o,tokensData:P,sectionTitle:"Banner (Info)",children:t(Y,{baseCls:o,variant:"Info",isDarkMode:e.isDarkMode,semanticTokens:d,tokensData:P,dispatch:n,opsProps:{label:"Banner (Info) Source Color Token",sourceTokenOps:S,value:e.bannerInfoSourceColorToken}})}),t(Q,{baseCls:o,tokensData:F,sectionTitle:"Button (Primary)",children:t(H,{baseCls:o,variant:"Primary",isDarkMode:e.isDarkMode,semanticTokens:d,tokensData:F,dispatch:n,opsProps:{sourceTokenLabel:"Button (Primary) Source Color Token",sourceTokenOps:S,sourceTokenValue:e.buttonPrimarySourceColorToken,styleLabel:"Button (Primary) Style",styleOps:ce,styleValue:e.buttonPrimaryStyle}})}),t(Q,{baseCls:o,tokensData:w,sectionTitle:"Button (Primary Destructive)",children:t(H,{baseCls:o,variant:"Primary",isDarkMode:e.isDarkMode,semanticTokens:d,tokensData:w,dispatch:n,opsProps:{sourceTokenLabel:"Button (Primary Destructive) Source Color Token",sourceTokenOps:S,sourceTokenValue:e.buttonPrimaryDestructiveSourceColorToken,styleLabel:"Button (Primary Destructive) Style",styleOps:ce,styleValue:e.buttonPrimaryDestructiveStyle},isDestructive:!0})}),t(Q,{baseCls:o,tokensData:$,sectionTitle:"Button (Secondary)",children:t(H,{baseCls:o,variant:"Secondary",isDarkMode:e.isDarkMode,semanticTokens:d,tokensData:$,dispatch:n,opsProps:{sourceTokenLabel:"Button (Secondary) Source Color Token",sourceTokenOps:S,sourceTokenValue:e.buttonSecondarySourceColorToken,styleLabel:"Button (Secondary) Style",styleOps:ce,styleValue:e.buttonSecondaryStyle}})}),t(Q,{baseCls:o,tokensData:m,sectionTitle:"Button (Secondary Destructive)",children:t(H,{baseCls:o,variant:"Secondary",isDarkMode:e.isDarkMode,semanticTokens:d,tokensData:m,dispatch:n,opsProps:{sourceTokenLabel:"Button (Secondary Destructive) Source Color Token",sourceTokenOps:S,sourceTokenValue:e.buttonSecondaryDestructiveSourceColorToken,styleLabel:"Button (Secondary Destructive) Style",styleOps:ce,styleValue:e.buttonSecondaryDestructiveStyle},isDestructive:!0})}),t(c,{baseCls:o,tokensData:te,sectionTitle:"Callout (Affirmative)",children:t(J,{baseCls:o,variant:"Affirmative",isDarkMode:e.isDarkMode,semanticTokens:d,tokensData:te,dispatch:n,opsProps:{label:"Callout (Affirmative) Source Color Token",sourceTokenOps:S,value:e.calloutAffirmativeSourceColorToken}})}),t(c,{baseCls:o,tokensData:ne,sectionTitle:"Callout (Cautionary)",children:t(J,{baseCls:o,variant:"Cautionary",isDarkMode:e.isDarkMode,semanticTokens:d,tokensData:ne,dispatch:n,opsProps:{label:"Callout (Cautionary) Source Color Token",sourceTokenOps:S,value:e.calloutCautionarySourceColorToken}})}),t(c,{baseCls:o,tokensData:K,sectionTitle:"Callout (Danger)",children:t(J,{baseCls:o,variant:"Danger",isDarkMode:e.isDarkMode,semanticTokens:d,tokensData:K,dispatch:n,opsProps:{label:"Callout (Danger) Source Color Token",sourceTokenOps:S,value:e.calloutDangerSourceColorToken}})}),t(c,{baseCls:o,tokensData:j,sectionTitle:"Callout (Info)",children:t(J,{baseCls:o,variant:"Info",isDarkMode:e.isDarkMode,semanticTokens:d,tokensData:j,dispatch:n,opsProps:{label:"Callout (Info) Source Color Token",sourceTokenOps:S,value:e.calloutInfoSourceColorToken}})}),t(c,{baseCls:o,tokensData:re,sectionTitle:"Drag & Drop (Dropzone)"}),t(c,{baseCls:o,tokensData:ie,sectionTitle:"Form"}),t(c,{baseCls:o,tokensData:se,sectionTitle:"Form Checkboxes and Radios"}),t(c,{baseCls:o,tokensData:V,sectionTitle:"Form Menus"}),t(c,{baseCls:o,tokensData:ae,sectionTitle:"Form Toggle Switch"}),t(c,{baseCls:o,tokensData:R,sectionTitle:"Links"}),t(c,{baseCls:o,tokensData:b,sectionTitle:"Loading"}),t(c,{baseCls:o,tokensData:h,sectionTitle:"Modals"}),t(c,{baseCls:o,tokensData:oo,sectionTitle:"Tabs"}),t(c,{baseCls:o,tokensData:to,sectionTitle:"Toaster (Affirmative)"}),t(c,{baseCls:o,tokensData:no,sectionTitle:"Toaster (Cautionary)"}),t(c,{baseCls:o,tokensData:ro,sectionTitle:"Toaster (Error)"}),t(c,{baseCls:o,tokensData:ao,sectionTitle:"Toaster (Info)"}),t(c,{baseCls:o,tokensData:so,sectionTitle:"Tooltips"}),he.length>0&&t(c,{baseCls:o,tokensData:he,sectionTitle:"Misc Tokens"})]})};eo.__docgenInfo={description:"",methods:[],displayName:"StoryDesignTokenGen"};const yn={title:"Everyone/Design Tokens"},le={name:"Design Token Generator",render:eo,parameters:{a11y:{disable:!0},actions:{disable:!0},options:{showPanel:!1}}};var Ie,be,ye;le.parameters={...le.parameters,docs:{...(Ie=le.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  name: 'Design Token Generator',
  render: StoryDesignTokenGen,
  parameters: {
    a11y: {
      disable: true
    },
    actions: {
      disable: true
    },
    options: {
      showPanel: false
    }
  }
}`,...(ye=(be=le.parameters)==null?void 0:be.docs)==null?void 0:ye.source}}};const En=["DesignTokenGenerator"];export{le as DesignTokenGenerator,En as __namedExportsOrder,yn as default};
//# sourceMappingURL=DesignTokenGenerator.stories-6cc0427b.js.map
