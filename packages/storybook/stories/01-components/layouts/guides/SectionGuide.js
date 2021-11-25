import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Section } from '@epr0t0type/bankai-ui-layouts';
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
// import './styles/component-guide.scss';

const { bankaiUI: locale } = strings;

class SectionGuide extends PureComponent {
    static defaultProps = {
        headingLvl: 2,
        shouldPadContent: true,
    };

    static propTypes = {
        contextCls: PropTypes.string,
        headingText: PropTypes.string,
        headingLvl: PropTypes.number,
        shouldPadContent: PropTypes.bool,
        renderHeading: PropTypes.func,
    };

    static displayName = locale.stories.components.layouts.section.title;

    render() {
        return (
            <StoryLayout
                title={locale.stories.components.layouts.section.title}
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
                    <Section {...props}>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Sed nec feugiat nisi, quis iaculis neque.
                            Aenean id elit ut sapien pulvinar lobortis. Class
                            aptent taciti sociosqu ad litora torquent per
                            conubia nostra, per inceptos himenaeos. Nam sapien
                            urna, feugiat a condimentum nec, congue sed massa.
                            Proin vel odio luctus, gravida sapien malesuada,
                            consequat nulla. Maecenas ac congue ipsum. Curabitur
                            ornare efficitur tincidunt. Aliquam eros nunc,
                            bibendum nec hendrerit eu, consectetur malesuada
                            urna. Ut at pretium dolor, ac aliquam erat. Proin at
                            urna a erat posuere dictum ut mattis turpis. Donec
                            molestie auctor elit, et interdum dolor vestibulum
                            tincidunt. Nullam et iaculis purus, ultrices
                            pharetra purus. Sed bibendum aliquam risus, at
                            feugiat arcu placerat a.
                        </p>
                    </Section>
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

    baseCls = 'bankai-sb-section-guide';
}

export default SectionGuide;
