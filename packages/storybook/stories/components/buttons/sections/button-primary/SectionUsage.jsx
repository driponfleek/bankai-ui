// import { LinkButton } from '@driponfleek/bankai-ui-buttons';
import { Paragraph } from '@driponfleek/bankai-ui-typography';
import {
    StorySection,
    SectionTitle,
    // CodeTag,
} from '@driponfleek/bankai-lib-storybook';
// import { linkTo } from '@storybook/addon-links';
import DoAndDoNotDo from '../../../../../sb-components/docblocks/DoAndDoNotDo';
import AdditionalUsageGuidelines from '../../components/AdditionalUsageGuidelines';

// Utils
import { getLocale } from '../../../../../utils/localeUtils';

const SectionUsage = () => {
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
            <SectionTitle>{getLocale('titles.usage')}</SectionTitle>
            <StorySection>
                <Paragraph>
                    Primary Buttons are the powerhouses of your user interface,
                    designed to draw attention to the most critical actions in
                    your application. By using Primary Buttons strategically,
                    you guide users towards key tasks, such as submitting forms,
                    confirming decisions, or initiating primary actions. Their
                    distinct styling and clarity make them ideal for
                    highlighting primary objectives, ensuring that users can
                    readily engage with the most essential functions of your
                    application. Understanding when and how to use Primary
                    Buttons is vital to create a user-friendly and effective
                    interface.
                </Paragraph>
            </StorySection>
            <StorySection>
                <SectionTitle headingLvl={3}>
                    {`Best Practices: ${getLocale('titles.dosAndDoNotDos')}!`}
                </SectionTitle>
                <StorySection>
                    <DoAndDoNotDo doList={doList} doNotDoList={doNotDoList} />
                    <AdditionalUsageGuidelines />
                </StorySection>
            </StorySection>
        </StorySection>
    );
};

export default SectionUsage;
