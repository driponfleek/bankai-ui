import cx from 'classnames';

// Constants
import { TYPESET_BASE_CLS } from './const/typesetBaseClsConst';

/**
 * @param {Object} props
 * @param {string} [props.category] - Font category label displayed in the component
 * @param {string} [props.contextCls] - Additional CSS class name(s) to apply to the root element
 * @param {string} [props.fontFamily] - Font family name; used as display text and to generate a modifier class
 */
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

export default TypesetFontDetials;
