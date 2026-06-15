import { ARIALive } from '@driponfleek/bankai-ui-aria';

// Styles
import './styles/inline-form-error.scss';

/**
 * @param {Object} props
 * @param {string} [props.contextCls] - Additional CSS class name(s) to apply to the root element
 * @param {Object} [props.ariaLiveProps] - Props for the ARIALive wrapper (supports `ariaRelevant`, `id` (required), `isAtomic`, `isPolite`)
 * @param {Function} [props.renderErrorIcon] - Custom render function for the error icon (only rendered when children are present)
 */
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

export default InlineFormError;
