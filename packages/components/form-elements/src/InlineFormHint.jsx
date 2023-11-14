import PropTypes from 'prop-types';
import { ARIALive } from '@driponfleek/bankai-ui-aria';

// Styles
import './styles/inline-form-hint.scss';

const InlineFormHint = (props) => {
    const { contextCls, ariaLiveProps = {}, children } = props;
    const baseCls = 'bankai-form-control-hint';
    const { isAtomic = false, ...rest } = ariaLiveProps;
    const ariaProps = {
        isAtomic,
        ...rest,
    };

    return (
        <ARIALive {...ariaProps} baseCls={baseCls} contextCls={contextCls}>
            {children && (
                <span className={`${baseCls}__content`}>{children}</span>
            )}
        </ARIALive>
    );
};

InlineFormHint.defaultProps = {};

InlineFormHint.propTypes = {
    contextCls: PropTypes.string,
    ariaLiveProps: PropTypes.shape({
        ariaRelevant: PropTypes.string,
        id: PropTypes.string.isRequired,
        isAtomic: PropTypes.bool,
        isPolite: PropTypes.bool,
    }),
};

export default InlineFormHint;
