import { useState } from 'react';
import { ButtonSecondary } from '@driponfleek/bankai-ui-buttons';
import { BankaiCirclePlus } from '@driponfleek/bankai-ui-icons';
import { Paragraph } from '@driponfleek/bankai-ui-typography';
import { StorySection, SectionTitle } from '@driponfleek/bankai-lib-storybook';
import ComponentPreviewWithCodeBlock from '../../../../../sb-components/docblocks/ComponentPreviewWithCodeBlock';

// Utils
import { getDynamicTextCodeStrModifier } from '../../utils/storyUtils';

/**
 * @param {Object} props
 * @param {string} [props.btnText] - Default button label text shown when the button is not in a busy state
 */
const SectionAccessibilityDynamicText = (props) => {
    const { btnText } = props;
    const [isDynamicTextBtnBusy, setIsDynamicTextBtnBusy] = useState(false);
    const handleDynamicTextBtnClick = () => {
        setIsDynamicTextBtnBusy(true);
        setTimeout(() => {
            setIsDynamicTextBtnBusy(false);
        }, 1800);
    };
    const dynamicTextBtnText = isDynamicTextBtnBusy
        ? 'Busy Doing Stuff'
        : btnText;

    return (
        <StorySection>
            <SectionTitle headingLvl={3}>Dynamic Text</SectionTitle>
            <StorySection>
                <Paragraph>
                    Assigning different text to a button during disabled or busy
                    states serves a dual purpose of enhancing both visual and
                    auditory user experiences. For users who rely on screen
                    readers, the dynamic text changes provide clear and
                    informative announcements, ensuring accessibility.
                    Simultaneously, users with visual capabilities benefit from
                    the visual cues, gaining insight into why the button is
                    temporarily inactive or processing a request. This
                    thoughtful approach to button text modification ensures a
                    more inclusive and comprehensible user interface.
                </Paragraph>
                <ComponentPreviewWithCodeBlock
                    codeStrModifier={getDynamicTextCodeStrModifier}
                    shouldShowCopy={false}
                >
                    <ButtonSecondary
                        text={dynamicTextBtnText}
                        renderIcon={BankaiCirclePlus}
                        isBusy={isDynamicTextBtnBusy}
                        onClick={handleDynamicTextBtnClick}
                        isDynamicText
                    />
                </ComponentPreviewWithCodeBlock>
            </StorySection>
        </StorySection>
    );
};

export default SectionAccessibilityDynamicText;
