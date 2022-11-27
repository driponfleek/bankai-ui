import PropTypes from 'prop-types';
import cx from 'classnames';
import { AccordionItemPanel as AccItemPanel } from 'react-accessible-accordion';

const AccordionItemPanel = (props) => {
    const { contextCls, shouldHaveRegionRole, ...rest } = props;
    const baseCls = 'bankai-accordion-item-panel';

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
