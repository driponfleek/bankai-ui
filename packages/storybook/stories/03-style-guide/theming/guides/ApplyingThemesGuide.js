import React, { PureComponent } from 'react';
import { linkTo } from '@storybook/addon-links';
import { Avatar } from '@epr0t0type/bankai-ui-avatars';
import {
    CORE_COLOR_TOKEN_NAMES,
    LINK_COLOR_TOKEN_NAMES,
    getThemeCSS,
    getThemeAPIKeyFromName,
    getThemeDefaults,
} from '@epr0t0type/bankai-lib-theme-utils';
import {
    Checkbox,
    ColorPickerInput,
    Fieldset,
    FormFieldComposer,
    Radio,
    TextInput,
    ToggleSwitch,
    FORM_FIELD_COMP_VARIANTS,
} from '@epr0t0type/bankai-ui-form-elements';
import { Multiselect, Dropdown } from '@epr0t0type/bankai-ui-form-elements-rw';
import {
    FormLayout,
    FormLayoutFieldContainer,
    FormLayoutSection,
    FormLayoutRow,
} from '@epr0t0type/bankai-ui-layouts';
import {
    Button,
    LinkButton,
    VARIANTS as BTN_VARIANTS,
} from '@epr0t0type/bankai-ui-buttons';
import {
    CalloutBanner,
    Callout,
    VARIANTS as CALLOUT_VARIANTS,
} from '@epr0t0type/bankai-ui-callouts';
import {
    Badge,
    VARIANTS as BADGE_VARIANTS,
} from '@epr0t0type/bankai-ui-badges';
import {
    BankaiCheck,
    BankaiCircleInfo,
    BankaiCirclePlus,
    BankaiPower,
    BankaiTrash,
    BankaiTriangleAlert,
} from '@epr0t0type/bankai-ui-icons';
import {
    LoadingBars,
    LoadingSpinners,
    LOADING_SPINNERS_VARIANTS,
} from '@epr0t0type/bankai-ui-loading';
import { Hyperlink } from '@epr0t0type/bankai-ui-typography';
import { Helmet } from 'react-helmet';
import MockDnDHoverState from './mock-components/MockDnDHoverState';
import MockDnDRejectState from './mock-components/MockDnDRejectState';
import StoryLayout from '../../../../sb-components/layout/StoryLayout';
import StorySection from '../../../../sb-components/layout/StorySection';
import StickySection from '../../../../sb-components/layout/StickySection';
import SectionTitle from '../../../../sb-components/content/SectionTitle';
import Paragraph from '../../../../sb-components/content/Paragraph';
import ComponentPreview from '../../../../sb-components/content/ComponentPreview';
import strings from '../../../../i18n/strings.json';

// Utils
import { getStyleGuideTitle } from '../../../../utils/storiesConfig';

// Styles
import './styles/applying-themes-guide.scss';

const { bankaiUI: locale } = strings;
const ComposedColorPickerInput = FormFieldComposer(ColorPickerInput);
const ComposedToggleSwitch = FormFieldComposer(ToggleSwitch);
const ComposedTextInput = FormFieldComposer(TextInput);
const formMenuMockData = [
    {
        id: 1,
        text: 'Option 1',
    },
    {
        id: 2,
        text: 'Option 2',
    },
    {
        id: 3,
        text: 'Option 3',
    },
    {
        id: 4,
        text: 'Option 4',
    },
];

class ApplyingThemesGuide extends PureComponent {
    constructor(...args) {
        super(...args);
        const isDarkMode = this.getIsDarkMode();
        const defaultTheme = getThemeDefaults(isDarkMode);

        this.state = {
            colorPrimary:
                defaultTheme[CORE_COLOR_TOKEN_NAMES.CORE_COLOR_PRIMARY],
            colorSecondary:
                defaultTheme[CORE_COLOR_TOKEN_NAMES.CORE_COLOR_SECONDARY],
            colorAccent: defaultTheme[CORE_COLOR_TOKEN_NAMES.CORE_COLOR_ACCENT],
            colorLink: defaultTheme[LINK_COLOR_TOKEN_NAMES.LINK_TEXT_COLOR],
            colorAffirmative:
                defaultTheme[CORE_COLOR_TOKEN_NAMES.CORE_COLOR_AFFIRMATIVE],
            colorCautionary:
                defaultTheme[CORE_COLOR_TOKEN_NAMES.CORE_COLOR_CAUTIONARY],
            colorError: defaultTheme[CORE_COLOR_TOKEN_NAMES.CORE_COLOR_ERROR],
            colorDestructive:
                defaultTheme[CORE_COLOR_TOKEN_NAMES.CORE_COLOR_DESTRUCTIVE],
            colorInfo: defaultTheme[CORE_COLOR_TOKEN_NAMES.CORE_COLOR_INFO],
            isDarkMode,
            isRoundedUI: true,
            shouldAutoCorrectColors: true,
        };
    }

    render() {
        const theme = this.getTheme();

        return (
            <StoryLayout
                contextCls={this.baseCls}
                title={locale.stories.styleGuide.theming.applyingThemes.title}
                subTitle={getStyleGuideTitle(
                    locale.stories.styleGuide.theming.categoryTitle,
                )}
                onColorSchemeChange={this.handleColorSchemeChange}
            >
                <Helmet>
                    <style>{theme}</style>
                </Helmet>
                {this.renderIntro()}
                {this.renderConfigs()}
                {this.renderPrimaryColor()}
                {this.renderSecondaryColor()}
                {this.renderAccentColor()}
                {this.renderLinkColor()}
                {this.renderAffirmativeColor()}
                {this.renderCautionaryColor()}
                {this.renderErrorColor()}
                {this.renderInfoColor()}
                {this.renderDestructiveColor()}
            </StoryLayout>
        );
    }

    renderIntro = () => {
        return (
            <StorySection>
                <Paragraph>
                    {locale.designSystemName}&apos;s default theming system can
                    be customized by passing in a core set of design tokens and
                    configs. For example, we can auto-detect accessible color
                    pairings to ensure UI&apos;s are accessible, or customize
                    the roundness of UI elements. For a high-level explanation
                    of how {locale.designSystemName}&apos;s theming logic
                    determines color pairings, see{' '}
                    <LinkButton
                        text="Working with Color"
                        onClick={linkTo(
                            getStyleGuideTitle(
                                locale.stories.styleGuide.theming.categoryTitle,
                            ),
                            locale.stories.styleGuide.theming.workingWithColor
                                .title,
                        )}
                    />
                    .
                </Paragraph>
            </StorySection>
        );
    };

    renderConfigs = () => {
        const { shouldAutoCorrectColors } = this.state;

        return (
            <StorySection>
                <SectionTitle>
                    {
                        locale.stories.styleGuide.theming.applyingThemes
                            .sectionTitles.configs
                    }
                </SectionTitle>
                <StickySection
                    contextCls={`${this.baseCls}__config-container`}
                    scrollingContainerCSSClass={this.baseCls}
                >
                    <FormLayout shouldPadContent={false}>
                        <Fieldset legend="Theme Configurations">
                            <FormLayoutRow>
                                {/* <FormLayoutFieldContainer>
                                    <ComposedToggleSwitch
                                        labelProps={{
                                            labelText: 'Round Corners?',
                                        }}
                                        isChecked={isRoundedUI}
                                        variant={
                                            FORM_FIELD_COMP_VARIANTS.INLINE_RIGHT
                                        }
                                        onChange={
                                            this.handleShouldRoundCornersChange
                                        }
                                    />
                                </FormLayoutFieldContainer> */}
                                <FormLayoutFieldContainer>
                                    <ComposedToggleSwitch
                                        labelProps={{
                                            labelText: 'Auto-Correct Colors?',
                                        }}
                                        isChecked={shouldAutoCorrectColors}
                                        variant={
                                            FORM_FIELD_COMP_VARIANTS.INLINE_RIGHT
                                        }
                                        onChange={
                                            this
                                                .handleShouldAutoCorrectColorsChange
                                        }
                                    />
                                </FormLayoutFieldContainer>
                            </FormLayoutRow>
                        </Fieldset>
                    </FormLayout>
                </StickySection>
            </StorySection>
        );
    };

    renderPrimaryColor = () => {
        const { colorPrimary } = this.state;

        return (
            <StorySection>
                <SectionTitle>
                    {
                        locale.stories.styleGuide.theming.applyingThemes
                            .sectionTitles.primaryColor
                    }
                </SectionTitle>
                <FormLayout>
                    <FormLayoutSection>
                        <FormLayoutFieldContainer>
                            <ComposedColorPickerInput
                                labelProps={{ labelText: 'Primary Color' }}
                                color={colorPrimary}
                                onChange={this.handlePrimaryColorChange}
                                shouldOpenUp
                            />
                        </FormLayoutFieldContainer>
                    </FormLayoutSection>
                    <FormLayoutSection>
                        <ComponentPreview contextCls={this.demoCls}>
                            <div>
                                <Button
                                    text="Primary Button"
                                    variant={BTN_VARIANTS.PRIMARY}
                                    renderIcon={this.renderPrimaryBtnIcon}
                                />
                            </div>
                            <div>
                                <LoadingBars />
                            </div>
                            <div>
                                <Checkbox
                                    aria-label="Sample Checkbox Checked State"
                                    isChecked
                                />
                            </div>
                            <div>
                                <Radio
                                    aria-label="Sample Radio Checked State"
                                    isChecked
                                />
                            </div>
                            <div>
                                <Multiselect
                                    aria-label="Sample Radio Checked State"
                                    dataKey="id"
                                    textField="text"
                                    data={formMenuMockData}
                                    value={[
                                        formMenuMockData[0],
                                        formMenuMockData[2],
                                    ]}
                                />
                            </div>
                            <div
                                className={`${this.baseCls}__dropdown-open-container`}
                            >
                                <Dropdown
                                    aria-label="Sample Radio Checked State"
                                    dataKey="id"
                                    textField="text"
                                    data={[
                                        formMenuMockData[0],
                                        formMenuMockData[1],
                                    ]}
                                    value={formMenuMockData[1]}
                                />
                            </div>
                            <div>
                                {this.renderSpinner(
                                    LOADING_SPINNERS_VARIANTS.ARCS,
                                )}
                            </div>
                            <div>
                                {this.renderSpinner(
                                    LOADING_SPINNERS_VARIANTS.TRI_CUBE,
                                )}
                            </div>
                        </ComponentPreview>
                    </FormLayoutSection>
                </FormLayout>
            </StorySection>
        );
    };

    renderSecondaryColor = () => {
        const { colorSecondary } = this.state;

        return (
            <StorySection>
                <SectionTitle>
                    {
                        locale.stories.styleGuide.theming.applyingThemes
                            .sectionTitles.secondaryColor
                    }
                </SectionTitle>
                <FormLayout>
                    <FormLayoutSection>
                        <FormLayoutFieldContainer>
                            <ComposedColorPickerInput
                                labelProps={{ labelText: 'Secondary Color' }}
                                color={colorSecondary}
                                onChange={this.handleSecondaryColorChange}
                                shouldOpenUp
                            />
                        </FormLayoutFieldContainer>
                    </FormLayoutSection>
                    <FormLayoutSection>
                        <ComponentPreview contextCls={this.demoCls}>
                            <div>
                                <Button
                                    text="Secondary Button"
                                    variant={BTN_VARIANTS.SECONDARY}
                                    renderIcon={this.renderSecondaryBtnIcon}
                                />
                            </div>
                            <div>
                                {this.renderSpinner(
                                    LOADING_SPINNERS_VARIANTS.ARCS,
                                )}
                            </div>
                            <div>
                                {this.renderSpinner(
                                    LOADING_SPINNERS_VARIANTS.TRI_CUBE,
                                )}
                            </div>
                        </ComponentPreview>
                    </FormLayoutSection>
                </FormLayout>
            </StorySection>
        );
    };

    renderAccentColor = () => {
        const { colorAccent } = this.state;

        return (
            <StorySection>
                <SectionTitle>
                    {
                        locale.stories.styleGuide.theming.applyingThemes
                            .sectionTitles.accentColor
                    }
                </SectionTitle>
                <FormLayout>
                    <FormLayoutSection>
                        <FormLayoutFieldContainer>
                            <ComposedColorPickerInput
                                labelProps={{ labelText: 'Accent Color' }}
                                color={colorAccent}
                                onChange={this.handleAccentColorChange}
                                shouldOpenUp
                            />
                        </FormLayoutFieldContainer>
                    </FormLayoutSection>
                    <FormLayoutSection>
                        <ComponentPreview contextCls={this.demoCls}>
                            <div>
                                <Avatar text="DY" />
                            </div>
                            <div>
                                {this.renderSpinner(
                                    LOADING_SPINNERS_VARIANTS.ARCS,
                                )}
                            </div>
                            <div>
                                {this.renderSpinner(
                                    LOADING_SPINNERS_VARIANTS.TRI_CUBE,
                                )}
                            </div>
                        </ComponentPreview>
                    </FormLayoutSection>
                </FormLayout>
            </StorySection>
        );
    };

    renderLinkColor = () => {
        const { colorLink } = this.state;

        return (
            <StorySection>
                <SectionTitle>
                    {
                        locale.stories.styleGuide.theming.applyingThemes
                            .sectionTitles.linkColor
                    }
                </SectionTitle>
                <FormLayout>
                    <FormLayoutSection>
                        <FormLayoutFieldContainer>
                            <ComposedColorPickerInput
                                labelProps={{ labelText: 'Link Color' }}
                                color={colorLink}
                                onChange={this.handleLinkColorChange}
                                shouldOpenUp
                            />
                        </FormLayoutFieldContainer>
                    </FormLayoutSection>
                    <FormLayoutSection>
                        <ComponentPreview contextCls={this.demoCls}>
                            <div>
                                <Hyperlink
                                    href="https://google.com"
                                    onClick={this.handleLinkClick}
                                    shouldOpenInNewWindow
                                >
                                    Hyperlink
                                </Hyperlink>
                            </div>
                            <div>
                                <LinkButton text="Button Styled as Link" />
                            </div>
                        </ComponentPreview>
                    </FormLayoutSection>
                </FormLayout>
            </StorySection>
        );
    };

    renderDestructiveColor = () => {
        const { colorDestructive } = this.state;

        return (
            <StorySection>
                <SectionTitle>
                    {
                        locale.stories.styleGuide.theming.applyingThemes
                            .sectionTitles.destructiveColor
                    }
                </SectionTitle>
                <FormLayout>
                    <FormLayoutSection>
                        <FormLayoutFieldContainer>
                            <ComposedColorPickerInput
                                labelProps={{ labelText: 'Destructive Color' }}
                                color={colorDestructive}
                                onChange={this.handleDestructiveColorChange}
                                shouldOpenUp
                            />
                        </FormLayoutFieldContainer>
                    </FormLayoutSection>
                    <FormLayoutSection>
                        <ComponentPreview
                            contextCls={`${this.demoCls} ${this.baseCls}__destructive-color-demo`}
                        >
                            <Button
                                text="Secondary Destructive Button"
                                variant={BTN_VARIANTS.PRIMARY_DESTRUCTIVE}
                                renderIcon={this.renderDestructiveBtnIcon}
                            />
                            <Button
                                text="Primary Destructive Button"
                                variant={BTN_VARIANTS.SECONDARY_DESTRUCTIVE}
                                renderIcon={this.renderDestructiveBtnIcon}
                            />
                        </ComponentPreview>
                    </FormLayoutSection>
                </FormLayout>
            </StorySection>
        );
    };

    renderAffirmativeColor = () => {
        const { colorAffirmative } = this.state;

        return (
            <StorySection>
                <SectionTitle>
                    {
                        locale.stories.styleGuide.theming.applyingThemes
                            .sectionTitles.affirmativeColor
                    }
                </SectionTitle>
                <FormLayout>
                    <FormLayoutSection>
                        <FormLayoutFieldContainer>
                            <ComposedColorPickerInput
                                labelProps={{ labelText: 'Affirmative Color' }}
                                color={colorAffirmative}
                                onChange={this.handleAffirmativeColorChange}
                                shouldOpenUp
                            />
                        </FormLayoutFieldContainer>
                    </FormLayoutSection>
                    <FormLayoutSection>
                        <ComponentPreview contextCls={this.demoCls}>
                            <div>
                                {this.renderCalloutBanner(
                                    CALLOUT_VARIANTS.AFFIRMATIVE,
                                )}
                            </div>
                            <div>
                                <ToggleSwitch
                                    aria-label="example of theming for toggle switch on state"
                                    isChecked
                                />
                            </div>
                            <div>
                                {this.renderBadge(BADGE_VARIANTS.AFFIRMATIVE)}
                            </div>
                            <div>
                                <MockDnDHoverState
                                    // localeDefaultState={{
                                    //     btnText: 'Browse',
                                    //     msgText: 'Drop your File here',
                                    //     titleText: undefined,
                                    // }}
                                    localeHoverState={{
                                        msgText: 'Drop your File here',
                                        titleText: undefined,
                                    }}
                                    // localeRejectDropState={{
                                    //     INVALID_FILE_TYPES: {
                                    //         msgText:
                                    //             'File must be JPG or PNG format',
                                    //         titleText: 'Invalid File',
                                    //     },
                                    // }}
                                    // localeShowAttachmentsState={{
                                    //     browseLinkText: 'Browse',
                                    //     msgAfterBrowseText: ', or ',
                                    //     msgBeforeBrowseText:
                                    //         'Drop your File here, ',
                                    //     removeAllLinkText: 'Remove All',
                                    //     removeAttachmentARIALabel:
                                    //         'Remove File',
                                    // }}
                                    // localeBusyState={{
                                    //     msgText: 'Please wait...',
                                    //     titleText: 'Busy',
                                    // }}
                                />
                            </div>
                        </ComponentPreview>
                    </FormLayoutSection>
                </FormLayout>
            </StorySection>
        );
    };

    renderCautionaryColor = () => {
        const { colorCautionary } = this.state;

        return (
            <StorySection>
                <SectionTitle>
                    {
                        locale.stories.styleGuide.theming.applyingThemes
                            .sectionTitles.cautionaryColor
                    }
                </SectionTitle>
                <FormLayout>
                    <FormLayoutSection>
                        <FormLayoutFieldContainer>
                            <ComposedColorPickerInput
                                labelProps={{ labelText: 'Cautionary Color' }}
                                color={colorCautionary}
                                onChange={this.handleCautionaryColorChange}
                                shouldOpenUp
                            />
                        </FormLayoutFieldContainer>
                    </FormLayoutSection>
                    <FormLayoutSection>
                        <ComponentPreview contextCls={this.demoCls}>
                            <div>
                                {this.renderCalloutBanner(
                                    CALLOUT_VARIANTS.CAUTIONARY,
                                )}
                            </div>
                            <div>
                                {this.renderBadge(BADGE_VARIANTS.CAUTIONARY)}
                            </div>
                        </ComponentPreview>
                    </FormLayoutSection>
                </FormLayout>
            </StorySection>
        );
    };

    renderErrorColor = () => {
        const { colorError } = this.state;

        return (
            <StorySection>
                <SectionTitle>
                    {
                        locale.stories.styleGuide.theming.applyingThemes
                            .sectionTitles.errorColor
                    }
                </SectionTitle>
                <FormLayout>
                    <FormLayoutSection>
                        <FormLayoutFieldContainer>
                            <ComposedColorPickerInput
                                labelProps={{ labelText: 'Error Color' }}
                                color={colorError}
                                onChange={this.handleErrorColorChange}
                                shouldOpenUp
                            />
                        </FormLayoutFieldContainer>
                    </FormLayoutSection>
                    <FormLayoutSection>
                        <ComponentPreview contextCls={this.demoCls}>
                            <div>
                                <Callout
                                    title="Something Went Wrong"
                                    msg="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                                    variant={CALLOUT_VARIANTS.ERROR}
                                />
                            </div>
                            <div>
                                <MockDnDRejectState
                                    rejectError="INVALID_FILE_TYPES"
                                    localeRejectDropState={{
                                        INVALID_FILE_TYPES: {
                                            msgText:
                                                'File must be JPG or PNG format',
                                            titleText: 'Invalid File',
                                        },
                                    }}
                                />
                            </div>
                            <div>
                                {this.renderCalloutBanner(
                                    CALLOUT_VARIANTS.ERROR,
                                )}
                            </div>
                            <div>
                                <ComposedTextInput
                                    placeholder="Please enter a value..."
                                    labelProps={{
                                        labelText: 'Form Error State',
                                    }}
                                    errorProps={{
                                        errorText: 'Something is wrong',
                                        renderErrorIcon: this.renderAlertIcon,
                                    }}
                                    hasError
                                />
                            </div>
                            <div>{this.renderBadge(BADGE_VARIANTS.DANGER)}</div>
                        </ComponentPreview>
                    </FormLayoutSection>
                </FormLayout>
            </StorySection>
        );
    };

    renderInfoColor = () => {
        const { colorInfo } = this.state;

        return (
            <StorySection>
                <SectionTitle>
                    {
                        locale.stories.styleGuide.theming.applyingThemes
                            .sectionTitles.infoColor
                    }
                </SectionTitle>
                <FormLayout>
                    <FormLayoutSection>
                        <FormLayoutFieldContainer>
                            <ComposedColorPickerInput
                                labelProps={{ labelText: 'Info Color' }}
                                color={colorInfo}
                                onChange={this.handleInfoColorChange}
                                shouldOpenUp
                            />
                        </FormLayoutFieldContainer>
                    </FormLayoutSection>
                    <FormLayoutSection>
                        <ComponentPreview contextCls={this.demoCls}>
                            <div>
                                {this.renderCalloutBanner(
                                    CALLOUT_VARIANTS.INFO,
                                )}
                            </div>
                            <div>{this.renderBadge(BADGE_VARIANTS.INFO)}</div>
                        </ComponentPreview>
                    </FormLayoutSection>
                </FormLayout>
            </StorySection>
        );
    };

    renderSpinner = (VARIANT) => <LoadingSpinners variant={VARIANT} />;

    renderPrimaryBtnIcon = () => <BankaiPower />;

    renderSecondaryBtnIcon = () => <BankaiCirclePlus />;

    renderDestructiveBtnIcon = () => <BankaiTrash />;

    renderBadge = (VARIANT) => {
        return <Badge variant={VARIANT}>Badge</Badge>;
    };

    renderCalloutBanner = (VARIANT) => {
        return (
            <CalloutBanner
                title="Callout Banner"
                msg="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                variant={VARIANT}
                renderIcon={this.renderCalloutBannerIconByVariant(VARIANT)}
            />
        );
    };

    renderCalloutBannerIconByVariant = (VARIANT) => {
        let iconRenderer;

        switch (VARIANT) {
            case CALLOUT_VARIANTS.AFFIRMATIVE:
                iconRenderer = this.renderAffirmativeCalloutBannerIcon;
                break;
            case CALLOUT_VARIANTS.CAUTIONARY:
            case CALLOUT_VARIANTS.ERROR:
                iconRenderer = this.renderCautionaryErrorCalloutBannerIcon;
                break;
            case CALLOUT_VARIANTS.INFO:
                iconRenderer = this.renderInfoCalloutBannerIcon;
                break;
            default:
                iconRenderer = this.renderAffirmativeCalloutBannerIcon;
                break;
        }

        return iconRenderer;
    };

    renderAffirmativeCalloutBannerIcon = (iconCls) => {
        return <BankaiCheck contextCls={iconCls} />;
    };

    renderCautionaryErrorCalloutBannerIcon = (iconCls) => {
        return <BankaiTriangleAlert contextCls={iconCls} />;
    };

    renderInfoCalloutBannerIcon = (iconCls) => {
        return <BankaiCircleInfo contextCls={iconCls} />;
    };

    renderAlertIcon = (iconCls) => <BankaiTriangleAlert contextCls={iconCls} />;

    handleLinkClick = (e) => {
        e?.preventDefault();
        e?.stopPropagation();
    };

    handleShouldAutoCorrectColorsChange = () => {
        const { shouldAutoCorrectColors } = this.state;

        this.setState({
            shouldAutoCorrectColors: !shouldAutoCorrectColors,
        });
    };

    handlePrimaryColorChange = (colorPrimary) => {
        this.setState({
            colorPrimary,
        });
    };

    handleSecondaryColorChange = (colorSecondary) => {
        this.setState({
            colorSecondary,
        });
    };

    handleAccentColorChange = (colorAccent) => {
        this.setState({
            colorAccent,
        });
    };

    handleLinkColorChange = (colorLink) => {
        this.setState({
            colorLink,
        });
    };

    handleAffirmativeColorChange = (colorAffirmative) => {
        this.setState({
            colorAffirmative,
        });
    };

    handleCautionaryColorChange = (colorCautionary) => {
        this.setState({
            colorCautionary,
        });
    };

    handleErrorColorChange = (colorError) => {
        this.setState({
            colorError,
        });
    };

    handleDestructiveColorChange = (colorDestructive) => {
        this.setState({
            colorDestructive,
        });
    };

    handleInfoColorChange = (colorInfo) => {
        this.setState({
            colorInfo,
        });
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

    getTheme = () => {
        const { isDarkMode } = this.state;
        const {
            isRoundedUI,
            shouldAutoCorrectColors,
            colorPrimary,
            colorSecondary,
            colorAccent,
            colorLink,
            colorAffirmative,
            colorCautionary,
            colorError,
            colorDestructive,
            colorInfo,
        } = this.state;
        const themeConfig = {
            isDarkMode,
            isRoundedUI,
            shouldAutoCorrectColors,
            cssSelector: `.${this.demoCls}`,
        };

        return getThemeCSS(
            {
                [getThemeAPIKeyFromName(
                    CORE_COLOR_TOKEN_NAMES.CORE_COLOR_PRIMARY,
                )]: colorPrimary,
                [getThemeAPIKeyFromName(
                    CORE_COLOR_TOKEN_NAMES.CORE_COLOR_SECONDARY,
                )]: colorSecondary,
                [getThemeAPIKeyFromName(
                    LINK_COLOR_TOKEN_NAMES.LINK_TEXT_COLOR,
                )]: colorLink,
                [getThemeAPIKeyFromName(
                    CORE_COLOR_TOKEN_NAMES.CORE_COLOR_ACCENT,
                )]: colorAccent,
                [getThemeAPIKeyFromName(
                    CORE_COLOR_TOKEN_NAMES.CORE_COLOR_AFFIRMATIVE,
                )]: colorAffirmative,
                [getThemeAPIKeyFromName(
                    CORE_COLOR_TOKEN_NAMES.CORE_COLOR_CAUTIONARY,
                )]: colorCautionary,
                [getThemeAPIKeyFromName(
                    CORE_COLOR_TOKEN_NAMES.CORE_COLOR_ERROR,
                )]: colorError,
                [getThemeAPIKeyFromName(
                    CORE_COLOR_TOKEN_NAMES.CORE_COLOR_DESTRUCTIVE,
                )]: colorDestructive,
                [getThemeAPIKeyFromName(
                    CORE_COLOR_TOKEN_NAMES.CORE_COLOR_INFO,
                )]: colorInfo,
            },
            themeConfig,
        );
    };

    baseCls = 'bankai-sb-applying-themes-guide';

    demoCls = `${this.baseCls}__theme-demo`;
}

export default ApplyingThemesGuide;
