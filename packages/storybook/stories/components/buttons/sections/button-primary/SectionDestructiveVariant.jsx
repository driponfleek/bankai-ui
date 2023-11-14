import { ButtonPrimary } from '@driponfleek/bankai-ui-buttons';
import { Paragraph } from '@driponfleek/bankai-ui-typography';
import {
    ComponentPreviewWithCodeBlock,
    StorySection,
    SectionTitle,
} from '@driponfleek/bankai-lib-storybook';
import DestructiveButtonUsage from '../../components/DestructiveButtonUsage';

const SectionDestructiveVariant = () => {
    return (
        <StorySection>
            <SectionTitle headingLvl={3}>
                Primary Destructive Buttons
            </SectionTitle>
            <StorySection>
                <ComponentPreviewWithCodeBlock shouldShowCopy={false}>
                    <ButtonPrimary text="Delete" isDestructive />
                </ComponentPreviewWithCodeBlock>
                <DestructiveButtonUsage />
                <Paragraph>
                    Reserve the primary destructive button for actions of utmost
                    importance, where the primary emphasis is on this
                    destructive operation. This button signals to users that the
                    associated action carries significant consequences, aligning
                    its prominence with the critical nature of the task.
                </Paragraph>
            </StorySection>
        </StorySection>
    );
};

export default SectionDestructiveVariant;
