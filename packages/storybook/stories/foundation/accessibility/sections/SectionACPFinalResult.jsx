import PropTypes from 'prop-types';
import {
    StorySection,
    SectionTitle,
    ColorSwatch,
} from '@driponfleek/bankai-lib-storybook';

// Utils
import { getLocale } from '../../../../utils/localeUtils';

const SectionACPFinalResult = (props) => {
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
                        isFancy
                    />
                    <ColorSwatch
                        mainContent={bgColor.mainContent}
                        color={bgColor.color}
                        metaList={bgColor.metaList}
                        isFancy
                    />
                </div>
            </StorySection>
        </StorySection>
    );
};

SectionACPFinalResult.propTypes = {
    baseCls: PropTypes.string,
    bgColor: PropTypes.object,
    recommendedColor: PropTypes.object,
};

export default SectionACPFinalResult;
