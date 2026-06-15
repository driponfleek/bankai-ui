import { BankaiCalendar } from '@driponfleek/bankai-ui-icons';

/**
 * @param {Object} props
 * @param {string} [props.baseCls] - Base CSS class name used to derive the icon class
 */
const CalendarSelectIcon = (props) => {
    const { baseCls } = props;

    return <BankaiCalendar className={`${baseCls}__select-icon`} />;
};

export default CalendarSelectIcon;
