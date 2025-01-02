import { Paragraph } from '@driponfleek/bankai-ui-typography';
import { CodeBlock, StorySection } from '@driponfleek/bankai-lib-storybook';
import FolderStructureHeading from '../../components/FolderStructureHeading';
import { codeStrServicesFolder } from '../../code-strings/codeStrFilesAndFolders';

const SectionFolderStructureServices = () => {
    return (
        <StorySection>
            <FolderStructureHeading>services</FolderStructureHeading>
            <CodeBlock codeString={codeStrServicesFolder} />
            <Paragraph>
                The services folder serves as a dedicated space for managing{' '}
                <abbr title="Application Programming Interface">API</abbr> calls
                within our application. As the central hub for all communication
                with external and internal services, this folder houses utility
                functions, classes, or modules specifically designed to handle
                interactions with APIs. Organizing API-related code in the
                services directory promotes a structured and coherent approach
                to managing our application&apos;s data-fetching logic.
            </Paragraph>
        </StorySection>
    );
};

export default SectionFolderStructureServices;
