import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Avatar } from '@epr0t0type/bankai-ui-avatars';
import packageJSON from '@epr0t0type/bankai-ui-avatars/package.json';
import { BankaiUser } from '@epr0t0type/bankai-ui-icons';
import { examplesCodeStr } from './codeStr/codeStrAvatar';
import StoryLayout from '../../../../sb-components/layout/StoryLayout';
import StorySection from '../../../../sb-components/layout/StorySection';
import SectionTitle from '../../../../sb-components/content/SectionTitle';
import ComponentPreview from '../../../../sb-components/content/ComponentPreview';
import ComponentPreviewWithCodeBlock from '../../../../sb-components/content/ComponentPreviewWithCodeBlock';
import Paragraph from '../../../../sb-components/content/Paragraph';
import CollapsibleDesignTokensSection from '../../../../sb-components/content/CollapsibleDesignTokensSection';
import strings from '../../../../i18n/strings.json';

// Utils
import { getComponentsTitle } from '../../../../utils/storiesConfig';
import { getAvatarTokenData } from '../../../../utils/designTokens/avatarTokenUtils';

// Media
import avatar from '../../../../media/images/avatars/avatar07.jpg';

// Styles
import './styles/avatar-guide.scss';

const { bankaiUI: locale } = strings;

class GuideAvatar extends PureComponent {
    static defaultProps = {
        hasBorder: true,
    };

    static propTypes = {
        contextCls: PropTypes.string,
        imgURL: PropTypes.string,
        text: PropTypes.string,
        hasBorder: PropTypes.bool,
        renderIcon: PropTypes.func,
    };

    static displayName = locale.stories.components.avatars.avatar.title;

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
                title={locale.stories.components.avatars.avatar.title}
                subTitle={getComponentsTitle(
                    locale.stories.components.avatars.categoryTitle,
                )}
                onColorSchemeChange={this.handleColorSchemeChange}
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
                    <Avatar {...props} />
                </ComponentPreview>
                <Paragraph>
                    Avatars are great options for representing users and
                    entities in your applications.
                </Paragraph>
            </StorySection>
        );
    }

    renderExamples = () => {
        const { isDarkMode } = this.state;

        return (
            <StorySection>
                <SectionTitle>Usage</SectionTitle>
                <ComponentPreviewWithCodeBlock
                    contextCls={`${this.baseCls}__examples-preview`}
                    codeString={examplesCodeStr}
                >
                    <Avatar imgURL={avatar} />
                    <Avatar>DY</Avatar>
                    <Avatar>{this.renderIcon()}</Avatar>
                </ComponentPreviewWithCodeBlock>
                <CollapsibleDesignTokensSection
                    tokens={getAvatarTokenData(isDarkMode)}
                />
            </StorySection>
        );
    };

    renderIcon = () => <BankaiUser />;

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

    baseCls = 'bankai-sb-avatar-guide';
}

export default GuideAvatar;
