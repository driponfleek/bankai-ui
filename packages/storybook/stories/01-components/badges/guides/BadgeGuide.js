import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Badge, VARIANTS } from '@epr0t0type/bankai-ui-badges';
import StoryLayout from '../../../../sb-components/layout/StoryLayout';
import StorySection from '../../../../sb-components/layout/StorySection';
import SectionTitle from '../../../../sb-components/content/SectionTitle';
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
import './styles/badge-guide.scss';

const { bankaiUI: locale } = strings;
const { AFFIRMATIVE, CAUTIONARY, DANGER, INFO } = VARIANTS;

class BadgeGuide extends PureComponent {
    static propTypes = {
        contextCls: PropTypes.string,
        variant: PropTypes.string,
    };

    static displayName = locale.stories.components.badges.badge.title;

    render() {
        return (
            <StoryLayout
                {...getSanatizedStoryProps(this.props, false)}
                title={locale.stories.components.badges.badge.title}
                subTitle={getComponentsTitle(
                    locale.stories.components.badges.categoryTitle,
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
                    <Badge {...getSanatizedStoryProps(props)}>10</Badge>
                </ComponentPreview>
                <Paragraph>Coming Soon.</Paragraph>
            </StorySection>
        );
    }

    renderExamples = () => {
        return (
            <StorySection>
                <SectionTitle>Examples</SectionTitle>
                <ComponentPreview>
                    <Badge>Default</Badge>
                    <Badge variant={AFFIRMATIVE}>Affirmative</Badge>
                    <Badge variant={CAUTIONARY}>Cautionary</Badge>
                    <Badge variant={DANGER}>Danger</Badge>
                    <Badge variant={INFO}>Info</Badge>
                </ComponentPreview>
                {/* <ComponentPreviewWithCodeBlock
                    contextCls={`${this.baseCls}__examples-preview`}
                    codeString={examplesCodeStr}
                >
                    <CalloutMemo />
                </ComponentPreviewWithCodeBlock> */}
            </StorySection>
        );
    };

    baseCls = 'bankai-sb-badge-guide';
}

export default BadgeGuide;
