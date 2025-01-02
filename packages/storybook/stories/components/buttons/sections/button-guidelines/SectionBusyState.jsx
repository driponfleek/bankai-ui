import { ButtonSecondary } from '@driponfleek/bankai-ui-buttons';
import { Paragraph } from '@driponfleek/bankai-ui-typography';
import {
    ComponentPreviewWithCodeBlock,
    StorySection,
    SectionTitle,
} from '@driponfleek/bankai-lib-storybook';

const SectionBusyState = () => {
    return (
        <StorySection>
            <SectionTitle headingLvl={3}>When to Use Busy State</SectionTitle>
            <StorySection>
                <Paragraph>
                    When a button triggers a process or action that takes time,
                    consider using the busy state to indicate ongoing activity.
                    This helps manage user expectations during loading or
                    processing periods.
                </Paragraph>
                <ComponentPreviewWithCodeBlock shouldShowCopy={false}>
                    <ButtonSecondary text="Saving" isBusy isDynamicText />
                </ComponentPreviewWithCodeBlock>
            </StorySection>
        </StorySection>
    );
};

export default SectionBusyState;
