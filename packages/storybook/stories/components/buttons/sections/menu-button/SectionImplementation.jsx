import { StorySection, SectionTitle } from '@driponfleek/bankai-lib-storybook';
import CompImportAndUsage from '../../../../../sb-components/docblocks/CompImportAndUsage';

// Utils
import { getLocale } from '../../../../../utils/localeUtils';

const menuOptionsCodeStr = `const menuOptions = [
    {
        text: 'Edit',
        value: 'EDIT_BUTTON',
    },
    {
        text: 'Delete',
        isDestructive: true,
        value: 'DELETE_BUTTON',
    },
];`;

/**
 * @param {Object} props
 * @param {string} [props.variant] - MenuButton variant name appended to the component import/usage code strings
 */
const SectionImplementation = (props) => {
    const { variant = '' } = props;
    const importCodeStr = `import { MenuButton${variant} } from '@driponfleek/bankai-ui-buttons';`;
    const usageCodeStr = `${menuOptionsCodeStr}\n\n<MenuButton${variant} menuOptions={menuOptions} />`;

    return (
        <StorySection>
            <SectionTitle>{getLocale('titles.implementation')}</SectionTitle>
            <StorySection>
                <CompImportAndUsage
                    importCodeStr={importCodeStr}
                    usageCodeStr={usageCodeStr}
                    shouldShowUsageCopy={false}
                />
            </StorySection>
        </StorySection>
    );
};

export default SectionImplementation;
