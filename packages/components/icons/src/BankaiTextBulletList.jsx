import PropTypes from 'prop-types';
import { TbList as TextBulletList } from 'react-icons/tb';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

// Styles
import './styles/shared.scss';

const BankaiTextBulletList = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <TextBulletList
            {...rest}
            className={classNameUtil(
                `${baseCls}-text-bullet-list`,
                className,
                contextCls,
            )}
        />
    );
};

BankaiTextBulletList.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiTextBulletList;
