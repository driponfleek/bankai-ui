import PropTypes from 'prop-types';
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

const SectionImplementation = (props) => {
    const { variant } = props;
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

SectionImplementation.defaultProps = {
    variant: '',
};

SectionImplementation.propTypes = {
    variant: PropTypes.string,
};

export default SectionImplementation;
