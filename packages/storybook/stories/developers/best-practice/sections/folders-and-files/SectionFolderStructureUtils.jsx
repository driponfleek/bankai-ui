import { Paragraph } from '@driponfleek/bankai-ui-typography';
import { CodeBlock, StorySection } from '@driponfleek/bankai-lib-storybook';
import FolderStructureHeading from '../../components/FolderStructureHeading';
import { codeStrUtilsFolder } from '../../code-strings/codeStrFilesAndFolders';

const SectionFolderStructureUtils = () => {
    return (
        <StorySection>
            <FolderStructureHeading>utils</FolderStructureHeading>
            <CodeBlock codeString={codeStrUtilsFolder} />
            <Paragraph>
                Store utility functions, helper classes, or modules in the utils
                folder. This aids in keeping our codebase organized and
                facilitates the reuse of common functionality.
            </Paragraph>
        </StorySection>
    );
};

export default SectionFolderStructureUtils;
