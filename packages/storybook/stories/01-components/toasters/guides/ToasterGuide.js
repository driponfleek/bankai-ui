import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Button, VARIANTS } from '@epr0t0type/bankai-ui-buttons';
import {
    Toaster,
    dismissToasters,
    // TOASTER_POSITIONS,
    // TOASTER_VARIANTS,
} from '@epr0t0type/bankai-ui-toasters';
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
// import './styles/toaster-guide.scss';

const { bankaiUI: locale } = strings;
// const { DEFAULT } = TOASTER_VARIANTS;
// const { BOTTOM_RIGHT } = TOASTER_POSITIONS;

class ToasterGuide extends PureComponent {
    static defaultProps = {
        // appNodeId: 'root',
        // containerId: 'bankai-toast-container',
        // dragDirection: 'x',
        // position: BOTTOM_RIGHT,
        // role: 'alert',
        // variant: DEFAULT,
        // autoClose: 6000,
        // dragToDismissPercent: 80,
        // hasCloseButton: true,
        // isDraggable: false,
        // isRTL: false,
        // shouldCloseOnClick: false,
        // shouldHideProgressBar: false,
        // shouldPauseOnFocusLoss: false,
        // shouldPauseOnHover: false,
        // shouldPlaceNewestOnTop: true,
        // shouldShowIcon: true,
        // onClick: () => Promise.resolve(),
        onClose: () => Promise.resolve(),
        // onOpen: () => Promise.resolve(),
    };

    static propTypes = {
        // appNodeId: PropTypes.string,
        // closeBtnARIALabel: PropTypes.string,
        // contextCls: PropTypes.string,
        // containerId: PropTypes.string,
        // dragDirection: PropTypes.string,
        // message: PropTypes.string,
        // position: PropTypes.string,
        // role: PropTypes.string,
        // title: PropTypes.string,
        // toastId: PropTypes.string,
        // variant: PropTypes.string,
        // delay: PropTypes.number,
        // dragToDismissPercent: PropTypes.number,
        // limit: PropTypes.number,
        // progress: PropTypes.number,
        // hasCloseButton: PropTypes.bool,
        // isDraggable: PropTypes.bool,
        // isRTL: PropTypes.bool,
        // shouldCloseOnClick: PropTypes.bool,
        // shouldHideProgressBar: PropTypes.bool,
        // shouldPauseOnFocusLoss: PropTypes.bool,
        // shouldPauseOnHover: PropTypes.bool,
        // shouldPlaceNewestOnTop: PropTypes.bool,
        // shouldShowIcon: PropTypes.bool,
        // toastContainerProps: PropTypes.object,
        // toasterProps: PropTypes.object,
        // autoClose: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
        // onClick: PropTypes.func,
        onClose: PropTypes.func,
        // onOpen: PropTypes.func,
        // renderCloseButton: PropTypes.func,
        // renderIcon: PropTypes.func,
    };

    static displayName = locale.stories.components.toasters.toaster.title;

    render() {
        return (
            <StoryLayout
                {...getSanatizedStoryProps(this.props, false)}
                title={locale.stories.components.toasters.toaster.title}
                subTitle={getComponentsTitle(
                    locale.stories.components.toasters.categoryTitle,
                )}
            >
                {this.renderDemo()}
                {/* {this.renderExamples()} */}
            </StoryLayout>
        );
    }

    componentWillUnmount() {
        dismissToasters();
    }

    renderDemo() {
        return (
            <StorySection>
                <ComponentPreview shouldCheckA11Y>
                    <Button
                        text="Click to Show Toaster"
                        variant={VARIANTS.PRIMARY}
                        onClick={this.handleShowDemoToasterClick}
                    />
                    {/* <Button
                        text="Click to Dismiss Toaster"
                        variant={VARIANTS.SECONDARY}
                        onClick={this.handleDismissToasterClick}
                    /> */}
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

    handleShowDemoToasterClick = () => {
        if (!this.toastId) {
            this.toastId = Toaster({
                ...this.props,
                onClose: this.handleDemoToasterClose,
            });
        } else {
            Toaster({
                ...getSanatizedStoryProps(this.props),
                toastId: this.toastId,
                onClose: this.handleDemoToasterClose,
            });
        }
    };

    // handleDismissToasterClick = () => {
    //     if (this.toastId) {
    //         dismissToasters(this.toastId);
    //     }
    // };

    handleDemoToasterClose = (params) => {
        const { onClose } = this.props;

        this.toastId = undefined;
        onClose(params);
    };

    baseCls = 'bankai-sb-toaster-guide';
}

export default ToasterGuide;
