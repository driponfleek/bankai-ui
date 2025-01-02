import PropTypes from 'prop-types';
import { TbH1 as TextH1 } from 'react-icons/tb';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

// Styles
import './styles/shared.scss';

const BankaiTextH1 = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <TextH1
            {...rest}
            className={classNameUtil(
                `${baseCls}-text-h1`,
                className,
                contextCls,
            )}
        />
    );
};

BankaiTextH1.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiTextH1;
