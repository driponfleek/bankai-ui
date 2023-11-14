import PropTypes from 'prop-types';

// Utils
import { getIcon } from '../utils/toasterUtils';

// Constants
import VARIANTS from '../const/variantsConst';
import baseCls from '../const/cssBaseClassConst';

const { DEFAULT } = VARIANTS;

const ToasterIcon = (props) => {
    const { variant, renderIcon } = props;
    const renderDefaultIcon = ({ contextCls }) => {
        const Icon = getIcon(variant);

        return Icon && <Icon contextCls={contextCls} />;
    };
    const iconRenderer = renderIcon || renderDefaultIcon;
    const iconCls = `${baseCls}__icon`;

    return (
        <div className={`${baseCls}__icon-container`}>
            <div className={`${baseCls}__icon-safe-space`}>
                {iconRenderer({ variant, contextCls: iconCls })}
            </div>
        </div>
    );
};

ToasterIcon.defaultProps = {
    variant: DEFAULT,
};

ToasterIcon.propTypes = {
    variant: PropTypes.string,
    renderIcon: PropTypes.func,
};

export default ToasterIcon;
