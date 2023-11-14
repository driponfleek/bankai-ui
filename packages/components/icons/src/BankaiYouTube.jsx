import PropTypes from 'prop-types';
import { TbBrandYoutubeFilled as Youtube } from 'react-icons/tb';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

// Styles
import './styles/shared.scss';

const BankaiYouTube = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <Youtube
            {...rest}
            className={classNameUtil(
                `${baseCls}-text-subscript`,
                className,
                contextCls,
            )}
        />
    );
};

BankaiYouTube.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiYouTube;
