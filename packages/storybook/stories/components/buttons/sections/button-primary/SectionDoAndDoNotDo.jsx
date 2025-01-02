import { StorySection, SectionTitle } from '@driponfleek/bankai-lib-storybook';
import DoAndDoNotDo from '../../../../../sb-components/docblocks/DoAndDoNotDo';
import AdditionalUsageGuidelines from '../../components/AdditionalUsageGuidelines';

// Utils
import { getLocale } from '../../../../../utils/localeUtils';

const SectionDoAndDoNotDo = () => {
    const doList = [
        <>
            <strong>Do Use for Key Actions&#58;</strong> Use the Primary Button
            for the most critical and primary actions within your application.
            It should be reserved for actions that are of the utmost importance,
            such as submitting forms or confirming significant decisions.
        </>,
        <>
            <strong>Do Maintain Consistency&#58;</strong> Keep the usage of the
            Primary Button consistent throughout your application. Consistency
            reinforces its significance and helps users identify important
            actions.
        </>,
    ];
    const doNotDoList = [
        <>
            <strong>Do Not Overuse&#58;</strong> Avoid overusing the Primary
            Button for every action or link within your application. Overusing
            it can dilute its significance and confuse users. Reserve it for
            actions that truly deserve emphasis.
        </>,
    ];

    return (
        <StorySection>
            <SectionTitle headingLvl={3}>
                {getLocale('titles.dosAndDoNotDos')}
            </SectionTitle>
            <StorySection>
                <DoAndDoNotDo doList={doList} doNotDoList={doNotDoList} />
                <AdditionalUsageGuidelines />
            </StorySection>
        </StorySection>
    );
};

export default SectionDoAndDoNotDo;
