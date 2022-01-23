import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const DocsTabPanelContainer = (props) => {
    const { children, contextCls } = props;

    return (
        <div className={cx('bankai-sb-docs-tab-panel-container', contextCls)}>
            {children}
        </div>
    );
};

DocsTabPanelContainer.defaultProps = {};

DocsTabPanelContainer.propTypes = {
    contextCls: PropTypes.string,
};

export default DocsTabPanelContainer;
