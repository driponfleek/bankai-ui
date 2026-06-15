import cx from 'classnames';
import AccordionItemButton from '../AccordionItemButton';
import BaseAccordionItemTriggerIcon from './BaseAccordionItemTriggerIcon';

// Utils
import { getAccordionBtnStateModCls } from '../utils/accordionUtils';

/**
 * @param {Object} props
 * @param {string} [props.baseCls] - Base CSS class name used to construct BEM modifier and element classes
 * @param {string} [props.contextCls] - Additional CSS class name(s) to apply to the root element
 * @param {boolean} [props.isExpanded] - Whether the accordion item is currently expanded
 * @param {Object} [props.buttonProps] - Props forwarded to the accordion item button; supports `contextCls` for additional CSS class names
 * @param {Function} [props.renderTriggerIcon] - Custom render function for the accordion trigger icon
 */
const BaseAccordionItemTriggerButton = (props) => {
    const {
        baseCls,
        contextCls,
        buttonProps = {},
        isExpanded = false,
        renderTriggerIcon,
        children,
    } = props;
    const btnBaseCls = `${baseCls}__item-button`;
    const stateModCls = getAccordionBtnStateModCls(
        btnBaseCls,
        contextCls,
        isExpanded,
    );

    return (
        <AccordionItemButton
            {...buttonProps}
            contextCls={cx(btnBaseCls, stateModCls, contextCls)}
        >
            <div className={`${baseCls}__text-container`}>
                <div className={`${baseCls}__text`}>{children}</div>
            </div>
            <BaseAccordionItemTriggerIcon
                baseCls={baseCls}
                renderTriggerIcon={renderTriggerIcon}
            />
        </AccordionItemButton>
    );
};

export default BaseAccordionItemTriggerButton;
