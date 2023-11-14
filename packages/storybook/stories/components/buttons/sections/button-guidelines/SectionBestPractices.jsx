import { Paragraph } from '@driponfleek/bankai-ui-typography';
import { StorySection, SectionTitle } from '@driponfleek/bankai-lib-storybook';
import SectionBusyState from './SectionBusyState';
import SectionDoAndDoNotDo from './SectionDoAndDoNotDo';
import SectionIconConsiderations from './SectionIconConsiderations';
import SectionIconPlacement from './SectionIconPlacement';
import SectionDisabledButtons from './SectionDisabledButtons';

// Utils
import { getLocale } from '../../../../../utils/localeUtils';

const SectionBestPractices = () => {
    return (
        <StorySection>
            <SectionTitle>{getLocale('titles.bestPracices')}</SectionTitle>
            <StorySection>
                <Paragraph>
                    These guidelines are designed to help you create buttons
                    that are both aesthetically pleasing and functional. By
                    following these best practices, you contribute to a
                    consistent, accessible, and user-centric design that
                    seamlessly guides users through your application.
                </Paragraph>
            </StorySection>
            <SectionIconPlacement />
            <SectionIconConsiderations />
            <SectionDoAndDoNotDo />
            <SectionDisabledButtons />
            <SectionBusyState />
        </StorySection>
    );
};

export default SectionBestPractices;
