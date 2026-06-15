import{j as e}from"./jsx-runtime-Co4revrD.js";import{r as m}from"./iframe-BWkWyXRs.js";import{c as p}from"./localeUtils-D2w-4qCV.js";const l=d=>{const{contextCls:i,meta:n,text:a,shouldSwapTextAndMeta:r=!1,renderAfter:s,renderBefore:o,children:c}=d,t="bankai-list-item";return e.jsxs("div",{className:p(t,i),children:[o&&e.jsx("div",{className:`${t}__before-content`,children:o()}),e.jsxs("div",{className:`${t}__content`,children:[!c&&e.jsxs(m.Fragment,{children:[r&&n&&e.jsx("div",{className:`${t}__meta`,children:n}),a&&e.jsx("div",{className:`${t}__text`,children:a}),!r&&n&&e.jsx("div",{className:`${t}__meta`,children:n})]}),c]}),s&&e.jsx("div",{className:`${t}__after-content`,children:s()})]})};l.__docgenInfo={description:`@param {Object} props
@param {string} [props.contextCls] - Additional CSS class name(s) to apply to the root element
@param {string|React.ReactElement} [props.meta] - Secondary metadata content displayed below or above the text
@param {string|React.ReactElement} [props.text] - Primary text content
@param {boolean} [props.shouldSwapTextAndMeta] - Whether to render meta above text instead of below
@param {Function} [props.renderAfter] - Render function for content appended after the main content
@param {Function} [props.renderBefore] - Render function for content prepended before the main content`,methods:[],displayName:"ListItem"};export{l as L};
