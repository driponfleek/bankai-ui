import { Paragraph } from '@driponfleek/bankai-ui-typography';
import { SectionTitle, StorySection } from '@driponfleek/bankai-lib-storybook';
import SectionNamingConventionsVariables from './SectionNamingConventionsVariables';
import SectionNamingConventionsFuncs from './SectionNamingConventionsFuncs';
import SectionNamingConventionsConts from './SectionNamingConventionsConts';
import SectionNamingConventionsClasses from './SectionNamingConventionsClasses';
import SectionNamingConventionsAdditionalConsiderations from './SectionNamingConventionsAdditionalConsiderations';

const SectionNamingConventions = () => {
    return (
        <StorySection>
            <SectionTitle>Naming Conventions</SectionTitle>
            <StorySection>
                <Paragraph>
                    When it comes to writing clean and maintainable JavaScript
                    code, adopting descriptive and consistent naming conventions
                    is crucial. Prioritize clarity over brevity, choosing names
                    that clearly express the purpose and functionality of your
                    identifiers.
                </Paragraph>
            </StorySection>
            <SectionNamingConventionsVariables />
            <SectionNamingConventionsFuncs />
            <SectionNamingConventionsConts />
            <SectionNamingConventionsClasses />
            <SectionNamingConventionsAdditionalConsiderations />
        </StorySection>
    );
};

export default SectionNamingConventions;
