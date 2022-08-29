import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { CalloutBanner, VARIANTS } from '@epr0t0type/bankai-ui-callouts';
import packageJSON from '@epr0t0type/bankai-ui-callouts/package.json';
import {
    BankaiCheck,
    BankaiCircleInfo,
    BankaiTriangleAlert,
    BankaiCloud,
} from '@epr0t0type/bankai-ui-icons';
import StoryLayout from '../../../../sb-components/layout/StoryLayout';
import StorySection from '../../../../sb-components/layout/StorySection';
import SectionTitle from '../../../../sb-components/content/SectionTitle';
import ComponentPreview from '../../../../sb-components/content/ComponentPreview';
// import ComponentPreviewWithCodeBlock from '../../../../sb-components/content/ComponentPreviewWithCodeBlock';
import Paragraph from '../../../../sb-components/content/Paragraph';
import strings from '../../../../i18n/strings.json';

// Utils
import { getComponentsTitle } from '../../../../utils/storiesConfig';

// Code Strings
// import { examplesCodeStr } from './codeStr/codeStrComponent';

// Styles
import './styles/guide-callout-banner.scss';

const { bankaiUI: locale } = strings;
const { DEFAULT, AFFIRMATIVE, CAUTIONARY, ERROR, INFO } = VARIANTS;

class GuideCalloutBanner extends PureComponent {
    static defaultProps = {
        variant: DEFAULT,
    };

    static propTypes = {
        contextCls: PropTypes.string,
        msg: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
        title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
        variant: PropTypes.string,
        renderIcon: PropTypes.func,
    };

    static displayName = locale.stories.components.callouts.calloutBanner.title;

    render() {
        return (
            <StoryLayout
                contextCls={this.baseCls}
                packageVer={packageJSON.version}
                title={locale.stories.components.callouts.calloutBanner.title}
                subTitle={getComponentsTitle(
                    locale.stories.components.callouts.categoryTitle,
                )}
            >
                {this.renderDemo()}
                {this.renderExamples()}
            </StoryLayout>
        );
    }

    renderDemo() {
        const { props } = this;
        const { variant } = props;

        return (
            <StorySection>
                <ComponentPreview shouldCheckA11Y>
                    <CalloutBanner
                        {...props}
                        renderIcon={this.renderCalloutIcon(variant)}
                    />
                </ComponentPreview>
                <Paragraph>Coming Soon.</Paragraph>
            </StorySection>
        );
    }

    renderExamples = () => {
        const msg = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';

        return (
            <StorySection>
                <SectionTitle>Examples</SectionTitle>
                <ComponentPreview>
                    <CalloutBanner
                        title="Default Callout Banner"
                        msg={msg}
                        renderIcon={this.renderCalloutIcon()}
                    />
                    <CalloutBanner
                        title="Affirmative Callout Banner"
                        msg={msg}
                        variant={AFFIRMATIVE}
                        renderIcon={this.renderCalloutIcon(AFFIRMATIVE)}
                    />
                    <CalloutBanner
                        title="Cautionary Callout Banner"
                        msg={msg}
                        variant={CAUTIONARY}
                        renderIcon={this.renderCalloutIcon(CAUTIONARY)}
                    />
                    <CalloutBanner
                        title="Error Callout Banner"
                        msg={msg}
                        variant={ERROR}
                        renderIcon={this.renderCalloutIcon(ERROR)}
                    />
                    <CalloutBanner
                        title="Info Callout Banner"
                        msg={msg}
                        variant={INFO}
                        renderIcon={this.renderCalloutIcon(INFO)}
                    />
                </ComponentPreview>
            </StorySection>
        );
    };

    renderCalloutIcon = (VARIANT) => {
        let iconRenderer;

        switch (VARIANT) {
            case AFFIRMATIVE:
                iconRenderer = this.renderAffirmativeCalloutBannerIcon;
                break;
            case CAUTIONARY:
            case ERROR:
                iconRenderer = this.renderCautionaryErrorCalloutBannerIcon;
                break;
            case INFO:
                iconRenderer = this.renderInfoCalloutBannerIcon;
                break;
            default:
                iconRenderer = this.renderDefaultCalloutBannerIcon;
                break;
        }

        return iconRenderer;
    };

    renderDefaultCalloutBannerIcon = (iconCls) => {
        return <BankaiCloud contextCls={iconCls} />;
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

    baseCls = 'bankai-sb-guide-callout-banner';
}

export default GuideCalloutBanner;
