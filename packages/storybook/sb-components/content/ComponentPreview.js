import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

// Styles
import './styles/component-preview.scss';

const ComponentPreview = (props) => {
    const {
        contextCls,
        children,
        shouldCheckA11Y,
        hasLightBg,
        ...rest
    } = props;
    const modCls = {
        'bankai-sb-component-preview--check-a11y': shouldCheckA11Y,
        'bankai-sb-component-preview--light-bg': hasLightBg,
    };

    return (
        <div
            {...rest}
            className={cx('bankai-sb-component-preview', modCls, contextCls)}
        >
            {children}
        </div>
    );
};

ComponentPreview.defaultProps = {
    shouldCheckA11Y: false,
    hasLightBg: false,
};

ComponentPreview.propTypes = {
    contextCls: PropTypes.string,
    shouldCheckA11Y: PropTypes.bool,
    hasLightBg: PropTypes.bool,
};

export default ComponentPreview;
