import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import {
    FormFieldComposer,
    ToggleSwitch,
    FORM_FIELD_COMP_VARIANTS,
} from '@epr0t0type/bankai-ui-form-elements';
import { getThemeCSS } from '@epr0t0type/bankai-lib-theme-utils';
// import strings from '../../i18n/strings.json';

// const { bankaiUI: locale } = strings;
const ComposedToggleSwitch = FormFieldComposer(ToggleSwitch);

class DarkModeToggleSwitch extends PureComponent {
    static defaultProps = {
        isDarkMode: false,
        shouldInjectCSS: true,
        onChange: () => Promise.resolve(),
    };

    static propTypes = {
        isDarkMode: PropTypes.bool,
        shouldInjectCSS: PropTypes.bool,
        onChange: PropTypes.func,
    };

    render() {
        const { isDarkMode, shouldInjectCSS, onChange } = this.props;
        const themeConfig = { isDarkMode };
        const theme = getThemeCSS({}, themeConfig);

        return (
            <Fragment>
                {shouldInjectCSS && (
                    <Helmet>
                        <style>{theme}</style>
                    </Helmet>
                )}
                <ComposedToggleSwitch
                    labelProps={{
                        labelText: 'Dark Mode?',
                    }}
                    isChecked={isDarkMode}
                    variant={FORM_FIELD_COMP_VARIANTS.INLINE_RIGHT}
                    onChange={onChange}
                />
            </Fragment>
        );
    }
}

export default DarkModeToggleSwitch;
