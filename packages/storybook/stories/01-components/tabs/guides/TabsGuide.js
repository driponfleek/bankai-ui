import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
    Tabs,
    TabPanelContentComposer,
    VARIANTS,
} from '@epr0t0type/bankai-ui-tabs';
import {
    BankaiCalendar,
    BankaiStorefront,
    BankaiCircleInfo,
    BankaiCart,
} from '@epr0t0type/bankai-ui-icons';
import StoryLayout from '../../../../sb-components/layout/StoryLayout';
import StorySection from '../../../../sb-components/layout/StorySection';
// import SectionTitle from '../../../../sb-components/content/SectionTitle';
import ComponentPreview from '../../../../sb-components/content/ComponentPreview';
// import ComponentPreviewWithCodeBlock from '../../../../sb-components/content/ComponentPreviewWithCodeBlock';
import Paragraph from '../../../../sb-components/content/Paragraph';
import TabPanelContent from './mock-ui/TabPanelContent';
import strings from '../../../../i18n/strings.json';

// Images
import neverGonna1 from '../../../../media/images/gifs/never-gonna-1.gif';
import neverGonna2 from '../../../../media/images/gifs/never-gonna-2.gif';
import neverGonna3 from '../../../../media/images/gifs/never-gonna-3.gif';
import noice from '../../../../media/images/gifs/noice.gif';

// Utils
import { getComponentsTitle } from '../../../../utils/storiesConfig';

// Code Strings
// import { examplesCodeStr } from './codeStr/codeStrComponent';

// Styles
import './styles/tabs-guide.scss';

const ComposedPanelContent = TabPanelContentComposer(TabPanelContent);
const { OVERLINE_SEGMENTED } = VARIANTS;
const { bankaiUI: locale } = strings;
const tab1Id = '961c2e20-a681-4054-acc1-01e75b361009';
const tab2Id = '2c3762b4-d70e-4884-a6ab-26d94c2f915c';
const tab3Id = 'f01b4d64-1518-4cf1-af01-4d1558b687ee';
const tab4Id = '14a064f8-a539-4176-852a-22dffcf80c56';

class TabsGuide extends PureComponent {
    static defaultProps = {
        variant: OVERLINE_SEGMENTED,
        hasMicrointeractions: true,
        shouldAllowLetterNavigation: false,
        onChange: () => Promise.resolve(),
    };

    static propTypes = {
        activeTabId: PropTypes.string,
        contextCls: PropTypes.string,
        variant: PropTypes.string,
        hasMicrointeractions: PropTypes.bool,
        shouldAllowLetterNavigation: PropTypes.bool,
        onChange: PropTypes.func,
        renderTab: PropTypes.func,
    };

    static displayName = locale.stories.components.tabViews.tabs.title;

    state = {
        activeDemoTabId: tab1Id,
    };

    render() {
        return (
            <StoryLayout
                contextCls={this.baseCls}
                title={locale.stories.components.tabViews.tabs.title}
                subTitle={getComponentsTitle(
                    locale.stories.components.tabViews.categoryTitle,
                )}
            >
                {this.renderDemo()}
                {/* {this.renderExamples()} */}
            </StoryLayout>
        );
    }

    renderDemo() {
        const { props } = this;
        const { activeDemoTabId } = this.state;

        return (
            <StorySection>
                <ComponentPreview shouldCheckA11Y>
                    <Tabs
                        {...props}
                        activeTabId={activeDemoTabId}
                        onChange={this.handleDemoTabChange}
                    >
                        <ComposedPanelContent
                            tabProps={{
                                id: tab1Id,
                                text: 'Tab 1',
                                renderIcon: (iconCls) => (
                                    <BankaiCalendar contextCls={iconCls} />
                                ),
                                isActive: activeDemoTabId === tab1Id,
                            }}
                        >
                            <img
                                className={`${this.baseCls}__panel-content-img`}
                                src={neverGonna1}
                                alt="NGGYU"
                            />
                        </ComposedPanelContent>
                        <ComposedPanelContent
                            tabProps={{
                                id: tab2Id,
                                text: 'Tab 2',
                                renderIcon: (iconCls) => (
                                    <BankaiCircleInfo contextCls={iconCls} />
                                ),
                                isActive: activeDemoTabId === tab2Id,
                            }}
                        >
                            <img
                                className={`${this.baseCls}__panel-content-img`}
                                src={neverGonna2}
                                alt="NGLYD"
                            />
                        </ComposedPanelContent>
                        <ComposedPanelContent
                            tabProps={{
                                id: tab3Id,
                                text: 'Tab 3',
                                renderIcon: (iconCls) => (
                                    <BankaiStorefront contextCls={iconCls} />
                                ),
                                isActive: activeDemoTabId === tab3Id,
                            }}
                        >
                            <img
                                className={`${this.baseCls}__panel-content-img`}
                                src={neverGonna3}
                                alt="NGRAADY"
                            />
                        </ComposedPanelContent>
                        <ComposedPanelContent
                            tabProps={{
                                id: tab4Id,
                                text: 'Tab 4',
                                renderIcon: (iconCls) => (
                                    <BankaiCart contextCls={iconCls} />
                                ),
                                isActive: activeDemoTabId === tab4Id,
                            }}
                        >
                            <img
                                className={`${this.baseCls}__panel-content-img`}
                                src={noice}
                                alt="NOICE"
                            />
                        </ComposedPanelContent>
                    </Tabs>
                </ComponentPreview>
                <Paragraph>Coming Soon.</Paragraph>
            </StorySection>
        );
    }

    // renderExamples = () => {
    //     return (
    //         <StorySection>
    //             <SectionTitle>Examples</SectionTitle>
    //             <ComponentPreviewWithCodeBlock
    //                 contextCls={`${this.baseCls}__examples-preview`}
    //                 codeString={examplesCodeStr}
    //             >
    //                 <Button text="Primary Button" isPrimary />
    //                 <Button text="Secondary Button" isSecondary />
    //                 <Button
    //                     text="Primary Destructive Button"
    //                     isDestructive
    //                     isPrimary
    //                 />
    //                 <Button
    //                     text="Secondary Destructive Button"
    //                     isDestructive
    //                     isSecondary
    //                 />
    //             </ComponentPreviewWithCodeBlock>
    //         </StorySection>
    //     );
    // };

    handleDemoTabChange = (activeDemoTabId) => {
        const { onChange } = this.props;

        if (onChange) {
            onChange(activeDemoTabId);
        }

        this.setState({ activeDemoTabId });
    };

    baseCls = 'bankai-sb-tabs-guide';
}

export default TabsGuide;
