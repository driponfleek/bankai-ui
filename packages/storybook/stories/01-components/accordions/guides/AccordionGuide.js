import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Accordion } from '@epr0t0type/bankai-ui-accordions';
import StoryLayout from '../../../../sb-components/layout/StoryLayout';
import StorySection from '../../../../sb-components/layout/StorySection';
// import SectionTitle from '../../../../sb-components/content/SectionTitle';
import ComponentPreview from '../../../../sb-components/content/ComponentPreview';
// import ComponentPreviewWithCodeBlock from '../../../../sb-components/content/ComponentPreviewWithCodeBlock';
import Paragraph from '../../../../sb-components/content/Paragraph';
import strings from '../../../../i18n/strings.json';
import MockAccordionContent from './mock-components/MockAccordionContent';

// Utils
import { getComponentsTitle } from '../../../../utils/storiesConfig';

// Code Strings
// import { examplesCodeStr } from './codeStr/codeStrComponent';

// Styles
import './styles/component-guide.scss';

const { bankaiUI: locale } = strings;

class AccordionGuide extends PureComponent {
    static defaultProps = {
        shouldAllowMultipleExpanded: false,
        shouldAllowZeroExpanded: true,
    };

    static propTypes = {
        contextCls: PropTypes.string,
        headingLvl: PropTypes.number,
        shouldAllowMultipleExpanded: PropTypes.bool,
        shouldAllowZeroExpanded: PropTypes.bool,
        preExpanded: PropTypes.array,
        renderCustomTrigger: PropTypes.func,
        renderTriggerIcon: PropTypes.func,
        onChange: PropTypes.func,
    };

    static displayName = locale.stories.components.accordions.accordion.title;

    render() {
        return (
            <StoryLayout
                title={locale.stories.components.accordions.accordion.title}
                subTitle={getComponentsTitle(
                    locale.stories.components.accordions.categoryTitle,
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
                    <Accordion {...props} headingLvl={2}>
                        <MockAccordionContent
                            accItemProps={{
                                id: '001',
                            }}
                            accTriggerProps={{
                                children: 'Accordion Item 1',
                            }}
                        />
                        <MockAccordionContent
                            accItemProps={{
                                id: '002',
                            }}
                            accTriggerProps={{
                                children: 'Accordion Item 2',
                            }}
                        />
                        <MockAccordionContent
                            accItemProps={{
                                id: '003',
                            }}
                            accTriggerProps={{
                                children: 'Accordion Item 3',
                            }}
                        />
                    </Accordion>
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

    baseCls = 'bankai-sb-accordion-guide';
}

export default AccordionGuide;
