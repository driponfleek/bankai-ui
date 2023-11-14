import PropTypes from 'prop-types';
import { Paragraph } from '@driponfleek/bankai-ui-typography';
import { StorySection, SectionTitle } from '@driponfleek/bankai-lib-storybook';
import SectionBtnHierarchyExamples from '../../components/BtnHierarchyExamples';

const SectionBtnHierarchyDestructive = (props) => {
    const { baseCls } = props;

    return (
        <StorySection
            contextCls={`${baseCls}__btn-hierarchy-destructive-order`}
        >
            <SectionTitle headingLvl={4}>
                Button Order When the Primary Button is Destructive
            </SectionTitle>
            <Paragraph>
                When the primary button also serves a destructive purpose, we
                intentionally swap the default order. By swapping the default
                order for primary destructive buttons, we introduce a deliberate
                friction point, encouraging users to think twice before
                proceeding with potentially irreversible actions. This design
                pattern aims to enhance user awareness and prevent accidental
                clicks on critical operations, fostering a deliberate
                decision-making process.
            </Paragraph>
            <SectionBtnHierarchyExamples baseCls={baseCls} isDestructive />
        </StorySection>
    );
};

SectionBtnHierarchyDestructive.propTypes = {
    baseCls: PropTypes.string,
};

export default SectionBtnHierarchyDestructive;
