import {
    IMG_FILE_TYPES,
    genFileTypeMeta,
} from '@epr0t0type/bankai-ui-form-elements';
import { genArgType } from '../../../../utils/argTypesUtils';

// Constants
import {
    CONTROL_TYPE_NAMES,
    CONTROL_TYPES,
} from '../../../../const/controlsConst';
import PROP_TYPES from '../../../../const/reactPropTypesConst';

// Locale
import strings from '../../../../i18n/strings.json';

// Reference:
// https://storybook.js.org/docs/react/essentials/controls
// https://storybook.js.org/docs/react/essentials/actions
// https://storybook.js.org/docs/react/api/argtypes

const { bankaiUI: locale } = strings;
const { JPEG, JPG, PNG } = IMG_FILE_TYPES;
const ALLOWED_FILE_TYPES = [
    genFileTypeMeta(JPEG),
    genFileTypeMeta(JPG),
    genFileTypeMeta(PNG),
];

export const args = {
    allowedTypes: ALLOWED_FILE_TYPES,
    localeDefaultState: {
        btnText: 'Browse',
        msgText: 'Drop your File here, or',
        titleText: undefined,
    },
    localeHoverState: {
        msgText: 'Drop your File here',
        titleText: undefined,
    },
    localeRejectDropState: {
        msgText: 'File must be JPG or PNG format',
        titleText: 'Invalid File',
    },
    localeShowAttachmentsState: {
        browseLinkText: 'Browse',
        msgAfterBrowseText: ', or ',
        msgBeforeBrowseText: 'Drop your File here, ',
        removeAllLinkText: 'Remove All',
        removeAttachmentARIALabel: 'Remove File',
    },
    localeBusyState: {
        msgText: 'Please wait...',
        titleText: 'Busy',
    },
    attachments: [],
    canUploadMultiple: false,
    isBusy: false,
    isCompact: false,
    isDisabled: false,
    shouldShowAttachments: true,
    // onAdd: () => Promise.resolve(),
    // onRemove: () => Promise.resolve(),
    // onRemoveAll: () => Promise.resolve(),
};

export const argTypes = {
    ...genArgType({
        controlType: CONTROL_TYPES[CONTROL_TYPE_NAMES.TEXT],
        description: locale.shared.propDesc.contextCls,
        propName: 'contextCls',
        propType: PROP_TYPES.STRING,
    }),
    // ...genArgType({
    //     controlType: CONTROL_TYPES[CONTROL_TYPE_NAMES.TEXT],
    //     description: locale.shared.propDesc.formId,
    //     propName: 'id',
    //     propType: PROP_TYPES.STRING,
    // }),
    // ...genArgType({
    //     controlType: CONTROL_TYPES[CONTROL_TYPE_NAMES.TEXT],
    //     description: locale.shared.propDesc.formName,
    //     propName: 'name',
    //     propType: PROP_TYPES.STRING,
    // }),
    // ...genArgType({
    //     controlType: CONTROL_TYPES[CONTROL_TYPE_NAMES.TEXT],
    //     description: locale.shared.propDesc.formPlaceholder,
    //     propName: 'placeholder',
    //     propType: PROP_TYPES.STRING,
    // }),
    // ...genArgType({
    //     controlType: CONTROL_TYPES[CONTROL_TYPE_NAMES.TEXT],
    //     description: locale.shared.propDesc.formValue,
    //     propName: 'value',
    //     propType: [PROP_TYPES.STRING, PROP_TYPES.ARRAY, PROP_TYPES.OBJECT],
    // }),
    ...genArgType({
        controlType: CONTROL_TYPES[CONTROL_TYPE_NAMES.BOOL],
        defaultValue: 'false',
        description: 'Set to `true` to allow users to upload multiple files.',
        propName: 'canUploadMultiple',
        propType: PROP_TYPES.BOOL,
    }),
    ...genArgType({
        controlType: CONTROL_TYPES[CONTROL_TYPE_NAMES.BOOL],
        defaultValue: 'false',
        description: locale.shared.propDesc.isBusy,
        propName: 'isBusy',
        propType: PROP_TYPES.BOOL,
    }),
    ...genArgType({
        controlType: CONTROL_TYPES[CONTROL_TYPE_NAMES.BOOL],
        defaultValue: 'false',
        description:
            'Used when working in smaller constraints. **Note:** Compact mode will never render the files attached by the user when `props.attachments` has data.',
        propName: 'isCompact',
        propType: PROP_TYPES.BOOL,
    }),
    ...genArgType({
        controlType: CONTROL_TYPES[CONTROL_TYPE_NAMES.BOOL],
        defaultValue: 'false',
        description: locale.shared.propDesc.isDisabled,
        propName: 'isDisabled',
        propType: PROP_TYPES.BOOL,
    }),
    ...genArgType({
        action: 'add',
        defaultValue: '() => Promise.resolve()',
        // description: 'Handler called when the user clicks on the button.',
        propName: 'onAdd',
        propType: PROP_TYPES.FUNC,
    }),
    ...genArgType({
        action: 'remove',
        defaultValue: '() => Promise.resolve()',
        // description: 'Handler called when the user clicks on the button.',
        propName: 'onRemove',
        propType: PROP_TYPES.FUNC,
    }),
    ...genArgType({
        action: 'removeAll',
        defaultValue: '() => Promise.resolve()',
        // description: 'Handler called when the user clicks on the button.',
        propName: 'onRemoveAll',
        propType: PROP_TYPES.FUNC,
    }),
    ...genArgType({
        description: `Render function for overriding the default busy state icon in the component. ${locale.shared.propDesc.requiresBankaiIcons}`,
        propName: 'renderBusyIcon',
        propType: PROP_TYPES.FUNC,
    }),
    ...genArgType({
        description: `Render function for overriding the default rejected state icon in the component. ${locale.shared.propDesc.requiresBankaiIcons}`,
        propName: 'renderRejectedIcon',
        propType: PROP_TYPES.FUNC,
    }),
    ...genArgType({
        description: `Render function for overriding the default icon in the component. ${locale.shared.propDesc.requiresBankaiIcons}`,
        propName: 'renderUploadIcon',
        propType: PROP_TYPES.FUNC,
    }),
};
