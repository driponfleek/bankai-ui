import cx from 'classnames';

// Styles
import './styles/loading-skeleton.scss';

/**
 * @param {Object} props
 * @param {string} [props.contextCls] - Additional CSS class name(s) to apply to the root element
 * @param {boolean} [props.isSpan] - Whether to render as a span instead of a div (for use inside inline elements)
 */
const LoadingSkeleton = (props) => {
    const baseCls = 'bankai-loading-skeleton';
    const { contextCls, isSpan = false } = props;
    const Tag = isSpan ? 'span' : 'div';
    const modCls = {
        [`${baseCls}--is-span`]: isSpan,
    };

    return (
        <Tag className={cx(baseCls, modCls, contextCls)}>
            <Tag className={`${baseCls}__animation`} />
        </Tag>
    );
};

export default LoadingSkeleton;
