import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

// Styles
import './styles/paragraph.scss';

const Paragraph = (props) => {
    const { contextCls, children } = props;
    const baseCls = 'bankai-sb-paragraph';

    return <p className={cx(baseCls, contextCls)}>{children}</p>;
};

Paragraph.defaultProps = {};

Paragraph.propTypes = {
    contextCls: PropTypes.string,
};

export default Paragraph;
