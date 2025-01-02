import PropTypes from 'prop-types';
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

SectionUsage.propTypes = {
    baseCls: PropTypes.string,
    btnText: PropTypes.string,
};

export default SectionUsage;
