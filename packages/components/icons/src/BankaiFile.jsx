import PropTypes from 'prop-types';
import { TbFile as File } from 'react-icons/tb';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

// Styles
import './styles/shared.scss';

const BankaiFile = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <File
            {...rest}
            className={classNameUtil(`${baseCls}-file`, className, contextCls)}
        />
    );
};

BankaiFile.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiFile;
