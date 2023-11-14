import PropTypes from 'prop-types';
import { TbH3 as TextH3 } from 'react-icons/tb';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

// Styles
import './styles/shared.scss';

const BankaiTextH3 = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <TextH3
            {...rest}
            className={classNameUtil(
                `${baseCls}-text-h3`,
                className,
                contextCls,
            )}
        />
    );
};

BankaiTextH3.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiTextH3;
