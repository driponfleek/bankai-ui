import { Paragraph } from '@driponfleek/bankai-ui-typography';
import {
    CodeBlock,
    StorySection,
    BannerInfo,
} from '@driponfleek/bankai-lib-storybook';
import FolderStructureHeading from '../../components/FolderStructureHeading';
import { codeStrComponentsFolder } from '../../code-strings/codeStrFilesAndFolders';

const SectionFolderStructureComponents = () => {
    return (
        <StorySection>
            <FolderStructureHeading>components</FolderStructureHeading>
            <CodeBlock codeString={codeStrComponentsFolder} />
            <Paragraph>
                Group your reusable components in this directory.
            </Paragraph>
            <BannerInfo msg="Avoid placing components directly within the components folder. Instead,  organize components into sub-folders based on their category or type. This hierarchical organization ensures a systematic and scalable structure for our components." />
        </StorySection>
    );
};

export default SectionFolderStructureComponents;
