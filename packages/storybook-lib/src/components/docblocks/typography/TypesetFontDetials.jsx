import PropTypes from 'prop-types';
import cx from 'classnames';

// Constants
import { TYPESET_BASE_CLS } from './const/typesetBaseClsConst';

const TypesetFontDetials = (props) => {
    const { category, contextCls, fontFamily } = props;
    const baseCls = `${TYPESET_BASE_CLS}__font-details`;
    const testRegEx = / /g;
    const modCls = `${baseCls}--${fontFamily
        .toLowerCase()
        .replace(testRegEx, '-')}`;

    return (
        <div className={cx(baseCls, modCls, contextCls)}>
            <span className={`${baseCls}-inner`}>
                <span className={`${baseCls}-category`}>{category}</span>
                <span className={`${baseCls}-example`}>Aa</span>
                <span className={`${baseCls}-font-family`}>{fontFamily}</span>
            </span>
        </div>
    );
};

TypesetFontDetials.propTypes = {
    category: PropTypes.string,
    contextCls: PropTypes.string,
    fontFamily: PropTypes.string,
};

export default TypesetFontDetials;
