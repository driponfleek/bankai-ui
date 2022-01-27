import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Combobox } from '@epr0t0type/bankai-ui-form-elements-rw';
import packageJSON from '@epr0t0type/bankai-ui-form-elements-rw/package.json';
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

class ComboboxGuide extends PureComponent {
    static defaultProps = {
        shouldAutoFocus: false,
        shouldAutoSelectMatches: false,
        hasError: false,
        isBusy: false,
        isDefaultOpen: false,
        isDisabled: false,
        isReadOnly: false,
        shouldDropUp: false,
        shouldFocustFirstItem: false,
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
        hasError: PropTypes.bool,
        isBusy: PropTypes.bool,
        isDefaultOpen: PropTypes.bool,
        isDisabled: PropTypes.bool,
        isOpen: PropTypes.bool,
        isReadOnly: PropTypes.bool,
        shouldAutoFocus: PropTypes.bool,
        shouldAutoSelectMatches: PropTypes.bool,
        shouldDropUp: PropTypes.bool,
        shouldFocustFirstItem: PropTypes.bool,
        shouldHideCaret: PropTypes.bool,
        shouldHideEmptyPopup: PropTypes.bool,
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
        textField: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
        value: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.array,
            PropTypes.object,
        ]),
        renderListGroup: PropTypes.func,
        renderListItem: PropTypes.func,
        onChange: PropTypes.func,
        onSelect: PropTypes.func,
        onToggle: PropTypes.func,
    };

    static displayName = locale.stories.components.formElements.combobox.title;

    render() {
        return (
            <StoryLayout
                contextCls={this.baseCls}
                packageVer={packageJSON.version}
                title={locale.stories.components.formElements.combobox.title}
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
        const comboboxProps = {
            ...props,
            inputProps: { 'aria-label': 'Demo Combobox' },
        };

        return (
            <StorySection>
                <ComponentPreview shouldCheckA11Y>
                    <Combobox {...comboboxProps} />
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

    baseCls = 'bankai-sb-combobox-guide';
}

export default ComboboxGuide;
