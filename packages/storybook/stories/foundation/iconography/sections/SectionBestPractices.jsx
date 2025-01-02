import { StorySection, SectionTitle } from '@driponfleek/bankai-lib-storybook';
import SectionIconPlacement from './SectionIconPlacement';
import SectionIntuitiveIcons from './SectionIntuitiveIcons';

// Utils
import { getLocale } from '../../../../utils/localeUtils';

const SectionBestPractices = () => {
    return (
        <StorySection>
            <SectionTitle>{getLocale('titles.bestPracices')}</SectionTitle>
            <SectionIntuitiveIcons />
            <SectionIconPlacement />
        </StorySection>
    );
};

export default SectionBestPractices;
