import React, { PureComponent, Fragment } from 'react';
import { Hyperlink } from '@epr0t0type/bankai-ui-typography';
import { genColorsData } from '@epr0t0type/bankai-lib-color-utils';
import {
    CORE_COLOR_TOKEN_NAMES,
    CORE_NEUTRAL_COLOR_TOKEN_NAMES,
    LINK_COLOR_TOKEN_NAMES,
    getThemeDefaults,
} from '@epr0t0type/bankai-lib-theme-utils';
import StoryLayout from '../../../../sb-components/layout/StoryLayout';
import StorySection from '../../../../sb-components/layout/StorySection';
import SectionTitle from '../../../../sb-components/content/SectionTitle';
import Paragraph from '../../../../sb-components/content/Paragraph';
import List from '../../../../sb-components/content/List';
import ListItem from '../../../../sb-components/content/ListItem';
import strings from '../../../../i18n/strings.json';
import BaseColorWithVariants from '../../../../sb-components/color/BaseColorWithVariants';
import ColorSwatchSimple from '../../../../sb-components/color/ColorSwatchSimple';

// Utils
import { getStyleGuideTitle } from '../../../../utils/storiesConfig';

// Constants
import { PLATFORM } from '../../../../const/platformConst';

// Styles
import './styles/guide-color-design-tokens.scss';

const { bankaiUI: locale } = strings;
const {
    CORE_COLOR_BRAND,
    CORE_COLOR_PRIMARY,
    CORE_COLOR_SECONDARY,
    CORE_COLOR_ACCENT,
    CORE_COLOR_AFFIRMATIVE,
    CORE_COLOR_CAUTIONARY,
    CORE_COLOR_ERROR,
    CORE_COLOR_INFO,
    CORE_COLOR_DESTRUCTIVE,
    CORE_COLOR_TEXT,
    CORE_COLOR_TEXT_ALT,
    CORE_COLOR_TEXT_ERROR,
    CORE_COLOR_CANVAS,
    CORE_COLOR_CANVAS_ALT,
    CORE_COLOR_UNIVERSAL_DECORATIVE_BORDER,
    CORE_COLOR_UNIVERSAL_ACCESSIBLE_BORDER,
    CORE_COLOR_UNIVERSAL_HOVER_BG,
} = CORE_COLOR_TOKEN_NAMES;
const {
    CORE_COLOR_NEUTRAL_10,
    CORE_COLOR_NEUTRAL_20,
    CORE_COLOR_NEUTRAL_30,
    CORE_COLOR_NEUTRAL_40,
    CORE_COLOR_NEUTRAL_50,
    CORE_COLOR_NEUTRAL_60,
    CORE_COLOR_NEUTRAL_70,
    CORE_COLOR_NEUTRAL_80,
    CORE_COLOR_NEUTRAL_90,
} = CORE_NEUTRAL_COLOR_TOKEN_NAMES;
const { LINK_TEXT_COLOR } = LINK_COLOR_TOKEN_NAMES;

class GuideColorDesignTokens extends PureComponent {
    constructor(...args) {
        super(...args);

        this.state = {
            isDarkMode: this.getIsDarkMode(),
        };
    }

    render() {
        return (
            <StoryLayout
                contextCls={this.baseCls}
                title={locale.stories.styleGuide.designTokens.colorTokens.title}
                subTitle={getStyleGuideTitle(
                    locale.stories.styleGuide.designTokens.categoryTitle,
                )}
                onColorSchemeChange={this.handleColorSchemeChange}
            >
                {this.renderIntro()}
                {this.renderMainColors()}
                {this.renderStatusColors()}
                {this.renderInformativeColors()}
                {this.renderNeutralColors()}
                {this.renderTypographyColors()}
                {this.renderCanvasColors()}
                {this.renderUniversalColors()}
            </StoryLayout>
        );
    }

    renderIntro = () => {
        return (
            <StorySection>
                <Paragraph>
                    Color plays a key role in UI&apos;s beyond decorative use.
                    Semantic use of color can help users identify status, locate
                    actions, find information, communicate errors, and much
                    more. {locale.designSystemName} has designated color design
                    tokens for semantic use in user interfaces.
                </Paragraph>
                <Paragraph>
                    Use the toggle switch below to switch between dark and light
                    modes to see tokens for the respective theme.
                </Paragraph>
            </StorySection>
        );
    };

    renderMainColors = () => {
        return (
            <StorySection>
                <SectionTitle>
                    {
                        locale.stories.styleGuide.designTokens.colorTokens
                            .sectionTitles.mainColors
                    }
                </SectionTitle>
                <div className={`${this.baseCls}__section-content`}>
                    {this.renderBrandColor()}
                    {this.renderPrimaryColor()}
                    {this.renderSecondaryColor()}
                    {this.renderAccentColor()}
                </div>
            </StorySection>
        );
    };

    renderBrandColor = () => {
        const themeDefaults = this.getThemeDefaults();
        const color = themeDefaults[CORE_COLOR_BRAND];

        return (
            <StorySection contextCls={`${this.baseCls}__brand-color`}>
                <SectionTitle headingLvl={3}>
                    {
                        locale.stories.styleGuide.designTokens.colorTokens
                            .sectionTitles.brandColor
                    }
                </SectionTitle>
                <div className={`${this.baseCls}__section-content`}>
                    {this.renderColorSwatch({
                        colorDescription: color,
                        colorName: 'Brand',
                        colorValue: color,
                        tokenName: CORE_COLOR_BRAND,
                    })}
                    <div className={`${this.baseCls}__brand-color-description`}>
                        <Paragraph>
                            The Brand color is one of the quickest ways a user
                            identifies a company. It helps strengthen their
                            online presence and build trust with their users.
                        </Paragraph>
                        <Paragraph>
                            We don&apos;t provide variants for the Brand color
                            because it is typically used as is. We recommend
                            using this color as decorative only so it does not
                            impact accessibility.
                        </Paragraph>
                    </div>
                </div>
            </StorySection>
        );
    };

    renderPrimaryColor = () => {
        const themeDefaults = this.getThemeDefaults();
        const color = themeDefaults[CORE_COLOR_PRIMARY];
        const { base, variants } = genColorsData({ hex: color });
        const colorName = 'Primary';
        const massagedData = {
            base: this.getMassagedColorData(base, colorName),
            variants: this.getMassagedColorVariantData(variants, colorName),
        };

        return (
            <StorySection contextCls={`${this.baseCls}__primary-color`}>
                <SectionTitle headingLvl={3}>
                    {
                        locale.stories.styleGuide.designTokens.colorTokens
                            .sectionTitles.primaryColor
                    }
                </SectionTitle>
                <div className={`${this.baseCls}__section-content`}>
                    {this.renderColorWithVariants(
                        massagedData,
                        this.renderPrimaryColorDescription,
                        CORE_COLOR_PRIMARY,
                    )}
                </div>
            </StorySection>
        );
    };

    renderPrimaryColorDescription = () => {
        return (
            <Fragment>
                <Paragraph>
                    The Primary color is used to help guide users to the primary
                    thing you want them to do in an experience. For example, you
                    may have a primary action you want them to take, or content
                    you want them to consume that has more importance than the
                    rest of the content in an experience they are viewing.
                </Paragraph>
                <Paragraph>
                    A typical design pattern is to use the Brand color for
                    primary actions. However, there are times when this may not
                    work. For example, if the Brand color is <em>red</em>, we
                    may want to have a different color for our primary actions
                    so users don&apos;t confuse primary actions with destructive
                    ones.
                </Paragraph>
            </Fragment>
        );
    };

    renderSecondaryColor = () => {
        const themeDefaults = this.getThemeDefaults();
        const color = themeDefaults[CORE_COLOR_SECONDARY];
        const { base, variants } = genColorsData({ hex: color });
        const colorName = 'Secondary';
        const massagedData = {
            base: this.getMassagedColorData(base, colorName),
            variants: this.getMassagedColorVariantData(variants, colorName),
        };

        return (
            <StorySection contextCls={`${this.baseCls}__secondary-color`}>
                <SectionTitle headingLvl={3}>
                    {
                        locale.stories.styleGuide.designTokens.colorTokens
                            .sectionTitles.secondaryColor
                    }
                </SectionTitle>
                <div className={`${this.baseCls}__section-content`}>
                    {this.renderColorWithVariants(
                        massagedData,
                        this.renderSecondaryColorDescription,
                        CORE_COLOR_SECONDARY,
                    )}
                </div>
            </StorySection>
        );
    };

    renderSecondaryColorDescription = () => {
        return (
            <Fragment>
                <Paragraph>
                    The Secondary color is used to communicate to users
                    complimentary actions or content in an experience. For
                    example, you may have a Primary action and secondary actions
                    that are supportive to the primary content of an experience.
                </Paragraph>
                <Paragraph>
                    This color should be used in a way that it grabs the users
                    attention without overpowering the primary color.
                </Paragraph>
            </Fragment>
        );
    };

    renderAccentColor = () => {
        const themeDefaults = this.getThemeDefaults();
        const color = themeDefaults[CORE_COLOR_ACCENT];
        const { base, variants } = genColorsData({ hex: color });
        const colorName = 'Accent';
        const massagedData = {
            base: this.getMassagedColorData(base, colorName),
            variants: this.getMassagedColorVariantData(variants, colorName),
        };

        return (
            <StorySection contextCls={`${this.baseCls}__accent-color`}>
                <SectionTitle headingLvl={3}>
                    {
                        locale.stories.styleGuide.designTokens.colorTokens
                            .sectionTitles.accentColor
                    }
                </SectionTitle>
                <div className={`${this.baseCls}__section-content`}>
                    {this.renderColorWithVariants(
                        massagedData,
                        this.renderAccentColorDescription,
                        CORE_COLOR_ACCENT,
                    )}
                </div>
            </StorySection>
        );
    };

    renderAccentColorDescription = () => {
        return (
            <Paragraph>
                The Accent color is mostly used for decorative purposes.
            </Paragraph>
        );
    };

    renderStatusColors = () => {
        // Affirmative
        // Cautionary
        // Error
        return (
            <StorySection>
                <SectionTitle>
                    {
                        locale.stories.styleGuide.designTokens.colorTokens
                            .sectionTitles.statusColors
                    }
                </SectionTitle>
                <div className={`${this.baseCls}__section-content`}>
                    {this.renderAffirmativeColor()}
                    {this.renderCautionaryColor()}
                    {this.renderErrorColor()}
                </div>
            </StorySection>
        );
    };

    renderAffirmativeColor = () => {
        const themeDefaults = this.getThemeDefaults();
        const color = themeDefaults[CORE_COLOR_AFFIRMATIVE];
        const { base, variants } = genColorsData({ hex: color });
        const colorName = 'Affirmative';
        const massagedData = {
            base: this.getMassagedColorData(base, colorName),
            variants: this.getMassagedColorVariantData(variants, colorName),
        };

        return (
            <StorySection contextCls={`${this.baseCls}__affirmative-color`}>
                <SectionTitle headingLvl={3}>
                    {
                        locale.stories.styleGuide.designTokens.colorTokens
                            .sectionTitles.affirmativeColor
                    }
                </SectionTitle>
                <div className={`${this.baseCls}__section-content`}>
                    {this.renderColorWithVariants(
                        massagedData,
                        this.renderAffirmativeColorDescription,
                        CORE_COLOR_AFFIRMATIVE,
                    )}
                </div>
            </StorySection>
        );
    };

    renderAffirmativeColorDescription = () => {
        return (
            <Paragraph>
                The Affirmative color is used to communicate something positive
                has happened, such as successfully completing an action.
            </Paragraph>
        );
    };

    renderCautionaryColor = () => {
        const themeDefaults = this.getThemeDefaults();
        const color = themeDefaults[CORE_COLOR_CAUTIONARY];
        const { base, variants } = genColorsData({ hex: color });
        const colorName = 'Cautionary';
        const massagedData = {
            base: this.getMassagedColorData(base, colorName),
            variants: this.getMassagedColorVariantData(variants, colorName),
        };

        return (
            <StorySection contextCls={`${this.baseCls}__cautionary-color`}>
                <SectionTitle headingLvl={3}>
                    {
                        locale.stories.styleGuide.designTokens.colorTokens
                            .sectionTitles.cautionaryColor
                    }
                </SectionTitle>
                <div className={`${this.baseCls}__section-content`}>
                    {this.renderColorWithVariants(
                        massagedData,
                        this.renderCautionaryColorDescription,
                        CORE_COLOR_CAUTIONARY,
                    )}
                </div>
            </StorySection>
        );
    };

    renderCautionaryColorDescription = () => {
        return (
            <Paragraph>
                The Cautionary color is used to warn users to proceed with
                caution. A good way to determine when to use this color is if
                the user needs to know there are negative consequences of
                performing an action and they are still allowed to move forward
                regardless.
            </Paragraph>
        );
    };

    renderErrorColor = () => {
        const themeDefaults = this.getThemeDefaults();
        const color = themeDefaults[CORE_COLOR_ERROR];
        const { base, variants } = genColorsData({ hex: color });
        const colorName = 'Error';
        const massagedData = {
            base: this.getMassagedColorData(base, colorName),
            variants: this.getMassagedColorVariantData(variants, colorName),
        };

        return (
            <StorySection contextCls={`${this.baseCls}__error-color`}>
                <SectionTitle headingLvl={3}>
                    {
                        locale.stories.styleGuide.designTokens.colorTokens
                            .sectionTitles.errorColor
                    }
                </SectionTitle>
                <div className={`${this.baseCls}__section-content`}>
                    {this.renderColorWithVariants(
                        massagedData,
                        this.renderErrorColorDescription,
                        CORE_COLOR_ERROR,
                    )}
                </div>
            </StorySection>
        );
    };

    renderErrorColorDescription = () => {
        return (
            <Paragraph>
                The Error color is used to let users know there is a problem in
                their experience that is preventing them from moving forward.
                For example, a required field that is blank when a user submits
                a form, or a toaster message saying that the application failed
                to save some data.
            </Paragraph>
        );
    };

    renderInformativeColors = () => {
        // Info
        // Destructive
        return (
            <StorySection>
                <SectionTitle>
                    {
                        locale.stories.styleGuide.designTokens.colorTokens
                            .sectionTitles.informativeColors
                    }
                </SectionTitle>
                <div className={`${this.baseCls}__section-content`}>
                    {this.renderInfoColor()}
                    {this.renderDestructiveColor()}
                </div>
            </StorySection>
        );
    };

    renderInfoColor = () => {
        const themeDefaults = this.getThemeDefaults();
        const color = themeDefaults[CORE_COLOR_INFO];
        const { base, variants } = genColorsData({ hex: color });
        const colorName = 'Info';
        const massagedData = {
            base: this.getMassagedColorData(base, colorName),
            variants: this.getMassagedColorVariantData(variants, colorName),
        };

        return (
            <StorySection contextCls={`${this.baseCls}__info-color`}>
                <SectionTitle headingLvl={3}>
                    {
                        locale.stories.styleGuide.designTokens.colorTokens
                            .sectionTitles.infoColor
                    }
                </SectionTitle>
                <div className={`${this.baseCls}__section-content`}>
                    {this.renderColorWithVariants(
                        massagedData,
                        this.renderInfoColorDescription,
                        CORE_COLOR_INFO,
                    )}
                </div>
            </StorySection>
        );
    };

    renderInfoColorDescription = () => {
        return (
            <Paragraph>
                The Info color is used to when we need to prioritize drawing a
                user&apos;s attention to informative content. Because users tend
                to skim content, this can help grab their attention so they
                focus on content that is helpful for them to know in a given
                context.
            </Paragraph>
        );
    };

    renderDestructiveColor = () => {
        const themeDefaults = this.getThemeDefaults();
        const color = themeDefaults[CORE_COLOR_DESTRUCTIVE];
        const { base, variants } = genColorsData({ hex: color });
        const colorName = 'Destructive';
        const massagedData = {
            base: this.getMassagedColorData(base, colorName),
            variants: this.getMassagedColorVariantData(variants, colorName),
        };

        return (
            <StorySection contextCls={`${this.baseCls}__destructive-color`}>
                <SectionTitle headingLvl={3}>
                    {
                        locale.stories.styleGuide.designTokens.colorTokens
                            .sectionTitles.destructiveColor
                    }
                </SectionTitle>
                <div className={`${this.baseCls}__section-content`}>
                    {this.renderColorWithVariants(
                        massagedData,
                        this.renderDestructiveColorDescription,
                        CORE_COLOR_DESTRUCTIVE,
                    )}
                </div>
            </StorySection>
        );
    };

    renderDestructiveColorDescription = () => {
        return (
            <Paragraph>
                The Destructive color is used to communicate to users that
                something they are about to do is destructive in nature. This
                color should invoke a feeling of danger to make users slow down
                and make certain they want to perform the action they are about
                to take. For example, deleting some data that the user cannot
                get back.
            </Paragraph>
        );
    };

    renderNeutralColors = () => {
        const themeDefaults = this.getThemeDefaults();
        const colorNeutral10 = themeDefaults[CORE_COLOR_NEUTRAL_10];
        const colorNeutral20 = themeDefaults[CORE_COLOR_NEUTRAL_20];
        const colorNeutral30 = themeDefaults[CORE_COLOR_NEUTRAL_30];
        const colorNeutral40 = themeDefaults[CORE_COLOR_NEUTRAL_40];
        const colorNeutral50 = themeDefaults[CORE_COLOR_NEUTRAL_50];
        const colorNeutral60 = themeDefaults[CORE_COLOR_NEUTRAL_60];
        const colorNeutral70 = themeDefaults[CORE_COLOR_NEUTRAL_70];
        const colorNeutral80 = themeDefaults[CORE_COLOR_NEUTRAL_80];
        const colorNeutral90 = themeDefaults[CORE_COLOR_NEUTRAL_90];

        // Neutral Grays
        return (
            <StorySection>
                <SectionTitle>
                    {
                        locale.stories.styleGuide.designTokens.colorTokens
                            .sectionTitles.neutralColors
                    }
                </SectionTitle>
                <div className={`${this.baseCls}__section-content`}>
                    <div
                        className={`${this.baseCls}__neutral-colors-container`}
                    >
                        {this.renderColorSwatch({
                            colorDescription: colorNeutral90,
                            colorName: 'Neutral 90',
                            colorValue: colorNeutral90,
                            tokenName: CORE_COLOR_NEUTRAL_90,
                        })}
                        {this.renderColorSwatch({
                            colorDescription: colorNeutral80,
                            colorName: 'Neutral 80',
                            colorValue: colorNeutral80,
                            tokenName: CORE_COLOR_NEUTRAL_80,
                        })}
                        {this.renderColorSwatch({
                            colorDescription: colorNeutral70,
                            colorName: 'Neutral 70',
                            colorValue: colorNeutral70,
                            tokenName: CORE_COLOR_NEUTRAL_70,
                        })}
                        {this.renderColorSwatch({
                            colorDescription: colorNeutral60,
                            colorName: 'Neutral 60',
                            colorValue: colorNeutral60,
                            tokenName: CORE_COLOR_NEUTRAL_60,
                        })}
                        {this.renderColorSwatch({
                            colorDescription: colorNeutral50,
                            colorName: 'Neutral 50',
                            colorValue: colorNeutral50,
                            tokenName: CORE_COLOR_NEUTRAL_50,
                        })}
                        {this.renderColorSwatch({
                            colorDescription: colorNeutral40,
                            colorName: 'Neutral 40',
                            colorValue: colorNeutral40,
                            tokenName: CORE_COLOR_NEUTRAL_40,
                        })}
                        {this.renderColorSwatch({
                            colorDescription: colorNeutral30,
                            colorName: 'Neutral 30',
                            colorValue: colorNeutral30,
                            tokenName: CORE_COLOR_NEUTRAL_30,
                        })}
                        {this.renderColorSwatch({
                            colorDescription: colorNeutral20,
                            colorName: 'Neutral 20',
                            colorValue: colorNeutral20,
                            tokenName: CORE_COLOR_NEUTRAL_20,
                        })}
                        {this.renderColorSwatch({
                            colorDescription: colorNeutral10,
                            colorName: 'Neutral 10',
                            colorValue: colorNeutral10,
                            tokenName: CORE_COLOR_NEUTRAL_10,
                        })}
                    </div>
                </div>
            </StorySection>
        );
    };

    renderTypographyColors = () => {
        const themeDefaults = this.getThemeDefaults();
        const textColor = themeDefaults[CORE_COLOR_TEXT];
        const textAltColor = themeDefaults[CORE_COLOR_TEXT_ALT];
        const textErrorColor = themeDefaults[CORE_COLOR_TEXT_ERROR];
        const linkColor = themeDefaults[LINK_TEXT_COLOR];

        // Text
        // Text Alt
        // Link
        return (
            <StorySection>
                <SectionTitle>
                    {
                        locale.stories.styleGuide.designTokens.colorTokens
                            .sectionTitles.typographyColors
                    }
                </SectionTitle>
                <div className={`${this.baseCls}__section-content`}>
                    <div className={`${this.baseCls}__text-colors-container`}>
                        {this.renderColorSwatch({
                            colorDescription: textColor,
                            colorName: 'Text',
                            colorValue: textColor,
                            tokenName: CORE_COLOR_TEXT,
                        })}
                        {this.renderColorSwatch({
                            colorDescription: textAltColor,
                            colorName: 'Text (Alt)',
                            colorValue: textAltColor,
                            tokenName: CORE_COLOR_TEXT_ALT,
                        })}
                        {this.renderColorSwatch({
                            colorDescription: textErrorColor,
                            colorName: 'Text (Error)',
                            colorValue: textErrorColor,
                            tokenName: CORE_COLOR_TEXT_ERROR,
                        })}
                        {this.renderColorSwatch({
                            colorDescription: linkColor,
                            colorName: 'Links',
                            colorValue: linkColor,
                            tokenName: LINK_TEXT_COLOR,
                        })}
                    </div>
                    <div className={`${this.baseCls}__color-desc-container`}>
                        <Paragraph>
                            When it comes to links, the color we choose has
                            several considerations:
                        </Paragraph>
                        <List>
                            <ListItem>
                                Links, just like normal text, are required to
                                have a <strong>contrast ratio of 4.5</strong>{' '}
                                against the background colors they are placed
                                on. Because of this, the <em>Canvas colors</em>{' '}
                                selected will have a direct impact on the Link
                                color that can be chosen when auto-correcting
                                the color for accessibility.
                            </ListItem>
                            <ListItem>
                                Links are underlined by default. This has always
                                been the defacto way for users to identify them.
                                When we take the underline away from the default
                                styling and rely only on color to differentiate
                                links from other text, we have to comply with
                                the{' '}
                                <Hyperlink
                                    href="https://webaim.org/articles/contrast/#only"
                                    shouldOpenInNewWindow
                                >
                                    WCAG guidelines for color-only
                                    identification of links
                                </Hyperlink>{' '}
                                by ensuring a{' '}
                                <strong>contrast ratio of 3.0</strong> when
                                compared to our <em>Text color</em>. (This
                                criteria is also why we bring back the underline
                                on links when they are hovered.)
                            </ListItem>
                        </List>
                        <Paragraph>
                            Because of the accessibiilty guidelines are so
                            complex for Link color, we recommend picking{' '}
                            <em>Text colors</em> that are as close to either
                            white or black as possible and{' '}
                            <em>Canvas colors</em> as close to the opposite end
                            of the spectrum as possible. This gives us a better
                            chance of finding a color somewhere in the middle
                            when the Link color is evaluated against{' '}
                            <em>Canvas, Canvas (Alt) and Text colors</em>.
                        </Paragraph>
                        <Paragraph>
                            When an accessible Link color cannot be determined,
                            we will fall back to the selected color provided.
                        </Paragraph>
                    </div>
                </div>
            </StorySection>
        );
    };

    renderCanvasColors = () => {
        const themeDefaults = this.getThemeDefaults();
        const canvasColor = themeDefaults[CORE_COLOR_CANVAS];
        const canvasAltColor = themeDefaults[CORE_COLOR_CANVAS_ALT];

        // Canvas
        // Canvas Alt
        return (
            <StorySection contextCls={`${this.baseCls}__canvas-colors`}>
                <SectionTitle>
                    {
                        locale.stories.styleGuide.designTokens.colorTokens
                            .sectionTitles.canvasColors
                    }
                </SectionTitle>
                <div className={`${this.baseCls}__section-content`}>
                    <div className={`${this.baseCls}__canvas-colors-container`}>
                        {this.renderColorSwatch({
                            colorDescription: canvasColor,
                            colorName: 'Canvas',
                            colorValue: canvasColor,
                            tokenName: CORE_COLOR_CANVAS,
                        })}
                        {this.renderColorSwatch({
                            colorDescription: canvasAltColor,
                            colorName: 'Canvas (Alt)',
                            colorValue: canvasAltColor,
                            tokenName: CORE_COLOR_CANVAS_ALT,
                        })}
                    </div>
                    <div className={`${this.baseCls}__color-desc-container`}>
                        <Paragraph>
                            Canvas colors are primarily used as background
                            colors to pages and content.
                        </Paragraph>
                        <Paragraph>
                            <strong>Canvas</strong> and{' '}
                            <strong>Canvas Alt</strong> should be derived from
                            the same color with no more than 5% difference in
                            lightness. This helps to ensure other colors in our
                            palette that are placed on top of these colors can
                            have color variant options when auto-correcting for
                            accessibility. Canvas colors directly impact the end
                            result we get for all other colors that get
                            auto-corrected. Not following this recommendation
                            may result in the inability for the design system to
                            derive an accessible color recommendation.
                        </Paragraph>
                    </div>
                </div>
            </StorySection>
        );
    };

    renderUniversalColors = () => {
        const themeDefaults = this.getThemeDefaults();
        const universalHoverBGColor =
            themeDefaults[CORE_COLOR_UNIVERSAL_HOVER_BG];
        const universalBorderDecorativeColor =
            themeDefaults[CORE_COLOR_UNIVERSAL_DECORATIVE_BORDER];
        const universalAccessibleBorderColor =
            themeDefaults[CORE_COLOR_UNIVERSAL_ACCESSIBLE_BORDER];

        // Universal Hover BG
        // Universal Border
        return (
            <StorySection>
                <SectionTitle>
                    {
                        locale.stories.styleGuide.designTokens.colorTokens
                            .sectionTitles.universalColors
                    }
                </SectionTitle>
                <div className={`${this.baseCls}__section-content`}>
                    <div
                        className={`${this.baseCls}__universal-colors-container`}
                    >
                        {this.renderColorSwatch({
                            colorDescription: universalHoverBGColor,
                            colorName: 'Hover Background',
                            colorValue: universalHoverBGColor,
                            platform: PLATFORM.WEB,
                            tokenName: CORE_COLOR_UNIVERSAL_HOVER_BG,
                        })}
                        {this.renderColorSwatch({
                            colorDescription: universalAccessibleBorderColor,
                            colorName: 'Border (Accessible)',
                            colorValue: universalAccessibleBorderColor,
                            tokenName: CORE_COLOR_UNIVERSAL_ACCESSIBLE_BORDER,
                        })}
                        {this.renderColorSwatch({
                            colorDescription: universalBorderDecorativeColor,
                            colorName: 'Border (Decorative)',
                            colorValue: universalBorderDecorativeColor,
                            tokenName: CORE_COLOR_UNIVERSAL_DECORATIVE_BORDER,
                        })}
                    </div>
                </div>
            </StorySection>
        );
    };

    renderColorWithVariants = (colorData, renderDesc, tokenName) => {
        const { base, variants } = colorData ?? {};

        return (
            <div className={`${this.baseCls}__color-with-variants-container`}>
                <BaseColorWithVariants
                    baseColor={{ ...base, tokenName }}
                    variants={variants}
                />
                {renderDesc && (
                    <div className={`${this.baseCls}__color-desc-container`}>
                        {renderDesc()}
                    </div>
                )}
            </div>
        );
    };

    renderColorSwatch = (props = {}) => {
        const { colorDescription, colorName, colorValue, ...rest } = props;

        return (
            <ColorSwatchSimple
                {...rest}
                colorDescription={colorDescription}
                colorName={colorName}
                colorValue={colorValue}
            />
        );
    };

    handleColorSchemeChange = (isDarkMode) => {
        if (this.state.isDarkMode !== isDarkMode) {
            this.setState({ isDarkMode });
        }
    };

    getHMTLDOMEl = () => document.getElementsByTagName('html')[0];

    getIsDarkMode = () => {
        const htmlDOM = this.getHMTLDOMEl();

        return htmlDOM.classList.contains('bankai-sb--dark');
    };

    getMassagedColorData = (color, colorName) => {
        const { hex, id } = color ?? {};

        return {
            colorDescription: hex,
            colorName,
            id,
            colorValue: hex,
        };
    };

    getMassagedColorVariantData = (variants, baseColorName) => {
        return (variants ?? []).map((variant = {}) => {
            const { lightness } = variant;

            return this.getMassagedColorData(
                variant,
                `${baseColorName} ${lightness}`,
            );
        });
    };

    getThemeDefaults = () => {
        const { isDarkMode } = this.state;

        return getThemeDefaults(isDarkMode);
    };

    baseCls = 'banka-sb-color-design-tokens-ux-guide';
}

export default GuideColorDesignTokens;
