import PropTypes from 'prop-types';
import { TbBrandLinkedin as LinkedIn } from 'react-icons/tb';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

// Styles
import './styles/shared.scss';

const BankaiSocialLinkedIn = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <LinkedIn
            {...rest}
            className={classNameUtil(
                `${baseCls}-social-linkedin`,
                className,
                contextCls,
            )}
        />
    );
};

BankaiSocialLinkedIn.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiSocialLinkedIn;
