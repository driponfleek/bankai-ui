import { Paragraph } from '@driponfleek/bankai-ui-typography';
import { SectionTitle, StorySection } from '@driponfleek/bankai-lib-storybook';
import SectionFolderStructureSrc from './SectionFolderStructureSrc';
import SectionFolderStructureComponents from './SectionFolderStructureComponents';
import SectionFolderStructureHooks from './SectionFolderStructureHooks';
import SectionFolderStructureStyles from './SectionFolderStructureStyles';
import SectionFolderStructureConst from './SectionFolderStructureConst';
import SectionFolderStructureI18N from './SectionFolderStructureI18N';
import SectionFolderStructureMedia from './SectionFolderStructureMedia';
import SectionFolderStructurePages from './SectionFolderStructurePages';
import SectionFolderStructureServices from './SectionFolderStructureServices';
import SectionFolderStructureUtils from './SectionFolderStructureUtils';
import SectionFolderStructureTests from './SectionFolderStructureTests';

const SectionFolderStructure = () => {
    return (
        <StorySection>
            <SectionTitle>Folder Structure</SectionTitle>
            <StorySection>
                <Paragraph>
                    Establishing a clear and logical folder structure is crucial
                    for maintaining a scalable and maintainable applications.
                    Let&apos;s explore the purpose and recommended content for
                    some key folders:
                </Paragraph>
            </StorySection>
            <SectionFolderStructureSrc />
            <SectionFolderStructureTests />
            <SectionFolderStructureStyles />
            <SectionFolderStructureComponents />
            <SectionFolderStructurePages />
            <SectionFolderStructureHooks />
            <SectionFolderStructureConst />
            <SectionFolderStructureI18N />
            <SectionFolderStructureMedia />
            <SectionFolderStructureServices />
            <SectionFolderStructureUtils />
        </StorySection>
    );
};

export default SectionFolderStructure;
