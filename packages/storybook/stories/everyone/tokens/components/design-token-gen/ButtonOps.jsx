import { IFLFormFieldComposer } from '@driponfleek/bankai-ui-form-elements';
import { Dropdown } from '@driponfleek/bankai-ui-form-elements-rw';
import {
    FormLayout,
    FormLayoutSection,
    DynamicFormRow,
} from '@driponfleek/bankai-ui-layouts';

const DropdownField = IFLFormFieldComposer(Dropdown);

/**
 * @param {Object} props
 * @param {string} [props.sourceTokenLabel] - Label for the source color token dropdown
 * @param {Object} [props.sourceTokenValue] - Currently selected source token option
 * @param {Array<Object>} [props.sourceTokenOps] - Available source token options for the dropdown
 * @param {string} [props.styleLabel] - Label for the button style dropdown
 * @param {Object} [props.styleValue] - Currently selected style option
 * @param {Array<Object>} [props.styleOps] - Available style options for the dropdown
 * @param {Function} [props.onSourceTokenChange] - Called when the source token selection changes
 * @param {Function} [props.onStyleChange] - Called when the style selection changes
 */
const ButtonOps = (props) => {
    const {
        sourceTokenLabel,
        sourceTokenValue,
        sourceTokenOps = [],
        styleLabel,
        styleValue,
        styleOps = [],
        onSourceTokenChange = () => Promise.resolve(),
        onStyleChange = () => Promise.resolve(),
    } = props;

    return (
        <FormLayout>
            <FormLayoutSection>
                <DynamicFormRow>
                    <DropdownField
                        labelProps={{
                            content: sourceTokenLabel,
                        }}
                        data={sourceTokenOps}
                        value={sourceTokenValue}
                        textField="text"
                        onChange={onSourceTokenChange}
                    />
                </DynamicFormRow>
                <DynamicFormRow>
                    <DropdownField
                        labelProps={{
                            content: styleLabel,
                        }}
                        data={styleOps}
                        value={styleValue}
                        textField="text"
                        onChange={onStyleChange}
                    />
                </DynamicFormRow>
            </FormLayoutSection>
        </FormLayout>
    );
};

export default ButtonOps;
