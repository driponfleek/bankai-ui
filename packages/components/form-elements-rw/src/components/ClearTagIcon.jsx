import PropTypes from 'prop-types';
import { BankaiX } from '@driponfleek/bankai-ui-icons';

const ClearTagIcon = (props) => {
    const { baseCls } = props;

    return <BankaiX contextCls={`${baseCls}__clear-tag-icon`} />;
};

ClearTagIcon.propTypes = {
    baseCls: PropTypes.string,
};

export default ClearTagIcon;
