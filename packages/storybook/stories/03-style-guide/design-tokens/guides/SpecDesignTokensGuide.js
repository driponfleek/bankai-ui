import React, { PureComponent } from 'react';
import { linkTo } from '@storybook/addon-links';
import { LinkButton } from '@epr0t0type/bankai-ui-buttons';
import {
    SPEC_TOKEN_NAMES,
    SPEC_TOKEN_DEFAULTS,
} from '@epr0t0type/bankai-lib-theme-utils';
import StoryLayout from '../../../../sb-components/layout/StoryLayout';
import StorySection from '../../../../sb-components/layout/StorySection';
import SectionTitle from '../../../../sb-components/content/SectionTitle';
import Paragraph from '../../../../sb-components/content/Paragraph';
import SBDesignTokensTable from '../../../../sb-components/tables/SBDesignTokensTable';
import strings from '../../../../i18n/strings.json';

// Utils
import { getStyleGuideTitle } from '../../../../utils/storiesConfig';
import { getSanatizedStoryProps } from '../../../../utils/storyLayoutPropsUtils';

// Styles
import './styles/spec-design-tokens-guide.scss';

const { bankaiUI: locale } = strings;
const {
    BADGE_BORDER_RADIUS,
    BTN_BORDER_RADIUS,
    CALLOUT_MEMO_BORDER_RADIUS,
    FORM_CHECKBOX_BORDER_RADIUS,
    FORM_INPUT_BORDER_RADIUS,
    FORM_INPUT_PLACEHOLDER_FONT_STYLE,
    FORM_MENU_BORDER_RADIUS,
    // FORM_PILL_BORDER_RADIUS,
    LAYOUT_GRID_BASE,
    LAYOUT_SECTION_BORDER_RADIUS,
    MODAL_DIALOG_BORDER_RADIUS,
    STATE_DISABLED_OPACITY,
    TOASTER_BORDER_RADIUS,
    TYPOGRAPHY_BODY_FONT_FALLBACK,
    TYPOGRAPHY_BODY_FONT_NAME,
    TYPOGRAPHY_HEADING_FONT_FALLBACK,
    TYPOGRAPHY_HEADING_FONT_NAME,
    TYPOGRAPHY_HEADING_FONT_STYLE,
    TYPOGRAPHY_HEADING_FONT_WEIGHT,
    TYPOGRAPHY_HEADING_LINE_HEIGHT,
    TYPOGRAPHY_LINE_HEIGHT,
    TYPOGRAPHY_SIZE_BASE,
    TYPOGRAPHY_SIZE_RATIO,
} = SPEC_TOKEN_NAMES;

class SpecDesignTokensGuide extends PureComponent {
    render() {
        return (
            <StoryLayout
                {...getSanatizedStoryProps(this.props, false)}
                contextCls={this.baseCls}
                title={locale.stories.styleGuide.designTokens.specTokens.title}
                subTitle={getStyleGuideTitle(
                    locale.stories.styleGuide.designTokens.categoryTitle,
                )}
            >
                {this.renderIntro()}
                {this.renderLayoutSpecs()}
                {this.renderBorderRadiusSpecs()}
                {this.renderFormSpecs()}
                {this.renderStateSpecs()}
                {this.renderTypographySpecs()}
            </StoryLayout>
        );
    }

    renderIntro = () => {
        return (
            <StorySection>
                <Paragraph>
                    Spec tokens help us create standards around the design
                    decisions we make for things like fonts, layout and more.
                </Paragraph>
            </StorySection>
        );
    };

    renderLayoutSpecs = () => {
        return (
            <StorySection>
                <SectionTitle>
                    {
                        locale.stories.styleGuide.designTokens.specTokens
                            .sectionTitles.layout
                    }
                </SectionTitle>
                <div className={`${this.baseCls}__section-content`}>
                    {this.renderDesignTokensTable(
                        this.getLayoutTokensTableData(),
                    )}
                </div>
            </StorySection>
        );
    };

    renderBorderRadiusSpecs = () => {
        return (
            <StorySection>
                <SectionTitle>
                    {
                        locale.stories.styleGuide.designTokens.specTokens
                            .sectionTitles.borderRadius
                    }
                </SectionTitle>
                <div className={`${this.baseCls}__section-content`}>
                    {this.renderDesignTokensTable(
                        this.getBorderRadiusTokensTableData(),
                    )}
                </div>
            </StorySection>
        );
    };

    renderFormSpecs = () => {
        return (
            <StorySection>
                <SectionTitle>
                    {
                        locale.stories.styleGuide.designTokens.specTokens
                            .sectionTitles.forms
                    }
                </SectionTitle>
                <div className={`${this.baseCls}__section-content`}>
                    {this.renderDesignTokensTable(
                        this.getFormTokensTableData(),
                    )}
                </div>
            </StorySection>
        );
    };

    renderStateSpecs = () => {
        return (
            <StorySection>
                <SectionTitle>
                    {
                        locale.stories.styleGuide.designTokens.specTokens
                            .sectionTitles.state
                    }
                </SectionTitle>
                <div className={`${this.baseCls}__section-content`}>
                    {this.renderDesignTokensTable(
                        this.getStateTokensTableData(),
                    )}
                </div>
            </StorySection>
        );
    };

    renderTypographySpecs = () => {
        return (
            <StorySection>
                <SectionTitle>
                    {
                        locale.stories.styleGuide.designTokens.specTokens
                            .sectionTitles.typography
                    }
                </SectionTitle>
                <div className={`${this.baseCls}__section-content`}>
                    {this.renderDesignTokensTable(
                        this.getTypographyTokensTableData(),
                    )}
                    <Paragraph>
                        For more information please reference{' '}
                        <LinkButton
                            text={`${locale.designSystemName}'s Modular Typography System`}
                            onClick={linkTo(
                                getStyleGuideTitle(
                                    locale.stories.styleGuide.typography
                                        .categoryTitle,
                                ),
                                locale.stories.styleGuide.typography
                                    .typographySystem.title,
                            )}
                        />
                        .
                    </Paragraph>
                </div>
            </StorySection>
        );
    };

    renderDesignTokensTable = (data) => {
        return <SBDesignTokensTable data={data} />;
    };

    getLayoutTokensTableData = () => {
        return [
            {
                id: 'dt-layout-grid-base',
                name: 'Grid (Base)',
                description:
                    'Provides a base unit to scale measurements for things like paddings, margins, space between elements, border radius, etc.',
                value: `${SPEC_TOKEN_DEFAULTS[LAYOUT_GRID_BASE]}px`,
            },
        ];
    };

    getBorderRadiusTokensTableData = () => {
        return [
            {
                id: 'dt-border-radius-badges',
                name: 'Badges',
                value: `${SPEC_TOKEN_DEFAULTS[BADGE_BORDER_RADIUS]}px`,
            },
            {
                id: 'dt-border-radius-buttons',
                name: 'Buttons',
                value: `${SPEC_TOKEN_DEFAULTS[BTN_BORDER_RADIUS]}px`,
                isAlt: true,
            },
            {
                id: 'dt-border-radius-callout-memos',
                name: 'Callout Memos',
                value: `${SPEC_TOKEN_DEFAULTS[CALLOUT_MEMO_BORDER_RADIUS]}px`,
            },
            {
                id: 'dt-border-radius-checkboxes',
                name: 'Checkboxes',
                value: `${SPEC_TOKEN_DEFAULTS[FORM_CHECKBOX_BORDER_RADIUS]}px`,
                isAlt: true,
            },
            {
                id: 'dt-border-radius-form-inputs',
                name: 'Form Inputs',
                value: `${SPEC_TOKEN_DEFAULTS[FORM_INPUT_BORDER_RADIUS]}px`,
            },
            {
                id: 'dt-border-radius-dropdown-menus',
                name: 'Dropdown Menus',
                value: `${SPEC_TOKEN_DEFAULTS[FORM_MENU_BORDER_RADIUS]}px`,
                isAlt: true,
            },
            {
                id: 'dt-border-radius-pills',
                name: 'Pills',
                description:
                    'The border radius for form pills is always equal to "Form Input - 1" to account for border thickness.',
                value: `${SPEC_TOKEN_DEFAULTS[FORM_INPUT_BORDER_RADIUS] - 1}px`,
            },
            {
                id: 'dt-border-radius-layout-sections',
                name: 'Layout Sections',
                value: `${SPEC_TOKEN_DEFAULTS[LAYOUT_SECTION_BORDER_RADIUS]}px`,
                isAlt: true,
            },
            {
                id: 'dt-border-radius-modal-dialogs',
                name: 'Modal Dialogs',
                value: `${SPEC_TOKEN_DEFAULTS[MODAL_DIALOG_BORDER_RADIUS]}px`,
            },
            {
                id: 'dt-border-radius-toasters',
                name: 'Toasters',
                value: `${SPEC_TOKEN_DEFAULTS[TOASTER_BORDER_RADIUS]}px`,
                isAlt: true,
            },
        ];
    };

    getFormTokensTableData = () => {
        return [
            {
                id: 'dt-form-input-placeholder-font-style',
                name: 'Input Placeholder Font Style',
                value: SPEC_TOKEN_DEFAULTS[FORM_INPUT_PLACEHOLDER_FONT_STYLE],
            },
        ];
    };

    getStateTokensTableData = () => {
        return [
            {
                id: 'dt-disabled-state-opacity',
                name: 'Disabled State Opacity',
                value: `${SPEC_TOKEN_DEFAULTS[STATE_DISABLED_OPACITY] * 100}%`,
            },
        ];
    };

    getTypographyTokensTableData = () => {
        const subTextFontSize = Math.round(
            SPEC_TOKEN_DEFAULTS[TYPOGRAPHY_SIZE_BASE] /
                SPEC_TOKEN_DEFAULTS[TYPOGRAPHY_SIZE_RATIO],
        );
        const footNoteFontSize = Math.round(
            subTextFontSize / SPEC_TOKEN_DEFAULTS[TYPOGRAPHY_SIZE_RATIO],
        );
        const h5FontSize = Math.round(
            SPEC_TOKEN_DEFAULTS[TYPOGRAPHY_SIZE_BASE] *
                SPEC_TOKEN_DEFAULTS[TYPOGRAPHY_SIZE_RATIO],
        );
        const h4FontSize = Math.round(
            h5FontSize * SPEC_TOKEN_DEFAULTS[TYPOGRAPHY_SIZE_RATIO],
        );
        const h3FontSize = Math.round(
            h4FontSize * SPEC_TOKEN_DEFAULTS[TYPOGRAPHY_SIZE_RATIO],
        );
        const h2FontSize = Math.round(
            h3FontSize * SPEC_TOKEN_DEFAULTS[TYPOGRAPHY_SIZE_RATIO],
        );
        const h1FontSize = Math.round(
            h2FontSize * SPEC_TOKEN_DEFAULTS[TYPOGRAPHY_SIZE_RATIO],
        );

        return [
            {
                id: 'dt-line-height',
                name: 'Line Height',
                value: SPEC_TOKEN_DEFAULTS[TYPOGRAPHY_LINE_HEIGHT],
            },
            {
                id: 'dt-body-font',
                name: 'Body Font',
                value: SPEC_TOKEN_DEFAULTS[TYPOGRAPHY_BODY_FONT_NAME],
                isAlt: true,
            },
            {
                id: 'dt-body-font-fallback',
                name: 'Body Font (Fallback)',
                value: SPEC_TOKEN_DEFAULTS[TYPOGRAPHY_BODY_FONT_FALLBACK],
            },
            {
                id: 'dt-heading-font',
                name: 'Heading Font',
                value: SPEC_TOKEN_DEFAULTS[TYPOGRAPHY_HEADING_FONT_NAME],
                isAlt: true,
            },
            {
                id: 'dt-heading-font-fallback',
                name: 'Heading Font (Fallback)',
                value: SPEC_TOKEN_DEFAULTS[TYPOGRAPHY_HEADING_FONT_FALLBACK],
            },
            {
                id: 'dt-heading-font-style',
                name: 'Heading Font Style',
                value: SPEC_TOKEN_DEFAULTS[TYPOGRAPHY_HEADING_FONT_STYLE],
                isAlt: true,
            },
            {
                id: 'dt-heading-font-weight',
                name: 'Heading Font Weight',
                value: SPEC_TOKEN_DEFAULTS[TYPOGRAPHY_HEADING_FONT_WEIGHT],
            },
            {
                id: 'dt-heading-line-height',
                name: 'Heading Line Height',
                value: SPEC_TOKEN_DEFAULTS[TYPOGRAPHY_HEADING_LINE_HEIGHT],
                isAlt: true,
            },
            {
                id: 'dt-font-size-ratio',
                name: 'Font Size Ratio',
                description:
                    'Used to derive font sizes for headers, sub-text and footnotes in relation to the Base Font Size.',
                value: SPEC_TOKEN_DEFAULTS[TYPOGRAPHY_SIZE_RATIO],
            },
            {
                id: 'dt-h1-font-size',
                name: 'H1 Font Size',
                description: 'H2 Font Size * Font Size Ratio',
                value: `${h1FontSize}px`,
                isAlt: true,
            },
            {
                id: 'dt-h2-font-size',
                name: 'H2 Font Size',
                description: 'H3 Font Size * Font Size Ratio',
                value: `${h2FontSize}px`,
            },
            {
                id: 'dt-h3-font-size',
                name: 'H3 Font Size',
                description: 'H4 Font Size * Font Size Ratio',
                value: `${h3FontSize}px`,
                isAlt: true,
            },
            {
                id: 'dt-h4-font-size',
                name: 'H4 Font Size',
                description: 'H5 Font Size * Font Size Ratio',
                value: `${h4FontSize}px`,
            },
            {
                id: 'dt-h5-font-size',
                name: 'H5 Font Size',
                description: 'Base Font Size * Font Size Ratio',
                value: `${h5FontSize}px`,
                isAlt: true,
            },
            {
                id: 'dt-base-font-size',
                name: 'Base Font Size',
                value: `${SPEC_TOKEN_DEFAULTS[TYPOGRAPHY_SIZE_BASE]}px`,
            },
            {
                id: 'dt-sub-text-font-size',
                name: 'Sub-Text Font Size',
                description: 'Base Font Size / Font Size Ratio',
                value: `${Math.round(subTextFontSize)}px`,
                isAlt: true,
            },
            {
                id: 'dt-footnote-font-size',
                name: 'Footnote Font Size',
                description: 'Sub-Text Font Size / Font Size Ratio',
                value: `${footNoteFontSize}px`,
            },
        ];
    };

    baseCls = 'banka-sb-spec-design-tokens-ux-guide';
}

export default SpecDesignTokensGuide;
