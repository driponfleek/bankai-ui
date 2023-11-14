import PropTypes from 'prop-types';
import { TbBrandTwitch as Twitch } from 'react-icons/tb';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

// Styles
import './styles/shared.scss';

const BankaiSocialTwitch = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <Twitch
            {...rest}
            className={classNameUtil(
                `${baseCls}-social-twitch`,
                className,
                contextCls,
            )}
        />
    );
};

BankaiSocialTwitch.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiSocialTwitch;
