import PropTypes from 'prop-types';
import {
    BankaiCircleCheck,
    BankaiCircleInfo,
    BankaiTriangleAlert,
} from '@driponfleek/bankai-ui-icons';

// Constants
import VARIANTS from '../const/variantsConst';

const CalloutStatusIcon = (props) => {
    const { contextCls, variant } = props;
    let Icon;

    switch (variant) {
        case VARIANTS.AFFIRMATIVE:
            Icon = BankaiCircleCheck;
            break;
        case VARIANTS.INFO:
            Icon = BankaiCircleInfo;
            break;
        case VARIANTS.CAUTIONARY:
        case VARIANTS.DANGER:
        default:
            Icon = BankaiTriangleAlert;
            break;
    }

    return <Icon contextCls={contextCls} />;
};

CalloutStatusIcon.propTypes = {
    contextCls: PropTypes.string,
    variant: PropTypes.string,
};

export default CalloutStatusIcon;
