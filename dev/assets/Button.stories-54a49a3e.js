import{d as t,c as ge,j as e,e as n,g as l,F as u}from"./localeUtils-f8841aa9.js";import{P as G,b as M}from"./storyConst-86e132c8.js";import{P as d}from"./Paragraph-6c42a1e4.js";import{P as c}from"./index-f9722e9b.js";import{S as r}from"./SectionTitle-559bdac6.js";import{O as b,a as o}from"./OmniListItem-54ed620a.js";import{H as S}from"./Hyperlink-4baa69fb.js";import{C as h}from"./CodeTag-0fe6af15.js";import{r as ye}from"./index-c013ead5.js";import{C as g,S as fe,b as ve,c as Be}from"./buttonArgs-1cae3567.js";import{i as we,j as Se,k as xe,l as Ce,S as Ie,h as Te}from"./SectionPlayground-765e4596.js";import{B as p}from"./ButtonSecondary-c5f454b5.js";import{B as V,a as De,b as _e,c as ke}from"./BankaiSettings-1d2be5e7.js";import{B as Ae,a as Pe}from"./DoAndDoNotDo-195e68b4.js";import{a as $,B as j,b as Ne}from"./Button-ffd3db84.js";import{C as z}from"./ComponentPreview-8709da56.js";import{g as C}from"./storiesConfigUtils-656c85e3.js";import{B as We}from"./BannerInfo-4df4caff.js";import{B as Le}from"./BankaiCircleInfo-bfad1eb6.js";import{B as v}from"./ButtonPrimary-d1f62f56.js";import{B as Re}from"./BankaiChevronDown-2478f416.js";import{S as K}from"./StoryLayout-5de492fb.js";import{S as Ue}from"./SectionDesign-5f13b266.js";import"./_commonjsHelpers-725317a4.js";import"./storiesConfigUtils-ff1a3aad.js";import"./chunk-S4VUQJ4A-98116e58.js";import"./iframe-2739de92.js";import"../sb-preview/runtime.js";import"./index-e74941a2.js";import"./index-11d98b33.js";import"./index-356e4a49.js";import"./CodeBlock-a39c81fe.js";import"./clipboardUtils-4a738ab5.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./index-2bc63947.js";import"./chunk-DXNAW7Q2-0e265de5.js";import"./CompImportAndUsage-606750a0.js";import"./LinkButton-c55d852c.js";import"./MainContent-3816a364.js";import"./sharedArgs-9f54493b.js";import"./argTypesUtils-aa6861f7.js";import"./BankaiCaretDown-b0361732.js";import"./shared-06e4991e.js";import"./BankaiCircleCheck-670761fd.js";import"./BankaiTriangleAlert-e1ba440c.js";import"./BankaiCircleX-f5ed6c62.js";import"./BankaiSpinner-972b7cf0.js";import"./MainContent-0fb453bf.js";const Oe=s=>{const i=a=>{const{contextCls:m,shouldRenderIcon:f,bannerProps:R,renderBanner:le,renderBannerIcon:he,children:ue,...pe}=a,me=C("banner-and-example-composer"),be={...f&&{renderIcon:he},...R};return t("div",{className:ge(me,m),children:[le(be),e(s,{...pe,children:ue})]})};return i.defaultProps={shouldRenderIcon:!0,renderBanner:We,renderBannerIcon:Le},i.propTypes={contextCls:c.string,shouldRenderIcon:c.bool,bannerProps:c.object,renderBanner:c.func,renderBannerIcon:c.func},i},qe=Oe,Fe=qe,Ee=Fe(z),x=Ee;z.__docgenInfo={description:"",methods:[],displayName:"ComponentPreview",props:{shouldCheckA11Y:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},hasLightBg:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},contextCls:{type:{name:"string"},required:!1,description:""}}};const Y=()=>e(n,{children:e(d,{children:"Buttons play a pivotal role in user interaction, and to ensure a seamless and accessible experience, we've established a set of principles shared across all button variants. This page serves as a central hub for understanding accessibility requirements, customization options, and general best practices applicable to every button type. Dive into this comprehensive guide to ensure consistent and user-friendly button implementations throughout our applications."})});Y.__docgenInfo={description:"",methods:[],displayName:"SectionIntro"};const I=s=>{const{disabledBullet:i}=s;return t(n,{children:[e(r,{headingLvl:3,children:l("titles.forDesigners")}),e(n,{children:t(b,{children:[t(o,{children:[e("strong",{children:"Contrast Matters:"})," Ensure that the color contrast between the button's text and background meets the"," ",e(S,{href:"https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html",shouldOpenInNewWindow:!0,children:"accessibility requirement for text contrast"}),", as outlined in Web Content Accessibility Guidelines (WCAG). This helps users with visual impairments read and understand the content."]}),t(o,{children:[e("strong",{children:"Clear Button Text:"})," ",e(S,{href:"https://www.w3.org/WAI/WCAG21/Understanding/name-role-value.html",shouldOpenInNewWindow:!0,children:"Button text should clearly convey its purpose"}),". This ensures that all users, including those relying on screen readers, understand the button's function."]}),t(o,{children:[e("strong",{children:"Provide aria-labels for Buttons Without Text:"})," ","If the button does not contain text, using"," ",e(h,{children:"aria-label"})," to provide a concise and descriptive label can enhance accessibility and ensure all users receive clear information about the button's function. Design includes what can't be seen which means we are also responsible for providing these types of details. Be pro-active about providing these to your developers!"]}),t(o,{children:[e("strong",{children:"Visible Focus Indicator:"})," ",e(S,{href:"https://www.w3.org/WAI/WCAG21/Understanding/focus-visible.html",shouldOpenInNewWindow:!0,children:"Design clear and visible focus indicators"})," ","for buttons, including disabled buttons. These indicators help keyboard and screen reader users understand which button they have selected and maintain a consistent user experience."]}),t(o,{children:[e("strong",{children:"Avoid Disabled Buttons When Possible:"})," ",i]})]})})]})};I.propTypes={disabledBullet:c.element};I.__docgenInfo={description:"",methods:[],displayName:"SectionAccessibilityForDesigners",props:{disabledBullet:{type:{name:"element"},required:!1,description:""}}};const T=s=>{const{disabledBullet:i}=s;return t(n,{children:[e(r,{headingLvl:3,children:l("titles.forDevelopers")}),e(n,{children:t(b,{children:[t(o,{children:[t("strong",{children:["Semantic"," ",e("abbr",{title:l("abbreviations.html"),children:"HTML"}),":"]})," ","Whenever possible, use the"," ",e(h,{children:"<button>"})," element for buttons, including disabled buttons. It's semantically correct and provides built-in keyboard and screen reader support.",e(b,{children:t(o,{children:["If you need buttons that link to other pages, use ",e(h,{children:"<a>"})," elements with the appropriate role and attributes to make them behave like buttons."]})})]}),t(o,{children:[e("strong",{children:"Use aria-label Sparingly:"})," For buttons with text inside, it's generally not necessary to use the ",e(h,{children:"aria-label"})," ","attribute, as screen readers will announce the button text. Best practice is to make sure the button's visible text clearly conveys its purpose."]}),t(o,{children:[e("strong",{children:"Consider aria-label for Icon-Only Buttons:"})," ","If the button contains only an icon without accompanying text, using ",e(h,{children:"aria-label"})," to provide a concise and descriptive label can enhance accessibility and ensure all users receive clear information about the button's function."]}),t(o,{children:[e("strong",{children:"Consider Alternatives to Disabling Buttons:"})," ",i]}),t(o,{children:[e("strong",{children:"Tab Order:"})," Ensure that both enabled and disabled buttons can be navigated using the keyboard and follow a logical tab order."]}),t(o,{children:[e("strong",{children:"Keyboard Interaction:"})," Buttons, including disabled ones, should be navigable using the Tab key to maintain a consistent user experience. However, disabled buttons should not be interactable when they are in a disabled state, and pressing Enter or Space on a disabled button should have no effect. Ensuring correct keyboard navigation support for buttons provides a seamless and accessible experience for users who rely on keyboard input or assistive technologies."]})]})})]})};T.propTypes={disabledBullet:c.element};T.__docgenInfo={description:"",methods:[],displayName:"SectionAccessibilityForDevs",props:{disabledBullet:{type:{name:"element"},required:!1,description:""}}};const J=s=>{const i=l("shared.copy"),a=l("shared.copied");return e(g,{...s,copyText:i,copiedText:a})};J.__docgenInfo={description:"",methods:[],displayName:"ComponentPreviewWithCodeBlock"};const D=s=>{const{btnText:i}=s,[a,m]=ye.useState(!1);return t(n,{children:[e(r,{headingLvl:3,children:"Dynamic Text"}),t(n,{children:[e(d,{children:"Assigning different text to a button during disabled or busy states serves a dual purpose of enhancing both visual and auditory user experiences. For users who rely on screen readers, the dynamic text changes provide clear and informative announcements, ensuring accessibility. Simultaneously, users with visual capabilities benefit from the visual cues, gaining insight into why the button is temporarily inactive or processing a request. This thoughtful approach to button text modification ensures a more inclusive and comprehensible user interface."}),e(J,{codeStrModifier:we,shouldShowCopy:!1,children:e(p,{text:a?"Busy Doing Stuff":i,renderIcon:V,isBusy:a,onClick:()=>{m(!0),setTimeout(()=>{m(!1)},1800)},isDynamicText:!0})})]})]})};D.propTypes={btnText:c.string};D.__docgenInfo={description:"",methods:[],displayName:"SectionAccessibilityDynamicText",props:{btnText:{type:{name:"string"},required:!1,description:""}}};const _=s=>{const{btnText:i}=s,a=t(u,{children:["Buttons disabled using the ",e(h,{children:"disabled"})," attribute aren't focusable and can't be reached by keyboard navigation. When needing to visually display a button in a disabled state, think through the requirements of making it accessible without using the ",e(h,{children:"disabled"})," attribute."]});return t(n,{children:[e(r,{children:"Accessibility: Ensuring Inclusive Interaction"}),e(n,{children:e(d,{children:"Accessibility isn't just a checkbox—it's a commitment to ensuring that all users can interact with your interface effectively. Buttons are essential interactive elements, and it's crucial to ensure that they are accessible to all users, regardless of their abilities. By considering these accessibility tips, you can create buttons, including disabled buttons, that provide a more inclusive and user-friendly experience for everyone."})}),e(I,{disabledBullet:a}),e(T,{disabledBullet:a}),e(D,{btnText:i}),e(n,{children:t(d,{children:["For more detailed guidance on button accessibility, please refer to the"," ",e(S,{href:"https://www.w3.org/TR/wai-aria-practices-1.2/#button",shouldOpenInNewWindow:!0,children:"ARIA Authoring Practices Guide for Buttons"}),"."]})})]})};_.propTypes={btnText:c.string};_.__docgenInfo={description:"",methods:[],displayName:"SectionAccessibility",props:{btnText:{type:{name:"string"},required:!1,description:""}}};const Q=()=>t(n,{children:[e(r,{headingLvl:3,children:"When to Use Buttons"}),e(n,{children:t(b,{children:[t(o,{children:[e("strong",{children:"Initiating Actions:"})," Buttons are ideal for triggering actions, such as submitting forms, saving changes, or initiating a process."]}),t(o,{children:[e("strong",{children:"Calls-to-Action:"})," Use buttons to highlight key actions you want users to take, such as signing up, making a purchase, or starting a free trial."]}),t(o,{children:[e("strong",{children:"Confirmation Dialogs:"})," In scenarios where user confirmation is needed, buttons can be used within confirmation dialogs. For example, confirming a deletion or acknowledging critical decisions."]})]})})]});Q.__docgenInfo={description:"",methods:[],displayName:"SectionWhenToUse"};const X=()=>t(n,{children:[e(r,{headingLvl:3,children:"When to Avoid Buttons"}),e(n,{children:t(d,{children:[e("strong",{children:"Navigation:"})," When the primary purpose is navigation, especially within your app or website, consider using hyperlinks instead of buttons. This not only aligns with best practices and user expectations for navigation elements but also enhances accessibility, making it easier for users relying on screen readers or keyboard navigation to understand and interact with your content."]})})]});X.__docgenInfo={description:"",methods:[],displayName:"SectionWhenToAvoid"};const k=s=>{const{btnText:i}=s;return t(n,{children:[e(r,{headingLvl:3,children:"Rendering an Icon"}),e(n,{children:e(g,{codeStrModifier:Se,shouldShowCopy:!1,children:e(p,{text:i,renderIcon:V})})})]})};k.propTypes={btnText:c.string};k.__docgenInfo={description:"",methods:[],displayName:"SectionRenderingIcons",props:{btnText:{type:{name:"string"},required:!1,description:""}}};const He=()=>e(De,{contextCls:"bankai-icon-spinner"}),Z=()=>t(n,{children:[e(r,{headingLvl:3,children:"Rendering a Custom Busy Icon"}),t(n,{children:[e(g,{codeStrModifier:xe,shouldShowCopy:!1,children:e(p,{text:"Saving",renderBusyIcon:He,isBusy:!0})}),e(Ae,{msg:t(u,{children:[l("designSystemName")," makes no assumptions about the animation that works best for your icon. The default spinning animation can be added to your icon by using the"," ",e(h,{children:"bankai-icon-spinner"})," class."]})})]})]});Z.__docgenInfo={description:"",methods:[],displayName:"SectionRenderingCustomBusyIcons"};const ee=()=>t(n,{children:[e(r,{headingLvl:3,children:"Rendering Custom Content"}),e(n,{children:e(g,{codeStrModifier:Ce,shouldShowCopy:!1,children:t(p,{children:[e($,{children:"(∩^o^)⊃━☆゜.* Magic!"}),e(j,{renderIcon:_e})]})})})]});ee.__docgenInfo={description:"",methods:[],displayName:"SectionRenderingCustomContent"};const y=s=>{const{baseCls:i,isDestructive:a}=s,m={msg:e("strong",{children:"Inline:"})},f={msg:e("strong",{children:"Stacked:"})};return t(u,{children:[t(x,{contextCls:`${i}__btn-hierarchy-inline-ex`,bannerProps:m,shouldRenderIcon:!1,children:[!a&&e(v,{text:"Save"}),e(p,{text:"Cancel"}),a&&e(v,{text:"Delete",isDestructive:!0})]}),t(x,{contextCls:`${i}__btn-hierarchy-stacked-ex`,bannerProps:f,shouldRenderIcon:!1,children:[!a&&e(v,{text:"Save"}),e(p,{text:"Cancel"}),a&&e(v,{text:"Delete",isDestructive:!0})]})]})};y.defaultProps={isDestructive:!1};y.propTypes={baseCls:c.string,isDestructive:c.bool};y.__docgenInfo={description:"",methods:[],displayName:"BtnHierarchyExamples",props:{isDestructive:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},baseCls:{type:{name:"string"},required:!1,description:""}}};const A=s=>{const{baseCls:i}=s;return t(n,{contextCls:`${i}__btn-hierarchy-default-order`,children:[e(r,{headingLvl:4,children:"Default Order"}),e(d,{children:"By default, when buttons are inline, the primary button is placed on the left, and the secondary button is placed on the right. This aligns with the natural reading order for left-to-right languages, providing an intuitive flow for users."}),e(d,{children:"When buttons are vertically stacked, the primary button is placed at the top, and the secondary button is placed below it."}),e(y,{baseCls:i})]})};A.propTypes={baseCls:c.string};A.__docgenInfo={description:"",methods:[],displayName:"SectionBtnHierarchyDefault",props:{baseCls:{type:{name:"string"},required:!1,description:""}}};const P=s=>{const{baseCls:i}=s;return t(n,{contextCls:`${i}__btn-hierarchy-destructive-order`,children:[e(r,{headingLvl:4,children:"Button Order When the Primary Button is Destructive"}),e(d,{children:"When the primary button also serves a destructive purpose, we intentionally swap the default order. By swapping the default order for primary destructive buttons, we introduce a deliberate friction point, encouraging users to think twice before proceeding with potentially irreversible actions. This design pattern aims to enhance user awareness and prevent accidental clicks on critical operations, fostering a deliberate decision-making process."}),e(y,{baseCls:i,isDestructive:!0})]})};P.propTypes={baseCls:c.string};P.__docgenInfo={description:"",methods:[],displayName:"SectionBtnHierarchyDestructive",props:{baseCls:{type:{name:"string"},required:!1,description:""}}};const N=s=>{const{baseCls:i}=s;return t(n,{children:[e(r,{headingLvl:3,children:"Button Hierarchy"}),e(n,{children:e(d,{children:"In designing button hierarchies, we aim to create a consistent and user-friendly experience. This involves defining a pattern for the order of primary and secondary buttons, taking into consideration their potential destructive nature."})}),e(A,{baseCls:i}),e(P,{baseCls:i})]})};N.propTypes={baseCls:c.string};N.__docgenInfo={description:"",methods:[],displayName:"SectionBtnHierarchy",props:{baseCls:{type:{name:"string"},required:!1,description:""}}};const W=s=>{const{baseCls:i,btnText:a}=s;return t(n,{children:[e(r,{children:l("titles.usage")}),e(Q,{}),e(X,{}),e(ee,{}),e(k,{btnText:a}),e(Z,{}),e(N,{baseCls:i})]})};W.propTypes={baseCls:c.string,btnText:c.string};W.__docgenInfo={description:"",methods:[],displayName:"SectionUsage",props:{baseCls:{type:{name:"string"},required:!1,description:""},btnText:{type:{name:"string"},required:!1,description:""}}};const te=()=>t(n,{children:[e(r,{headingLvl:3,children:"When to Use Busy State"}),t(n,{children:[e(d,{children:"When a button triggers a process or action that takes time, consider using the busy state to indicate ongoing activity. This helps manage user expectations during loading or processing periods."}),e(g,{shouldShowCopy:!1,children:e(p,{text:"Saving",isBusy:!0,isDynamicText:!0})})]})]});te.__docgenInfo={description:"",methods:[],displayName:"SectionBusyState"};const ne=s=>{const i=l("titles.do"),a=l("titles.doNot");return e(Pe,{...s,doTitle:i,doNotDoTitle:a})};ne.__docgenInfo={description:"",methods:[],displayName:"DoAndDoNotDo"};const ie=()=>{const s=[t(u,{children:[e("strong",{children:"Do Use Descriptive Text:"})," Clearly communicate the action a button performs through concise and meaningful text. Descriptive labels improve accessibility and provide clarity to all users."]}),t(u,{children:[e("strong",{children:"Do Provide Visual Feedback:"})," Include visual cues such as hover effects, focus outlines, and disabled states to enhance the user experience and communicate the interactive nature of buttons."]}),t(u,{children:[e("strong",{children:"Do Use ARIA Attributes Responsibly:"})," When using buttons without visible text (For example, icon buttons), do use the"," ",e(h,{children:"aria-label"})," attribute to provide a meaningful description for accessibility."]})],i=[t(u,{children:[e("strong",{children:"Do Not Use Ambiguous Labels:"})," Refrain from using vague or unclear labels on buttons. Users should easily understand the purpose of a button without ambiguity."]}),t(u,{children:[e("strong",{children:"Do Not Sacrifice Clarity for Style:"})," Stylish designs are crucial, but don't compromise clarity. Ensure that buttons remain easily recognizable and understandable, even in the absence of accompanying text."]}),t(u,{children:[e("strong",{children:"Do Not Create Unnecessary Repetition:"})," While ARIA attributes are valuable for accessibility, avoid redundant information. If a button already has descriptive text, additional use of ",e(h,{children:"aria-label"})," may be unnecessary and potentially confusing."]})];return t(n,{children:[e(r,{headingLvl:3,children:l("titles.dosAndDoNotDos")}),t(n,{children:[e(d,{children:`Buttons are not just functional elements; they are opportunities to enhance user engagement and satisfaction. By following these "Do's" and avoiding the "Do Not Do's" you can create a more user-centered design.`}),e(ne,{doList:s,doNotDoList:i,isSideBySide:!0})]})]})};ie.__docgenInfo={description:"",methods:[],displayName:"SectionDoAndDoNotDo"};const se=()=>t(n,{children:[e(r,{headingLvl:3,children:"Icon Considerations"}),t(b,{children:[t(o,{children:[e("strong",{children:"Use Appropriate Icons:"})," Select icons that clearly represent the intended action. Choose universally recognized symbols to ensure a shared understanding across diverse user groups."]}),t(o,{children:[e("strong",{children:"Maintain Consistency:"})," Establish consistency in iconography throughout your application. Use similar icons for comparable actions to create a cohesive and intuitive user interface."]})]})]});se.__docgenInfo={description:"",methods:[],displayName:"SectionIconConsiderations"};const L=s=>{const{baseCls:i}=s,a={msg:t(u,{children:[e("strong",{children:"Left Side:"})," The most common use case. Place icons to the left of the button text when the icon's role is crucial to understanding the primary action or when the icon serves as a visual cue for quick recognition."]})},m={msg:t(u,{children:[e("strong",{children:"Right Side:"})," Position icons to the right of the button text when the icon is secondary or supportive and doesn't play a crucial role in immediate recognition."]})};return t(n,{contextCls:`${i}__icon-placement`,children:[e(r,{headingLvl:3,children:"Icon Placement"}),t(n,{children:[e(x,{bannerProps:a,shouldRenderIcon:!1,children:e(p,{text:"Settings",renderIcon:ke})}),e(x,{bannerProps:m,shouldRenderIcon:!1,children:t(p,{children:[e($,{children:"Menu"}),e(j,{renderIcon:Re})]})})]})]})};L.propTypes={baseCls:c.string};L.__docgenInfo={description:"",methods:[],displayName:"SectionIconPlacement",props:{baseCls:{type:{name:"string"},required:!1,description:""}}};const oe=()=>t(n,{children:[e(r,{headingLvl:3,children:"Avoid Disabled Buttons"}),e(n,{children:t(d,{children:["While disabled buttons have their place in"," ",e("abbr",{title:"User Interface",children:"UI"})," design, there are instances where we may want to consider alternatives. Here are some tips for when to avoid disabled buttons, why we should, and alternative approaches:"]})}),t(n,{children:[e(r,{headingLvl:4,children:"When to Avoid Disabled Buttons"}),e(n,{children:t(b,{children:[t(o,{children:[e("strong",{children:"When Clarity is Needed:"})," If the reason for disabling a button is not immediately clear to users, it's better to avoid disabling it. Users should understand why a button is inactive."]}),t(o,{children:[e("strong",{children:"When Actions Are Conditional:"})," ","If an action's availability depends on certain conditions or inputs, disabling the button may not be the best approach. Instead, consider providing real-time feedback or guidance to users."]})]})})]}),t(n,{children:[e(r,{headingLvl:4,children:"Why Avoid Disabled Buttons"}),e(n,{children:t(b,{children:[t(o,{children:[e("strong",{children:"Confusion:"})," Disabled buttons can sometimes confuse users, as they may wonder why an action is unavailable. This can lead to a less intuitive and frustrating user experience."]}),t(o,{children:[e("strong",{children:"Accessibility:"})," Disabled buttons are not focusable and may not always be properly conveyed to users relying on assistive technologies like screen readers. This can result in a lack of clarity for users with disabilities."]}),t(o,{children:[e("strong",{children:"Loss of Context:"})," When a button is disabled, users might lose context about what they need to do to activate it. It's better to provide clear instructions or hints."]})]})})]}),t(n,{children:[e(r,{headingLvl:4,children:"Alternative Approaches"}),e(n,{children:t(b,{children:[t(o,{children:[e("strong",{children:"Feedback and Validation:"})," Offer real-time feedback as users interact with the interface. Highlight any issues or missing information near the relevant input fields."]}),t(o,{children:[e("strong",{children:"Progressive Disclosure:"})," Use progressive disclosure to guide users through a multi-step process. Only present actions that are relevant at each stage, simplifying the interface."]}),t(o,{children:[e("strong",{children:"Change Button State:"}),' Instead of disabling a button, change its state to indicate that an action is pending. For example, change the "Save Data" button to "Saving Data..." while processing a form.']})]})})]}),t(n,{children:[e(r,{headingLvl:4,children:"When to Fake it: Faux Disabled Buttons"}),t(n,{children:[t(d,{children:["In certain scenarios, you may want to visually simulate a disabled button without using the native HTML"," ",e(h,{children:"disabled"})," attribute. Instead, you can use the ",e(h,{children:"aria-disabled"})," attribute and CSS to create a button that appears disabled and progromattically prevent any interaction with the button itself while allowing it to remain focusable and accessible to all users, including those who rely on screen readers."]}),e(d,{children:"A perfect example of when we would want to do this is when a button is in a busy state. In the event where a button that is clicked calls an API to submit some data, we'd want to prevent the user from clicking the button again while that operation is underway. Our button would update to show it is busy and disabled, letting users know they will need to wait for the action to finish performing before they can use the button again."})]})]})]});oe.__docgenInfo={description:"",methods:[],displayName:"SectionDisabledButtons"};const re=()=>t(n,{children:[e(r,{children:l("titles.bestPracices")}),e(n,{children:e(d,{children:"These guidelines are designed to help you create buttons that are both aesthetically pleasing and functional. By following these best practices, you contribute to a consistent, accessible, and user-centric design that seamlessly guides users through your application."})}),e(L,{}),e(se,{}),e(ie,{}),e(oe,{}),e(te,{})]});re.__docgenInfo={description:"",methods:[],displayName:"SectionBestPractices"};const ae=()=>{const s=C("button-guidelines"),i="Button Text";return t(K,{contextCls:s,pkgVer:G.version,title:l("stories.components.buttons.buttonGuidelines.title"),subTitle:M,children:[e(Y,{}),e(W,{btnText:i,baseCls:s}),e(_,{btnText:i}),e(re,{})]})};ae.__docgenInfo={description:"",methods:[],displayName:"StoryButtonGuidelines"};const ce=()=>t(n,{children:[e(r,{children:"Overview"}),e(d,{children:"This button serves as the perfect starting point for crafting an array of button variants. We've kept it simple and unadorned, so you won't have to wrestle with excessive CSS to get started."})]});ce.__docgenInfo={description:"",methods:[],displayName:"SectionOverview"};const de=s=>{const i=C("button");return t(K,{contextCls:i,pkgVer:G.version,title:l("stories.components.buttons.button.title"),subTitle:M,children:[e(Ie,{...s,getPlaygroundComp:Te}),e(ce,{}),e(fe,{...s}),e(Ue,{})]})};de.__docgenInfo={description:"",methods:[],displayName:"StoryButton"};const Ut={title:"Components/Buttons/Button",component:Ne,args:ve,argTypes:Be},B={name:"Guidelines",render:ae,parameters:{a11y:{disable:!0},actions:{disable:!0},options:{showPanel:!1}}},w={name:"Default",render:de};var U,O,q;B.parameters={...B.parameters,docs:{...(U=B.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: 'Guidelines',
  render: StoryButtonGuidelines,
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
}`,...(q=(O=B.parameters)==null?void 0:O.docs)==null?void 0:q.source}}};var F,E,H;w.parameters={...w.parameters,docs:{...(F=w.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: 'Default',
  render: StoryButtonDefault
}`,...(H=(E=w.parameters)==null?void 0:E.docs)==null?void 0:H.source}}};const Ot=["ButtonGuidelines","Button"];export{w as Button,B as ButtonGuidelines,Ot as __namedExportsOrder,Ut as default};
//# sourceMappingURL=Button.stories-54a49a3e.js.map
