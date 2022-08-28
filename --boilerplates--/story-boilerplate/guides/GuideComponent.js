// import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';
// import { Button } from '@epr0t0type/bankai-ui-buttons';
// import packageJSON from '@epr0t0type/bankai-ui-buttons/package.json';
// import StoryLayout from '../../../../sb-components/layout/StoryLayout';
// import StorySection from '../../../../sb-components/layout/StorySection';
// import SectionTitle from '../../../../sb-components/content/SectionTitle';
// import ComponentPreview from '../../../../sb-components/content/ComponentPreview';
// import Paragraph from '../../../../sb-components/content/Paragraph';

// // Utils
// import { getComponentsTitle } from '../../../../utils/storiesConfig';
// import { getLocale } from '../../../../utils/localeUtils';

// // Styles
// import './styles/button-guide.scss';

// class ButtonGuide extends PureComponent {
//     static defaultProps = {
//         type: 'button',
//         isBusy: false,
//         isDisabled: false,
//         onClick: () => Promise.resolve(),
//     };

//     static propTypes = {
//         contextCls: PropTypes.string,
//         iconCls: PropTypes.string,
//         text: PropTypes.string,
//         type: PropTypes.string,
//         variant: PropTypes.string,
//         isBusy: PropTypes.bool,
//         isDisabled: PropTypes.bool,
//         data: PropTypes.object,
//         onClick: PropTypes.func,
//         renderIcon: PropTypes.func,
//         renderBusyIcon: PropTypes.func,
//     };

//     static displayName = getLocale('stories.components.componentCategory.componentName.title');

//     constructor(...args) {
//         super(...args);

//         this.state = {
//             isDarkMode: this.getIsDarkMode(),
//         };
//     }

//     render() {
//         return (
//             <StoryLayout
//                 contextCls={this.baseCls}
//                 packageVer={packageJSON.version}
//                 title={getLocale('stories.components.componentCategory.componentName.title')}
//                 subTitle={getComponentsGeneralTitle(
//                     getLocale('stories.components.componentCategory.categoryTitle'),
//                 )}
//             >
//                 {this.renderDemo()}
//             </StoryLayout>
//         );
//     }

//     renderDemo() {
//         const { props } = this;

//         return (
//             <StorySection>
//                 <ComponentPreview shouldCheckA11Y>
//                     <Button {...props} />
//                 </ComponentPreview>
//                 <Paragraph>
//                     Buttons allow users to take action in your UI. Well-formed
//                     buttons help users understand what action will be performed
//                     when they are interacted with.
//                 </Paragraph>
//             </StorySection>
//         );
//     }

//     baseCls = 'bankai-sb-buttons-guide';
// }

// export default ButtonGuide;
