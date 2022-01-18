import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
    LoadingSquares,
    LOADING_SQUARES_VARIANTS,
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
import { getSanatizedStoryProps } from '../../../../utils/storyLayoutPropsUtils';

// Code Strings
// import { examplesCodeStr } from './codeStr/codeStrComponent';

// Styles
// import './styles/component-guide.scss';

const { bankaiUI: locale } = strings;
const { PULSING_WAVE } = LOADING_SQUARES_VARIANTS;

class LoadingSquaresGuide extends PureComponent {
    static defaultProps = {
        variant: PULSING_WAVE,
    };

    static propTypes = {
        contextCls: PropTypes.string,
        variant: PropTypes.string,
    };

    static displayName = locale.stories.components.loading.loadingSquares.title;

    render() {
        return (
            <StoryLayout
                {...getSanatizedStoryProps(this.props, false)}
                title={locale.stories.components.loading.loadingSquares.title}
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
                    <LoadingSquares {...getSanatizedStoryProps(props)} />
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

    baseCls = 'bankai-sb-loading-squares-guide';
}

export default LoadingSquaresGuide;
