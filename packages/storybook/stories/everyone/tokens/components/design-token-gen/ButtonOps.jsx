import { IFLFormFieldComposer } from '@driponfleek/bankai-ui-form-elements';
import { Dropdown } from '@driponfleek/bankai-ui-form-elements-rw';
import {
    FormLayout,
    FormLayoutSection,
    DynamicFormRow,
} from '@driponfleek/bankai-ui-layouts';

const DropdownField = IFLFormFieldComposer(Dropdown);

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
