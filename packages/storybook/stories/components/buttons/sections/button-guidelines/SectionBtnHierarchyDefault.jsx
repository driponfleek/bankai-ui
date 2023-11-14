import PropTypes from 'prop-types';
import { Paragraph } from '@driponfleek/bankai-ui-typography';
import { StorySection, SectionTitle } from '@driponfleek/bankai-lib-storybook';
import SectionBtnHierarchyExamples from '../../components/BtnHierarchyExamples';

const SectionBtnHierarchyDefault = (props) => {
    const { baseCls } = props;

    return (
        <StorySection contextCls={`${baseCls}__btn-hierarchy-default-order`}>
            <SectionTitle headingLvl={4}>Default Order</SectionTitle>
            <Paragraph>
                By default, when buttons are inline, the primary button is
                placed on the left, and the secondary button is placed on the
                right. This aligns with the natural reading order for
                left-to-right languages, providing an intuitive flow for users.
            </Paragraph>
            <Paragraph>
                When buttons are vertically stacked, the primary button is
                placed at the top, and the secondary button is placed below it.
            </Paragraph>
            <SectionBtnHierarchyExamples baseCls={baseCls} />
            {/* <StorySection>
            </StorySection> */}
        </StorySection>
    );
};

SectionBtnHierarchyDefault.propTypes = {
    baseCls: PropTypes.string,
};

export default SectionBtnHierarchyDefault;
