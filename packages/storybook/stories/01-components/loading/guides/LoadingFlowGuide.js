import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';
import { LoadingFlow } from '@epr0t0type/bankai-ui-loading';
import packageJSON from '@epr0t0type/bankai-ui-loading/package.json';
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

class LoadingFlowGuide extends PureComponent {
    static defaultProps = {
        ...LoadingFlow.defaultProps,
    };

    static propTypes = {
        ...LoadingFlow.propTypes,
    };

    static displayName = locale.stories.components.loading.loadingFlow.title;

    render() {
        return (
            <StoryLayout
                contextCls={this.baseCls}
                packageVer={packageJSON.version}
                title={locale.stories.components.loading.loadingFlow.title}
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
                    <LoadingFlow {...props}>
                        <p>
                            I&apos;m the content waiting to be loaded.
                            You&apos;ll see me when{' '}
                            <strong>props.isLoading</strong> and{' '}
                            <strong>props.hasError</strong> are{' '}
                            <strong>false</strong>.
                        </p>
                    </LoadingFlow>
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

    baseCls = 'bankai-sb-loading-flow-guide';
}

export default LoadingFlowGuide;
