// import { LinkButton } from '@driponfleek/bankai-ui-buttons';
import {
    StorySection,
    SectionTitle,
    // CodeTag,
} from '@driponfleek/bankai-lib-storybook';
// import { linkTo } from '@storybook/addon-links';
import SectionWhenToUse from './SectionWhenToUse';
import SectionWhenToAvoid from './SectionWhenToAvoid';
import SectionDestructiveVariant from './SectionDestructiveVariant';

// Utils
import { getLocale } from '../../../../../utils/localeUtils';

// TODO: Need to add destructive button
const SectionUsage = () => {
    return (
        <StorySection>
            <SectionTitle>{getLocale('titles.usage')}</SectionTitle>
            {/* <StorySection>
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
            </StorySection> */}
            <SectionWhenToUse />
            <SectionWhenToAvoid />
            <SectionDestructiveVariant />
        </StorySection>
    );
};

export default SectionUsage;
