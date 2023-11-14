import PropTypes from 'prop-types';
import { TbHelpCircle as CircleQuestion } from 'react-icons/tb';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

// Styles
import './styles/shared.scss';

const BankaiCircleQuestion = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <CircleQuestion
            {...rest}
            className={classNameUtil(
                `${baseCls}-circle-question`,
                className,
                contextCls,
            )}
        />
    );
};

BankaiCircleQuestion.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiCircleQuestion;
