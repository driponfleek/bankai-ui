import cx from 'classnames';

// Utils
import { getARIAExtantProps } from './utils/ariaLiveUtils';

/**
 * @param {Object} props
 * @param {string} [props.ariaRelevant] - Value for the aria-relevant attribute
 * @param {string} [props.baseCls] - Base CSS class name used to construct BEM modifier and element classes
 * @param {string} [props.contextCls] - Additional CSS class name(s) to apply to the root element
 * @param {string} [props.htmlTag] - HTML tag to render as the wrapper element
 * @param {string} [props.id] - HTML id attribute for the live region element
 * @param {boolean} [props.isAtomic] - Whether to set aria-atomic on the live region
 * @param {boolean} [props.isPolite] - Whether the live region is polite (aria-live='polite') or assertive
 */
const ARIALive = (props) => {
    const {
        isAtomic,
        ariaRelevant,
        baseCls,
        contextCls,
        htmlTag: Wrapper = 'span',
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

export default ARIALive;
