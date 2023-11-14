import PropTypes from 'prop-types';
import { BankaiCalendar } from '@driponfleek/bankai-ui-icons';

const CalendarSelectIcon = (props) => {
    const { baseCls } = props;

    return <BankaiCalendar className={`${baseCls}__select-icon`} />;
};

CalendarSelectIcon.propTypes = {
    baseCls: PropTypes.string,
};

export default CalendarSelectIcon;
