import PropTypes from 'prop-types';
import { TbUnderline as TextUnderline } from 'react-icons/tb';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

// Styles
import './styles/shared.scss';

const BankaiTextUnderline = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <TextUnderline
            {...rest}
            className={classNameUtil(
                `${baseCls}-text-underline`,
                className,
                contextCls,
            )}
        />
    );
};

BankaiTextUnderline.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiTextUnderline;
