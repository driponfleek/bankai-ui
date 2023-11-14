import PropTypes from 'prop-types';
import { BankaiSpinner } from '@driponfleek/bankai-ui-icons';

const BusySpinner = (props) => {
    const { baseCls } = props;

    return <BankaiSpinner contextCls={`${baseCls}__busy-icon`} />;
};

BusySpinner.propTypes = {
    baseCls: PropTypes.string,
};

export default BusySpinner;
