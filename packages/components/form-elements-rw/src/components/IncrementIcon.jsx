import PropTypes from 'prop-types';
import { BankaiChevronUp } from '@driponfleek/bankai-ui-icons';

const IncrementIcon = (props) => {
    const { baseCls } = props;

    return <BankaiChevronUp contextCls={`${baseCls}__increment-icon`} />;
};

IncrementIcon.propTypes = {
    baseCls: PropTypes.string,
};

export default IncrementIcon;
