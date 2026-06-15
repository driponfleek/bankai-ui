import {
    StorySection,
    SectionTitle,
    ColorSwatch,
} from '@driponfleek/bankai-lib-storybook';

// Utils
import { getLocale } from '../../../../../utils/localeUtils';

/**
 * @param {Object} props
 * @param {string} [props.baseCls] - Base BEM class applied to the colors container
 * @param {Object} [props.bgColor] - Background color swatch data object
 * @param {Object} [props.recommendedColor] - Recommended accessible text color swatch data object
 */
const SectionFinalResult = (props) => {
    const { baseCls, bgColor, recommendedColor } = props;

    return (
        <StorySection>
            <SectionTitle headingLvl={3}>
                {getLocale(
                    'stories.foundation.accessibility.accessibleColorPalettes.sectionTitles.finalResult',
                )}
            </SectionTitle>
            <StorySection>
                <div className={`${baseCls}__bg-and-text-colors-container`}>
                    <ColorSwatch
                        mainContent={recommendedColor.mainContent}
                        color={recommendedColor.color}
                        metaList={recommendedColor.metaList}
                        isCard
                    />
                    <ColorSwatch
                        mainContent={bgColor.mainContent}
                        color={bgColor.color}
                        metaList={bgColor.metaList}
                        isCard
                    />
                </div>
            </StorySection>
        </StorySection>
    );
};

export default SectionFinalResult;
