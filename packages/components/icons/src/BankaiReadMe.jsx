import PropTypes from 'prop-types';
import { CgReadme } from 'react-icons/cg';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

// Styles
import './styles/shared.scss';

const BankaiReadMe = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <CgReadme
            {...rest}
            className={classNameUtil(
                `${baseCls}-read-me`,
                className,
                contextCls,
            )}
        />
    );
};

BankaiReadMe.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiReadMe;
