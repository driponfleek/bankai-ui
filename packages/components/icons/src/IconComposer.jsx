// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

// Styles
import './styles/shared.scss';

const withIconContainer = (Icon) => {
    /**
     * @param {Object} props
     * @param {string} [props.contextCls] - Additional CSS class name(s) to apply to the root element
     * @param {string} [props.className] - Additional CSS class name(s) to apply to the icon element
     * @param {string} [props.iconClsSuffix] - Suffix appended to the base icon class name
     */
    const Wrapped = (props) => {
        const { contextCls, className, iconClsSuffix, ...rest } = props;
        const iconCls = {
            [`${baseCls}-${iconClsSuffix}`]: !!iconClsSuffix,
        };

        return (
            <Icon
                {...rest}
                className={classNameUtil(iconCls, className, contextCls)}
            />
        );
    };

    return Wrapped;
};

const IconComposer = withIconContainer;

export default IconComposer;
