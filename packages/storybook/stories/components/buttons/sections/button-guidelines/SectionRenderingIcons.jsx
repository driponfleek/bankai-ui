import PropTypes from 'prop-types';
import { ButtonSecondary } from '@driponfleek/bankai-ui-buttons';
import { BankaiCirclePlus } from '@driponfleek/bankai-ui-icons';
import {
    ComponentPreviewWithCodeBlock,
    StorySection,
    SectionTitle,
} from '@driponfleek/bankai-lib-storybook';
import { getRenderIconCodeStrModifier } from '../../utils/storyUtils';

const SectionRenderingIcons = (props) => {
    const { btnText } = props;

    return (
        <StorySection>
            <SectionTitle headingLvl={3}>Rendering an Icon</SectionTitle>
            <StorySection>
                <ComponentPreviewWithCodeBlock
                    codeStrModifier={getRenderIconCodeStrModifier}
                    shouldShowCopy={false}
                >
                    <ButtonSecondary
                        text={btnText}
                        renderIcon={BankaiCirclePlus}
                    />
                </ComponentPreviewWithCodeBlock>
            </StorySection>
        </StorySection>
    );
};

SectionRenderingIcons.propTypes = {
    btnText: PropTypes.string,
};

export default SectionRenderingIcons;
