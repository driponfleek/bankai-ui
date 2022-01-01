import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Helmet } from 'react-helmet';
import { Heading } from '@epr0t0type/bankai-ui-typography';
import {
    getThemeCSS,
    // setUserTheme,
    bankaiLightTheme,
    // bankaiDarkTheme,
    // getThemeTokens,
    // generateCSSVars,
    // formatThemeColorValuesForWeb,
} from '@epr0t0type/bankai-lib-theme-utils';
// import Paragraph from '../content/Paragraph';

// Styles
import './styles/story-layout.scss';

// ==================================================================
// This component represents a page in storybook. You should always
// provide a Title for your pages. When using this to demo
// a component, your title should be the Name of the component
// you are demoing, and your subtitle should be the name of the Story
// you have the component in. For example, if you are demoing
// a checkbox, then the title and subtitle props would be:
// title = Checkbox
// subtitle = Components | Form Elements
// For other pages, the subtitle is optional. Use as needed.
// ==================================================================
class StoryLayout extends PureComponent {
    static defaultProps = {
        isRoundedUI: true,
        shouldAutoCorrectColors: true,
    };

    static propTypes = {
        contextCls: PropTypes.string,
        title: PropTypes.string,
        subTitle: PropTypes.string,
        isRoundedUI: PropTypes.bool,
        shouldAutoCorrectColors: PropTypes.bool,
        darkThemeData: PropTypes.object,
        lightThemeData: PropTypes.object,
    };

    constructor(...args) {
        super(...args);
        this.cssMatchMedia = window.matchMedia('(prefers-color-scheme: dark)');

        this.cssMatchMedia.addEventListener(
            'change',
            this.handleColorSchemeChange,
        );

        this.state = {
            isDarkMode: this.cssMatchMedia.matches,
        };
    }

    render() {
        const { title, subTitle, children, contextCls } = this.props;
        const { isDarkMode } = this.state;
        const theme = this.getTheme();
        const modCls = {
            'bankai-sb--dark': isDarkMode,
        };

        console.groupCollapsed(
            'Core Theme Data (Does not represent all tokens)',
        );
        console.table(bankaiLightTheme);
        console.groupEnd();

        return (
            <div className={cx(this.baseCls, modCls, contextCls)}>
                <Helmet>
                    <style>{theme}</style>
                </Helmet>
                <div className={`${this.baseCls}__header`}>
                    <Heading
                        contextCls={`${this.baseCls}__header-title`}
                        headingLvl={1}
                    >
                        {title}
                    </Heading>
                    {subTitle && (
                        <span className={`${this.baseCls}__header-subtitle`}>
                            {subTitle}
                        </span>
                    )}
                </div>
                {children && (
                    <div className={`${this.baseCls}__content`}>{children}</div>
                )}
            </div>
        );
    }

    componentWillUnmount() {
        if (this.cssMatchMedia) {
            this.cssMatchMedia.removeEventListener(
                'change',
                this.handleColorSchemeChange,
            );
        }
    }

    handleColorSchemeChange = (e) => {
        const { isDarkMode } = this.state;

        if (e && e.matches && !isDarkMode) {
            this.setState({
                isDarkMode: true,
            });
        }

        if (e && !e.matches && isDarkMode) {
            this.setState({
                isDarkMode: false,
            });
        }
    };

    getTheme = () => {
        const {
            darkThemeData,
            lightThemeData,
            isRoundedUI,
            shouldAutoCorrectColors,
        } = this.props;
        const { isDarkMode } = this.state;
        const themeConfig = {
            isDarkMode,
            isRoundedUI,
            shouldAutoCorrectColors,
        };
        const darkTheme = getThemeCSS({ ...darkThemeData }, themeConfig);
        const lightTheme = getThemeCSS({ ...lightThemeData }, themeConfig);

        return isDarkMode ? darkTheme : lightTheme;
    };

    baseCls = 'bankai-sb-layout';
}

export default StoryLayout;
