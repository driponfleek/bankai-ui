import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Callout } from '@epr0t0type/bankai-ui-callouts';
import { BankaiCloud } from '@epr0t0type/bankai-ui-icons';
import StoryLayout from '../../../../sb-components/layout/StoryLayout';
import StorySection from '../../../../sb-components/layout/StorySection';
// import SectionTitle from '../../../../sb-components/content/SectionTitle';
import ComponentPreview from '../../../../sb-components/content/ComponentPreview';
// import ComponentPreviewWithCodeBlock from '../../../../sb-components/content/ComponentPreviewWithCodeBlock';
import Paragraph from '../../../../sb-components/content/Paragraph';
import strings from '../../../../i18n/strings.json';

// Utils
import { getComponentsTitle } from '../../../../utils/storiesConfig';

// Code Strings
// import { examplesCodeStr } from './codeStr/codeStrComponent';

// Styles
import './styles/callout-guide.scss';

const { bankaiUI: locale } = strings;

class CalloutGuide extends PureComponent {
    static propTypes = {
        contextCls: PropTypes.string,
        title: PropTypes.string,
        msg: PropTypes.string,
        renderIcon: PropTypes.func,
    };

    static displayName = locale.stories.components.callouts.callout.title;

    render() {
        return (
            <StoryLayout
                title={locale.stories.components.callouts.callout.title}
                subTitle={getComponentsTitle(
                    locale.stories.components.callouts.categoryTitle,
                )}
            >
                {this.renderDemo()}
                {/* {this.renderExamples()} */}
            </StoryLayout>
        );
    }

    renderDemo() {
        const { props } = this;

        return (
            <StorySection>
                <ComponentPreview shouldCheckA11Y>
                    <Callout {...props} renderIcon={this.renderCalloutIcon} />
                </ComponentPreview>
                <Paragraph>Coming Soon.</Paragraph>
            </StorySection>
        );
    }

    // renderExamples = () => {
    //     const msg = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';

    //     return (
    //         <StorySection>
    //             <SectionTitle>Examples</SectionTitle>
    //             <ComponentPreview>
    //                 <CalloutMemo
    //                     title="Default Callout Memo"
    //                     msg={msg}
    //                     renderIcon={this.renderCalloutIcon()}
    //                 />
    //                 <CalloutMemo
    //                     title="Affirmative Callout Memo"
    //                     msg={msg}
    //                     variant={AFFIRMATIVE}
    //                     renderIcon={this.renderCalloutIcon(AFFIRMATIVE)}
    //                 />
    //                 <CalloutMemo
    //                     title="Cautionary Callout Memo"
    //                     msg={msg}
    //                     variant={CAUTIONARY}
    //                     renderIcon={this.renderCalloutIcon(CAUTIONARY)}
    //                 />
    //                 <CalloutMemo
    //                     title="Error Callout Memo"
    //                     msg={msg}
    //                     variant={ERROR}
    //                     renderIcon={this.renderCalloutIcon(ERROR)}
    //                 />
    //                 <CalloutMemo
    //                     title="Info Callout Memo"
    //                     msg={msg}
    //                     variant={INFO}
    //                     renderIcon={this.renderCalloutIcon(INFO)}
    //                 />
    //             </ComponentPreview>
    //             {/* <ComponentPreviewWithCodeBlock
    //                 contextCls={`${this.baseCls}__examples-preview`}
    //                 codeString={examplesCodeStr}
    //             >
    //                 <CalloutMemo />
    //             </ComponentPreviewWithCodeBlock> */}
    //         </StorySection>
    //     );
    // };

    renderCalloutIcon = (iconCls) => <BankaiCloud contextCls={iconCls} />;

    baseCls = 'bankai-sb-callout-guide';
}

export default CalloutGuide;
