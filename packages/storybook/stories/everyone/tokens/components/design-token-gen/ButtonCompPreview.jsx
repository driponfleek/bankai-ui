import { useMemo } from 'react';
import {
    Button,
    ButtonPrimary,
    ButtonSecondary,
} from '@driponfleek/bankai-ui-buttons';
import CompPreviewWithOps from './CompPreviewWithOps';
import ButtonOps from './ButtonOps';

const getButtonPreviewComp = (type) => {
    switch (type) {
        case 'primary':
            return ButtonPrimary;
        case 'secondary':
            return ButtonSecondary;
        default:
            return Button;
    }
};

/**
 * @param {Object} props
 * @param {string} [props.baseCls] - Base BEM class used to scope the button preview container
 * @param {string} [props.variant] - Button variant name; determines the button component and token key
 * @param {Function} [props.dispatch] - Reducer dispatch used to update source token and style on change
 * @param {Object} [props.opsProps] - Props forwarded to the ButtonOps controls
 * @param {boolean} [props.isDestructive] - When true, renders the button in destructive mode and adjusts the token key
 */
const ButtonCompPreview = (props) => {
    const {
        baseCls,
        variant,
        dispatch,
        opsProps,
        isDestructive = false,
        ...rest
    } = props;
    const {
        sourceTokenOps = [],
        sourceTokenValue,
        styleOps = [],
        styleValue,
    } = opsProps ?? {};
    const variantLowercase = variant?.toLowerCase();
    const valueKey = `button${variant || ''}${
        isDestructive ? 'Destructive' : ''
    }`;
    const sourceTokenValueKey = `${valueKey}SourceColorToken`;
    const styleValueKey = `${valueKey}Style`;
    const handleSourceTokenChange = (value = {}) => {
        if (value?.id) {
            dispatch({
                [sourceTokenValueKey]: value.id,
            });
        }
    };
    const handleStyleChange = (value = {}) => {
        if (value?.id) {
            dispatch({
                [styleValueKey]: value.id,
            });
        }
    };
    const Comp = useMemo(
        () => getButtonPreviewComp(variantLowercase),
        [variantLowercase],
    );
    const sourceTokenVal = useMemo(
        () => sourceTokenOps.find((token) => token.id === sourceTokenValue),
        [sourceTokenOps, sourceTokenValue],
    );
    const styleVal = useMemo(
        () => styleOps.find((token) => token.id === styleValue),
        [styleOps, styleValue],
    );
    const previewProps = {
        ...rest,
        ...(variant && {
            renderOps: ButtonOps,
            opsProps: {
                ...opsProps,
                sourceTokenValue: sourceTokenVal,
                styleValue: styleVal,
                onSourceTokenChange: handleSourceTokenChange,
                onStyleChange: handleStyleChange,
            },
        }),
    };

    return (
        <CompPreviewWithOps
            {...previewProps}
            contextCls={`${baseCls}__button${
                variant ? `-${variantLowercase}` : ''
            }${isDestructive ? `-destructive` : ''}-preview`}
        >
            <Comp text="Button Text" isDestructive={isDestructive} />
        </CompPreviewWithOps>
    );
};

export default ButtonCompPreview;
