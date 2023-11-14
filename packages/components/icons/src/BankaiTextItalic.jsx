import PropTypes from 'prop-types';
import { TbItalic as TextItalic } from 'react-icons/tb';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

// Styles
import './styles/shared.scss';

const BankaiTextItalic = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <TextItalic
            {...rest}
            className={classNameUtil(
                `${baseCls}-text-italic`,
                className,
                contextCls,
            )}
        />
    );
};

BankaiTextItalic.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiTextItalic;
