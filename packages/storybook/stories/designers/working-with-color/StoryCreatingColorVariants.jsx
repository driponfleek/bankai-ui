import { genSBBaseCls } from '@driponfleek/bankai-lib-storybook';
import { STORY_SUB_TITLE } from './const/storyConst';
import SectionIntro from './sections/creating-color-variants/SectionIntro';
import SectionWhyLCH from './sections/creating-color-variants/SectionWhyLCH';
import SectionHowWeGenerateVariants from './sections/creating-color-variants/SectionHowWeGenerateVariants';
import SectionFinalNoteToDesigners from './sections/creating-color-variants/SectionFinalNoteToDesigners';
import SectionFurtherReading from './sections/creating-color-variants/SectionFurtherReading';
import StoryLayout from '../../../sb-components/layout/StoryLayout';
import { getLocale } from '../../../utils/localeUtils';

// Styles
import './styles/story-color-variants-gen.scss';

const StoryCreatingColorVariants = () => {
    const baseCls = genSBBaseCls('creating-color-variants');

    return (
        <StoryLayout
            contextCls={baseCls}
            title={getLocale(
                'stories.designers.workingWithColor.creatingColorVariants.title',
            )}
            subTitle={STORY_SUB_TITLE}
        >
            <SectionIntro />
            <SectionWhyLCH />
            <SectionHowWeGenerateVariants />
            <SectionFinalNoteToDesigners />
            <SectionFurtherReading />
        </StoryLayout>
    );
};

export default StoryCreatingColorVariants;
