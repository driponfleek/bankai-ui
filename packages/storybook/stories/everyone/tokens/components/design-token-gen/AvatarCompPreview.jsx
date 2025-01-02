import { Avatar } from '@driponfleek/bankai-ui-avatars';
import CompPreviewWithOps from './CompPreviewWithOps';
import AvatarCompOps from './AvatarCompOps';

const AvatarCompPreview = (props) => {
    const { baseCls } = props;

    return (
        <CompPreviewWithOps
            {...props}
            contextCls={`${baseCls}__avatar-preview`}
            renderOps={AvatarCompOps}
        >
            <Avatar>DY</Avatar>
        </CompPreviewWithOps>
    );
};

export default AvatarCompPreview;
