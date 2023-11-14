import PropTypes from 'prop-types';
import FormLabel from '../FormLabel';

// Utils
import { getFFCLabelExtantProps } from '../utils/formFieldComposerUtils';

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

FFCLabel.propTypes = {
    baseCls: PropTypes.string,
};

export default FFCLabel;
