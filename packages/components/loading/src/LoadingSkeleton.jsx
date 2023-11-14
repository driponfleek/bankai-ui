import PropTypes from 'prop-types';
import cx from 'classnames';

// Styles
import './styles/loading-skeleton.scss';

const LoadingSkeleton = (props) => {
    const baseCls = 'bankai-loading-skeleton';
    const { contextCls, isSpan } = props;
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

LoadingSkeleton.defaultProps = {
    isSpan: false,
};

LoadingSkeleton.propTypes = {
    contextCls: PropTypes.string,
    isSpan: PropTypes.bool,
};

export default LoadingSkeleton;
