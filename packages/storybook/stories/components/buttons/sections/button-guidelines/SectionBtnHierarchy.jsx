import PropTypes from 'prop-types';
import { Paragraph } from '@driponfleek/bankai-ui-typography';
import { StorySection, SectionTitle } from '@driponfleek/bankai-lib-storybook';
import SectionBtnHierarchyDefault from './SectionBtnHierarchyDefault';
import SectionBtnHierarchyDestructive from './SectionBtnHierarchyDestructive';

const SectionBtnHierarchy = (props) => {
    const { baseCls } = props;

    return (
        <StorySection>
            <SectionTitle headingLvl={3}>Button Hierarchy</SectionTitle>
            <StorySection>
                <Paragraph>
                    In designing button hierarchies, we aim to create a
                    consistent and user-friendly experience. This involves
                    defining a pattern for the order of primary and secondary
                    buttons, taking into consideration their potential
                    destructive nature.
                </Paragraph>
            </StorySection>
            <SectionBtnHierarchyDefault baseCls={baseCls} />
            <SectionBtnHierarchyDestructive baseCls={baseCls} />
        </StorySection>
    );
};

SectionBtnHierarchy.propTypes = {
    baseCls: PropTypes.string,
};

export default SectionBtnHierarchy;
