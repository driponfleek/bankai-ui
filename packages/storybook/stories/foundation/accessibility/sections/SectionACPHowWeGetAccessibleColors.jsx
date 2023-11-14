import PropTypes from 'prop-types';
import { Paragraph } from '@driponfleek/bankai-ui-typography';
import {
    StorySection,
    SectionTitle,
    ColorSwatch,
} from '@driponfleek/bankai-lib-storybook';
import SectionACPStep1 from './SectionACPStep1';
import SectionACPStep2 from './SectionACPStep2';
import SectionACPStep3 from './SectionACPStep3';
import SectionACPFinalResult from './SectionACPFinalResult';

// Const
import { getHowWeGetAccessibleColorsData } from '../utils/guideUtils';
import {
    TEXT_COLOR_NAME,
    BG_COLOR_NAME,
    TEXT_CONTRAST_RATIO,
} from '../const/guideConst';

// Utils
import { getLocale } from '../../../../utils/localeUtils';

const SectionACPHowWeGetAccessibleColors = (props) => {
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
                        isFancy
                    />
                    <ColorSwatch
                        mainContent={BG_COLOR_NAME}
                        color={bgColor}
                        metaList={[bgColor]}
                        isFancy
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
            <SectionACPStep1
                preferredColorAndVariants={textColorAndVariantsMassaged}
            />
            <SectionACPStep2
                colorData={{
                    preferred: bgColorDataMassaged,
                    variants: textColorVariantsWithContrast,
                }}
                variantsSanitized={variantsSanitized}
            />
            <SectionACPStep3
                baseCls={baseCls}
                bgColor={bgColorDataMassaged}
                colorData={{
                    preferred: textColorAndVariantsMassaged.preferred,
                    variants: variantsSanitized,
                }}
            />
            <SectionACPFinalResult
                baseCls={baseCls}
                bgColor={bgColorDataMassaged}
                preferredColor={textColorAndVariantsMassaged.preferred}
                recommendedColor={recommendedColor}
            />
        </StorySection>
    );
};

SectionACPHowWeGetAccessibleColors.propTypes = {
    baseCls: PropTypes.string,
    bgColor: PropTypes.string,
    textColor: PropTypes.string,
};

export default SectionACPHowWeGetAccessibleColors;
