import PropTypes from 'prop-types';
import cx from 'classnames';

// Constants
import { LIST_BASE_CLS } from './const/listBaseClsConst';

const OmniListItem = (props) => {
    const { contextCls, children } = props;
    const baseCls = `${LIST_BASE_CLS}__item`;

    return <li className={cx(baseCls, contextCls)}>{children}</li>;
};

OmniListItem.propTypes = {
    contextCls: PropTypes.string,
};

export default OmniListItem;
