import React, { PureComponent } from 'react';
import { Hyperlink } from '@epr0t0type/bankai-ui-typography';
// import {
//     genColorsData,
//     getIsReadable,
//     getRecommendedColor,
//     getColorCorrelationsData,
//     getStarterColorData,
// } from '@epr0t0type/bankai-lib-color-utils';
import StoryLayout from '../../../../sb-components/layout/StoryLayout';
import StorySection from '../../../../sb-components/layout/StorySection';
// import CodeTag from '../../../../sb-components/content/CodeTag';
// import SectionTitle from '../../../../sb-components/content/SectionTitle';
import Paragraph from '../../../../sb-components/content/Paragraph';
import List from '../../../../sb-components/content/List';
import ListItem from '../../../../sb-components/content/ListItem';
// import ColorPickerWithVariants from '../../../../sb-components/color/ColorPickerWithVariants';
import { getStyleGuideTitle } from '../../../../utils/storiesConfig';
import strings from '../../../../i18n/strings.json';

// Styles
import './styles/what-are-design-tokens-guide.scss';

const { bankaiUI: locale } = strings;

class WhatAreDesignTokensGuide extends PureComponent {
    render() {
        return (
            <StoryLayout
                contextCls={this.baseCls}
                title={
                    locale.stories.styleGuide.designTokens.whatAreDesignTokens
                        .title
                }
                subTitle={getStyleGuideTitle(
                    locale.stories.styleGuide.designTokens.categoryTitle,
                )}
            >
                {this.renderIntro()}
            </StoryLayout>
        );
    }

    renderIntro = () => {
        return (
            <StorySection>
                <Paragraph>
                    Design tokens are a shared data set used to express design
                    decisions in an organization&apos;s design language. They
                    contain all the values needed to construct and maintain a
                    design system, such as Color, Typography, Layout, etc.
                    Design tokens enable parity in the designs and experiences
                    we deliver across all platforms (Web, Native Desktop and
                    Mobile apps, etc). They strengthen brands and the trust
                    audiences have in businesses.
                </Paragraph>
                <Paragraph>
                    We integrate design tokens into applications and component
                    libraries so that developers and designers are working from
                    the same single source of truth. The biggest benefit of this
                    approach is that it improves the scalability and
                    maintainability of UI&apos;s allowing for faster delivery of
                    new features and enhancements. This also translates to a
                    cost savings and more profits for businesses. Something as
                    simple as changing a brand color can now be done in a matter
                    of minutes instead of months.
                </Paragraph>
                <Paragraph>
                    Designers utilize design tokens to establish a set of
                    reusable and repeatable standards. This makes the solutions
                    presented to stakeholders more unified and consistent. More
                    time can be spent focusing on solving for their needs
                    instead of mitigating distractions caused by inconsistent
                    designs.
                </Paragraph>
                <Paragraph>
                    The links below are good resources for learning more about
                    design tokens, case studies and more:
                </Paragraph>
                <List>
                    <ListItem>
                        <Hyperlink
                            href="https://specifyapp.com/blog/introduction-to-design-tokens"
                            shouldOpenInNewWindow
                        >
                            Introduction to Design Tokens
                        </Hyperlink>
                    </ListItem>
                    <ListItem>
                        <Hyperlink
                            href="https://ethanmarcotte.com/wrote/designish-systems/"
                            shouldOpenInNewWindow
                        >
                            Design-ish Systems
                        </Hyperlink>
                    </ListItem>
                    <ListItem>
                        <Hyperlink
                            href="https://spotify.design/article/reimagining-design-systems-at-spotify"
                            shouldOpenInNewWindow
                        >
                            Reimagining Design Systems at Spotify
                        </Hyperlink>
                    </ListItem>
                </List>
            </StorySection>
        );
    };

    baseCls = 'banka-sb-what-are-design-tokens-ux-guide';
}

export default WhatAreDesignTokensGuide;
