import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { AvatarGroup } from '@epr0t0type/bankai-ui-avatars';
import packageJSON from '@epr0t0type/bankai-ui-avatars/package.json';
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
import './styles/avatar-group-guide.scss';

const { bankaiUI: locale } = strings;

class AvatarGroupGuide extends PureComponent {
    static defaultProps = {
        shouldOverlap: true,
        avatars: [],
    };

    static propTypes = {
        contextCls: PropTypes.string,
        shouldOverlap: PropTypes.bool,
        avatars: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.string,
                imgURL: PropTypes.string,
                text: PropTypes.string,
                renderIcon: PropTypes.func,
            }),
        ),
    };

    static displayName = locale.stories.components.avatars.avatarGroup.title;

    render() {
        return (
            <StoryLayout
                contextCls={this.baseCls}
                packageVer={packageJSON.version}
                title={locale.stories.components.avatars.avatarGroup.title}
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
                    <AvatarGroup {...props} />
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

    baseCls = 'bankai-sb-avatar-group-guide';
}

export default AvatarGroupGuide;
