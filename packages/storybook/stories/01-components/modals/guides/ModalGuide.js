import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { Button, BTN_VARIANTS } from '@epr0t0type/bankai-ui-buttons';
import { Modal } from '@epr0t0type/bankai-ui-modals';
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
import './styles/modal-guide.scss';

const { bankaiUI: locale } = strings;
const { PRIMARY } = BTN_VARIANTS;

class ModalGuide extends Component {
    static defaultProps = {
        ...Modal.defaultProps,
    };

    static propTypes = {
        ...Modal.propTypes,
    };

    static displayName = locale.stories.components.modals.modal.title;

    state = {
        isMounted: false,
    };

    render() {
        return (
            <StoryLayout
                title={locale.stories.components.modals.modal.title}
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
        const { isMounted } = this.state;

        return (
            <StorySection>
                <ComponentPreview shouldCheckA11Y>
                    <Button
                        variant={PRIMARY}
                        text="Click to Display Modal"
                        onClick={this.handleShowModalClick}
                    />
                    <Modal
                        {...props}
                        isMounted={isMounted}
                        onExit={this.handleModalExit}
                        onActionClick={this.handleActionClick}
                    >
                        <div className={`${this.baseCls}__demo-content`}>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Suspendisse a massa ipsum.
                                Donec ac libero id quam pulvinar vestibulum vel
                                quis urna. Cras auctor sit amet turpis ut
                                accumsan. Curabitur ac leo fermentum, egestas
                                ligula id, mattis turpis. Nunc a augue
                                fringilla, elementum diam at, viverra ex.
                                Vivamus bibendum augue eros. Pellentesque quis
                                ultrices sapien. Vestibulum ante ipsum primis in
                                faucibus orci luctus et ultrices posuere cubilia
                                curae; Sed rutrum mi velit, et finibus sapien
                                fermentum facilisis. Vivamus vel egestas neque.
                                Aliquam vulputate velit in tincidunt imperdiet.
                                Mauris dictum sit amet justo eu cursus. Nullam
                                pharetra arcu eu rhoncus hendrerit. Ut facilisis
                                pretium facilisis.
                            </p>
                        </div>
                    </Modal>
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

    handleActionClick = (params) => {
        const { onActionClick } = this.props;
        const { data } = params || {};
        const { action } = data || {};

        if (action === 'No') {
            this.setState({ isMounted: false });
        }

        onActionClick(params);
    };

    handleShowModalClick = () => {
        this.setState({ isMounted: true });
    };

    handleModalExit = () => {
        const { onExit } = this.props;
        this.setState({ isMounted: false }, () => {
            onExit();
        });
    };

    baseCls = 'bankai-sb-modal-guide';
}

export default ModalGuide;
