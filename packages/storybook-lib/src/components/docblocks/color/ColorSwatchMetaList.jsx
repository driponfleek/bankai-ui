import { Children } from 'react';
import cx from 'classnames';
import ColorSwatchMetaLI from './ColorSwatchMetaLI';

// Constants
import { COLOR_BASE_CLS } from './const/colorBaseClsConst';

// Styles
import './styles/color-swatch-meta-list.scss';

/**
 * @param {Object} props
 * @param {string} [props.contextCls] - Additional CSS class name(s) to apply to the root element
 * @param {Array<string|React.ReactElement>} [props.metaList] - Meta items to render as list items
 */
const ColorSwatchMetaList = (props) => {
    const { contextCls, metaList = [] } = props;
    const baseCls = `${COLOR_BASE_CLS}__meta-list`;
    const childItems = Children.toArray(
        metaList.map((item) => <ColorSwatchMetaLI item={item} />),
    );

    return <ul className={cx(baseCls, contextCls)}>{childItems}</ul>;
};

export default ColorSwatchMetaList;
