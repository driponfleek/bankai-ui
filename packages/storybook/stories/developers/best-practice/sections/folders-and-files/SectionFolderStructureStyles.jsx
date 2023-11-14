import { Paragraph } from '@driponfleek/bankai-ui-typography';
import {
    BannerInfo,
    CodeBlock,
    StorySection,
} from '@driponfleek/bankai-lib-storybook';
import FolderStructureHeading from '../../components/FolderStructureHeading';
import { codeStrStylesFolder } from '../../code-strings/codeStrFilesAndFolders';

const SectionFolderStructureStyles = () => {
    return (
        <StorySection>
            <FolderStructureHeading>styles</FolderStructureHeading>
            <CodeBlock codeString={codeStrStylesFolder} />
            <Paragraph>
                Centralize stylesheets and styling-related assets in this
                directory.
            </Paragraph>
            <BannerInfo
                msg={
                    <>
                        This folder should always be located within the root of
                        the folder that contains the{' '}
                        <abbr title="User Interface">UI</abbr> the styles are
                        for.
                    </>
                }
            />
        </StorySection>
    );
};

export default SectionFolderStructureStyles;
