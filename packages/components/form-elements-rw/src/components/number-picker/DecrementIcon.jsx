import PropTypes from 'prop-types';
import { BankaiChevronDown } from '@driponfleek/bankai-ui-icons';

const DecrementIcon = (props) => {
    const { baseCls } = props;

    return <BankaiChevronDown contextCls={`${baseCls}__decrement-icon`} />;
};

DecrementIcon.propTypes = {
    baseCls: PropTypes.string,
};

export default DecrementIcon;
