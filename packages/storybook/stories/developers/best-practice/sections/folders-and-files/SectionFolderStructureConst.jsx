import { Paragraph } from '@driponfleek/bankai-ui-typography';
import { CodeBlock, StorySection } from '@driponfleek/bankai-lib-storybook';
import FolderStructureHeading from '../../components/FolderStructureHeading';
import { codeStrConstFolder } from '../../code-strings/codeStrFilesAndFolders';

const SectionFolderStructureConst = () => {
    return (
        <StorySection>
            <FolderStructureHeading>const</FolderStructureHeading>
            <CodeBlock codeString={codeStrConstFolder} />
            <Paragraph>
                Store constants in this directory for easy access and
                centralized management.
            </Paragraph>
        </StorySection>
    );
};

export default SectionFolderStructureConst;
