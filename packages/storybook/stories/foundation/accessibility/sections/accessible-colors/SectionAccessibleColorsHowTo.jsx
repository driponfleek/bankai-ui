import PropTypes from 'prop-types';
import { Paragraph } from '@driponfleek/bankai-ui-typography';
import {
    StorySection,
    SectionTitle,
    ColorSwatch,
} from '@driponfleek/bankai-lib-storybook';
import SectionStep1 from './SectionAccessibleColorsHowToS1';
import SectionStep2 from './SectionAccessibleColorsHowToS2';
import SectionStep3 from './SectionAccessibleColorsHowToS3';

// Const
import SectionFinalResult from './SectionFinalResult';
import { getHowWeGetAccessibleColorsData } from '../../utils/guideUtils';
import {
    TEXT_COLOR_NAME,
    BG_COLOR_NAME,
    TEXT_CONTRAST_RATIO,
} from '../../const/guideConst';

// Utils
import { getLocale } from '../../../../../utils/localeUtils';

const SectionAccessibleColorsHowTo = (props) => {
    const { baseCls, bgColor, textColor } = props;
    const {
        bgColorDataMassaged,
        contrastRatio,
        textColorAndVariantsMassaged,
        textColorVariantsWithContrast,
        variantsSanitized,
        recommendedColor,
    } = getHowWeGetAccessibleColorsData(bgColor, textColor);

    return (
        <StorySection>
            <SectionTitle>
                {getLocale(
                    'stories.foundation.accessibility.accessibleColorPalettes.sectionTitles.howWeGetAccessibleColors',
                )}
            </SectionTitle>
            <StorySection>
                <Paragraph>
                    Let&apos;s say we want to use the following Text and
                    Background colors:
                </Paragraph>
                <div className={`${baseCls}__bg-and-text-colors-container`}>
                    <ColorSwatch
                        mainContent={TEXT_COLOR_NAME}
                        color={textColor}
                        metaList={[textColor]}
                        isCard
                    />
                    <ColorSwatch
                        mainContent={BG_COLOR_NAME}
                        color={bgColor}
                        metaList={[bgColor]}
                        isCard
                    />
                </div>
                <Paragraph>
                    The text and background color must have a{' '}
                    <strong>{TEXT_CONTRAST_RATIO}</strong> contrast ratio to
                    pass WCAG AA compliance. When we test the Text color against
                    the Background color we get:
                </Paragraph>
                <Paragraph contextCls={`${baseCls}__eval-result`}>
                    Contrast Ratio:{' '}
                    <strong className={`${baseCls}--negative`}>
                        {contrastRatio}
                    </strong>
                </Paragraph>
                <Paragraph>
                    Since this fails the minimum requirement we&apos;ll create
                    variants of the Text color to give us more options to pick
                    from.
                </Paragraph>
            </StorySection>
            <SectionStep1
                preferredColorAndVariants={textColorAndVariantsMassaged}
            />
            <SectionStep2
                colorData={{
                    preferred: bgColorDataMassaged,
                    variants: textColorVariantsWithContrast,
                }}
                variantsSanitized={variantsSanitized}
            />
            <SectionStep3
                baseCls={baseCls}
                bgColor={bgColorDataMassaged}
                colorData={{
                    preferred: textColorAndVariantsMassaged.baseColor,
                    variants: variantsSanitized,
                }}
            />
            <SectionFinalResult
                baseCls={baseCls}
                bgColor={bgColorDataMassaged}
                preferredColor={textColorAndVariantsMassaged.baseColor}
                recommendedColor={recommendedColor}
            />
        </StorySection>
    );
};

SectionAccessibleColorsHowTo.propTypes = {
    baseCls: PropTypes.string,
    bgColor: PropTypes.string,
    textColor: PropTypes.string,
};

export default SectionAccessibleColorsHowTo;
