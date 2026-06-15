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

/**
 * @param {Object} props
 * @param {string} [props.contextCls] - Additional CSS class name(s) to apply to the icon
 * @param {string} [props.variant] - Variant key that determines which status icon to render
 */
const CalloutStatusIcon = (props) => {
    const { contextCls, variant } = props;
    const Icon = ICONS[variant] || BankaiTriangleAlert;

    return <Icon contextCls={contextCls} />;
};

export default CalloutStatusIcon;
