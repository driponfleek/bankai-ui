import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Multiselect } from '@epr0t0type/bankai-ui-form-elements-rw';
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

class MultiselectGuide extends PureComponent {
    static defaultProps = {
        hasError: false,
        isBusy: false,
        isDefaultOpen: false,
        isDisabled: false,
        isReadOnly: false,
        shouldAutoFocus: false,
        shouldDropUp: false,
        shouldFocustFirstItem: false,
        shouldShowPlaceholderWithValues: true,
        data: [],
        onChange: () => Promise.resolve(),
        onCreate: () => Promise.resolve(),
        onSearch: () => Promise.resolve(),
        onSelect: () => Promise.resolve(),
    };

    static propTypes = {
        contextCls: PropTypes.string,
        defaultSearchTerm: PropTypes.string,
        id: PropTypes.string,
        placeholder: PropTypes.string,
        searchTerm: PropTypes.string,
        hasError: PropTypes.bool,
        isBusy: PropTypes.bool,
        isDefaultOpen: PropTypes.bool,
        isDisabled: PropTypes.bool,
        isOpen: PropTypes.bool,
        isReadOnly: PropTypes.bool,
        shouldAutoFocus: PropTypes.bool,
        shouldDropUp: PropTypes.bool,
        shouldFocustFirstItem: PropTypes.bool,
        shouldShowPlaceholderWithValues: PropTypes.bool,
        data: PropTypes.array,
        defaultValue: PropTypes.array,
        value: PropTypes.array,
        inputProps: PropTypes.object,
        listProps: PropTypes.object,
        messages: PropTypes.object,
        busySpinner: PropTypes.element,
        clearTagIcon: PropTypes.element,
        selectIcon: PropTypes.element,
        allowCreate: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
        dataKey: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
        filter: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.func,
            PropTypes.bool,
        ]),
        groupBy: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
        listComponent: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
        tagOptionComponent: PropTypes.oneOfType([
            PropTypes.element,
            PropTypes.func,
        ]),
        textField: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
        onChange: PropTypes.func,
        onCreate: PropTypes.func,
        onSearch: PropTypes.func,
        onSelect: PropTypes.func,
        renderListGroup: PropTypes.func,
        renderListItem: PropTypes.func,
        renderTagValue: PropTypes.func,
    };

    static displayName =
        locale.stories.components.formElements.multiselect.title;

    render() {
        return (
            <StoryLayout
                title={locale.stories.components.formElements.multiselect.title}
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
        const multiselectProps = {
            ...props,
            inputProps: { 'aria-label': 'Demo Dropdown' },
        };

        return (
            <StorySection>
                <ComponentPreview shouldCheckA11Y>
                    <Multiselect {...multiselectProps} />
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

    baseCls = 'bankai-sb-multiselect-guide';
}

export default MultiselectGuide;
