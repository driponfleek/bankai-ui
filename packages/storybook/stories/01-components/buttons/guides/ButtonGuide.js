import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Button, VARIANTS } from '@epr0t0type/bankai-ui-buttons';
import StoryLayout from '../../../../sb-components/layout/StoryLayout';
import StorySection from '../../../../sb-components/layout/StorySection';
import SectionTitle from '../../../../sb-components/content/SectionTitle';
import ComponentPreview from '../../../../sb-components/content/ComponentPreview';
import ComponentPreviewWithCodeBlock from '../../../../sb-components/content/ComponentPreviewWithCodeBlock';
import Paragraph from '../../../../sb-components/content/Paragraph';
import SBDesignTokensTable from '../../../../sb-components/tables/SBDesignTokensTable';
import strings from '../../../../i18n/strings.json';

// Utils
import { getComponentsTitle } from '../../../../utils/storiesConfig';
import {
    getColorCanvasToken,
    getColorTextToken,
    getBtnBorderRadius,
    getPrimaryBtnTokenData,
    getPrimaryDestructiveBtnTokenData,
} from '../../../../utils/themeTokenUtils';

// Code Strings
import {
    defaultBtnCodeStr,
    primaryBtnCodeStr,
    secondaryBtnCodeStr,
    primaryDestructiveBtnCodeStr,
    secondaryDestructiveBtnCodeStr,
} from './codeStr/codeStrBtn';

// Styles
import './styles/button-guide.scss';

const { PRIMARY, PRIMARY_DESTRUCTIVE, SECONDARY, SECONDARY_DESTRUCTIVE } =
    VARIANTS;

const { bankaiUI: locale } = strings;

class ButtonGuide extends PureComponent {
    static defaultProps = {
        type: 'button',
        isBusy: false,
        isDisabled: false,
        onClick: () => Promise.resolve(),
    };

    static propTypes = {
        contextCls: PropTypes.string,
        iconCls: PropTypes.string,
        text: PropTypes.string,
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
                title={locale.stories.components.buttons.button.title}
                subTitle={getComponentsTitle(
                    locale.stories.components.buttons.categoryTitle,
                )}
                onColorSchemeChange={this.handleColorSchemeChange}
            >
                {this.renderDemo()}
                {this.renderDefaultButton()}
                {this.renderPrimaryButton()}
                {this.renderSecondaryButton()}
                {this.renderPrimaryDestructiveButton()}
                {this.renderSecondaryDestructiveButton()}
            </StoryLayout>
        );
    }

    renderDemo() {
        const { props } = this;

        return (
            <StorySection>
                <ComponentPreview shouldCheckA11Y>
                    <Button {...props} />
                </ComponentPreview>
                <Paragraph>
                    Buttons allow users to take action in your UI. Well-formed
                    buttons help users understand what action will be performed
                    when they are interacted with.
                </Paragraph>
            </StorySection>
        );
    }

    renderDesignTokenHeading = () => {
        return <SectionTitle headingLvl={3}>Design Tokens</SectionTitle>;
    };

    renderDefaultButton = () => {
        return (
            <StorySection>
                <SectionTitle>Default Button</SectionTitle>
                <StorySection>
                    <ComponentPreviewWithCodeBlock
                        contextCls={`${this.baseCls}__examples-preview`}
                        codeString={defaultBtnCodeStr}
                    >
                        <Button text="Default Button" />
                    </ComponentPreviewWithCodeBlock>
                    <Paragraph>
                        A starter button for creating new button types.
                    </Paragraph>
                </StorySection>
                <StorySection>
                    {this.renderDesignTokenHeading()}
                    {this.renderDesignTokensTable(
                        this.getDefaultBtnTokenData(),
                    )}
                </StorySection>
            </StorySection>
        );
    };

    renderPrimaryButton = () => {
        this.getPrimaryBtnTokenData();

        return (
            <StorySection>
                <SectionTitle>Primary Button</SectionTitle>
                <StorySection>
                    <ComponentPreviewWithCodeBlock
                        contextCls={`${this.baseCls}__examples-preview`}
                        codeString={primaryBtnCodeStr}
                    >
                        <Button text="Primary Button" variant={PRIMARY} />
                    </ComponentPreviewWithCodeBlock>
                    <Paragraph>
                        Use when you want the action to be the primary one a
                        user takes in your experience. This should be used
                        sparingly so that it does not compete with other actions
                        of less importance.
                    </Paragraph>
                </StorySection>
                <StorySection>
                    {this.renderDesignTokenHeading()}
                    <Paragraph>
                        Colors are generated from the{' '}
                        <strong>Primary Color</strong> design token and its
                        variants.
                    </Paragraph>
                    {this.renderDesignTokensTable(
                        this.getPrimaryBtnTokenData(),
                    )}
                </StorySection>
            </StorySection>
        );
    };

    renderSecondaryButton = () => {
        return (
            <StorySection>
                <SectionTitle>Secondary Button</SectionTitle>
                <ComponentPreviewWithCodeBlock
                    contextCls={`${this.baseCls}__examples-preview`}
                    codeString={secondaryBtnCodeStr}
                >
                    <Button text="Secondary Button" variant={SECONDARY} />
                </ComponentPreviewWithCodeBlock>
            </StorySection>
        );
    };

    renderPrimaryDestructiveButton = () => {
        return (
            <StorySection>
                <SectionTitle>Primary Destructive Button</SectionTitle>
                <StorySection>
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
                        Use when you want the action to be the primary one a
                        user takes in your experience and it is destructive in
                        nature. This should be used sparingly so that it does
                        not compete with other actions of less importance.
                    </Paragraph>
                </StorySection>
                <StorySection>
                    {this.renderDesignTokenHeading()}
                    <Paragraph>
                        Colors are generated from the{' '}
                        <strong>Destructive Color</strong> design token and its
                        variants.
                    </Paragraph>
                    {this.renderDesignTokensTable(
                        this.getPrimaryDestructiveBtnTokenData(),
                    )}
                </StorySection>
            </StorySection>
        );
    };

    renderSecondaryDestructiveButton = () => {
        return (
            <StorySection>
                <SectionTitle>Secondary Destructive Button</SectionTitle>
                <ComponentPreviewWithCodeBlock
                    contextCls={`${this.baseCls}__examples-preview`}
                    codeString={secondaryDestructiveBtnCodeStr}
                >
                    <Button
                        text="Secondary Destructive Button"
                        variant={SECONDARY_DESTRUCTIVE}
                    />
                </ComponentPreviewWithCodeBlock>
            </StorySection>
        );
    };

    renderDesignTokensTable = (data) => {
        return <SBDesignTokensTable data={data} />;
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
        const canvasToken = getColorCanvasToken(this.getIsDarkMode());
        const textToken = getColorTextToken(this.getIsDarkMode());

        return [
            {
                ...canvasToken,
                name: 'Background Color (Resting State)',
            },
            {
                ...textToken,
                name: 'Text Color (Resting State)',
                isAlt: true,
            },
            getBtnBorderRadius(),
        ];
    };

    getPrimaryBtnTokenData = () => {
        return getPrimaryBtnTokenData(this.getIsDarkMode());
    };

    getPrimaryDestructiveBtnTokenData = () => {
        return getPrimaryDestructiveBtnTokenData(this.getIsDarkMode());
    };

    baseCls = 'bankai-sb-buttons-guide';
}

export default ButtonGuide;
