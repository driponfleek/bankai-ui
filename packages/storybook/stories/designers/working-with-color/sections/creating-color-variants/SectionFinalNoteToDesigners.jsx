import { Paragraph } from '@driponfleek/bankai-ui-typography';
import { StorySection, SectionTitle } from '@driponfleek/bankai-lib-storybook';
import { getLocale } from '../../../../../utils/localeUtils';

const SectionFinalNoteToDesigners = () => (
    <StorySection>
        <SectionTitle>
            {getLocale(
                'stories.designers.workingWithColor.creatingColorVariants.sectionTitles.finalNoteToDesigners',
            )}
        </SectionTitle>
        <Paragraph>
            If you want a cooler or warmer tone, or a more muted or vibrant
            color, simply choose a base color that reflects that intent. Our
            system ensures the lighter and darker variants stay true to your
            chosen color while making them accessible and easy to use.
        </Paragraph>
    </StorySection>
);

export default SectionFinalNoteToDesigners;
