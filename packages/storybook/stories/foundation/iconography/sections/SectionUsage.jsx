import { StorySection, SectionTitle } from '@driponfleek/bankai-lib-storybook';
import SectionWhenToAvoid from './SectionWhenToAvoid';
import SectionWhenToUse from './SectionWhenToUse';

// Utils
import { getLocale } from '../../../../utils/localeUtils';

const SectionUsage = () => {
    return (
        <StorySection>
            <SectionTitle>{getLocale('titles.usage')}</SectionTitle>
            <SectionWhenToUse />
            <SectionWhenToAvoid />
        </StorySection>
    );
};

export default SectionUsage;
