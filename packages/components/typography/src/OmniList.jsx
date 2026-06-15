import cx from 'classnames';

// Constants
import { LIST_BASE_CLS } from './const/listBaseClsConst';

// Styles
import './styles/list.scss';

/**
 * @param {Object} props
 * @param {string} [props.contextCls] - Additional CSS class name(s) to apply to the root element
 * @param {boolean} [props.isOrderedList] - Whether to render as an ordered list (`<ol>`) instead of unordered (`<ul>`)
 */
const OmniList = (props) => {
    const { contextCls, isOrderedList = false, children } = props;
    const baseCls = LIST_BASE_CLS;
    const ListEl = isOrderedList ? 'ol' : 'ul';
    const modCls = {
        [`${baseCls}--ordered`]: isOrderedList,
        [`${baseCls}--unordered`]: !isOrderedList,
    };

    return (
        <ListEl className={cx(baseCls, modCls, contextCls)}>{children}</ListEl>
    );
};

export default OmniList;
