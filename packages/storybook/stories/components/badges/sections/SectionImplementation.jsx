import PropTypes from 'prop-types';
import { StorySection, SectionTitle } from '@driponfleek/bankai-lib-storybook';
import CompImportAndUsage from '../../../../sb-components/docblocks/CompImportAndUsage';

// Utils
import { getLocale } from '../../../../utils/localeUtils';

const SectionImplementation = (props) => {
    const { variant } = props;

    return (
        <StorySection>
            <SectionTitle>{getLocale('titles.implementation')}</SectionTitle>
            <StorySection>
                <CompImportAndUsage
                    importCodeStr={`import { Badge${variant} } from '@driponfleek/bankai-ui-badges';`}
                    usageCodeStr={`<Badge${variant}>10</Badge${variant}>`}
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
