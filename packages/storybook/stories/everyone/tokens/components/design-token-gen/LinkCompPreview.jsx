import { useMemo } from 'react';
import { Hyperlink } from '@driponfleek/bankai-ui-navigation';
import CompPreviewWithOps from './CompPreviewWithOps';
import SourceTokenOps from './SourceTokenOps';

const LinkCompPreview = (props) => {
    const { baseCls, opsProps, dispatch, ...rest } = props;
    const handleChange = (value = {}) => {
        if (value?.id) {
            dispatch({ linkSourceColorToken: value.id });
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
            contextCls={`${baseCls}__link-preview`}
            renderOps={SourceTokenOps}
            opsProps={{ ...opsProps, onChange: handleChange, value: opsVal }}
        >
            <Hyperlink href="#">Link Text</Hyperlink>
        </CompPreviewWithOps>
    );
};

export default LinkCompPreview;
