var I=Object.defineProperty;var V=(r,o,e)=>o in r?I(r,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[o]=e;var a=(r,o,e)=>(V(r,typeof o!="symbol"?o+"":o,e),e);import{a as R,p as v,j as i,c as T,k as q,q as _,d as E,s as w}from"./localeUtils-d4c6437e.js";import{P as n}from"./index-f9722e9b.js";import{I as A}from"./IFLFormFieldComposer-91c76fac.js";import{r as N}from"./index-c013ead5.js";import{d as x}from"./index-062a6568.js";import{T as $}from"./TextInput-b6ac5695.js";import{C as S,N as D}from"./index-173f824e.js";const O=(r,o)=>{const{hasError:e,isDisabled:s,isReadOnly:l,shouldAlignPickerToRightEdge:t,shouldOpenUp:c}=r??{};return{[`${o}--disabled`]:s,[`${o}--has-error`]:e,[`${o}--read-only`]:l,[`${o}--should-align-picker-to-right-edge`]:t,[`${o}--should-open-up`]:c}},H=r=>{const{color:o,contextCls:e,changeCompleteThreshold:s,hasAlpha:l,hasError:t,shouldAlignPickerToRightEdge:c,shouldOpenUp:p,triggerProps:u,onChange:h,onChangeComplete:C,renderColorPicker:y,renderTriggerContent:d,...g}=r??{};return{...g,...t&&{"aria-invalid":!0},maxLength:l?9:7}},U=r=>{const{color:o,changeCompleteThreshold:e,hasAlpha:s,onChange:l,onChangeComplete:t}=r??{};return{color:o,changeCompleteThreshold:e,hasAlpha:s,onChange:l,onChangeComplete:t}},L=r=>{const{isDisabled:o=!1,isReadOnly:e=!1,triggerProps:s,onClick:l}=r??{};return{...!e&&{...s,disabled:o,type:"button",onClick:l}}},z=(r,o)=>{document.addEventListener("keydown",r),document.addEventListener("mouseup",o)},M=(r,o)=>{document.removeEventListener("keydown",r),document.removeEventListener("mouseup",o)},F=r=>{const o=R(r);return v(o)};const f=r=>{const{contextCls:o,changeCompleteThreshold:e,color:s,hasAlpha:l,onChange:t,onChangeComplete:c}=r,p="bankai-color-picker",u=l?S:D,h=F(s),C=d=>x(()=>{c(d)},e),y=d=>{const g=l?v(d,!0):q(d);t(g),C(g)};return i(u,{className:T(p,o),color:h,onChange:y})};f.defaultProps={changeCompleteThreshold:200,hasAlpha:!1,onChange:()=>Promise.resolve(),onChangeComplete:()=>Promise.resolve()};f.propTypes={color:n.string,contextCls:n.string,changeCompleteThreshold:n.number,hasAlpha:n.bool,onChange:n.func,onChangeComplete:n.func};const K=f;f.__docgenInfo={description:"",methods:[],displayName:"ColorPicker",props:{changeCompleteThreshold:{defaultValue:{value:"200",computed:!1},type:{name:"number"},required:!1,description:""},hasAlpha:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},onChange:{defaultValue:{value:"() => Promise.resolve()",computed:!1},type:{name:"func"},required:!1,description:""},onChangeComplete:{defaultValue:{value:"() => Promise.resolve()",computed:!1},type:{name:"func"},required:!1,description:""},color:{type:{name:"string"},required:!1,description:""},contextCls:{type:{name:"string"},required:!1,description:""}}};const P=r=>{const{color:o,baseCls:e}=r,l={backgroundColor:_(o)?o:"transparent"};return i("span",{className:`${e}__trigger-swatch`,style:l})};P.propTypes={baseCls:n.string,color:n.string};const j=P;P.__docgenInfo={description:"",methods:[],displayName:"ColorPickerInputTriggerContent",props:{baseCls:{type:{name:"string"},required:!1,description:""},color:{type:{name:"string"},required:!1,description:""}}};const k=r=>{const{baseCls:o,isReadOnly:e,renderTriggerContent:s}=r,l=L(r);return i(e?"span":"button",{...l,className:`${o}__trigger`,children:s(r)})};k.defaultProps={isDisabled:!1,isReadOnly:!1,onClick:()=>Promise.resolve(),renderTriggerContent:j};k.propTypes={baseCls:n.string,isDisabled:n.bool,isReadOnly:n.bool,triggerProps:n.shape({"aria-label":n.string}),onClick:n.func,renderTriggerContent:n.func};const B=k;k.__docgenInfo={description:"",methods:[],displayName:"ColorPickerInputTrigger",props:{isDisabled:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},isReadOnly:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},onClick:{defaultValue:{value:"() => Promise.resolve()",computed:!1},type:{name:"func"},required:!1,description:""},renderTriggerContent:{defaultValue:{value:`(props) => {
    const { color, baseCls } = props;
    const isValid = isValidHexColor(color);
    const style = {
        backgroundColor: !isValid ? 'transparent' : color,
    };

    return <span className={\`\${baseCls}__trigger-swatch\`} style={style} />;
}`,computed:!1},type:{name:"func"},required:!1,description:""},baseCls:{type:{name:"string"},required:!1,description:""},triggerProps:{type:{name:"shape",value:{"aria-label":{name:"string",required:!1}}},required:!1,description:""}}};class m extends N.Component{constructor(){super(...arguments);a(this,"state",{shouldShowPicker:!1});a(this,"handleSetRef",e=>{e&&(this.containerRef=e)});a(this,"handleTriggerClick",()=>{const{shouldShowPicker:e}=this.state;this.setState({shouldShowPicker:!e})});a(this,"handlePickerChange",e=>{const{hasAlpha:s}=this.props;this.handleChange(s?q(e):e)});a(this,"handleInputChange",e=>{var s;this.handleChange((s=e==null?void 0:e.target)==null?void 0:s.value)});a(this,"handleChange",e=>{const{onChange:s}=this.props,l=w(e);s(l),this.handleChangeComplete(l)});a(this,"handleChangeComplete",x(e=>{const{onChangeComplete:s}=this.props;s(e)},this.props.changeCompleteThreshold));a(this,"handleKeyDown",e=>{const{shouldShowPicker:s}=this.state;s&&(e.key==="Escape"||e.key==="Esc"||e.keyCode===27)&&this.closeColorPicker()});a(this,"handleMouseUp",e=>{const{shouldShowPicker:s}=this.state,l=e.srcElement||e.target;s&&!(this.containerRef&&this.containerRef.contains(l))&&this.closeColorPicker()});a(this,"closeColorPicker",()=>{this.setState({shouldShowPicker:!1})});a(this,"baseCls","bankai-color-picker-input")}render(){const{contextCls:e,color:s,isDisabled:l,renderColorPicker:t,renderTriggerContent:c}=this.props,{shouldShowPicker:p}=this.state,u=O(this.props),h=H(this.props),C={...U(this.props),onChangeComplete:this.handlePickerChange};return E("div",{ref:this.handleSetRef,className:T(this.baseCls,u,e),children:[i("div",{className:`${this.baseCls}__input-container`,children:i($,{...h,value:s,contextCls:`${this.baseCls}__input`,onChange:this.handleInputChange})}),i("div",{className:`${this.baseCls}__trigger-container`,children:i(B,{...this.props,baseCls:this.baseCls,renderTriggerContent:c,onClick:this.handleTriggerClick})}),i("div",{className:`${this.baseCls}__picker-container`,children:p&&!l&&t(C)})]})}componentDidMount(){z(this.handleKeyDown,this.handleMouseUp)}componentWillUnmount(){M(this.handleKeyDown,this.handleMouseUp)}}a(m,"defaultProps",{changeCompleteThreshold:200,hasAlpha:!1,hasError:!1,isDisabled:!1,isReadOnly:!1,shouldAlignPickerToRightEdge:!1,shouldOpenUp:!1,triggerProps:{},onChange:()=>Promise.resolve(),onChangeComplete:()=>Promise.resolve(),renderColorPicker:K}),a(m,"propTypes",{color:n.string,contextCls:n.string,changeCompleteThreshold:n.number,hasAlpha:n.bool,hasError:n.bool,isDisabled:n.bool,isReadOnly:n.bool,shouldAlignPickerToRightEdge:n.bool,shouldOpenUp:n.bool,triggerProps:n.shape({"aria-label":n.string}),onChange:n.func,onChangeComplete:n.func,renderColorPicker:n.func,renderTriggerContent:n.func});const G=m;m.__docgenInfo={description:"",methods:[{name:"handleSetRef",docblock:null,modifiers:[],params:[{name:"el",type:null}],returns:null},{name:"handleTriggerClick",docblock:null,modifiers:[],params:[],returns:null},{name:"handlePickerChange",docblock:null,modifiers:[],params:[{name:"color",type:null}],returns:null},{name:"handleInputChange",docblock:null,modifiers:[],params:[{name:"evt",type:null}],returns:null},{name:"handleChange",docblock:null,modifiers:[],params:[{name:"color",type:null}],returns:null},{name:"handleKeyDown",docblock:null,modifiers:[],params:[{name:"evt",type:null}],returns:null},{name:"handleMouseUp",docblock:null,modifiers:[],params:[{name:"evt",type:null}],returns:null},{name:"closeColorPicker",docblock:null,modifiers:[],params:[],returns:null}],displayName:"ColorPickerInput",props:{changeCompleteThreshold:{defaultValue:{value:"200",computed:!1},type:{name:"number"},required:!1,description:""},hasAlpha:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},hasError:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},isDisabled:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},isReadOnly:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},shouldAlignPickerToRightEdge:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},shouldOpenUp:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},triggerProps:{defaultValue:{value:"{}",computed:!1},type:{name:"shape",value:{"aria-label":{name:"string",required:!1}}},required:!1,description:""},onChange:{defaultValue:{value:"() => Promise.resolve()",computed:!1},type:{name:"func"},required:!1,description:""},onChangeComplete:{defaultValue:{value:"() => Promise.resolve()",computed:!1},type:{name:"func"},required:!1,description:""},renderColorPicker:{defaultValue:{value:`(props) => {
    const {
        contextCls,
        changeCompleteThreshold,
        color,
        hasAlpha,
        onChange,
        onChangeComplete,
    } = props;
    const baseCls = 'bankai-color-picker';
    const Picker = hasAlpha ? RgbaColorPicker : RgbColorPicker;
    const sanatizedColor = getColorPickerSanatizedColor(color);
    // Handle Change Complete
    const handleChangeComplete = (newColor) =>
        debounce(() => {
            onChangeComplete(newColor);
        }, changeCompleteThreshold);
    // Handle Change
    const handleChange = (returnedColor) => {
        const newColor = hasAlpha
            ? convertColorToRGB(returnedColor, true)
            : convertColorToHex(returnedColor);

        onChange(newColor);
        handleChangeComplete(newColor);
    };

    return (
        <Picker
            className={cx(baseCls, contextCls)}
            color={sanatizedColor}
            onChange={handleChange}
        />
    );
}`,computed:!1},type:{name:"func"},required:!1,description:""},color:{type:{name:"string"},required:!1,description:""},contextCls:{type:{name:"string"},required:!1,description:""},renderTriggerContent:{type:{name:"func"},required:!1,description:""}}};const W=A(G),b=r=>{const{onChange:o,fieldId:e,...s}=r;return i(W,{...s,onChange:t=>{const c=(t??"").toLowerCase();o(c,e)}})};b.defaultProps={onChange:()=>Promise.resolve()};b.propTypes={fieldId:n.string,onChange:n.func};b.__docgenInfo={description:"",methods:[],displayName:"ColorPickerField",props:{onChange:{defaultValue:{value:"() => Promise.resolve()",computed:!1},type:{name:"func"},required:!1,description:""},fieldId:{type:{name:"string"},required:!1,description:""}}};export{b as C};
//# sourceMappingURL=ColorPickerField-9d19efa4.js.map
