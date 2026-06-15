// Utils
import { getIcon } from '../utils/toasterUtils';

// Constants
import VARIANTS from '../const/variantsConst';
import baseCls from '../const/cssBaseClassConst';

const { DEFAULT } = VARIANTS;

/**
 * @param {Object} props
 * @param {string} [props.variant] - Toast variant used to select the default icon
 * @param {Function} [props.renderIcon] - Custom render function for the icon
 */
const ToasterIcon = (props) => {
    const { variant = DEFAULT, renderIcon } = props;
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

export default ToasterIcon;
