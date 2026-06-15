// Constants
import { TYPESET_BASE_CLS } from './const/typesetBaseClsConst';

/**
 * @param {Object} props
 * @param {string|React.ReactElement} [props.item] - Meta content to render inside the list item
 */
const TypesetLIMetaLI = (props) => {
    const baseCls = `${TYPESET_BASE_CLS}__meta-list-item`;
    const { item } = props;

    return <li className={baseCls}>{item}</li>;
};

export default TypesetLIMetaLI;
