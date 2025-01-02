import {
    ButtonSecondary,
    ButtonText,
    ButtonIcon,
} from '@driponfleek/bankai-ui-buttons';
import { BankaiChevronRight } from '@driponfleek/bankai-ui-icons';
import {
    ComponentPreviewWithCodeBlock,
    StorySection,
    SectionTitle,
} from '@driponfleek/bankai-lib-storybook';
import { getRenderCustomContentCodeStrModifier } from '../../utils/storyUtils';

const SectionRenderingCustomContent = () => {
    return (
        <StorySection>
            <SectionTitle headingLvl={3}>Rendering Custom Content</SectionTitle>
            <StorySection>
                <ComponentPreviewWithCodeBlock
                    codeStrModifier={getRenderCustomContentCodeStrModifier}
                    shouldShowCopy={false}
                >
                    <ButtonSecondary>
                        <ButtonText>(∩^o^)⊃━☆゜.* Magic!</ButtonText>
                        <ButtonIcon renderIcon={BankaiChevronRight} />
                    </ButtonSecondary>
                </ComponentPreviewWithCodeBlock>
            </StorySection>
        </StorySection>
    );
};

export default SectionRenderingCustomContent;
