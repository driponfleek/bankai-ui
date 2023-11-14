import { Hyperlink } from '@driponfleek/bankai-ui-navigation';
import { Paragraph } from '@driponfleek/bankai-ui-typography';
import {
    DoAndDoNotDo,
    StorySection,
    SectionTitle,
} from '@driponfleek/bankai-lib-storybook';

const SectionFolderNaming = () => {
    const doList = [
        <>components</>,
        <>utility-functions</>,
        <>button-styles</>,
    ];
    const doNotDoList = [
        <>Components</>,
        <>utility_functions</>,
        <>ButtonStyles</>,
    ];

    return (
        <StorySection>
            <SectionTitle>Folder Naming</SectionTitle>
            <Paragraph>
                <strong>Use kebab-case for folder names&#58;</strong> Adopt{' '}
                <Hyperlink
                    href="https://en.wikipedia.org/wiki/Letter_case#Kebab_case"
                    shouldOpenInNewWindow
                >
                    kebab-case
                </Hyperlink>{' '}
                for consistent and readable naming of folders, promoting clarity
                and adherence to a standardized convention.
            </Paragraph>
            <DoAndDoNotDo
                doTitle="Examples of Valid Folder Names"
                doNotDoTitle="Avoid Other Naming Conventions"
                doList={doList}
                doNotDoList={doNotDoList}
                isSideBySide
            />
        </StorySection>
    );
};

export default SectionFolderNaming;
