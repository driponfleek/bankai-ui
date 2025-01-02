import PropTypes from 'prop-types';
import cx from 'classnames';

// Constants
import { LIST_BASE_CLS } from './const/listBaseClsConst';

// Styles
import './styles/list.scss';

const OmniList = (props) => {
    const { contextCls, isOrderedList, children } = props;
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

OmniList.defaultProps = {
    isOrderedList: false,
};

OmniList.propTypes = {
    contextCls: PropTypes.string,
    isOrderedList: PropTypes.bool,
};

export default OmniList;
