import { useMemo } from 'react';
import {
    Banner,
    BannerAffirmative,
    BannerCautionary,
    BannerDanger,
    BannerInfo,
} from '@driponfleek/bankai-ui-callouts';
import {
    BankaiCircleCheck,
    BankaiCircleInfo,
    BankaiTriangleAlert,
    BankaiUser,
} from '@driponfleek/bankai-ui-icons';
import CompPreviewWithOps from './CompPreviewWithOps';
import SourceTokenOps from './SourceTokenOps';

const getPreviewComp = (type) => {
    switch (type) {
        case 'affirmative':
            return BannerAffirmative;
        case 'cautionary':
            return BannerCautionary;
        case 'danger':
            return BannerDanger;
        case 'info':
            return BannerInfo;
        default:
            return Banner;
    }
};

const getIcon = (type) => {
    switch (type) {
        case 'affirmative':
            return BankaiCircleCheck;
        case 'cautionary':
        case 'danger':
            return BankaiTriangleAlert;
        case 'info':
            return BankaiCircleInfo;
        default:
            return BankaiUser;
    }
};

const BannerCompPreview = (props) => {
    const { baseCls, variant, dispatch, opsProps, ...rest } = props;
    const variantLowercase = variant?.toLowerCase();
    const valueKey = `banner${variant || ''}SourceColorToken`;
    const handleChange = (value = {}) => {
        if (value?.id) {
            dispatch({
                [valueKey]: value.id,
            });
        }
    };
    const Comp = useMemo(
        () => getPreviewComp(variantLowercase),
        [variantLowercase],
    );
    const Icon = useMemo(() => getIcon(variantLowercase), [variantLowercase]);
    const sourceTokenVal = useMemo(
        () =>
            opsProps?.sourceTokenOps.find(
                (token) => token.id === opsProps?.value,
            ),
        [opsProps],
    );
    const previewProps = {
        ...rest,
        ...(variant && {
            renderOps: SourceTokenOps,
            opsProps: {
                ...opsProps,
                onChange: handleChange,
                value: sourceTokenVal,
            },
        }),
    };

    return (
        <CompPreviewWithOps
            {...previewProps}
            contextCls={`${baseCls}__banner-${
                variant ? `${variantLowercase}-` : ''
            }preview`}
        >
            <Comp
                renderIcon={Icon}
                title="Banner Title"
                msg="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
        </CompPreviewWithOps>
    );
};

export default BannerCompPreview;
