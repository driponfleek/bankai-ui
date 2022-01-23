import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
    TextInput,
    Checkbox,
    FormFieldComposer,
    FORM_FIELD_COMP_VARIANTS,
} from '@epr0t0type/bankai-ui-form-elements';
import { BankaiTriangleAlert } from '@epr0t0type/bankai-ui-icons';
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
const ComposedCheckbox = FormFieldComposer(Checkbox);
const { STACKED, TOGGLE } = FORM_FIELD_COMP_VARIANTS;

class FormFieldComposerGuide extends PureComponent {
    static defaultProps = {
        variant: STACKED,
        hasError: false,
        isDisabled: false,
        isReadOnly: false,
        shouldIncludeError: true,
        shouldIncludeHint: true,
    };

    static propTypes = {
        contextCls: PropTypes.string,
        id: PropTypes.string,
        variant: PropTypes.string,
        hasError: PropTypes.bool,
        isDisabled: PropTypes.bool,
        isReadOnly: PropTypes.bool,
        shouldIncludeError: PropTypes.bool,
        shouldIncludeHint: PropTypes.bool,
        errorProps: PropTypes.object,
        hintProps: PropTypes.object,
        labelProps: PropTypes.object,
        labelSubtextProps: PropTypes.object,
    };

    static displayName =
        locale.stories.components.formElements.formFieldComposer.title;

    render() {
        return (
            <StoryLayout
                contextCls={this.baseCls}
                title={
                    locale.stories.components.formElements.formFieldComposer
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
        const { variant } = props;
        const DemoComp =
            variant === TOGGLE ? ComposedCheckbox : ComposedTextInput;
        const { errorProps, ...sanatizedProps } = props;

        return (
            <StorySection>
                <ComponentPreview shouldCheckA11Y>
                    <DemoComp
                        {...sanatizedProps}
                        errorProps={{
                            ...errorProps,
                            renderErrorIcon: this.renderErrorIcon,
                        }}
                        aria-label="Demo Form Field Composer"
                    />
                </ComponentPreview>
                <Paragraph>Coming soon</Paragraph>
            </StorySection>
        );
    }

    renderErrorIcon = (iconCls) => <BankaiTriangleAlert contextCls={iconCls} />;

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

    baseCls = 'bankai-sb-form-field-composer-guide';
}

export default FormFieldComposerGuide;
