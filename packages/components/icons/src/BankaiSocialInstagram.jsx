import PropTypes from 'prop-types';
import { TbBrandInstagram as Instagram } from 'react-icons/tb';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

// Styles
import './styles/shared.scss';

const BankaiSocialInstagram = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <Instagram
            {...rest}
            className={classNameUtil(
                `${baseCls}-social-instagram`,
                className,
                contextCls,
            )}
        />
    );
};

BankaiSocialInstagram.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiSocialInstagram;
