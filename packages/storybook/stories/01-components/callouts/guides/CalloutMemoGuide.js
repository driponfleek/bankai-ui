import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { CalloutMemo, VARIANTS } from '@epr0t0type/bankai-ui-callouts';
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
import { getSanatizedStoryProps } from '../../../../utils/storyLayoutPropsUtils';

// Code Strings
// import { examplesCodeStr } from './codeStr/codeStrComponent';

// Styles
import './styles/callout-memo-guide.scss';

const { bankaiUI: locale } = strings;
const { DEFAULT, AFFIRMATIVE, CAUTIONARY, ERROR, INFO } = VARIANTS;

class CalloutMemoGuide extends PureComponent {
    static defaultProps = {
        variant: DEFAULT,
    };

    static propTypes = {
        contextCls: PropTypes.string,
        title: PropTypes.string,
        variant: PropTypes.string,
        msg: PropTypes.string,
        renderIcon: PropTypes.func,
    };

    static displayName = locale.stories.components.callouts.calloutMemo.title;

    render() {
        return (
            <StoryLayout
                {...getSanatizedStoryProps(this.props, false)}
                title={locale.stories.components.callouts.calloutMemo.title}
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
                    <CalloutMemo
                        {...getSanatizedStoryProps(props)}
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
                    <CalloutMemo
                        title="Default Callout Memo"
                        msg={msg}
                        renderIcon={this.renderCalloutIcon()}
                    />
                    <CalloutMemo
                        title="Affirmative Callout Memo"
                        msg={msg}
                        variant={AFFIRMATIVE}
                        renderIcon={this.renderCalloutIcon(AFFIRMATIVE)}
                    />
                    <CalloutMemo
                        title="Cautionary Callout Memo"
                        msg={msg}
                        variant={CAUTIONARY}
                        renderIcon={this.renderCalloutIcon(CAUTIONARY)}
                    />
                    <CalloutMemo
                        title="Error Callout Memo"
                        msg={msg}
                        variant={ERROR}
                        renderIcon={this.renderCalloutIcon(ERROR)}
                    />
                    <CalloutMemo
                        title="Info Callout Memo"
                        msg={msg}
                        variant={INFO}
                        renderIcon={this.renderCalloutIcon(INFO)}
                    />
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

    renderCalloutIcon = (VARIANT) => (iconCls) => {
        let Icon;

        switch (VARIANT) {
            case AFFIRMATIVE:
                Icon = BankaiCheck;
                break;
            case CAUTIONARY:
            case ERROR:
                Icon = BankaiTriangleAlert;
                break;
            case INFO:
                Icon = BankaiCircleInfo;
                break;
            default:
                Icon = BankaiCloud;
                break;
        }

        return <Icon contextCls={iconCls} />;
    };

    baseCls = 'bankai-sb-callout-memo-guide';
}

export default CalloutMemoGuide;
