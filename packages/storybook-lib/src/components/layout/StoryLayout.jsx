import { PureComponent } from 'react';
import cx from 'classnames';
import {
    genCSSVars,
    genDesignTokens,
} from '@driponfleek/bankai-lib-theme-utils';
import { Heading } from '@driponfleek/bankai-ui-typography';
import { Helmet } from 'react-helmet';
import PackageBadges from '../badges/PackageBadges';

// Const
import { SB_BASE_CLS_PREFIX } from '../../const/baseClsConst';

// Utils
import { genSBBaseCls } from '../../utils/storiesConfigUtils';

// Themes
import darkTheme from '../../themes/dark-theme.json';
import lightTheme from '../../themes/light-theme.json';

// Styles
import './styles/story-layout.scss';

const themeData = {
    // 'core.color.neutral.seed': '#424b5a',
    // 'semantic.color.affirmative': '#3c7b3f',
};

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
/**
 * @param {Object} props
 * @param {string} [props.contextCls] - Additional CSS class name(s) to apply to the root element
 * @param {string} [props.title] - Page title rendered as an h1 heading
 * @param {string} [props.pkgVer] - Package version string passed to PackageBadges
 * @param {string} [props.pkgVerAltText] - Alt text for the package version badge
 * @param {string|Function|React.ReactElement} [props.subTitle] - Subtitle displayed beneath the page title
 * @param {Function} [props.onColorSchemeChange] - Callback invoked with the isDarkMode boolean when the color scheme changes
 */
// TODO: Write this as functional component
class StoryLayout extends PureComponent {
    static defaultProps = {
        onColorSchemeChange: () => Promise.resolve(),
    };

    constructor(...args) {
        super(...args);

        this.state = {
            isDarkMode: this.getIsDarkMode(),
        };
    }

    render() {
        const { title, subTitle, children, pkgVer, pkgVerAltText, contextCls } =
            this.props;
        const { isDarkMode } = this.state;
        const theme = this.getTheme();
        const modCls = {
            [`${genSBBaseCls()}-dark`]: isDarkMode,
        };

        return (
            <div className={cx(this.baseCls, modCls, contextCls)}>
                <div className={`${this.baseCls}__inner`}>
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
                            <span
                                className={`${this.baseCls}__header-sub-title`}
                            >
                                {subTitle}
                            </span>
                        )}
                        {pkgVer && (
                            <PackageBadges
                                contextCls={`${this.baseCls}__package-badges`}
                                altText={pkgVerAltText}
                                version={pkgVer}
                            />
                        )}
                    </div>
                    {children && (
                        <div className={`${this.baseCls}__content`}>
                            {children}
                        </div>
                    )}
                </div>
            </div>
        );
    }

    componentDidUpdate(prevProps, prevState) {
        const { isDarkMode } = this.state;

        if (isDarkMode !== prevState.isDarkMode) {
            genDesignTokens(themeData, { isDarkMode, variantsStep: 1 });
        }
    }

    componentDidMount() {
        const { isDarkMode } = this.state;
        this.classChangeObserver = new MutationObserver(
            this.handleMutationChange,
        );
        this.classChangeObserver.observe(this.getHMTLDOMEl(), {
            attributes: true,
        });
        genDesignTokens(themeData, { isDarkMode, variantsStep: 1 });
    }

    componentWillUnmount() {
        this.classChangeObserver.disconnect();

        if (this.cssMatchMedia) {
            this.cssMatchMedia.removeEventListener(
                'change',
                this.handleColorSchemeChange,
            );
        }
    }

    handleMutationChange = (mutationList = []) => {
        const { onColorSchemeChange } = this.props;
        const hasClassChange =
            mutationList.findIndex(
                (mutation) => mutation.attributeName === 'class',
            ) > -1;

        if (hasClassChange) {
            const isDarkMode = this.getIsDarkMode();
            onColorSchemeChange(isDarkMode);

            this.setState({ isDarkMode });
        }
    };

    getHMTLDOMEl = () => document.getElementsByTagName('html')[0];

    getIsDarkMode = () => {
        const htmlDOM = this.getHMTLDOMEl();

        return htmlDOM.classList.contains(`${SB_BASE_CLS_PREFIX}-dark`);
    };

    getTheme = () => {
        const { isDarkMode } = this.state;
        const darkThemeCSS = genCSSVars(darkTheme);
        const lightThemeCSS = genCSSVars(lightTheme);

        return isDarkMode ? darkThemeCSS : lightThemeCSS;
    };

    baseCls = `${SB_BASE_CLS_PREFIX}layout`;
}

export default StoryLayout;
