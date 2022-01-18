import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
    DatePicker,
    defaultDateFormats,
} from '@epr0t0type/bankai-ui-form-elements-rw';
import StoryLayout from '../../../../sb-components/layout/StoryLayout';
import StorySection from '../../../../sb-components/layout/StorySection';
// import SectionTitle from '../../../../sb-components/content/SectionTitle';
import ComponentPreview from '../../../../sb-components/content/ComponentPreview';
// import ComponentPreviewWithCodeBlock from '../../../../sb-components/content/ComponentPreviewWithCodeBlock';
import Paragraph from '../../../../sb-components/content/Paragraph';
import strings from '../../../../i18n/strings.json';

// Utils
import { getComponentsTitle } from '../../../../utils/storiesConfig';
import { getSanatizedStoryProps } from '../../../../utils/storyLayoutPropsUtils';

// Code Strings
// import { examplesCodeStr } from './codeStr/codeStrTextInput';

// Styles
// import './styles/text-input-guide.scss';

const { bankaiUI: locale } = strings;

class DatePickerGuide extends PureComponent {
    static defaultProps = {
        valueDisplayFormat: defaultDateFormats.date,
        shouldAutoFocus: false,
        isDefaultOpen: false,
        isDisabled: false,
        hasError: false,
        shouldDropUp: false,
        isReadOnly: false,
        formats: defaultDateFormats,
        onBlur: () => Promise.resolve(),
        onChange: () => Promise.resolve(),
        onCurrentDateChange: () => Promise.resolve(),
        onFocus: () => Promise.resolve(),
        onKeyDown: () => Promise.resolve(),
        onKeyPress: () => Promise.resolve(),
        onSelect: () => Promise.resolve(),
        onToggle: () => Promise.resolve(),
    };

    static propTypes = {
        contextCls: PropTypes.string,
        id: PropTypes.string,
        name: PropTypes.string,
        placeholder: PropTypes.string,
        currentDate: PropTypes.instanceOf(Date),
        defaultValue: PropTypes.instanceOf(Date),
        max: PropTypes.instanceOf(Date),
        min: PropTypes.instanceOf(Date),
        value: PropTypes.instanceOf(Date),
        hasError: PropTypes.bool,
        isDefaultOpen: PropTypes.bool,
        isDisabled: PropTypes.bool,
        isReadOnly: PropTypes.bool,
        isOpen: PropTypes.bool,
        shouldAutoFocus: PropTypes.bool,
        shouldDropUp: PropTypes.bool,
        formats: PropTypes.object,
        inputProps: PropTypes.object,
        messages: PropTypes.object,
        selectIcon: PropTypes.element,
        valueDisplayFormat: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.object,
        ]),
        valueEditFormat: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.object,
        ]),
        valueFormat: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
        onBlur: PropTypes.func,
        onChange: PropTypes.func,
        onCurrentDateChange: PropTypes.func,
        onFocus: PropTypes.func,
        onKeyDown: PropTypes.func,
        onKeyPress: PropTypes.func,
        onSelect: PropTypes.func,
        onToggle: PropTypes.func,
    };

    static displayName =
        locale.stories.components.formElements.datePicker.title;

    render() {
        return (
            <StoryLayout
                {...getSanatizedStoryProps(this.props, false)}
                title={locale.stories.components.formElements.datePicker.title}
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
        const datePickerProps = getSanatizedStoryProps({
            ...props,
            inputProps: { 'aria-label': 'Demo Date Picker' },
        });

        return (
            <StorySection>
                <ComponentPreview shouldCheckA11Y>
                    <DatePicker {...datePickerProps} />
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

    baseCls = 'bankai-sb-date-picker-guide';
}

export default DatePickerGuide;
