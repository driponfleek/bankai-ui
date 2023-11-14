import PropTypes from 'prop-types';
import { ARIALive } from '@driponfleek/bankai-ui-aria';

// Styles
import './styles/inline-form-error.scss';

const InlineFormError = (props) => {
    const { contextCls, ariaLiveProps = {}, renderErrorIcon, children } = props;
    const {
        isAtomic = true,
        isPolite = false,
        ariaRelevant,
        ...rest
    } = ariaLiveProps;
    const baseCls = 'bankai-inline-form-error';
    const ariaProps = {
        isAtomic,
        isPolite,
        // https://hiddedevries.nl/en/blog/2017-04-04-how-to-make-inline-error-messages-accessible
        // https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions
        ...(ariaRelevant && { ariaRelevant }),
        ...(!ariaRelevant &&
            !isPolite && { ariaRelevant: 'additions removals' }),
        ...rest,
    };

    return (
        <ARIALive {...ariaProps} baseCls={baseCls} contextCls={contextCls}>
            {children && renderErrorIcon && (
                <span className={`${baseCls}__icon-container`}>
                    {renderErrorIcon({ contextCls: `${baseCls}__icon` })}
                </span>
            )}
            {children && (
                <span className={`${baseCls}__content`}>{children}</span>
            )}
        </ARIALive>
    );
};

InlineFormError.defaultProps = {};

InlineFormError.propTypes = {
    contextCls: PropTypes.string,
    ariaLiveProps: PropTypes.shape({
        ariaRelevant: PropTypes.string,
        id: PropTypes.string.isRequired,
        isAtomic: PropTypes.bool,
        isPolite: PropTypes.bool,
    }),
    renderErrorIcon: PropTypes.func,
};

export default InlineFormError;
