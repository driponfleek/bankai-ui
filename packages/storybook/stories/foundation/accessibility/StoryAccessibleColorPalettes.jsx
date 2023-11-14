import { useState } from 'react';
import { genSBBaseCls } from '@driponfleek/bankai-lib-storybook';
import { getColors } from './utils/guideUtils';
import SectionIntro from './sections/accessible-colors/SectionIntro';
import SectionAccessibleColorsHowTo from './sections/accessible-colors/SectionAccessibleColorsHowTo';
import StoryLayout from '../../../sb-components/layout/StoryLayout';

// Utils
import { getLocale } from '../../../utils/localeUtils';
import {
    getFoundationTitle,
    getIsDarkMode,
} from '../../../utils/storiesConfigUtils';

// Styles
import './styles/guide-accessible-color-palettes.scss';

// TODO: Need to rewrite this story since how we do everything related to colors has changed.
const StoryAccessibleColorPalettes = () => {
    const [isDarkMode, setIsDarkMode] = useState(getIsDarkMode());
    const handleColorSchemeChange = (isNewModeDark) => {
        if (isNewModeDark !== isDarkMode) {
            setIsDarkMode(isNewModeDark);
        }
    };
    const { bgColor, textColor } = getColors(isDarkMode);
    const baseCls = genSBBaseCls('foundation-accessible-color-palettes');

    return (
        <StoryLayout
            contextCls={baseCls}
            title={getLocale(
                'stories.foundation.accessibility.accessibleColorPalettes.title',
            )}
            subTitle={getFoundationTitle(getLocale('titles.accessibility'))}
            onColorSchemeChange={handleColorSchemeChange}
        >
            <SectionIntro />
            <SectionAccessibleColorsHowTo
                baseCls={baseCls}
                textColor={textColor}
                bgColor={bgColor}
            />
        </StoryLayout>
    );
};

export default StoryAccessibleColorPalettes;
