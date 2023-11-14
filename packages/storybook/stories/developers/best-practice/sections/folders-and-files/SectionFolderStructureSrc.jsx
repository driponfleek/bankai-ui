import { Paragraph } from '@driponfleek/bankai-ui-typography';
import { CodeBlock, StorySection } from '@driponfleek/bankai-lib-storybook';
import FolderStructureHeading from '../../components/FolderStructureHeading';
import { codeStrSrcFolder } from '../../code-strings/codeStrFilesAndFolders';

const SectionFolderStructureSrc = () => {
    return (
        <StorySection>
            <FolderStructureHeading>src</FolderStructureHeading>
            <CodeBlock codeString={codeStrSrcFolder} />
            <Paragraph>
                The heart of our source code, containing the main application or
                library code.
            </Paragraph>
        </StorySection>
    );
};

export default SectionFolderStructureSrc;
