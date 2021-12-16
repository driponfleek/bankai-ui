import {
    IMG_FILE_TYPES,
    genFileTypeMeta,
} from '@epr0t0type/bankai-ui-form-elements';
import { stringArg, boolArg, funcArg } from '../../../../utils/argTypesUtils';

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
        INVALID_FILE_TYPES: {
            msgText: 'File must be JPG or PNG format',
            titleText: 'Invalid File',
        },
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
    ...stringArg({
        description: locale.shared.propDesc.contextCls,
        propName: 'contextCls',
    }),
    ...boolArg({
        defaultValue: 'false',
        description: 'Set to `true` to allow users to upload multiple files.',
        propName: 'canUploadMultiple',
    }),
    ...boolArg({
        defaultValue: 'false',
        description: locale.shared.propDesc.isBusy,
        propName: 'isBusy',
    }),
    ...boolArg({
        defaultValue: 'false',
        description:
            'Used when working in smaller constraints. **Note:** Compact mode will never render the files attached by the user when `props.attachments` has data.',
        propName: 'isCompact',
    }),
    ...boolArg({
        defaultValue: 'false',
        description: locale.shared.propDesc.isDisabled,
        propName: 'isDisabled',
    }),
    ...funcArg({
        action: 'add',
        defaultValue: '() => Promise.resolve()',
        // description: '',
        propName: 'onAdd',
    }),
    ...funcArg({
        action: 'remove',
        defaultValue: '() => Promise.resolve()',
        // description: '',
        propName: 'onRemove',
    }),
    ...funcArg({
        action: 'removeAll',
        defaultValue: '() => Promise.resolve()',
        // description: '',
        propName: 'onRemoveAll',
    }),
    ...funcArg({
        description: `Render function for overriding the default busy state icon in the component. ${locale.shared.propDesc.requiresBankaiIcons}`,
        propName: 'renderBusyIcon',
    }),
    ...funcArg({
        description: `Render function for overriding the default rejected state icon in the component. ${locale.shared.propDesc.requiresBankaiIcons}`,
        propName: 'renderRejectedIcon',
    }),
    ...funcArg({
        description: `Render function for overriding the default icon in the component. ${locale.shared.propDesc.requiresBankaiIcons}`,
        propName: 'renderUploadIcon',
    }),
};
