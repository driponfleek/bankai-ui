import FormLabel from '../FormLabel';

// Utils
import { getFFCLabelExtantProps } from '../utils/formFieldComposerUtils';

/**
 * @param {Object} props
 * @param {string} [props.baseCls] - Base CSS class name used to derive label container classes
 */
const FFCLabel = (props) => {
    const { baseCls, ...rest } = props;
    const labelProps = getFFCLabelExtantProps(rest);

    return (
        <div className={`${baseCls}__label-container`}>
            <div className={`${baseCls}__label-container-inner`}>
                <FormLabel {...labelProps} />
            </div>
        </div>
    );
};

export default FFCLabel;
