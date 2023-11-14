import { Paragraph } from '@driponfleek/bankai-ui-typography';
import { CodeBlock, StorySection } from '@driponfleek/bankai-lib-storybook';
import FolderStructureHeading from '../../components/FolderStructureHeading';
import { codeStrHooksFolder } from '../../code-strings/codeStrFilesAndFolders';

const SectionFolderStructureHooks = () => {
    return (
        <StorySection>
            <FolderStructureHeading>hooks</FolderStructureHeading>
            <CodeBlock codeString={codeStrHooksFolder} />
            <Paragraph>
                A dedicated space for custom React hooks used throughout our
                applications.
            </Paragraph>
        </StorySection>
    );
};

export default SectionFolderStructureHooks;
