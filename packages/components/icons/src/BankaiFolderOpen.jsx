import PropTypes from 'prop-types';
import { TbFolderOpen as FolderOpen } from 'react-icons/tb';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

// Styles
import './styles/shared.scss';

const BankaiFolderOpen = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <FolderOpen
            {...rest}
            className={classNameUtil(
                `${baseCls}-folder-open`,
                className,
                contextCls,
            )}
        />
    );
};

BankaiFolderOpen.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiFolderOpen;
