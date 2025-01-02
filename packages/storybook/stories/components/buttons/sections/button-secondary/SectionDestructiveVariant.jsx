import { ButtonSecondary } from '@driponfleek/bankai-ui-buttons';
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
                Secondary Destructive Buttons
            </SectionTitle>
            <StorySection>
                <ComponentPreviewWithCodeBlock shouldShowCopy={false}>
                    <ButtonSecondary text="Delete" isDestructive />
                </ComponentPreviewWithCodeBlock>
                <DestructiveButtonUsage />
                <Paragraph>
                    Opt for the secondary destructive button when the primary
                    focus is on a different action, but there is still a need
                    for users to confirm a potentially risky operation. This
                    maintains consistency while allowing users to distinguish
                    between the primary and secondary actions based on their
                    importance in the overall user experience.
                </Paragraph>
            </StorySection>
        </StorySection>
    );
};

export default SectionDestructiveVariant;
