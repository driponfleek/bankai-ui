import PropTypes from 'prop-types';
import cx from 'classnames';
import { AccordionItemPanel as AccItemPanel } from 'react-accessible-accordion';

// Constants
import { ACCORDION_BASE_CLS } from './const/baseClsConst';

const AccordionItemPanel = (props) => {
    const { contextCls, shouldHaveRegionRole, ...rest } = props;
    const baseCls = `${ACCORDION_BASE_CLS}__item-panel`;

    return (
        <AccItemPanel
            {...rest}
            className={cx(baseCls, contextCls)}
            region={shouldHaveRegionRole}
        />
    );
};

AccordionItemPanel.propTypes = {
    shouldHaveRegionRole: true,
};

AccordionItemPanel.propTypes = {
    contextCls: PropTypes.string,
    shouldHaveRegionRole: PropTypes.bool,
};

export default AccordionItemPanel;
