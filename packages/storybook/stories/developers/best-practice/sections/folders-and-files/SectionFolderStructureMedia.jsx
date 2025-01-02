import { Paragraph } from '@driponfleek/bankai-ui-typography';
import {
    BannerInfo,
    CodeBlock,
    StorySection,
} from '@driponfleek/bankai-lib-storybook';
import FolderStructureHeading from '../../components/FolderStructureHeading';
import { codeStrMedia } from '../../code-strings/codeStrFilesAndFolders';

const SectionFolderStructureMedia = () => {
    return (
        <StorySection>
            <FolderStructureHeading>media</FolderStructureHeading>
            <CodeBlock codeString={codeStrMedia} />
            <Paragraph>
                Store media assets such as images, videos, and other multimedia
                elements.
            </Paragraph>
            <BannerInfo msg="Avoid placing media files directly within the media folder. Instead, organize media assets into sub-folders based on their category or type. This structured approach simplifies the process of finding specific types of media files, promoting efficient asset management." />
        </StorySection>
    );
};

export default SectionFolderStructureMedia;
