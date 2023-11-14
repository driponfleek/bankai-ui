import PropTypes from 'prop-types';
import { TbBrandDiscord as Discord } from 'react-icons/tb';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

// Styles
import './styles/shared.scss';

const BankaiSocialDiscord = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <Discord
            {...rest}
            className={classNameUtil(
                `${baseCls}-social-discord`,
                className,
                contextCls,
            )}
        />
    );
};

BankaiSocialDiscord.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiSocialDiscord;
