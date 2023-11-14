import {
    contextClsArgType,
    contextClsArg,
    isDisabledArgType,
} from '../../../../args/sharedArgs';
import data from '../mocks/menuMocks';

export const args = {
    ...contextClsArg,
    dataKey: 'id',
    placeholder: 'Please select one...',
    textField: 'text',
    shouldAutoFocus: false,
    hasError: false,
    isBusy: false,
    isDefaultOpen: false,
    isDisabled: false,
    isReadOnly: false,
    shouldDropUp: false,
    shouldFocustFirstItem: false,
    data,
    // onChange: () => Promise.resolve(),
    // onSelect: () => Promise.resolve(),
    // onToggle: () => Promise.resolve(),
};

export const argTypes = {
    ...contextClsArgType,
    ...isDisabledArgType,
};
