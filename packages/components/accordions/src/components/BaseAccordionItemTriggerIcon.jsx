import cx from 'classnames';
import { BankaiChevronDown } from '@driponfleek/bankai-ui-icons';

/**
 * @param {Object} props
 * @param {string} [props.baseCls] - Base CSS class name used to construct BEM modifier and element classes
 * @param {string} [props.contextCls] - Additional CSS class name(s) to apply to the root element
 * @param {Function} [props.renderTriggerIcon] - Custom render function for the accordion trigger icon
 */
const BaseAccordionItemTriggerIcon = (props) => {
    const { baseCls, contextCls, renderTriggerIcon } = props;
    const Icon = renderTriggerIcon ?? BankaiChevronDown;

    return (
        <div className={cx(`${baseCls}__icon-container`, contextCls)}>
            <Icon contextCls={`${baseCls}__icon`} />
        </div>
    );
};

export default BaseAccordionItemTriggerIcon;
