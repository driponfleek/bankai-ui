import PropTypes from 'prop-types';
import { TbBrandSteam as Steam } from 'react-icons/tb';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

// Styles
import './styles/shared.scss';

const BankaiSteam = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <Steam
            {...rest}
            className={classNameUtil(
                `${baseCls}-text-steam`,
                className,
                contextCls,
            )}
        />
    );
};

BankaiSteam.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiSteam;
