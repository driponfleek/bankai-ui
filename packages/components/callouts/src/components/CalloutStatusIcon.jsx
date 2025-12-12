import PropTypes from 'prop-types';
import {
    BankaiCircleCheck,
    BankaiCircleInfo,
    BankaiTriangleAlert,
} from '@driponfleek/bankai-ui-icons';

// Constants
import VARIANTS from '../const/variantsConst';

const { AFFIRMATIVE, INFO, CAUTIONARY, DANGER } = VARIANTS;
const ICONS = {
    [AFFIRMATIVE]: BankaiCircleCheck,
    [INFO]: BankaiCircleInfo,
    [CAUTIONARY]: BankaiTriangleAlert,
    [DANGER]: BankaiTriangleAlert,
};

const CalloutStatusIcon = (props) => {
    const { contextCls, variant } = props;
    const Icon = ICONS[variant] || BankaiTriangleAlert;

    return <Icon contextCls={contextCls} />;
};

CalloutStatusIcon.propTypes = {
    contextCls: PropTypes.string,
    variant: PropTypes.string,
};

export default CalloutStatusIcon;
