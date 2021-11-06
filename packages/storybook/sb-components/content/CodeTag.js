import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

// Styles
import './styles/code-tag.scss';

const CodeTag = (props) => {
    const { contextCls, children } = props;

    return (
        <code className={cx('bankai-sb-code-tag', contextCls)}>{children}</code>
    );
};

CodeTag.propTypes = {
    contextCls: PropTypes.string,
};

export default CodeTag;
