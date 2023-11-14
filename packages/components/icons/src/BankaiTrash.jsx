import PropTypes from 'prop-types';
import { TbTrash as Trash } from 'react-icons/tb';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

// Styles
import './styles/shared.scss';

const BankaiTrash = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <Trash
            {...rest}
            className={classNameUtil(`${baseCls}-trash`, className, contextCls)}
        />
    );
};

BankaiTrash.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiTrash;
