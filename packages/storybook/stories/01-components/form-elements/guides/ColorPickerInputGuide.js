import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { ColorPickerInput } from '@epr0t0type/bankai-ui-form-elements';
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

class ColorPickerInputGuide extends PureComponent {
    static defaultProps = {
        changeCompleteThreshold: 200,
        hasAlpha: false,
        hasError: false,
        isDisabled: false,
        isReadOnly: false,
        shouldAlignPickerToRightEdge: false,
        shouldOpenUp: false,
        triggerProps: {},
        onChange: () => Promise.resolve(),
        onChangeComplete: () => Promise.resolve(),
    };

    static propTypes = {
        color: PropTypes.string,
        contextCls: PropTypes.string,
        changeCompleteThreshold: PropTypes.number,
        hasAlpha: PropTypes.bool,
        hasError: PropTypes.bool,
        isDisabled: PropTypes.bool,
        isReadOnly: PropTypes.bool,
        shouldAlignPickerToRightEdge: PropTypes.bool,
        shouldOpenUp: PropTypes.bool,
        triggerProps: PropTypes.shape({
            'aria-label': PropTypes.string,
        }),
        onChange: PropTypes.func,
        onChangeComplete: PropTypes.func,
        renderColorPicker: PropTypes.func,
        renderTriggerContent: PropTypes.func,
    };

    static displayName =
        locale.stories.components.formElements.colorPickerInput.title;

    state = {
        color: '',
    };

    render() {
        return (
            <StoryLayout
                contextCls={this.baseCls}
                title={
                    locale.stories.components.formElements.colorPickerInput
                        .title
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
        const { color } = this.state;

        return (
            <StorySection>
                <ComponentPreview shouldCheckA11Y>
                    <ColorPickerInput
                        {...props}
                        aria-label="Enter a Color"
                        color={color}
                        onChange={this.handleDemoChange}
                    />
                </ComponentPreview>
                <Paragraph>Coming soon.</Paragraph>
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

    handleDemoChange = (color) => {
        const { onChange } = this.props;
        onChange(color);

        this.setState({ color });
    };

    baseCls = 'bankai-sb-color-picker-input-guide';
}

export default ColorPickerInputGuide;
