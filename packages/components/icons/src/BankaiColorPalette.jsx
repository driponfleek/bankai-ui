import PropTypes from 'prop-types';
import { TbPalette as ColorPalette } from 'react-icons/tb';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

// Styles
import './styles/shared.scss';

const BankaiColorPalette = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <ColorPalette
            {...rest}
            className={classNameUtil(
                `${baseCls}-color-palette`,
                className,
                contextCls,
            )}
        />
    );
};

BankaiColorPalette.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiColorPalette;
