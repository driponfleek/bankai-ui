import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Avatar, VARIANTS } from '@epr0t0type/bankai-ui-avatars';
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
// import { examplesCodeStr } from './codeStr/codeStrComponent';

// Styles
import './styles/avatar-guide.scss';

const { bankaiUI: locale } = strings;

class AvatarGuide extends PureComponent {
    static defaultProps = {
        hasBorder: true,
        variant: VARIANTS.CIRCLE,
    };

    static propTypes = {
        contextCls: PropTypes.string,
        imgURL: PropTypes.string,
        text: PropTypes.string,
        variant: PropTypes.string,
        hasBorder: PropTypes.bool,
        renderIcon: PropTypes.func,
    };

    static displayName = locale.stories.components.avatars.avatar.title;

    render() {
        return (
            <StoryLayout
                {...getSanatizedStoryProps(this.props, false)}
                title={locale.stories.components.avatars.avatar.title}
                subTitle={getComponentsTitle(
                    locale.stories.components.avatars.categoryTitle,
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
                    <Avatar {...getSanatizedStoryProps(props)} />
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

    baseCls = 'bankai-sb-avatar-guide';
}

export default AvatarGuide;
