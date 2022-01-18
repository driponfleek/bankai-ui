import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { LinkButton } from '@epr0t0type/bankai-ui-buttons';
import StoryLayout from '../../../../sb-components/layout/StoryLayout';
import StorySection from '../../../../sb-components/layout/StorySection';
// import SectionTitle from '../../../../sb-components/content/SectionTitle';
import ComponentPreview from '../../../../sb-components/content/ComponentPreview';
// import ComponentPreviewWithCodeBlock from '../../../../sb-components/content/ComponentPreviewWithCodeBlock';
import Paragraph from '../../../../sb-components/content/Paragraph';
import strings from '../../../../i18n/strings.json';

// Utils
import { getComponentsTitle } from '../../../../utils/storiesConfig';
import { getSanatizedStoryProps } from '../../../../utils/storyLayoutPropsUtils';

// Code Strings
// import { examplesCodeStr } from './codeStr/codeStrBtn';

// Styles
// import './styles/button-guide.scss';

const { bankaiUI: locale } = strings;

class LinkButtonGuide extends PureComponent {
    static defaultProps = {
        onClick: () => Promise.resolve(),
    };

    static propTypes = {
        contextCls: PropTypes.string,
        text: PropTypes.string,
        data: PropTypes.object,
        onClick: PropTypes.func,
        renderIcon: PropTypes.func,
    };

    static displayName = locale.stories.components.buttons.linkButton.title;

    render() {
        return (
            <StoryLayout
                {...getSanatizedStoryProps(this.props, false)}
                title={locale.stories.components.buttons.linkButton.title}
                subTitle={getComponentsTitle(
                    locale.stories.components.buttons.categoryTitle,
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
                    <LinkButton {...getSanatizedStoryProps(props)} />
                </ComponentPreview>
                <Paragraph>Coming soon.</Paragraph>
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
    //                 <Button text="Default Button" />
    //                 <Button text="Primary Button" variant={PRIMARY} />
    //                 <Button text="Secondary Button" variant={SECONDARY} />
    //                 <Button
    //                     text="Primary Destructive Button"
    //                     variant={PRIMARY_DESTRUCTIVE}
    //                 />
    //                 <Button
    //                     text="Secondary Destructive Button"
    //                     variant={SECONDARY_DESTRUCTIVE}
    //                 />
    //                 <Button text="Button Styled as a Link" variant={LINK} />
    //             </ComponentPreviewWithCodeBlock>
    //         </StorySection>
    //     );
    // };

    baseCls = 'bankai-sb-link-button-guide';
}

export default LinkButtonGuide;
