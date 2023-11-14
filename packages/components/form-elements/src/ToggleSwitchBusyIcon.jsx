import PropTypes from 'prop-types';
import cx from 'classnames';
import { BankaiSpinner } from '@driponfleek/bankai-ui-icons';

const ToggleSwitchBusyIcon = (props) => {
    const { contextCls } = props;

    return <BankaiSpinner contextCls={cx(contextCls)} />;
};

ToggleSwitchBusyIcon.propTypes = {
    contextCls: PropTypes.string,
};

export default ToggleSwitchBusyIcon;
