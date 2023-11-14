import { Paragraph } from '@driponfleek/bankai-ui-typography';
import {
    BannerInfo,
    CodeBlock,
    StorySection,
} from '@driponfleek/bankai-lib-storybook';
import FolderStructureHeading from '../../components/FolderStructureHeading';
import { codeStrTestsFolder } from '../../code-strings/codeStrFilesAndFolders';

const SectionFolderStructureTests = () => {
    return (
        <StorySection>
            <FolderStructureHeading>__tests__</FolderStructureHeading>
            <CodeBlock codeString={codeStrTestsFolder} />
            <Paragraph>
                This folder is reserved for unit tests. Keep test files
                organized within this folder to ensure easy navigation and
                maintenance.
            </Paragraph>
            <BannerInfo msg="This folder should always be located within the root of the folder that contains the code the unit tests are for." />
        </StorySection>
    );
};

export default SectionFolderStructureTests;
