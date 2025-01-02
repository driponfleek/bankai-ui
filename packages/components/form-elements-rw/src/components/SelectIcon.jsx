import PropTypes from 'prop-types';
import { BankaiChevronDown } from '@driponfleek/bankai-ui-icons';

const SelectIcon = (props) => {
    const { baseCls } = props;

    return <BankaiChevronDown contextCls={`${baseCls}__select-icon`} />;
};

SelectIcon.propTypes = {
    baseCls: PropTypes.string,
};

export default SelectIcon;
