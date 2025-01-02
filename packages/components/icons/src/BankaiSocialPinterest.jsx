import PropTypes from 'prop-types';
import { TbBrandPinterest as Pinterest } from 'react-icons/tb';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

// Styles
import './styles/shared.scss';

const BankaiSocialPinterest = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <Pinterest
            {...rest}
            className={classNameUtil(
                `${baseCls}-social-pinterest`,
                className,
                contextCls,
            )}
        />
    );
};

BankaiSocialPinterest.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiSocialPinterest;
