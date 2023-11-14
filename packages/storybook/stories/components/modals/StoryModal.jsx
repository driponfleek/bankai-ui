import { useState } from 'react';
import { genSBBaseCls } from '@driponfleek/bankai-lib-storybook';
import { STORY_SUB_TITLE, PKG_JSON } from './const/storyConst';
import SectionPlayground from './sections/modal/SectionPlayground';
import StoryLayout from '../../../sb-components/layout/StoryLayout';

// Utils
import { getLocale } from '../../../utils/localeUtils';

const StoryModal = (props) => {
    const baseCls = genSBBaseCls('modal');
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => {
        setIsOpen(true);
    };
    const handleExit = () => {
        setIsOpen(false);
    };

    return (
        <StoryLayout
            contextCls={baseCls}
            pkgVer={PKG_JSON.version}
            title={getLocale('stories.components.modals.modal.title')}
            subTitle={STORY_SUB_TITLE}
        >
            <SectionPlayground
                {...props}
                isOpen={isOpen}
                onModalBtnClick={handleClick}
                onExit={handleExit}
            />
        </StoryLayout>
    );
};

export default StoryModal;
