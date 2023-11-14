import { Paragraph } from '@driponfleek/bankai-ui-typography';
import {
    BannerDanger,
    CodeBlock,
    StorySection,
} from '@driponfleek/bankai-lib-storybook';
import FolderStructureHeading from '../../components/FolderStructureHeading';
import { codeStrPagesFolder } from '../../code-strings/codeStrFilesAndFolders';

const SectionFolderStructurePages = () => {
    return (
        <StorySection>
            <FolderStructureHeading>pages</FolderStructureHeading>
            <CodeBlock codeString={codeStrPagesFolder} />
            <Paragraph>
                Organize application pages or views in this directory.
            </Paragraph>
            <BannerDanger
                msg={
                    <>
                        <strong>
                            Do not place pages within the components folder!
                        </strong>{' '}
                        Keep the pages directory separate to maintain a clear
                        distinction between application pages and reusable
                        components.
                    </>
                }
            />
        </StorySection>
    );
};

export default SectionFolderStructurePages;
