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

/**
 * @param {Object} props
 * @param {string} [props.baseCls] - Base BEM class used to scope the badge preview container
 * @param {string} [props.variant] - Badge variant name; determines the badge component and source token key
 * @param {Function} [props.dispatch] - Reducer dispatch used to update the source color token on change
 * @param {Object} [props.opsProps] - Props forwarded to the SourceTokenOps controls
 */
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
