import { Children } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import ColorSwatchMetaLI from './ColorSwatchMetaLI';

// Constants
import { COLOR_BASE_CLS } from './const/colorBaseClsConst';

// Styles
import './styles/color-swatch-meta-list.scss';

const ColorSwatchMetaList = (props) => {
    const { contextCls, metaList } = props;
    const baseCls = `${COLOR_BASE_CLS}__meta-list`;
    const childItems = Children.toArray(
        metaList.map((item) => <ColorSwatchMetaLI item={item} />),
    );

    return <ul className={cx(baseCls, contextCls)}>{childItems}</ul>;
};

ColorSwatchMetaList.defaultProps = {
    metaList: [],
};

ColorSwatchMetaList.propTypes = {
    contextCls: PropTypes.string,
    metaList: PropTypes.arrayOf(
        PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    ),
};

export default ColorSwatchMetaList;
