import PropTypes from 'prop-types';
import cx from 'classnames';
import { BankaiChevronDown } from '@driponfleek/bankai-ui-icons';

const BaseAccordionItemTriggerIcon = (props) => {
    const { baseCls, contextCls, renderTriggerIcon } = props;
    const Icon = renderTriggerIcon ?? BankaiChevronDown;

    return (
        <div className={cx(`${baseCls}__icon-container`, contextCls)}>
            <Icon contextCls={`${baseCls}__icon`} />
        </div>
    );
};

BaseAccordionItemTriggerIcon.propTypes = {
    baseCls: PropTypes.string,
    contextCls: PropTypes.string,
    // isExpanded: PropTypes.bool,
    renderTriggerIcon: PropTypes.func,
};

export default BaseAccordionItemTriggerIcon;
