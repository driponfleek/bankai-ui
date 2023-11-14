import PropTypes from 'prop-types';
import cx from 'classnames';

// Utils
import { getARIAExtantProps } from './utils/ariaLiveUtils';

const ARIALive = (props) => {
    const {
        isAtomic,
        ariaRelevant,
        baseCls,
        contextCls,
        htmlTag: Wrapper,
        isPolite,
        children,
        ...rest
    } = props;
    const ariaProps = getARIAExtantProps({
        isAtomic,
        ariaRelevant,
        isPolite,
    });

    return (
        <Wrapper {...rest} {...ariaProps} className={cx(baseCls, contextCls)}>
            {children}
        </Wrapper>
    );
};

ARIALive.defaultProps = {
    htmlTag: 'span',
};

ARIALive.propTypes = {
    ariaRelevant: PropTypes.string,
    baseCls: PropTypes.string,
    contextCls: PropTypes.string,
    htmlTag: PropTypes.string,
    id: PropTypes.string,
    isAtomic: PropTypes.bool,
    isPolite: PropTypes.bool,
};

export default ARIALive;
