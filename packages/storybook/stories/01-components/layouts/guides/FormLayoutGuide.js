import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
    // Checkbox,
    Textarea,
    TextInput,
    Fieldset,
    FormFieldComposer,
} from '@epr0t0type/bankai-ui-form-elements';
import { DatePicker } from '@epr0t0type/bankai-ui-form-elements-rw';
import {
    FormLayout,
    FormLayoutSection,
    FormLayoutRow,
    FormLayoutFieldContainer,
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
// import { examplesCodeStr } from './codeStr/codeStrComponent';

// Styles
import './styles/form-layout-guide.scss';

const { bankaiUI: locale } = strings;
const ComposedTextarea = FormFieldComposer(Textarea);
const ComposedTextInput = FormFieldComposer(TextInput);
const ComposedDatePicker = FormFieldComposer(DatePicker);

class FormLayoutGuide extends PureComponent {
    static defaultProps = {
        shouldPadContent: true,
    };

    static propTypes = {
        contextCls: PropTypes.string,
        shouldPadContent: PropTypes.bool,
    };

    static displayName = locale.stories.components.layouts.formLayout.title;

    render() {
        return (
            <StoryLayout
                contextCls={this.baseCls}
                title={locale.stories.components.layouts.formLayout.title}
                subTitle={getComponentsTitle(
                    locale.stories.components.layouts.categoryTitle,
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
                    <FormLayout {...props}>
                        <FormLayoutSection>
                            <Fieldset legend="User Info">
                                <FormLayoutSection>
                                    <FormLayoutRow>
                                        <FormLayoutFieldContainer>
                                            <ComposedTextInput
                                                labelProps={{
                                                    labelText: 'First Name*',
                                                }}
                                                placeholder="Please enter your first name"
                                            />
                                        </FormLayoutFieldContainer>
                                        <FormLayoutFieldContainer>
                                            <ComposedTextInput
                                                labelProps={{
                                                    labelText: 'Last Name*',
                                                }}
                                                placeholder="Please enter your last name"
                                            />
                                        </FormLayoutFieldContainer>
                                    </FormLayoutRow>
                                </FormLayoutSection>
                            </Fieldset>
                        </FormLayoutSection>
                        <FormLayoutSection>
                            <Fieldset legend="About You">
                                <FormLayoutSection>
                                    <FormLayoutFieldContainer>
                                        <ComposedTextarea
                                            labelProps={{ labelText: 'Bio' }}
                                            hintProps={{
                                                hintText:
                                                    '300 characters remaining',
                                            }}
                                            placeholder="Tell us a little about you"
                                        />
                                    </FormLayoutFieldContainer>
                                    <FormLayoutFieldContainer>
                                        <ComposedDatePicker
                                            labelProps={{
                                                labelText: 'Birthday',
                                            }}
                                            placeholder="When's your birthday?"
                                        />
                                    </FormLayoutFieldContainer>
                                </FormLayoutSection>
                            </Fieldset>
                        </FormLayoutSection>
                    </FormLayout>
                </ComponentPreview>
                <Paragraph>Coming Soon.</Paragraph>
            </StorySection>
        );
    }

    // renderExamples = () => {
    //     return (
    //         <StorySection>
    //             <SectionTitle>Examples</SectionTitle>
    //             <ComponentPreviewWithCodeBlock
    //                 contextCls={`${this.baseCls}__examples-preview`}
    //                 codeString={examplesCodeStr}
    //             >
    //                 <Button text="Primary Button" isPrimary />
    //                 <Button text="Secondary Button" isSecondary />
    //                 <Button
    //                     text="Primary Destructive Button"
    //                     isDestructive
    //                     isPrimary
    //                 />
    //                 <Button
    //                     text="Secondary Destructive Button"
    //                     isDestructive
    //                     isSecondary
    //                 />
    //             </ComponentPreviewWithCodeBlock>
    //         </StorySection>
    //     );
    // };

    baseCls = 'bankai-sb-form-layout-guide';
}

export default FormLayoutGuide;
