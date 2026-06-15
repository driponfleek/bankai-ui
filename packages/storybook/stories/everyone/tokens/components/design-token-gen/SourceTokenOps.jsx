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
 * @param {string} [props.label] - Label for the source token dropdown
 * @param {Object} [props.value] - Currently selected source token option
 * @param {Array<Object>} [props.sourceTokenOps] - Available source token options for the dropdown
 * @param {Function} [props.onChange] - Called when the source token selection changes
 */
const SourceTokenOps = (props) => {
    const {
        label,
        value,
        sourceTokenOps = [],
        onChange = () => Promise.resolve(),
    } = props;

    return (
        <FormLayout>
            <FormLayoutSection>
                <DynamicFormRow>
                    <DropdownField
                        labelProps={{
                            content: label,
                        }}
                        data={sourceTokenOps}
                        value={value}
                        textField="text"
                        onChange={onChange}
                    />
                </DynamicFormRow>
            </FormLayoutSection>
        </FormLayout>
    );
};

export default SourceTokenOps;
