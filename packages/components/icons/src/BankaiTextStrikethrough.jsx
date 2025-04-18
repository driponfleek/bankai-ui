import PropTypes from 'prop-types';
import { TbStrikethrough as TextStrikethrough } from 'react-icons/tb';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

// Styles
import './styles/shared.scss';

const BankaiTextStrikethrough = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <TextStrikethrough
            {...rest}
            className={classNameUtil(
                `${baseCls}-text-strikethrough`,
                className,
                contextCls,
            )}
        />
    );
};

BankaiTextStrikethrough.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiTextStrikethrough;
