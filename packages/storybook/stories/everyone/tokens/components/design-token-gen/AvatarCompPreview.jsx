import { useMemo } from 'react';
import { Avatar } from '@driponfleek/bankai-ui-avatars';
import CompPreviewWithOps from './CompPreviewWithOps';
import SourceTokenOps from './SourceTokenOps';

const AvatarCompPreview = (props) => {
    const { baseCls, opsProps, dispatch, ...rest } = props;
    const handleChange = (value = {}) => {
        if (value?.id) {
            dispatch({ avatarSourceColorToken: value.id });
        }
    };
    const opsVal = useMemo(
        () =>
            opsProps?.sourceTokenOps.find(
                (token) => token.id === opsProps?.value,
            ),
        [opsProps],
    );

    return (
        <CompPreviewWithOps
            {...rest}
            contextCls={`${baseCls}__avatar-preview`}
            renderOps={SourceTokenOps}
            opsProps={{ ...opsProps, onChange: handleChange, value: opsVal }}
        >
            <Avatar>DY</Avatar>
        </CompPreviewWithOps>
    );
};

export default AvatarCompPreview;
