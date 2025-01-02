import PropTypes from 'prop-types';
import { TbMovie as Film } from 'react-icons/tb';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

// Styles
import './styles/shared.scss';

const BankaiFilm = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <Film
            {...rest}
            className={classNameUtil(`${baseCls}-film`, className, contextCls)}
        />
    );
};

BankaiFilm.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiFilm;
