import PropTypes from 'prop-types';
import cx from 'classnames';
import AccordionItemButton from '../AccordionItemButton';
import BaseAccordionItemTriggerIcon from './BaseAccordionItemTriggerIcon';

// Utils
import { getAccordionBtnStateModCls } from '../utils/accordionUtils';

const BaseAccordionItemTriggerButton = (props) => {
    const {
        baseCls,
        contextCls,
        buttonProps,
        isExpanded,
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

BaseAccordionItemTriggerButton.defaultProps = {
    buttonProps: {},
    isExpanded: false,
};

BaseAccordionItemTriggerButton.propTypes = {
    baseCls: PropTypes.string,
    contextCls: PropTypes.string,
    isExpanded: PropTypes.bool,
    buttonProps: PropTypes.shape({
        contextCls: PropTypes.string,
    }),
    renderTriggerIcon: PropTypes.func,
};

export default BaseAccordionItemTriggerButton;
