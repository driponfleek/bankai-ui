import PropTypes from 'prop-types';
import { TbPencil as Edit } from 'react-icons/tb';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

// Styles
import './styles/shared.scss';

const BankaiEdit = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <Edit
            {...rest}
            className={classNameUtil(`${baseCls}-edit`, className, contextCls)}
        />
    );
};

BankaiEdit.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiEdit;
