import PropTypes from 'prop-types';
import cx from 'classnames';
import { AccordionItem as AccItem } from 'react-accessible-accordion';

// Constants
import { ACCORDION_BASE_CLS } from './const/baseClsConst';

const AccordionItem = (props) => {
    const { contextCls, id, shouldDangerouslySetExpanded, ...rest } = props;
    const baseCls = `${ACCORDION_BASE_CLS}__item`;

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
