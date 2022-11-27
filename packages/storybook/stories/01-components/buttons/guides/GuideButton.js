import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
    Button,
    ButtonText,
    ButtonIcon,
    VARIANTS,
} from '@epr0t0type/bankai-ui-buttons';
import packageJSON from '@epr0t0type/bankai-ui-buttons/package.json';
import {
    BankaiCirclePlus,
    BankaiCircleDash,
    BankaiAndroid,
} from '@epr0t0type/bankai-ui-icons';
import {
    defaultBtnCodeStr,
    primaryBtnCodeStr,
    secondaryBtnCodeStr,
    primaryDestructiveBtnCodeStr,
    secondaryDestructiveBtnCodeStr,
    renderingBtnIconExampleCodeStr,
    renderingBtnBusyIconExampleCodeStr,
    renderingBtnCustomContentExampleCodeStr,
} from './codeStr/codeStrBtn';
import CalloutBannerInfo from '../../../../sb-components/callouts/CalloutBannerInfo';
import StoryLayout from '../../../../sb-components/layout/StoryLayout';
import StorySection from '../../../../sb-components/layout/StorySection';
import SectionTitle from '../../../../sb-components/content/SectionTitle';
import ComponentPreview from '../../../../sb-components/content/ComponentPreview';
import ComponentPreviewWithCodeBlock from '../../../../sb-components/content/ComponentPreviewWithCodeBlock';
import Paragraph from '../../../../sb-components/content/Paragraph';
import CollapsibleSection from '../../../../sb-components/content/CollapsibleSection';
import SBDesignTokensTable from '../../../../sb-components/tables/SBDesignTokensTable';
import strings from '../../../../i18n/strings.json';

// Utils
import { getComponentsTitle } from '../../../../utils/storiesConfig';
import {
    getDefaultBtnTokenData,
    getPrimaryBtnTokenData,
    getSecondaryBtnTokenData,
} from '../../../../utils/designTokens/buttonTokenUtils';

// Code Strings

// Styles
import './styles/guide-button.scss';

const { PRIMARY, PRIMARY_DESTRUCTIVE, SECONDARY, SECONDARY_DESTRUCTIVE } =
    VARIANTS;

const { bankaiUI: locale } = strings;

class GuideButton extends PureComponent {
    static defaultProps = {
        type: 'button',
        isBusy: false,
        isDisabled: false,
        onClick: () => Promise.resolve(),
    };

    static propTypes = {
        contextCls: PropTypes.string,
        iconCls: PropTypes.string,
        text: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
        type: PropTypes.string,
        variant: PropTypes.string,
        isBusy: PropTypes.bool,
        isDisabled: PropTypes.bool,
        data: PropTypes.object,
        onClick: PropTypes.func,
        renderIcon: PropTypes.func,
        renderBusyIcon: PropTypes.func,
    };

    static displayName = locale.stories.components.buttons.button.title;

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
                packageVer={packageJSON.version}
                title={locale.stories.components.buttons.button.title}
                subTitle={getComponentsTitle(
                    locale.stories.components.buttons.categoryTitle,
                )}
                onColorSchemeChange={this.handleColorSchemeChange}
            >
                {this.renderDemo()}
                {this.renderVariants()}
                {this.renderExamples()}
            </StoryLayout>
        );
    }

    renderDemo() {
        const { props } = this;

        return (
            <StorySection>
                <ComponentPreview shouldCheckA11Y>
                    <Button {...props} renderIcon={this.renderCirclePlusIcon} />
                </ComponentPreview>
                <Paragraph>
                    Buttons allow users to take action in your UI. Well-formed
                    buttons help users understand what action will be performed
                    when they are interacted with.
                </Paragraph>
            </StorySection>
        );
    }

    renderVariants = () => {
        return (
            <StorySection>
                <SectionTitle>Variants</SectionTitle>
                {this.renderDefaultButton()}
                {this.renderPrimaryButton()}
                {this.renderSecondaryButton()}
                {this.renderPrimaryDestructiveButton()}
                {this.renderSecondaryDestructiveButton()}
            </StorySection>
        );
    };

    renderExamples = () => {
        return (
            <StorySection>
                <SectionTitle>Examples</SectionTitle>
                {this.renderingAnIcon()}
                {this.renderingCustomBusyIcon()}
                {this.renderingCustomBtnContent()}
            </StorySection>
        );
    };

    renderCirclePlusIcon = () => <BankaiCirclePlus />;

    renderCircleDashIcon = () => <BankaiCircleDash />;

    renderAndroidIcon = () => <BankaiAndroid />;

    renderDefaultButton = () => {
        return (
            <StorySection>
                <SectionTitle headingLvl={3}>Default Button</SectionTitle>
                <ComponentPreviewWithCodeBlock
                    contextCls={`${this.baseCls}__examples-preview`}
                    codeString={defaultBtnCodeStr}
                >
                    <Button text="Default Button" />
                </ComponentPreviewWithCodeBlock>
                <Paragraph>
                    A starter button for creating new button types.
                </Paragraph>
                <CollapsibleSection
                    triggerContent={locale.shared.designTokens.title}
                >
                    <StorySection>
                        <SBDesignTokensTable
                            data={this.getDefaultBtnTokenData()}
                        />
                    </StorySection>
                </CollapsibleSection>
                {/* <CollapsibleSection
                    tokens={this.getDefaultBtnTokenData()}
                /> */}
            </StorySection>
        );
    };

    renderPrimaryButton = () => {
        const {
            restingStateTokens,
            activeStateTokens,
            hoverStateTokens,
            focusStateTokens,
        } = this.getPrimaryBtnTokenData();

        return (
            <StorySection>
                <SectionTitle headingLvl={3}>Primary Button</SectionTitle>
                <ComponentPreviewWithCodeBlock
                    contextCls={`${this.baseCls}__examples-preview`}
                    codeString={primaryBtnCodeStr}
                >
                    <Button text="Primary Button" variant={PRIMARY} />
                </ComponentPreviewWithCodeBlock>
                <Paragraph>
                    Use when you want the action to be the primary one a user
                    takes in your experience. This should be used sparingly and
                    should have little competition with other actions in your
                    user interface.
                </Paragraph>
                <CollapsibleSection
                    triggerContent={locale.shared.designTokens.title}
                >
                    <Paragraph>
                        The Primary Button uses the <strong>flat</strong> button
                        style. Colors are generated from the{' '}
                        <strong>Primary Color</strong> design token and its
                        variants by default.
                    </Paragraph>
                    <StorySection>
                        <SBDesignTokensTable data={restingStateTokens} />
                    </StorySection>
                    <StorySection>
                        <SectionTitle headingLvl={4}>Active State</SectionTitle>
                        <SBDesignTokensTable data={activeStateTokens} />
                    </StorySection>
                    <StorySection>
                        <SectionTitle headingLvl={4}>Hover State</SectionTitle>
                        <SBDesignTokensTable data={hoverStateTokens} />
                    </StorySection>
                    <StorySection>
                        <SectionTitle headingLvl={4}>Focus State</SectionTitle>
                        <SBDesignTokensTable data={focusStateTokens} />
                    </StorySection>
                </CollapsibleSection>
            </StorySection>
        );
    };

    renderSecondaryButton = () => {
        const {
            restingStateTokens,
            activeStateTokens,
            hoverStateTokens,
            focusStateTokens,
        } = this.getSecondaryBtnTokenData();

        return (
            <StorySection>
                <SectionTitle headingLvl={3}>Secondary Button</SectionTitle>
                <ComponentPreviewWithCodeBlock
                    contextCls={`${this.baseCls}__examples-preview`}
                    codeString={secondaryBtnCodeStr}
                >
                    <Button text="Secondary Button" variant={SECONDARY} />
                </ComponentPreviewWithCodeBlock>
                <Paragraph>
                    Used when the call to action is lower priority to the users
                    or business need than the primary actions on the page.
                </Paragraph>
                <CollapsibleSection
                    triggerContent={locale.shared.designTokens.title}
                >
                    <Paragraph>
                        The Secondary Button uses the <strong>ghost</strong>{' '}
                        button style. Colors are generated from the{' '}
                        <strong>Secondary Color</strong> design token and its
                        variants by default.
                    </Paragraph>
                    <StorySection>
                        <SBDesignTokensTable data={restingStateTokens} />
                    </StorySection>
                    <StorySection>
                        <SectionTitle headingLvl={4}>Active State</SectionTitle>
                        <SBDesignTokensTable data={activeStateTokens} />
                    </StorySection>
                    <StorySection>
                        <SectionTitle headingLvl={4}>Hover State</SectionTitle>
                        <SBDesignTokensTable data={hoverStateTokens} />
                    </StorySection>
                    <StorySection>
                        <SectionTitle headingLvl={4}>Focus State</SectionTitle>
                        <SBDesignTokensTable data={focusStateTokens} />
                    </StorySection>
                </CollapsibleSection>
            </StorySection>
        );
    };

    renderPrimaryDestructiveButton = () => {
        const {
            restingStateTokens,
            activeStateTokens,
            hoverStateTokens,
            focusStateTokens,
        } = this.getPrimaryDestructiveBtnTokenData();

        return (
            <StorySection>
                <SectionTitle headingLvl={3}>
                    Primary Destructive Button
                </SectionTitle>
                <ComponentPreviewWithCodeBlock
                    contextCls={`${this.baseCls}__examples-preview`}
                    codeString={primaryDestructiveBtnCodeStr}
                >
                    <Button
                        text="Primary Destructive Button"
                        variant={PRIMARY_DESTRUCTIVE}
                    />
                </ComponentPreviewWithCodeBlock>
                <Paragraph>
                    Use when you want the action to be the primary one a user
                    takes in your experience and it is destructive in nature.
                    This should be used sparingly so that it does not compete
                    with other actions of less importance.
                </Paragraph>
                <CollapsibleSection
                    triggerContent={locale.shared.designTokens.title}
                >
                    <Paragraph>
                        The Primary Destructive Button uses the{' '}
                        <strong>flat</strong> button style. Colors are generated
                        from the <strong>Destructive Color</strong> design token
                        and its variants by default.
                    </Paragraph>
                    <StorySection>
                        <SBDesignTokensTable data={restingStateTokens} />
                    </StorySection>
                    <StorySection>
                        <SectionTitle headingLvl={4}>Active State</SectionTitle>
                        <SBDesignTokensTable data={activeStateTokens} />
                    </StorySection>
                    <StorySection>
                        <SectionTitle headingLvl={4}>Hover State</SectionTitle>
                        <SBDesignTokensTable data={hoverStateTokens} />
                    </StorySection>
                    <StorySection>
                        <SectionTitle headingLvl={4}>Focus State</SectionTitle>
                        <SBDesignTokensTable data={focusStateTokens} />
                    </StorySection>
                </CollapsibleSection>
            </StorySection>
        );
    };

    renderSecondaryDestructiveButton = () => {
        const {
            restingStateTokens,
            activeStateTokens,
            hoverStateTokens,
            focusStateTokens,
        } = this.getSecondaryDestructiveBtnTokenData();

        return (
            <StorySection>
                <SectionTitle headingLvl={3}>
                    Secondary Destructive Button
                </SectionTitle>
                <ComponentPreviewWithCodeBlock
                    contextCls={`${this.baseCls}__examples-preview`}
                    codeString={secondaryDestructiveBtnCodeStr}
                >
                    <Button
                        text="Secondary Destructive Button"
                        variant={SECONDARY_DESTRUCTIVE}
                    />
                </ComponentPreviewWithCodeBlock>
                <Paragraph>
                    Use when you have a seondary action that is destructive in
                    nature.
                </Paragraph>
                <CollapsibleSection
                    triggerContent={locale.shared.designTokens.title}
                >
                    <Paragraph>
                        The Secondary Destructive Button uses the{' '}
                        <strong>ghost</strong> button style. Colors are
                        generated from the <strong>Destructive Color</strong>{' '}
                        design token and its variants by default.
                    </Paragraph>
                    <StorySection>
                        <SBDesignTokensTable data={restingStateTokens} />
                    </StorySection>
                    <StorySection>
                        <SectionTitle headingLvl={4}>Active State</SectionTitle>
                        <SBDesignTokensTable data={activeStateTokens} />
                    </StorySection>
                    <StorySection>
                        <SectionTitle headingLvl={4}>Hover State</SectionTitle>
                        <SBDesignTokensTable data={hoverStateTokens} />
                    </StorySection>
                    <StorySection>
                        <SectionTitle headingLvl={4}>Focus State</SectionTitle>
                        <SBDesignTokensTable data={focusStateTokens} />
                    </StorySection>
                </CollapsibleSection>
            </StorySection>
        );
    };

    renderingAnIcon = () => {
        return (
            <StorySection>
                <SectionTitle headingLvl={3}>
                    {
                        locale.stories.components.buttons.button.sectionTitles
                            .renderingAnIcon
                    }
                </SectionTitle>
                <ComponentPreviewWithCodeBlock
                    contextCls={`${this.baseCls}__examples-preview`}
                    codeString={renderingBtnIconExampleCodeStr}
                >
                    <Button
                        text="Button Text"
                        variant={PRIMARY}
                        renderIcon={this.renderCirclePlusIcon}
                    />
                </ComponentPreviewWithCodeBlock>
            </StorySection>
        );
    };

    renderingCustomBusyIcon = () => {
        return (
            <StorySection>
                <SectionTitle headingLvl={3}>
                    {
                        locale.stories.components.buttons.button.sectionTitles
                            .renderingCustomBusyIcon
                    }
                </SectionTitle>
                <ComponentPreviewWithCodeBlock
                    contextCls={`${this.baseCls}__examples-preview`}
                    codeString={renderingBtnBusyIconExampleCodeStr}
                >
                    <Button
                        contextCls={`${this.baseCls}__custom-busy-icon-demo`}
                        text="Button Text"
                        variant={PRIMARY}
                        renderBusyIcon={this.renderCircleDashIcon}
                        isBusy
                    />
                </ComponentPreviewWithCodeBlock>
                <CalloutBannerInfo
                    title="Note"
                    msg={`The spinning animation is not supplied with a custom busy icon. ${locale.designSystemName} makes no assumptions about the animation that works best for your icon, so you must supply your own when using this approach.`}
                />
            </StorySection>
        );
    };

    renderingCustomBtnContent = () => {
        const calloutBannerCls = 'bankai-callout-banner';

        return (
            <StorySection>
                <SectionTitle headingLvl={3}>
                    {
                        locale.stories.components.buttons.button.sectionTitles
                            .renderCustomBtnContent
                    }
                </SectionTitle>
                <StorySection>
                    <ComponentPreviewWithCodeBlock
                        contextCls={`${this.baseCls}__examples-preview`}
                        codeString={renderingBtnCustomContentExampleCodeStr}
                    >
                        <Button variant={SECONDARY}>
                            <ButtonText>(∩^o^)⊃━☆゜.* Magic!</ButtonText>{' '}
                            <ButtonIcon renderIcon={this.renderAndroidIcon} />
                        </Button>
                    </ComponentPreviewWithCodeBlock>
                    <CalloutBannerInfo title="Note">
                        <p className={`${calloutBannerCls}__msg`}>
                            When rendering custom content as children inside the
                            button, both the <strong>text</strong> and{' '}
                            <strong>renderIcon</strong> props are ignored.
                        </p>
                        <p className={`${calloutBannerCls}__msg`}>
                            <strong>ButtonText</strong> and{' '}
                            <strong>ButtonIcon</strong> are provided to help you
                            reproduce the same DOM structure used by the
                            defaults to preserve initial styling when defining
                            custom content.
                        </p>
                    </CalloutBannerInfo>
                </StorySection>
            </StorySection>
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

    getDefaultBtnTokenData = () => {
        const { isDarkMode } = this.state;

        return getDefaultBtnTokenData(isDarkMode);
    };

    getPrimaryBtnTokenData = () => {
        const { isDarkMode } = this.state;

        return getPrimaryBtnTokenData(isDarkMode);
    };

    getSecondaryBtnTokenData = () => {
        const { isDarkMode } = this.state;

        return getSecondaryBtnTokenData(isDarkMode);
    };

    getPrimaryDestructiveBtnTokenData = () => {
        const { isDarkMode } = this.state;

        return getPrimaryBtnTokenData(isDarkMode, true);
    };

    getSecondaryDestructiveBtnTokenData = () => {
        const { isDarkMode } = this.state;

        return getSecondaryBtnTokenData(isDarkMode, true);
    };

    baseCls = 'bankai-sb-guide-button';
}

export default GuideButton;
