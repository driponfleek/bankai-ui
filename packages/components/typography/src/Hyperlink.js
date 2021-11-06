import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

// Styles
import './styles/hyperlink.scss';

const Hyperlink = (props) => {
    const {
        href,
        shouldOpenInNewWindow,
        contextCls,
        children,
        ...rest
    } = props;
    const linkProps = {
        ...rest,
        href,
        ...(shouldOpenInNewWindow && {
            target: '_blank',
            rel: 'noopener noreferrer',
        }),
    };

    return (
        <a {...linkProps} className={cx('bankai-hyperlink', contextCls)}>
            {children}
        </a>
    );
};

Hyperlink.defaultProps = {
    shouldOpenInNewWindow: false,
};

Hyperlink.propTypes = {
    contextCls: PropTypes.string,
    href: PropTypes.string.isRequired,
    shouldOpenInNewWindow: PropTypes.bool,
};

export default Hyperlink;
