import { useState } from 'react';
import {
    genSBBaseCls,
    getMassagedColorVariantData,
} from '@driponfleek/bankai-lib-storybook';
import { getColorData } from './utils/colorVariantsGenGuideUtils';
import SectionCVGForm from './sections/SectionCVGForm';
import SectionCVGVariants from './sections/SectionCVGVariants';
import StoryLayout from '../../../sb-components/layout/StoryLayout';
import { getLocale } from '../../../utils/localeUtils';
import { getDesignersTitle } from '../../../utils/storiesConfigUtils';

// Styles
import './styles/story-color-variants-gen.scss';

const StoryColorVariantsGen = () => {
    const [sourceColor, setSourceColor] = useState('#424b5a');
    const [shouldShowMaxVariants, setShouldShowMaxVariants] = useState(false);
    const baseCls = genSBBaseCls('color-variant-generator');
    const { variants } = getColorData(
        sourceColor,
        shouldShowMaxVariants ? 2 : 5,
    );
    const massagedVariants = getMassagedColorVariantData(variants);
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
                'stories.designers.tools.colorVariantsGenerator.title',
            )}
            subTitle={getDesignersTitle(
                getLocale('stories.designers.tools.categoryTitle'),
            )}
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
