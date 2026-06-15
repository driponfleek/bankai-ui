import cx from 'classnames';

// Constants
import { LIST_BASE_CLS } from './const/listBaseClsConst';

/**
 * @param {Object} props
 * @param {string} [props.contextCls] - Additional CSS class name(s) to apply to the root element
 */
const OmniListItem = (props) => {
    const { contextCls, children } = props;
    const baseCls = `${LIST_BASE_CLS}__item`;

    return <li className={cx(baseCls, contextCls)}>{children}</li>;
};

export default OmniListItem;
