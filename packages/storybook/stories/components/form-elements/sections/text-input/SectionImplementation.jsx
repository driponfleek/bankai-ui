import PropTypes from 'prop-types';
import { StorySection, SectionTitle } from '@driponfleek/bankai-lib-storybook';
import CompImportAndUsage from '../../../../../sb-components/docblocks/CompImportAndUsage';

// Utils
import { getLocale } from '../../../../../utils/localeUtils';

// Const
import { INPUTS } from '../../const/storyConst';

const SectionImplementation = (props) => {
    const { compName } = props;
    let comp;

    switch (compName) {
        case INPUTS.PROTECTED:
            comp = 'ProtectedInput';
        case INPUTS.TEXTAREA:
            comp = 'Textarea';
        default:
            comp = 'TextInput';
    }

    const importCodeStr = `import { ${comp} } from '@driponfleek/bankai-ui-form-elements';`;
    const usageCodeStr = `<${comp} />`;

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

SectionImplementation.propTypes = {
    compName: PropTypes.string,
};

export default SectionImplementation;
