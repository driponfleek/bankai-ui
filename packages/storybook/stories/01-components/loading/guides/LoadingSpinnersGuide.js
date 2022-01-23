import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
    LoadingSpinners,
    LOADING_SPINNERS_VARIANTS,
} from '@epr0t0type/bankai-ui-loading';
import StoryLayout from '../../../../sb-components/layout/StoryLayout';
import StorySection from '../../../../sb-components/layout/StorySection';
// import SectionTitle from '../../../../sb-components/content/SectionTitle';
import ComponentPreview from '../../../../sb-components/content/ComponentPreview';
// import ComponentPreviewWithCodeBlock from '../../../../sb-components/content/ComponentPreviewWithCodeBlock';
import Paragraph from '../../../../sb-components/content/Paragraph';
import strings from '../../../../i18n/strings.json';

// Utils
import { getComponentsTitle } from '../../../../utils/storiesConfig';

// Code Strings
// import { examplesCodeStr } from './codeStr/codeStrComponent';

// Styles
// import './styles/component-guide.scss';

const { bankaiUI: locale } = strings;
const { CUBE } = LOADING_SPINNERS_VARIANTS;

class LoadingSpinnersGuide extends PureComponent {
    static defaultProps = {
        variant: CUBE,
    };

    static propTypes = {
        contextCls: PropTypes.string,
        variant: PropTypes.string,
    };

    static displayName =
        locale.stories.components.loading.loadingSpinners.title;

    render() {
        return (
            <StoryLayout
                contextCls={this.baseCls}
                title={locale.stories.components.loading.loadingSpinners.title}
                subTitle={getComponentsTitle(
                    locale.stories.components.loading.categoryTitle,
                )}
            >
                {this.renderDemo()}
                {/* {this.renderExamples()} */}
            </StoryLayout>
        );
    }

    renderDemo() {
        const { props } = this;

        return (
            <StorySection>
                <ComponentPreview shouldCheckA11Y>
                    <LoadingSpinners {...props} />
                </ComponentPreview>
                <Paragraph>Coming Soon.</Paragraph>
            </StorySection>
        );
    }

    // renderExamples = () => {
    //     return (
    //         <StorySection>
    //             <SectionTitle>Examples</SectionTitle>
    //             <ComponentPreviewWithCodeBlock
    //                 contextCls={`${this.baseCls}__examples-preview`}
    //                 codeString={examplesCodeStr}
    //             >
    //                 <Button text="Primary Button" isPrimary />
    //                 <Button text="Secondary Button" isSecondary />
    //                 <Button
    //                     text="Primary Destructive Button"
    //                     isDestructive
    //                     isPrimary
    //                 />
    //                 <Button
    //                     text="Secondary Destructive Button"
    //                     isDestructive
    //                     isSecondary
    //                 />
    //             </ComponentPreviewWithCodeBlock>
    //         </StorySection>
    //     );
    // };

    baseCls = 'bankai-sb-loading-spinners-guide';
}

export default LoadingSpinnersGuide;
