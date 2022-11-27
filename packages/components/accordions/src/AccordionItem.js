import PropTypes from 'prop-types';
import cx from 'classnames';
import { AccordionItem as AccItem } from 'react-accessible-accordion';

const AccordionItem = (props) => {
    const { contextCls, id, shouldDangerouslySetExpanded, ...rest } = props;
    const baseCls = 'bankai-accordion-item';

    return (
        <AccItem
            {...rest}
            className={cx(baseCls, contextCls)}
            uuid={id}
            dangerouslySetExpanded={shouldDangerouslySetExpanded}
        />
    );
};

AccordionItem.propTypes = {
    contextCls: PropTypes.string,
    id: PropTypes.string,
    shouldDangerouslySetExpanded: PropTypes.bool,
};

export default AccordionItem;
