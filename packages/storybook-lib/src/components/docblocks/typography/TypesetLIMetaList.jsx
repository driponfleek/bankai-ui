import { Children } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import TypesetLIMetaLI from './TypesetLIMetaLI';

// Constants
import { TYPESET_BASE_CLS } from './const/typesetBaseClsConst';

// Styles
import './styles/typeset-li-meta-list.scss';

const TypesetLIMetaList = (props) => {
    const { contextCls, metaList } = props;
    const baseCls = `${TYPESET_BASE_CLS}__li-meta-list`;
    const childItems = Children.toArray(
        metaList.map((item) => <TypesetLIMetaLI item={item} />),
    );

    return <ul className={cx(baseCls, contextCls)}>{childItems}</ul>;
};

TypesetLIMetaList.defaultProps = {
    metaList: [],
};

TypesetLIMetaList.propTypes = {
    contextCls: PropTypes.string,
    metaList: PropTypes.arrayOf(
        PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    ),
};

export default TypesetLIMetaList;
