import PropTypes from 'prop-types';
import { TbH2 as TextH2 } from 'react-icons/tb';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

// Styles
import './styles/shared.scss';

const BankaiTextH2 = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <TextH2
            {...rest}
            className={classNameUtil(
                `${baseCls}-text-h2`,
                className,
                contextCls,
            )}
        />
    );
};

BankaiTextH2.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiTextH2;
