import { Fragment } from 'react';
import cx from 'classnames';

// Styles
import './styles/list-item.scss';

/**
 * @param {Object} props
 * @param {string} [props.contextCls] - Additional CSS class name(s) to apply to the root element
 * @param {string|React.ReactElement} [props.meta] - Secondary metadata content displayed below or above the text
 * @param {string|React.ReactElement} [props.text] - Primary text content
 * @param {boolean} [props.shouldSwapTextAndMeta] - Whether to render meta above text instead of below
 * @param {Function} [props.renderAfter] - Render function for content appended after the main content
 * @param {Function} [props.renderBefore] - Render function for content prepended before the main content
 */
const ListItem = (props) => {
    const {
        contextCls,
        meta,
        text,
        shouldSwapTextAndMeta = false,
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

export default ListItem;
