import { useMemo } from 'react';
import {
    Badge,
    BadgeAffirmative,
    BadgeCautionary,
    BadgeDanger,
    BadgeInfo,
} from '@driponfleek/bankai-ui-badges';
import CompPreviewWithOps from './CompPreviewWithOps';
import SourceTokenOps from './SourceTokenOps';

const getBadgePreviewComp = (type) => {
    switch (type) {
        case 'affirmative':
            return BadgeAffirmative;
        case 'cautionary':
            return BadgeCautionary;
        case 'danger':
            return BadgeDanger;
        case 'info':
            return BadgeInfo;
        default:
            return Badge;
    }
};

const BadgeCompPreview = (props) => {
    const { baseCls, variant, dispatch, opsProps, ...rest } = props;
    const variantLowercase = variant?.toLowerCase();
    const valueKey = `badge${variant || ''}SourceColorToken`;
    const handleChange = (value = {}) => {
        if (value?.id) {
            dispatch({
                [valueKey]: value.id,
            });
        }
    };
    const Comp = useMemo(
        () => getBadgePreviewComp(variantLowercase),
        [variantLowercase],
    );
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
            contextCls={`${baseCls}__badge-${
                variant ? `${variantLowercase}-` : ''
            }preview`}
        >
            <Comp>Badge Text</Comp>
        </CompPreviewWithOps>
    );
};

export default BadgeCompPreview;
