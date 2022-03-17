import React, { PureComponent } from 'react';
import { Hyperlink } from '@epr0t0type/bankai-ui-typography';
import {
    genColorsData,
    getIsReadable,
    getRecommendedColor,
} from '@epr0t0type/bankai-lib-color-utils';
import {
    getThemeDefaults,
    THEME_TOKEN_NAMES,
} from '@epr0t0type/bankai-lib-theme-utils';
import StoryLayout from '../../../../sb-components/layout/StoryLayout';
import StorySection from '../../../../sb-components/layout/StorySection';
import CodeTag from '../../../../sb-components/content/CodeTag';
import SectionTitle from '../../../../sb-components/content/SectionTitle';
import Paragraph from '../../../../sb-components/content/Paragraph';
import List from '../../../../sb-components/content/List';
import ListItem from '../../../../sb-components/content/ListItem';
import ColorPickerWithVariants from '../../../../sb-components/color/ColorPickerWithVariants';
import strings from '../../../../i18n/strings.json';

// Utils
import { getStyleGuideTitle } from '../../../../utils/storiesConfig';

// Styles
import './styles/colors-guide.scss';

const { bankaiUI: locale } = strings;

class WorkingWithColorGuide extends PureComponent {
    constructor(...args) {
        super(...args);
        const isDarkMode = this.getIsDarkMode();
        const defaultTheme = getThemeDefaults(isDarkMode);

        this.state = {
            color: genColorsData(defaultTheme[THEME_TOKEN_NAMES.COLOR_PRIMARY]),
        };
    }

    // state = {
    //     color: genColorsData(
    //         getThemeDefaults(this.getIsDarkMode())[
    //             THEME_TOKEN_NAMES.COLOR_PRIMARY
    //         ],
    //     ),
    // };

    render() {
        return (
            <StoryLayout
                contextCls={this.baseCls}
                title={locale.stories.styleGuide.theming.workingWithColor.title}
                subTitle={getStyleGuideTitle(
                    locale.stories.styleGuide.theming.categoryTitle,
                )}
            >
                {this.renderIntro()}
                {this.renderAccessiblePalettes()}
            </StoryLayout>
        );
    }

    renderIntro = () => {
        return (
            <StorySection>
                <Paragraph>
                    Color is a powerful tool that can enhance and provide
                    consistent User Experiences and provide a strong brand
                    presence. Color should be used responsibly when conveying
                    user feedback and should be accessible to all users by
                    ensuring sufficient color contrast between elements.{' '}
                    {locale.designSystemName} helps us achieve this by providing
                    tools and utilities for complying with{' '}
                    <Hyperlink
                        href="https://webaim.org/articles/contrast/"
                        shouldOpenInNewWindow
                    >
                        Web Content Accessibility Guidelines AA standard
                        contrast ratios
                    </Hyperlink>
                    .
                </Paragraph>
            </StorySection>
        );
    };

    renderAccessiblePalettes = () => {
        const { color } = this.state;
        const base = this.getBaseFromColorData();
        const { compatibleTextColors } = base || {};
        const compatibleTextVariants =
            this.getCompatVariants(compatibleTextColors);
        const filteredColorData = { base, variants: compatibleTextVariants };
        // #1d8dbd - Use to test no variants scenario

        return (
            <StorySection>
                <SectionTitle>
                    {
                        locale.stories.styleGuide.theming.workingWithColor
                            .sectionTitles.accessiblePalettes
                    }
                </SectionTitle>
                <Paragraph>
                    When pairing colors together we take the approach of
                    starting with a <strong>base color</strong>. We then
                    generate several variants of the base color by doing the
                    following:
                    {/* converting the it to HSL (
                    <strong>H</strong>ue, <strong>S</strong>aturation,{' '}
                    <strong>L</strong>ightness) format and then getting new
                    color by modifying the <strong>L</strong> value in
                    increments of ten, ranging from 10 - 90. We evaulate all
                    variants against each other and the base color to determine
                    if they meet WCAG AA contrast ratios compliance for text and
                    non-text UI when paired together. */}
                </Paragraph>
                <List>
                    <ListItem>
                        We convert the base color hex value to HSL (
                        <strong>H</strong>ue, <strong>S</strong>aturation,{' '}
                        <strong>L</strong>ightness)
                    </ListItem>
                    <ListItem>
                        We then derive variations of the base color by modifying
                        its <strong>L</strong> value in increments of 10%.
                    </ListItem>
                    <ListItem>
                        We iterate through all the values starting at 90% all
                        the way down to 10%. (We omit 100% because that always
                        results in White, and 0% because it always results in
                        Black.)
                    </ListItem>
                </List>
                <Paragraph>
                    This process allows us to keep the spirit of the base color
                    while being flexible enough to meet the accessibility
                    guidelines for our UIs.
                </Paragraph>
                {this.renderPickerWithVariants(color)}
                <Paragraph>
                    Next we filter out any incompatible variants that can&apos;t
                    be used for text color when paired with our base color as a
                    background:
                </Paragraph>
                {this.renderPickerWithVariants(filteredColorData)}
                <Paragraph>
                    Before we can pick our text color from the list of variants,
                    we first need to determine if the base color has a{' '}
                    <Hyperlink
                        href="https://www.w3.org/TR/AERT/#color-contrast"
                        shouldOpenInNewWindow
                    >
                        percieved brightness
                    </Hyperlink>{' '}
                    of <em>light</em> or <em>dark</em>:
                </Paragraph>
                <CodeTag>
                    Percieved Brightness:{' '}
                    <strong>
                        <em>{this.getPerceivedBrightness()}</em>
                    </strong>
                </CodeTag>
                <Paragraph>
                    Finally, we can can pick a color from our compatible variant
                    options for our text based on the following rules:
                </Paragraph>
                <List>
                    <ListItem>
                        If the perceived brightness of the base color is{' '}
                        <em>light</em>, then we will aim for the lightest
                        compatible variant available for our text color.
                    </ListItem>
                    <ListItem>
                        If the perceived brightness of the base color is{' '}
                        <em>dark</em>, then we will aim for the darkest
                        compatible variant available for our text color.
                    </ListItem>
                    <ListItem>
                        If there are no compatible variants available, we will
                        fall back to <em>white</em> text if it meets the WCAG
                        ratio of 4.5 against our base color, otherwise we will
                        use <em>black</em>.
                    </ListItem>
                </List>
                {this.renderFinalColors(compatibleTextVariants)}
            </StorySection>
        );
    };

    renderFinalColors = (compatibleTextVariants) => {
        const base = this.getBaseFromColorData();
        const baseColorData = {
            ...base,
            id: 'Base',
        };
        const finalTextColorData = {
            ...this.getTextColorFromCompatVariants(compatibleTextVariants),
            id: 'Text',
        };

        return (
            <div className={`${this.baseCls}__final-colors`}>
                {this.renderPickerWithVariants({
                    base: baseColorData,
                    variants: [baseColorData, finalTextColorData],
                })}
            </div>
        );
    };

    renderPickerWithVariants = (colorData) => {
        const { base, variants } = colorData || {};

        return (
            <ColorPickerWithVariants
                aria-label="Pick a Color"
                baseColor={base}
                variants={variants}
                onChange={this.handleColorChange}
            />
        );
    };

    // renderColorPickerWithDetails = (props) => {
    //     return <ColorPickerWithVariants {...props} />;
    // };

    handleColorChange = (color) => {
        const newColorData = genColorsData(color);

        this.setState({ color: newColorData });
    };

    getBaseFromColorData = () => {
        const { color } = this.state;
        const { base } = color || {};

        return base || {};
    };

    getVariantsFromColorData = () => {
        const { color } = this.state;
        const { variants } = color || {};

        return variants || [];
    };

    getPerceivedBrightness = () => {
        const base = this.getBaseFromColorData();
        const { isDark } = base;

        return isDark ? 'Dark' : 'Light';
    };

    getIsReadableWithWhiteText = () => {
        const base = this.getBaseFromColorData();
        const { hex } = base;

        return getIsReadable('#ffffff', hex);
    };

    getCompatVariants = (compatList = []) => {
        const variants = this.getVariantsFromColorData();

        return variants.filter(
            (variant) => compatList.indexOf(variant.id) !== -1,
        );
    };

    getFallbackTextColor = () => {
        const isReadableWithWhiteText = this.getIsReadableWithWhiteText();

        return isReadableWithWhiteText ? '#ffffff' : '#000000';
    };

    getTextColorFromCompatVariants = (variants = []) => {
        const base = this.getBaseFromColorData();
        const fallbackTextColor = this.getFallbackTextColor();
        const isFallbackTextBlack = fallbackTextColor === '#000000';
        const fallbackTextColorData = {
            hex: fallbackTextColor,
            hslString: `hsl(0, 0%, ${isFallbackTextBlack ? '0%' : '100%'})`,
        };

        if (variants.length === 0) {
            return fallbackTextColorData;
        }

        return getRecommendedColor(base, [base, ...variants], true);
    };

    getHMTLDOMEl = () => document.getElementsByTagName('html')[0];

    getIsDarkMode = () => {
        const htmlDOM = this.getHMTLDOMEl();

        return htmlDOM.classList.contains('bankai-sb--dark');
    };

    baseCls = 'bankai-sb-colors-guide';
}

export default WorkingWithColorGuide;
