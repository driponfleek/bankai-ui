import PropTypes from 'prop-types';
import { TbBrandReddit as Reddit } from 'react-icons/tb';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

// Styles
import './styles/shared.scss';

const BankaiSocialReddit = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <Reddit
            {...rest}
            className={classNameUtil(
                `${baseCls}-social-reddit`,
                className,
                contextCls,
            )}
        />
    );
};

BankaiSocialReddit.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiSocialReddit;
