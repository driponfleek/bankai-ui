import{p as a}from"./index-f9722e9b.js";import{R as l,r as f}from"./index-c013ead5.js";import{L as m}from"./SelectIcon-9570cae3.js";import{c as d}from"./localeUtils-d4c6437e.js";import{c as h,S as v}from"./extantPropsUtils-b10ffe52.js";const b=["children"];function i(){return i=Object.assign||function(t){for(var r=1;r<arguments.length;r++){var e=arguments[r];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])}return t},i.apply(this,arguments)}function g(t,r){if(t==null)return{};var e={},n=Object.keys(t),s,o;for(o=0;o<n.length;o++)s=n[o],!(r.indexOf(s)>=0)&&(e[s]=t[s]);return e}const O={},x={searchTerm:a.string,focused:a.bool,onSelect:a.func.isRequired,activeId:a.string};function y(t){let{children:r}=t,e=g(t,b);return l.createElement(m,i({},e,{dataItem:O,className:"rw-list-option-create",selected:!1}),r)}y.propTypes=x;function P(t,{searchTerm:r="",data:e,dataItems:n,accessors:s}){const o=u=>s.text(u).toLowerCase()===r.toLowerCase();return!!((t===!0||t==="onFilter"&&r)&&!(()=>n&&n.some(o)||e.some(o))())}const w=["className","busy","visible","icon","spinner"];function c(){return c=Object.assign||function(t){for(var r=1;r<arguments.length;r++){var e=arguments[r];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])}return t},c.apply(this,arguments)}function j(t,r){if(t==null)return{};var e={},n=Object.keys(t),s,o;for(o=0;o<n.length;o++)s=n[o],!(r.indexOf(s)>=0)&&(e[s]=t[s]);return e}const _=t=>{let{className:r,busy:e,visible:n,icon:s=h,spinner:o=v}=t,p=j(t,w);return f.createElement("span",c({},p,{"aria-hidden":"true",className:d(r,"rw-btn rw-picker-caret")}),e?o:n?s:null)};export{y as A,O as C,_ as D,P as c};
//# sourceMappingURL=PickerCaret-f8638046.js.map
