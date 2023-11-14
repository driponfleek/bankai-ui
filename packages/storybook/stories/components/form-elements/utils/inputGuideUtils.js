/* eslint-disable import/prefer-default-export */
import {
    TextInput,
    Textarea,
    ProtectedInput,
} from '@driponfleek/bankai-ui-form-elements';

// Const
import { INPUTS } from '../const/storyConst';

export const getInputGuidePlaygroundComp = (compName) => {
    switch (compName) {
        case INPUTS.PROTECTED:
            return ProtectedInput;
        case INPUTS.TEXTAREA:
            return Textarea;
        default:
            return TextInput;
    }
};
