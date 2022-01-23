import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { NumberPicker } from '@epr0t0type/bankai-ui-form-elements-rw';
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

class NumberPickerGuide extends PureComponent {
    static defaultProps = {
        hasError: false,
        isDisabled: false,
        isReadOnly: false,
        shouldAutoFocus: false,
        inputProps: {},
        onBlur: () => Promise.resolve(),
        onChange: () => Promise.resolve(),
        onChangeComplete: () => Promise.resolve(),
        onFocus: () => Promise.resolve(),
        onKeyDown: () => Promise.resolve(),
        onKeyPress: () => Promise.resolve(),
        onKeyUp: () => Promise.resolve(),
    };

    static propTypes = {
        contextCls: PropTypes.string,
        format: PropTypes.string,
        name: PropTypes.string,
        placeholder: PropTypes.string,
        max: PropTypes.number,
        min: PropTypes.number,
        precision: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        step: PropTypes.number,
        value: PropTypes.number,
        hasError: PropTypes.bool,
        isDisabled: PropTypes.bool,
        isReadOnly: PropTypes.bool,
        shouldAutoFocus: PropTypes.bool,
        inputProps: PropTypes.object,
        messages: PropTypes.object,
        decrementIcon: PropTypes.element,
        incrementIcon: PropTypes.element,
        onBlur: PropTypes.func,
        onChange: PropTypes.func,
        onChangeComplete: PropTypes.func,
        onFocus: PropTypes.func,
        onKeyDown: PropTypes.func,
        onKeyPress: PropTypes.func,
        onKeyUp: PropTypes.func,
    };

    static displayName =
        locale.stories.components.formElements.numberPicker.title;

    render() {
        return (
            <StoryLayout
                contextCls={this.baseCls}
                title={
                    locale.stories.components.formElements.numberPicker.title
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
        const numberPickerProps = {
            ...props,
            inputProps: { 'aria-label': 'Demo Number Picker' },
        };

        return (
            <StorySection>
                <ComponentPreview shouldCheckA11Y>
                    <NumberPicker {...numberPickerProps} />
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

    baseCls = 'bankai-sb-number-picker-guide';
}

export default NumberPickerGuide;
