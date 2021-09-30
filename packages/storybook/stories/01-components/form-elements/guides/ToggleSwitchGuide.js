import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { ToggleSwitch } from '@epr0t0type/bankai-ui-form-elements';
import StoryLayout from '../../../../sb-components/layout/StoryLayout';
import StorySection from '../../../../sb-components/layout/StorySection';
// import SectionTitle from '../../../../sb-components/content/SectionTitle';
import ComponentPreview from '../../../../sb-components/content/ComponentPreview';
// import ComponentPreviewWithCodeBlock from '../../../../sb-components/content/ComponentPreviewWithCodeBlock';
import Paragraph from '../../../../sb-components/content/Paragraph';
import strings from '../../../../i18n/strings.json';

// Utils
import { getComponentsTitle } from '../../../../utils/storiesConfig';

// Code Strings
// import { examplesCodeStr } from './codeStr/codeStrTextInput';

// Styles
// import './styles/text-input-guide.scss';

const { bankaiUI: locale } = strings;

class ToggleSwitchGuide extends PureComponent {
    static defaultProps = {
        isBusy: false,
        isChecked: false,
        isDefaultChecked: false,
        isDisabled: false,
        onChange: () => Promise.resolve(),
    };

    static propTypes = {
        contextCls: PropTypes.string,
        id: PropTypes.string,
        name: PropTypes.string,
        value: PropTypes.string,
        isBusy: PropTypes.bool,
        isChecked: PropTypes.bool,
        isDefaultChecked: PropTypes.bool,
        isDisabled: PropTypes.bool,
        icons: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
        onChange: PropTypes.func,
        renderBusyIcon: PropTypes.func,
    };

    static displayName =
        locale.stories.components.formElements.toggleSwitch.title;

    render() {
        return (
            <StoryLayout
                title={
                    locale.stories.components.formElements.toggleSwitch.title
                }
                subTitle={getComponentsTitle(
                    locale.stories.components.formElements.categoryTitle,
                )}
            >
                {this.renderDemo()}
                {/* {this.renderExamples()} */}
            </StoryLayout>
        );
    }

    renderDemo() {
        const { props } = this;
        const compProps = {
            ...props,
            'aria-label': 'Demo Toggle Switch',
        };

        return (
            <StorySection>
                <ComponentPreview shouldCheckA11Y>
                    <ToggleSwitch {...compProps} />
                </ComponentPreview>
                <Paragraph>Coming soon</Paragraph>
            </StorySection>
        );
    }

    // renderExamples = () => {
    //     const placeholderText = 'Please enter a value...';

    //     return (
    //         <StorySection>
    //             <SectionTitle>Examples</SectionTitle>
    //             <ComponentPreviewWithCodeBlock
    //                 contextCls={`${this.baseCls}__examples-preview`}
    //                 codeString={examplesCodeStr}
    //             >
    //                 <TextInput
    //                     placeholder={placeholderText}
    //                     aria-label="Demo Text Input"
    //                 />
    //                 <TextInput
    //                     placeholder={placeholderText}
    //                     aria-label="Demo Disabled Text Input"
    //                     isDisabled
    //                 />
    //                 <TextInput
    //                     value="SuperCoolPass123"
    //                     aria-label="Demo Password Input"
    //                     isProtected
    //                 />
    //                 <TextInput
    //                     placeholder={placeholderText}
    //                     aria-label="Demo Text Input That Has Error"
    //                     hasError
    //                 />
    //             </ComponentPreviewWithCodeBlock>
    //         </StorySection>
    //     );
    // };

    baseCls = 'bankai-sb-toggle-switch-guide';
}

export default ToggleSwitchGuide;
