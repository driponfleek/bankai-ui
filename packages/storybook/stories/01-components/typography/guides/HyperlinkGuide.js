import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Hyperlink } from '@epr0t0type/bankai-ui-typography';
import packageJSON from '@epr0t0type/bankai-ui-typography/package.json';
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
// import './styles/hyperlink-guide.scss';

const { bankaiUI: locale } = strings;

class HyperlinkGuide extends PureComponent {
    static defaultProps = {
        shouldOpenInNewWindow: false,
    };

    static propTypes = {
        contextCls: PropTypes.string,
        href: PropTypes.string.isRequired,
        shouldOpenInNewWindow: PropTypes.bool,
    };

    static displayName = locale.stories.components.typography.hyperlink.title;

    render() {
        return (
            <StoryLayout
                contextCls={this.baseCls}
                packageVer={packageJSON.version}
                title={locale.stories.components.typography.hyperlink.title}
                subTitle={getComponentsTitle(
                    locale.stories.components.typography.categoryTitle,
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
                    <Hyperlink {...props}>Hyperlink Text</Hyperlink>
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

    baseCls = 'bankai-sb-hyperlink-guide';
}

export default HyperlinkGuide;
