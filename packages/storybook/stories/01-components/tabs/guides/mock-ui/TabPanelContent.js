import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const TabPanelContent = (props) => {
    const { children, contextCls } = props;

    return (
        <div className={cx('bankai-sb-tabs-guide-panel-content', contextCls)}>
            {children}
        </div>
    );
};

TabPanelContent.defaultProps = {};

TabPanelContent.propTypes = {
    contextCls: PropTypes.string,
};

export default TabPanelContent;
