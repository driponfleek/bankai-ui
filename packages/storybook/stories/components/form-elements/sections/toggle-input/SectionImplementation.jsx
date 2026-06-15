import { StorySection, SectionTitle } from '@driponfleek/bankai-lib-storybook';
import CompImportAndUsage from '../../../../../sb-components/docblocks/CompImportAndUsage';

// Utils
import { getLocale } from '../../../../../utils/localeUtils';

/**
 * @param {Object} props
 * @param {boolean} [props.isRadio] - When true, generates Radio import/usage code; otherwise generates Checkbox code
 */
const SectionImplementation = (props) => {
    const { isRadio = false } = props;
    const compName = isRadio ? 'Radio' : 'Checkbox';
    const importCodeStr = `import { ${compName} } from '@driponfleek/bankai-ui-form-elements';`;
    const usageCodeStr = `<${compName} />`;

    return (
        <StorySection>
            <SectionTitle>{getLocale('titles.implementation')}</SectionTitle>
            <StorySection>
                <CompImportAndUsage
                    importCodeStr={importCodeStr}
                    usageCodeStr={usageCodeStr}
                />
            </StorySection>
        </StorySection>
    );
};

export default SectionImplementation;
