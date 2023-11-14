import { IFLFormFieldComposer } from '@driponfleek/bankai-ui-form-elements';
import { Dropdown } from '@driponfleek/bankai-ui-form-elements-rw';
import {
    FormLayout,
    FormLayoutSection,
    DynamicFormRow,
} from '@driponfleek/bankai-ui-layouts';

const DropdownField = IFLFormFieldComposer(Dropdown);

const AvatarCompOps = (props) => {
    const {
        sourceTokenOps = [],
        value,
        onChange = () => Promise.resolve(),
    } = props;

    return (
        <FormLayout>
            <FormLayoutSection>
                <DynamicFormRow>
                    <DropdownField
                        labelProps={{
                            content: 'Avatar Source Color Token',
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

export default AvatarCompOps;
