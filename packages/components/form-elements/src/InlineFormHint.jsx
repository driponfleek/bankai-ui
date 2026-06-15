import { ARIALive } from '@driponfleek/bankai-ui-aria';

// Styles
import './styles/inline-form-hint.scss';

/**
 * @param {Object} props
 * @param {string} [props.contextCls] - Additional CSS class name(s) to apply to the root element
 * @param {Object} [props.ariaLiveProps] - Props for the ARIALive wrapper (supports `ariaRelevant`, `id` (required), `isAtomic`, `isPolite`)
 */
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

export default InlineFormHint;
