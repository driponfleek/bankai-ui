import PropTypes from 'prop-types';

// Constants
import { TYPESET_BASE_CLS } from './const/typesetBaseClsConst';

const TypesetLIMetaLI = (props) => {
    const baseCls = `${TYPESET_BASE_CLS}__meta-list-item`;
    const { item } = props;

    return <li className={baseCls}>{item}</li>;
};

TypesetLIMetaLI.propTypes = {
    item: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

export default TypesetLIMetaLI;
