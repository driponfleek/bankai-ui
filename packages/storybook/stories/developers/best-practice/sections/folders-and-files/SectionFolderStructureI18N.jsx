import { Paragraph } from '@driponfleek/bankai-ui-typography';
import { CodeBlock, StorySection } from '@driponfleek/bankai-lib-storybook';
import FolderStructureHeading from '../../components/FolderStructureHeading';
import { codeStrI18NFolder } from '../../code-strings/codeStrFilesAndFolders';

const SectionFolderStructureI18N = () => {
    return (
        <StorySection>
            <FolderStructureHeading>
                <abbr title="internationalization">i18n</abbr>
            </FolderStructureHeading>
            <CodeBlock codeString={codeStrI18NFolder} />
            <Paragraph>
                A dedicated space for internationalization and localization
                files to support multiple languages.
            </Paragraph>
        </StorySection>
    );
};

export default SectionFolderStructureI18N;
