import { Children } from 'react';
import cx from 'classnames';
import TypesetLIMetaLI from './TypesetLIMetaLI';

// Constants
import { TYPESET_BASE_CLS } from './const/typesetBaseClsConst';

// Styles
import './styles/typeset-li-meta-list.scss';

/**
 * @param {Object} props
 * @param {string} [props.contextCls] - Additional CSS class name(s) to apply to the root element
 * @param {Array<string|React.ReactElement>} [props.metaList] - Meta items to render as list items
 */
const TypesetLIMetaList = (props) => {
    const { contextCls, metaList = [] } = props;
    const baseCls = `${TYPESET_BASE_CLS}__li-meta-list`;
    const childItems = Children.toArray(
        metaList.map((item) => <TypesetLIMetaLI item={item} />),
    );

    return <ul className={cx(baseCls, contextCls)}>{childItems}</ul>;
};

export default TypesetLIMetaList;
