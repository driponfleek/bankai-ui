// import { Paragraph } from '@driponfleek/bankai-ui-typography';
import { StorySection, SectionTitle } from '@driponfleek/bankai-lib-storybook';
import SectionWhenToUse from './SectionWhenToUse';
import SectionWhenToAvoid from './SectionWhenToAvoid';
import SectionRenderingIcons from './SectionRenderingIcons';
import SectionRenderingCustomBusyIcons from './SectionRenderingCustomBusyIcons';
import SectionRenderingCustomContent from './SectionRenderingCustomContent';
import SectionBtnHierarchy from './SectionBtnHierarchy';

// Utils
import { getLocale } from '../../../../../utils/localeUtils';

/**
 * @param {Object} props
 * @param {string} [props.baseCls] - Base BEM class forwarded to layout sub-sections
 * @param {string} [props.btnText] - Button label text forwarded to icon and accessibility demo sub-sections
 */
// TODO: Add documentation about Icon placement best practice
const SectionUsage = (props) => {
    const { baseCls, btnText } = props;

    return (
        <StorySection>
            <SectionTitle>{getLocale('titles.usage')}</SectionTitle>
            {/* <StorySection>
                <Paragraph>
                    This section provides comprehensive guidelines for the
                    general usage of buttons, covering best practices,
                    accessibility considerations, common customization options,
                    and more. These guidelines offer insights into creating
                    consistent, user-friendly button experiences throughout our
                    applications in diverse contexts.
                </Paragraph>
            </StorySection> */}
            <SectionWhenToUse />
            <SectionWhenToAvoid />
            <SectionRenderingCustomContent />
            <SectionRenderingIcons btnText={btnText} />
            <SectionRenderingCustomBusyIcons />
            <SectionBtnHierarchy baseCls={baseCls} />
        </StorySection>
    );
};

export default SectionUsage;
