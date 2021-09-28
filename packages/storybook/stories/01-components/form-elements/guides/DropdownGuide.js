import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from '@epr0t0type/bankai-ui-form-elements-rw';
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

class DropdownGuide extends PureComponent {
    static defaultProps = {
        filter: false,
        hasError: false,
        isBusy: false,
        isDefaultOpen: false,
        isDisabled: false,
        isReadOnly: false,
        shouldAutoFocus: false,
        shouldDropUp: false,
        data: [],
        onChange: () => Promise.resolve(),
        onSelect: () => Promise.resolve(),
        onToggle: () => Promise.resolve(),
    };

    static propTypes = {
        contextCls: PropTypes.string,
        id: PropTypes.string,
        name: PropTypes.string,
        placeholder: PropTypes.string,
        delay: PropTypes.number,
        hasError: PropTypes.bool,
        isBusy: PropTypes.bool,
        isDefaultOpen: PropTypes.bool,
        isDisabled: PropTypes.bool,
        isOpen: PropTypes.bool,
        isReadOnly: PropTypes.bool,
        shouldAutoFocus: PropTypes.bool,
        shouldDropUp: PropTypes.bool,
        data: PropTypes.array,
        disabledOptions: PropTypes.array,
        busySpinner: PropTypes.element,
        selectIcon: PropTypes.element,
        inputProps: PropTypes.object,
        listProps: PropTypes.object,
        messages: PropTypes.object,
        dataKey: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
        defaultValue: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.array,
            PropTypes.object,
        ]),
        filter: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.func,
            PropTypes.bool,
        ]),
        groupBy: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
        listComponent: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
        optionComponent: PropTypes.oneOfType([
            PropTypes.element,
            PropTypes.string,
        ]),
        textField: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
        value: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.array,
            PropTypes.object,
        ]),
        renderListGroup: PropTypes.func,
        renderListItem: PropTypes.func,
        renderValue: PropTypes.func,
        onChange: PropTypes.func,
        onSelect: PropTypes.func,
        onToggle: PropTypes.func,
    };

    static displayName = locale.stories.components.formElements.dropdown.title;

    render() {
        return (
            <StoryLayout
                title={locale.stories.components.formElements.dropdown.title}
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
        const dropdownProps = {
            ...props,
            inputProps: { 'aria-label': 'Demo Dropdown' },
        };

        return (
            <StorySection>
                <ComponentPreview shouldCheckA11Y>
                    <Dropdown {...dropdownProps} />
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

    baseCls = 'bankai-sb-dropdown-guide';
}

export default DropdownGuide;
