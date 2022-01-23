import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { getThemeCSS } from '@epr0t0type/bankai-lib-theme-utils';
import {
    Tabs,
    TabPanelContentComposer,
    VARIANTS,
} from '@epr0t0type/bankai-ui-tabs';
import DocsTabPanelContainer from './DocsTabPanelContainer';

// Styles
import './styles/docs-tabs.scss';

const { PILL } = VARIANTS;
const ComposedPanelContent = TabPanelContentComposer(DocsTabPanelContainer);

class DocsTabs extends PureComponent {
    static defaultProps = {
        tabs: [],
    };

    static propTypes = {
        initialActiveTabId: PropTypes.string,
        tabs: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.string,
                text: PropTypes.string,
                renderIcon: PropTypes.func,
                doc: PropTypes.element,
            }),
        ),
    };

    constructor(...args) {
        super(...args);
        const { initialActiveTabId: activeTabId } = this.props;

        this.state = {
            activeTabId,
            isDarkMode: this.getIsDarkMode(),
        };
    }

    render() {
        const { tabs } = this.props;
        const { activeTabId } = this.state;
        const baseCls = 'bankai-sb-docs-tabs';
        const theme = this.getTheme();
        // console.log('props: ', props);

        return (
            <div className={baseCls}>
                <Helmet>
                    <style>{theme}</style>
                </Helmet>
                <Tabs
                    activeTabId={activeTabId}
                    onChange={this.handleTabChange}
                    variant={PILL}
                >
                    {tabs.map((tab) => {
                        const { doc, id, ...rest } = tab;
                        const isActive = id === activeTabId;

                        return (
                            <ComposedPanelContent
                                tabProps={{
                                    ...rest,
                                    id,
                                    isActive,
                                }}
                                key={id}
                            >
                                {doc}
                            </ComposedPanelContent>
                        );
                    })}
                </Tabs>
            </div>
        );
    }

    componentDidMount() {
        this.classChangeObserver = new MutationObserver(
            this.handleMutationChange,
        );
        this.classChangeObserver.observe(this.getHMTLDOMEl(), {
            attributes: true,
        });
    }

    componentWillUnmount() {
        this.classChangeObserver.disconnect();
    }

    handleTabChange = (activeTabId) => {
        this.setState({ activeTabId });
    };

    handleMutationChange = (mutationList = []) => {
        const hasClassChange =
            mutationList.findIndex(
                (mutation) => mutation.attributeName === 'class',
            ) > -1;

        if (hasClassChange) {
            const isDarkMode = this.getIsDarkMode();

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

        return getThemeCSS({}, { isDarkMode });
    };
}

export default DocsTabs;
