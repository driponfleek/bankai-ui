import { useState, useMemo } from 'react';
import { genSBBaseCls } from '@driponfleek/bankai-lib-storybook';
import { CORE_COLOR_NEUTRAL_SEED_DEFAULT } from '@driponfleek/bankai-lib-theme-utils';
import { getColorVariants } from './utils/colorVariantsGenStoryUtils';
import { STORY_SUB_TITLE } from './const/storyConst';
import SectionCVGForm from './sections/color-variant-generator/SectionForm';
import SectionCVGVariants from './sections/color-variant-generator/SectionVariants';
import StoryLayout from '../../../sb-components/layout/StoryLayout';
import { getLocale } from '../../../utils/localeUtils';

// Styles
import './styles/story-color-variants-gen.scss';

const StoryColorVariantsGen = () => {
    const [sourceColor, setSourceColor] = useState(
        CORE_COLOR_NEUTRAL_SEED_DEFAULT,
    );
    const [shouldShowMaxVariants, setShouldShowMaxVariants] = useState(false);
    const baseCls = genSBBaseCls('color-variant-generator');
    const massagedVariants = useMemo(
        () => getColorVariants(sourceColor, shouldShowMaxVariants ? 1 : 5),
        [sourceColor, shouldShowMaxVariants],
    );
    const handleToggleChange = () => {
        setShouldShowMaxVariants(!shouldShowMaxVariants);
    };
    const handleColorChange = (val) => {
        setSourceColor(val);
    };

    return (
        <StoryLayout
            contextCls={baseCls}
            title={getLocale(
                'stories.designers.workingWithColor.colorVariantsGenerator.title',
            )}
            subTitle={STORY_SUB_TITLE}
        >
            <SectionCVGForm
                baseCls={baseCls}
                sourceColor={sourceColor}
                shouldShowMaxVariants={shouldShowMaxVariants}
                onColorChange={handleColorChange}
                onToggleChange={handleToggleChange}
            />
            <SectionCVGVariants
                contextCls={`${baseCls}__variants-list`}
                variants={massagedVariants}
            />
        </StoryLayout>
    );
};

export default StoryColorVariantsGen;
