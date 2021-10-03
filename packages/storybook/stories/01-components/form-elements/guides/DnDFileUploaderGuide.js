import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { DnDFileUploader } from '@epr0t0type/bankai-ui-form-elements';
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
// import { examplesCodeStr } from './codeStr/codeStrDnDFileUploader';

// Styles
// import './styles/dnd-file-uploader-guide.scss';

const { bankaiUI: locale } = strings;

class DnDFileUploaderGuide extends PureComponent {
    static defaultProps = {
        allowedTypes: [],
        localeDefaultState: {},
        localeHoverState: {},
        localeRejectDropState: {},
        localeShowAttachmentsState: {},
        localeBusyState: {},
        attachments: [],
        canUploadMultiple: false,
        isBusy: false,
        isCompact: false,
        isDisabled: false,
        shouldShowAttachments: true,
        onAdd: () => Promise.resolve(),
        onRemove: () => Promise.resolve(),
        onRemoveAll: () => Promise.resolve(),
    };

    static propTypes = {
        contextCls: PropTypes.string,
        canUploadMultiple: PropTypes.bool,
        isBusy: PropTypes.bool,
        isCompact: PropTypes.bool,
        isDisabled: PropTypes.bool,
        shouldShowAttachments: PropTypes.bool,
        inputProps: PropTypes.object,
        localeDefaultState: PropTypes.shape({
            btnText: PropTypes.string,
            msgText: PropTypes.string,
            titleText: PropTypes.string,
        }),
        localeHoverState: PropTypes.shape({
            msgText: PropTypes.string,
            titleText: PropTypes.string,
        }),
        localeRejectDropState: PropTypes.shape({
            msgText: PropTypes.string,
            titleText: PropTypes.string,
        }),
        localeShowAttachmentsState: PropTypes.shape({
            browseLinkText: PropTypes.string,
            msgAfterBrowseText: PropTypes.string,
            msgBeforeBrowseText: PropTypes.string,
            removeAllLinkText: PropTypes.string,
            removeAttachmentARIALabel: PropTypes.string,
        }),
        localeBusyState: PropTypes.shape({
            msgText: PropTypes.string,
            titleText: PropTypes.string,
        }),
        allowedTypes: PropTypes.arrayOf(
            PropTypes.shape({
                fileType: PropTypes.string,
                mimeType: PropTypes.string,
                extension: PropTypes.string,
            }),
        ),
        attachments: PropTypes.array,
        onAdd: PropTypes.func,
        onRemove: PropTypes.func,
        onRemoveAll: PropTypes.func,
        renderBusyIcon: PropTypes.func,
        renderRejectedIcon: PropTypes.func,
        renderUploadIcon: PropTypes.func,
    };

    static displayName =
        locale.stories.components.formElements.dndFileUploader.title;

    state = {};

    render() {
        return (
            <StoryLayout
                title={
                    locale.stories.components.formElements.dndFileUploader.title
                }
                subTitle={getComponentsTitle(
                    locale.stories.components.formElements.categoryTitle,
                )}
            >
                {this.renderDemo()}
                {/* {this.renderExamples()} */}
            </StoryLayout>
        );
    }

    renderDemo() {
        const { props } = this;
        const { attachments } = this.state;

        return (
            <StorySection>
                <ComponentPreview shouldCheckA11Y>
                    <DnDFileUploader
                        {...props}
                        aria-label="Demo Text Input"
                        onAdd={this.handleAdd}
                        onRemove={this.handleRemove}
                        onRemoveAll={this.handleRemoveAll}
                        attachments={attachments}
                    />
                </ComponentPreview>
                <Paragraph>
                    Use text inputs to allow user input in your applications.
                </Paragraph>
            </StorySection>
        );
    }

    // renderExamples = () => {
    //     const placeholderText = 'Please enter a value...';

    //     return (
    //         <StorySection>
    //             <SectionTitle>Examples</SectionTitle>
    //             <ComponentPreviewWithCodeBlock
    //                 contextCls={`${this.baseCls}__examples-preview`}
    //                 codeString={examplesCodeStr}
    //             >
    //                 <TextInput
    //                     placeholder={placeholderText}
    //                     aria-label="Demo Text Input"
    //                 />
    //                 <TextInput
    //                     placeholder={placeholderText}
    //                     aria-label="Demo Disabled Text Input"
    //                     isDisabled
    //                 />
    //                 <TextInput
    //                     value="SuperCoolPass123"
    //                     aria-label="Demo Password Input"
    //                     isProtected
    //                 />
    //                 <TextInput
    //                     placeholder={placeholderText}
    //                     aria-label="Demo Text Input That Has Error"
    //                     hasError
    //                 />
    //             </ComponentPreviewWithCodeBlock>
    //         </StorySection>
    //     );
    // };

    handleAdd = (files) => {
        const { onAdd } = this.props;

        this.setState({ attachments: files }, () => {
            onAdd(files);
        });
    };

    handleRemove = (params) => {
        const { onRemove } = this.props;
        const { attachments } = this.state;
        const { data } = params || {};
        const { file } = data || {};
        const { name: fileName } = file || {};

        const updatedAttachments = attachments.filter(
            (attachment) => attachment.name !== fileName,
        );

        this.setState({ attachments: updatedAttachments }, () => {
            onRemove(params);
        });
    };

    handleRemoveAll = () => {
        const { onRemoveAll } = this.props;

        this.setState({ attachments: undefined }, () => {
            onRemoveAll();
        });
    };

    baseCls = 'bankai-sb-dnd-file-uploader-guide';
}

export default DnDFileUploaderGuide;
