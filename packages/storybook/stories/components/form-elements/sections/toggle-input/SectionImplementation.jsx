import PropTypes from 'prop-types';
import { StorySection, SectionTitle } from '@driponfleek/bankai-lib-storybook';
import CompImportAndUsage from '../../../../../sb-components/docblocks/CompImportAndUsage';

// Utils
import { getLocale } from '../../../../../utils/localeUtils';

const SectionImplementation = (props) => {
    const { isRadio } = props;
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

SectionImplementation.defaultProps = {
    isRadio: false,
};

SectionImplementation.propTypes = {
    isRadio: PropTypes.bool,
};

export default SectionImplementation;
