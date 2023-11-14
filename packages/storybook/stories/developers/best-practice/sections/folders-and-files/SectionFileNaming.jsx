import { Paragraph } from '@driponfleek/bankai-ui-typography';
import { SectionTitle, StorySection } from '@driponfleek/bankai-lib-storybook';
import SectionFileNamingCamelCase from './SectionFileNamingCamelCase';
import SectionFileNamingPascalCase from './SectionFileNamingPascalCase';
import SectionFileNamingKebabCase from './SectionFileNamingKebabCase';

const SectionFileNaming = () => {
    return (
        <StorySection>
            <SectionTitle>File Naming</SectionTitle>
            <StorySection>
                <Paragraph>
                    Consistent and well-thought-out file naming conventions
                    contribute to the maintainability and readability of your
                    project. Choose the appropriate convention based on the type
                    and purpose of the file. Below are guidelines for when to
                    use Camel Case, Pascal Case, and Kebab Case.
                </Paragraph>
            </StorySection>
            <SectionFileNamingCamelCase />
            <SectionFileNamingPascalCase />
            <SectionFileNamingKebabCase />
        </StorySection>
    );
};

export default SectionFileNaming;
