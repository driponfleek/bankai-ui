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
