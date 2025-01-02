import { useState } from 'react';
import PropTypes from 'prop-types';
import { Tabs, TabPanelContentComposer } from '@driponfleek/bankai-ui-tabs';
import {
    BankaiCalendar,
    BankaiCircleInfo,
    BankaiStorefront,
    BankaiCart,
} from '@driponfleek/bankai-ui-icons';
import {
    StorySection,
    ComponentPreview,
} from '@driponfleek/bankai-lib-storybook';
import TabPanelContent from '../components/TabPanelContent';

// Images
import neverGonna1 from '../../../../media/images/gifs/never-gonna-1.gif';
import neverGonna2 from '../../../../media/images/gifs/never-gonna-2.gif';
import neverGonna3 from '../../../../media/images/gifs/never-gonna-3.gif';
import noice from '../../../../media/images/gifs/noice.gif';

const PanelContent = TabPanelContentComposer(TabPanelContent);
const tab1Id = '961c2e20-a681-4054-acc1-01e75b361009';
const tab2Id = '2c3762b4-d70e-4884-a6ab-26d94c2f915c';
const tab3Id = 'f01b4d64-1518-4cf1-af01-4d1558b687ee';
const tab4Id = '14a064f8-a539-4176-852a-22dffcf80c56';

const SectionPlayground = (props) => {
    const { baseCls, onChange, ...rest } = props;
    const [activeTabId, setActiveTabId] = useState(tab1Id);
    const imgCls = `${baseCls}__panel-content-img`;
    const handleTabChange = (tabId) => {
        onChange(tabId);
        setActiveTabId(tabId);
    };

    return (
        <StorySection>
            <ComponentPreview shouldCheckA11Y>
                <Tabs
                    {...rest}
                    activeTabId={activeTabId}
                    onChange={handleTabChange}
                >
                    <PanelContent
                        tabProps={{
                            id: tab1Id,
                            text: 'Tab 1',
                            renderIcon: BankaiCalendar,
                            isActive: activeTabId === tab1Id,
                        }}
                    >
                        <img
                            className={imgCls}
                            src={neverGonna1}
                            alt="Never Gonna Give You Up"
                        />
                    </PanelContent>
                    <PanelContent
                        tabProps={{
                            id: tab2Id,
                            text: 'Tab 2',
                            renderIcon: BankaiCircleInfo,
                            isActive: activeTabId === tab2Id,
                        }}
                    >
                        <img
                            className={imgCls}
                            src={neverGonna2}
                            alt="Never Gonna Let You Down"
                        />
                    </PanelContent>
                    <PanelContent
                        tabProps={{
                            id: tab3Id,
                            text: 'Tab 3',
                            renderIcon: BankaiStorefront,
                            isActive: activeTabId === tab3Id,
                        }}
                    >
                        <img
                            className={imgCls}
                            src={neverGonna3}
                            alt="Never Gonna Run Around and Desert You"
                        />
                    </PanelContent>
                    <PanelContent
                        tabProps={{
                            id: tab4Id,
                            text: 'Tab 4',
                            renderIcon: BankaiCart,
                            isActive: activeTabId === tab4Id,
                        }}
                    >
                        <img className={imgCls} src={noice} alt="Noice" />
                    </PanelContent>
                </Tabs>
            </ComponentPreview>
        </StorySection>
    );
};

SectionPlayground.defaultProps = {
    onChange: () => Promise.resolve(),
};

SectionPlayground.propTypes = {
    baseCls: PropTypes.string,
    onChange: PropTypes.func,
};

export default SectionPlayground;
