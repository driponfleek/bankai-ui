// import PropTypes from 'prop-types';
// import { Button } from '@driponfleek/bankai-ui-buttons';
// import { BankaiCirclePlus } from '@driponfleek/bankai-ui-icons';
import { Paragraph } from '@driponfleek/bankai-ui-typography';
import { StorySection, SectionTitle } from '@driponfleek/bankai-lib-storybook';
// import ComponentPreviewWithCodeBlock from '../../../../sb-components/docblocks/ComponentPreviewWithCodeBlock';
// import CodeBlock from '../../../../sb-components/docblocks/CodeBlock';

// Utils
import { getLocale } from '../../../../utils/localeUtils';

const SectionDesign = () => {
    return (
        <StorySection>
            <SectionTitle>
                {getLocale('titles.design')}&#58; Crafting the Perfect Component
                Style
            </SectionTitle>
            <StorySection>
                <Paragraph>
                    Design plays a pivotal role in creating a visually appealing
                    and user-friendly button component. Let&apos;s dive into the
                    key aspects of designing buttons within our design
                    system&#58;
                </Paragraph>
            </StorySection>
            <StorySection>
                <SectionTitle headingLvl={3}>
                    Design Tokens&#58; Building Consistency
                </SectionTitle>
                <StorySection>{/* Coming soon */}</StorySection>
            </StorySection>
            <StorySection>
                <SectionTitle headingLvl={3}>
                    Component Anatomy&#58; Understanding Structure
                </SectionTitle>
                <StorySection>{/* Coming Soon */}</StorySection>
            </StorySection>
            <StorySection>
                <SectionTitle headingLvl={3}>
                    Component Specifications&#58; Communicating Design Intent
                </SectionTitle>
                <StorySection>{/* Coming soon */}</StorySection>
            </StorySection>
        </StorySection>
    );
};

export default SectionDesign;
