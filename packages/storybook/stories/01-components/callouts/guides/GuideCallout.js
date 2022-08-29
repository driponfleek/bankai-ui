import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Callout } from '@epr0t0type/bankai-ui-callouts';
import packageJSON from '@epr0t0type/bankai-ui-callouts/package.json';
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
import './styles/guide-callout.scss';

const { bankaiUI: locale } = strings;

class GuideCallout extends PureComponent {
    static defaultProps = {
        headingLvl: 2,
    };

    static propTypes = {
        contextCls: PropTypes.string,
        msg: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
        title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
        variant: PropTypes.string,
        headingLvl: PropTypes.number,
        renderIcon: PropTypes.func,
    };

    static displayName = locale.stories.components.callouts.callout.title;

    render() {
        return (
            <StoryLayout
                contextCls={this.baseCls}
                packageVer={packageJSON.version}
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
        const { variant } = this.props;
        const { props } = this;

        return (
            <StorySection>
                <ComponentPreview shouldCheckA11Y>
                    <Callout
                        {...props}
                        renderIcon={
                            !variant ? this.renderCalloutIcon : undefined
                        }
                    />
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
    //                     title="Default Callout Banner"
    //                     msg={msg}
    //                     renderIcon={this.renderCalloutIcon()}
    //                 />
    //                 <CalloutMemo
    //                     title="Affirmative Callout Banner"
    //                     msg={msg}
    //                     variant={AFFIRMATIVE}
    //                     renderIcon={this.renderCalloutIcon(AFFIRMATIVE)}
    //                 />
    //                 <CalloutMemo
    //                     title="Cautionary Callout Banner"
    //                     msg={msg}
    //                     variant={CAUTIONARY}
    //                     renderIcon={this.renderCalloutIcon(CAUTIONARY)}
    //                 />
    //                 <CalloutMemo
    //                     title="Error Callout Banner"
    //                     msg={msg}
    //                     variant={ERROR}
    //                     renderIcon={this.renderCalloutIcon(ERROR)}
    //                 />
    //                 <CalloutMemo
    //                     title="Info Callout Banner"
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

export default GuideCallout;
