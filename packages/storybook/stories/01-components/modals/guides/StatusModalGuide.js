import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StatusModal } from '@epr0t0type/bankai-ui-modals';
import StoryLayout from '../../../../sb-components/layout/StoryLayout';
import StorySection from '../../../../sb-components/layout/StorySection';
// import SectionTitle from '../../../../sb-components/content/SectionTitle';
import ComponentPreview from '../../../../sb-components/content/ComponentPreview';
import CodeTag from '../../../../sb-components/content/CodeTag';
// import ComponentPreviewWithCodeBlock from '../../../../sb-components/content/ComponentPreviewWithCodeBlock';
import Paragraph from '../../../../sb-components/content/Paragraph';
import strings from '../../../../i18n/strings.json';

// Utils
import { getComponentsTitle } from '../../../../utils/storiesConfig';
import { getSanatizedStoryProps } from '../../../../utils/storyLayoutPropsUtils';

// Code Strings
// import { examplesCodeStr } from './codeStr/codeStrComponent';

// Styles
// import './styles/modal-guide.scss';

const { bankaiUI: locale } = strings;

class StatusModalGuide extends Component {
    static defaultProps = {
        isOpen: false,
        role: 'dialog',
        closeTimeoutMS: 2000,
        appElement: document.getElementById('root'),
        onAfterClose: () => Promise.resolve(),
        onAfterOpen: () => Promise.resolve(),
        renderTo: () => document.body,
    };

    static propTypes = {
        dialogContextCls: PropTypes.string,
        overlayContextCls: PropTypes.string,
        role: PropTypes.string,
        statusText: PropTypes.string.isRequired,
        closeTimeoutMS: PropTypes.number,
        isOpen: PropTypes.bool,
        appElement: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.instanceOf(Element),
        ]),
        onAfterClose: PropTypes.func,
        onAfterOpen: PropTypes.func,
        renderIcon: PropTypes.func,
        renderTo: PropTypes.func,
    };

    static displayName = locale.stories.components.modals.statusModal.title;

    render() {
        return (
            <StoryLayout
                {...getSanatizedStoryProps(this.props, false)}
                title={locale.stories.components.modals.statusModal.title}
                subTitle={getComponentsTitle(
                    locale.stories.components.modals.categoryTitle,
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
                    <p>
                        Toggle the <CodeTag>isOpen</CodeTag> prop to show/hide
                        the status modal
                    </p>
                    <StatusModal {...getSanatizedStoryProps(props)} />
                </ComponentPreview>
                <Paragraph>Coming soon.</Paragraph>
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

    baseCls = 'bankai-sb-status-modal-guide';
}

export default StatusModalGuide;
