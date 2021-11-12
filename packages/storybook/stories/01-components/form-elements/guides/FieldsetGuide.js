import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
    TextInput,
    Fieldset,
    FormFieldComposer,
} from '@epr0t0type/bankai-ui-form-elements';
import {
    FormLayoutFieldContainer,
    FormLayoutSection,
} from '@epr0t0type/bankai-ui-layouts';
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
// import { examplesCodeStr } from './codeStr/codeStrTextarea';

// Styles
// import './styles/textarea-guide.scss';

const { bankaiUI: locale } = strings;
const ComposedTextInput = FormFieldComposer(TextInput);

class FieldsetGuide extends PureComponent {
    static defaultProps = {
        isDisabled: false,
    };

    static propTypes = {
        contextCls: PropTypes.string,
        formId: PropTypes.string,
        name: PropTypes.string,
        isDisabled: PropTypes.bool,
        legendProps: PropTypes.object,
        legend: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    };

    static displayName = locale.stories.components.formElements.fieldset.title;

    render() {
        return (
            <StoryLayout
                title={locale.stories.components.formElements.fieldset.title}
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

        return (
            <StorySection>
                <ComponentPreview shouldCheckA11Y>
                    <Fieldset {...props}>
                        <FormLayoutSection>
                            <FormLayoutFieldContainer>
                                <ComposedTextInput
                                    labelProps={{ labelText: 'First Name' }}
                                />
                            </FormLayoutFieldContainer>
                            <FormLayoutFieldContainer>
                                <ComposedTextInput
                                    labelProps={{ labelText: 'Last Name' }}
                                />
                            </FormLayoutFieldContainer>
                            <FormLayoutFieldContainer>
                                <ComposedTextInput
                                    labelProps={{ labelText: 'Address' }}
                                />
                            </FormLayoutFieldContainer>
                        </FormLayoutSection>
                    </Fieldset>
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
    //                 <Textarea
    //                     placeholder={placeholderText}
    //                     aria-label="Demo Textarea"
    //                 />
    //                 <Textarea
    //                     placeholder={placeholderText}
    //                     aria-label="Demo Disabled Textarea"
    //                     isDisabled
    //                 />
    //                 <Textarea
    //                     placeholder={placeholderText}
    //                     aria-label="Demo Textarea That Has Error"
    //                     hasError
    //                 />
    //             </ComponentPreviewWithCodeBlock>
    //         </StorySection>
    //     );
    // };

    baseCls = 'bankai-sb-fieldset-guide';
}

export default FieldsetGuide;
