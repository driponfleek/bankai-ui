import { StorySection, SectionTitle } from '@driponfleek/bankai-lib-storybook';
import CompImportAndUsage from '../../../../sb-components/docblocks/CompImportAndUsage';

// Utils
import { getLocale } from '../../../../utils/localeUtils';

/**
 * @param {Object} props
 * @param {string} [props.variant] - Badge variant name appended to the component import/usage code strings
 */
const SectionImplementation = (props) => {
    const { variant = '' } = props;

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

export default SectionImplementation;
