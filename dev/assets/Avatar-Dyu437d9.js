import{j as s}from"./jsx-runtime-Co4revrD.js";import{c as m}from"./localeUtils-D2w-4qCV.js";const c=t=>{const{contextCls:n,imgURL:r,hasBorder:d=!0,children:o}=t,e=!!r,i={...e&&{backgroundImage:`url('${r}')`}},a="bankai-avatar",p={[`${a}--img`]:e,[`${a}--has-border`]:d};return s.jsx("span",{className:m(a,p,n),style:i,children:!e&&o&&s.jsx("span",{className:`${a}__inner`,children:o})})};c.__docgenInfo={description:`@param {Object} props
@param {string} [props.contextCls] - Additional CSS class name(s) to apply to the root element
@param {string} [props.imgURL] - URL of the avatar image; when provided renders as a background image
@param {boolean} [props.hasBorder] - Whether to render a border around the avatar (defaults to true)
@param {ReactNode} [props.children] - Child content rendered inside the avatar when no image URL is provided`,methods:[],displayName:"Avatar"};export{c as A};
