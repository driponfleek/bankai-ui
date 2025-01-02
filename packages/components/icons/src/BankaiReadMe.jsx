import PropTypes from 'prop-types';
import { TbBook as ReadMe } from 'react-icons/tb';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

// Styles
import './styles/shared.scss';

const BankaiReadMe = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <ReadMe
            {...rest}
            className={classNameUtil(
                `${baseCls}-read-me`,
                className,
                contextCls,
            )}
        />
    );
};

BankaiReadMe.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiReadMe;
