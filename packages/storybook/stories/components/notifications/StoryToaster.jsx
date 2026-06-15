import { useRef } from 'react';
import { genSBBaseCls } from '@driponfleek/bankai-lib-storybook';
import { toasterInit } from './utils/toasterStoryUtils';
import { STORY_SUB_TITLE, PKG_JSON } from './const/storyConst';
import SectionPlayground from './sections/SectionPlayground';
import StoryLayout from '../../../sb-components/layout/StoryLayout';

// Utils
import { getLocale } from '../../../utils/localeUtils';

/**
 * @param {Object} props
 * @param {Function} [props.onClose] - Called with toaster props when the toaster is closed
 */
const StoryToaster = (props) => {
    const { onClose } = props;
    const baseCls = genSBBaseCls('status-modal');
    const toastId = useRef(undefined);
    const handleCloseToaster = () => {
        toastId.current = undefined;
    };
    const handleCloseDemoPlaygroundToaster = ({ data: toasterProps }) => {
        onClose(toasterProps);
        handleCloseToaster();
    };
    const handleShowToaster = ({ data: toasterProps }) => {
        toastId.current = toasterInit(
            toasterProps,
            toastId.current,
            handleCloseToaster,
        );
    };

    return (
        <StoryLayout
            contextCls={baseCls}
            pkgVer={PKG_JSON.version}
            title={getLocale('stories.components.notifications.toaster.title')}
            subTitle={STORY_SUB_TITLE}
        >
            <SectionPlayground
                {...props}
                onClick={handleShowToaster}
                onClose={handleCloseDemoPlaygroundToaster}
            />
        </StoryLayout>
    );
};

export default StoryToaster;
