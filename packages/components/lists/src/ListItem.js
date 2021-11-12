import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

// Styles
import './styles/list-item.scss';

const ListItem = (props) => {
    const { contextCls, meta, text, children } = props;
    const baseCls = 'bankai-list-item';

    return (
        <div className={cx(baseCls, contextCls)}>
            <div className={`${baseCls}__inner`}>
                {!children && (
                    <Fragment>
                        {text && <p className={`${baseCls}__text`}>{text}</p>}
                        {meta && <p className={`${baseCls}__meta`}>{meta}</p>}
                    </Fragment>
                )}
                {children}
            </div>
        </div>
    );
};

ListItem.propTypes = {
    contextCls: PropTypes.string,
    meta: PropTypes.string,
    text: PropTypes.string,
};

export default ListItem;
