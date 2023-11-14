import PropTypes from 'prop-types';
import { TbArrowForwardUp as Redo } from 'react-icons/tb';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

// Styles
import './styles/shared.scss';

const BankaiRedo = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <Redo
            {...rest}
            className={classNameUtil(`${baseCls}-redo`, className, contextCls)}
        />
    );
};

BankaiRedo.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiRedo;
