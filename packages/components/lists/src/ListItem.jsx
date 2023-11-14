import { Fragment } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

// Styles
import './styles/list-item.scss';

const ListItem = (props) => {
    const {
        contextCls,
        meta,
        text,
        shouldSwapTextAndMeta,
        renderAfter,
        renderBefore,
        children,
    } = props;
    const baseCls = 'bankai-list-item';

    return (
        <div className={cx(baseCls, contextCls)}>
            {renderBefore && (
                <div className={`${baseCls}__before-content`}>
                    {renderBefore()}
                </div>
            )}
            <div className={`${baseCls}__content`}>
                {!children && (
                    <Fragment>
                        {shouldSwapTextAndMeta && meta && (
                            <div className={`${baseCls}__meta`}>{meta}</div>
                        )}
                        {text && (
                            <div className={`${baseCls}__text`}>{text}</div>
                        )}
                        {!shouldSwapTextAndMeta && meta && (
                            <div className={`${baseCls}__meta`}>{meta}</div>
                        )}
                    </Fragment>
                )}
                {children}
            </div>
            {renderAfter && (
                <div className={`${baseCls}__after-content`}>
                    {renderAfter()}
                </div>
            )}
        </div>
    );
};

ListItem.defaultProps = {
    shouldSwapTextAndMeta: false,
};

ListItem.propTypes = {
    contextCls: PropTypes.string,
    meta: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    text: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    shouldSwapTextAndMeta: PropTypes.bool,
    renderAfter: PropTypes.func,
    renderBefore: PropTypes.func,
};

export default ListItem;
