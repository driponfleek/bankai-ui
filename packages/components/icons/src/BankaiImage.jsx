import PropTypes from 'prop-types';
import { TbPhoto as Image } from 'react-icons/tb';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

// Styles
import './styles/shared.scss';

const BankaiImage = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <Image
            {...rest}
            className={classNameUtil(`${baseCls}-image`, className, contextCls)}
        />
    );
};

BankaiImage.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiImage;
