import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Textarea } from '@epr0t0type/bankai-ui-form-elements';
import packageJSON from '@epr0t0type/bankai-ui-form-elements/package.json';
import StoryLayout from '../../../../sb-components/layout/StoryLayout';
import StorySection from '../../../../sb-components/layout/StorySection';
import SectionTitle from '../../../../sb-components/content/SectionTitle';
import ComponentPreview from '../../../../sb-components/content/ComponentPreview';
import ComponentPreviewWithCodeBlock from '../../../../sb-components/content/ComponentPreviewWithCodeBlock';
import Paragraph from '../../../../sb-components/content/Paragraph';
import strings from '../../../../i18n/strings.json';

// Utils
import { getComponentsTitle } from '../../../../utils/storiesConfig';

// Code Strings
import { examplesCodeStr } from './codeStr/codeStrTextarea';

// Styles
import './styles/textarea-guide.scss';

const { bankaiUI: locale } = strings;

class TextareaGuide extends PureComponent {
    static defaultProps = {
        hasError: false,
        isDisabled: false,
        isReadOnly: false,
        shouldAutoFocus: false,
        shouldSpellCheck: false,
    };

    static propTypes = {
        contextCls: PropTypes.string,
        id: PropTypes.string,
        name: PropTypes.string,
        placeholder: PropTypes.string,
        value: PropTypes.string,
        hasError: PropTypes.bool,
        isDisabled: PropTypes.bool,
        isReadOnly: PropTypes.bool,
        shouldAutoFocus: PropTypes.bool,
        shouldSpellCheck: PropTypes.bool,
    };

    static displayName = locale.stories.components.formElements.textarea.title;

    render() {
        return (
            <StoryLayout
                contextCls={this.baseCls}
                packageVer={packageJSON.version}
                title={locale.stories.components.formElements.textarea.title}
                subTitle={getComponentsTitle(
                    locale.stories.components.formElements.categoryTitle,
                )}
            >
                {this.renderDemo()}
                {this.renderExamples()}
            </StoryLayout>
        );
    }

    renderDemo() {
        const { props } = this;

        return (
            <StorySection>
                <ComponentPreview shouldCheckA11Y>
                    <Textarea {...props} aria-label="Demo Textarea" />
                </ComponentPreview>
                <Paragraph>
                    Use textareas to allow user input that requires more room
                    than a text input would allow for.
                </Paragraph>
            </StorySection>
        );
    }

    renderExamples = () => {
        const placeholderText = 'Please enter a value...';

        return (
            <StorySection>
                <SectionTitle>Examples</SectionTitle>
                <ComponentPreviewWithCodeBlock
                    contextCls={`${this.baseCls}__examples-preview`}
                    codeString={examplesCodeStr}
                >
                    <Textarea
                        placeholder={placeholderText}
                        aria-label="Demo Textarea"
                    />
                    <Textarea
                        placeholder={placeholderText}
                        aria-label="Demo Disabled Textarea"
                        isDisabled
                    />
                    <Textarea
                        placeholder={placeholderText}
                        aria-label="Demo Textarea That Has Error"
                        hasError
                    />
                </ComponentPreviewWithCodeBlock>
            </StorySection>
        );
    };

    baseCls = 'bankai-sb-textarea-guide';
}

export default TextareaGuide;
