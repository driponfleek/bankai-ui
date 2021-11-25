import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Button, BTN_VARIANTS } from '@epr0t0type/bankai-ui-buttons';
import {
    Dropzone,
    DndProvider,
    HTML5Backend,
    NativeTypes,
} from '@epr0t0type/bankai-ui-drag-and-drop';
import {
    BankaiBan,
    BankaiCloudUpload,
    BankaiSpinner,
    BankaiX,
} from '@epr0t0type/bankai-ui-icons';

// Utils
import {
    getHasValidFileTypes,
    getAcceptedFileExtensions,
} from './utils/dndFileUploaderUtils';

// Constants
import { DND_FILE_UPLOADER_MODES as MODES } from './const/dndFileUploaderConst';

// Styles
import './styles/dnd-file-uploader.scss';

class DnDFileUploader extends Component {
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

    state = {
        isRejected: false,
    };

    render() {
        const { isDisabled, isBusy, contextCls } = this.props;
        const modCls = this.getModCls();

        return (
            <DndProvider backend={HTML5Backend}>
                <div className={cx(this.baseCls, modCls, contextCls)}>
                    {isDisabled && this.renderDisabled()}
                    {!isDisabled && isBusy && this.renderMain(MODES.BUSY)}
                    {!isDisabled && !isBusy && this.renderDropzone()}
                </div>
            </DndProvider>
        );
    }

    renderDropzone = () => {
        const { attachments } = this.props;
        const { FILE } = NativeTypes;

        return (
            <Dropzone
                accepts={[FILE]}
                attachments={attachments}
                onDrop={this.handleDrop}
                renderDefaultState={this.renderDefaultState}
                renderHoverState={this.renderHoverState}
                renderAttachmentsState={this.renderAttachmentsState}
            />
        );
    };

    renderMain = (MODE) => {
        const modCls = this.getInnerModCls(MODE);

        return (
            <div className={cx(`${this.baseCls}__inner`, modCls)}>
                <div className={`${this.baseCls}__content-container`}>
                    {this.renderIcon(MODE)}
                    <div className={`${this.baseCls}__messaging-container`}>
                        {this.renderTitle(MODE)}
                        <div className={`${this.baseCls}__msg-container`}>
                            <div
                                className={`${this.baseCls}__msg-container-inner`}
                            >
                                {this.renderMsg(MODE)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    renderDefaultState = () => {
        const { isRejected } = this.state;
        const MODE = isRejected ? MODES.REJECTED : MODES.DEFAULT;

        return this.renderMain(MODE);
    };

    renderHoverState = () => {
        return this.renderMain(MODES.HOVER);
    };

    renderDisabled = () => {
        const { isCompact, shouldShowAttachments, attachments } = this.props;
        const shouldRenderAttachments =
            !isCompact && shouldShowAttachments && attachments.length > 0;
        const MODE = shouldRenderAttachments
            ? MODES.ATTACHMENTS
            : MODES.DEFAULT;

        return this.renderMain(MODE);
    };

    renderAttachmentsState = () => {
        const { isBusy, isCompact, shouldShowAttachments } = this.props;
        const { isRejected } = this.state;
        let MODE;

        switch (true) {
            case isBusy:
                MODE = MODES.BUSY;
                break;
            case isRejected:
                MODE = MODES.REJECTED;
                break;
            case !shouldShowAttachments:
                MODE = MODES.DEFAULT;
                break;
            case isCompact:
                MODE = MODES.DEFAULT;
                break;
            default:
                MODE = MODES.ATTACHMENTS;
        }

        return this.renderMain(MODE);
    };

    renderIcon = (MODE) => {
        let iconRenderer = this.renderUploadIcon;
        const iconCls = `${this.baseCls}__icon`;

        if (MODE === MODES.BUSY) {
            iconRenderer = this.renderBusyIcon;
        }

        if (MODE === MODES.REJECTED) {
            iconRenderer = this.renderRejectedIcon;
        }

        return (
            <div className={`${this.baseCls}__icon-container`}>
                <div className={`${this.baseCls}__icon-container-inner`}>
                    {iconRenderer(iconCls)}
                </div>
            </div>
        );
    };

    renderBusyIcon = (iconCls) => {
        const { renderBusyIcon } = this.props;

        return renderBusyIcon ? (
            renderBusyIcon(iconCls)
        ) : (
            <BankaiSpinner contextCls={iconCls} />
        );
    };

    renderRejectedIcon = (iconCls) => {
        const { renderRejectedIcon } = this.props;

        return renderRejectedIcon ? (
            renderRejectedIcon(iconCls)
        ) : (
            <BankaiBan contextCls={iconCls} />
        );
    };

    renderUploadIcon = (iconCls) => {
        const { renderUploadIcon } = this.props;

        return renderUploadIcon ? (
            renderUploadIcon(iconCls)
        ) : (
            <BankaiCloudUpload contextCls={iconCls} />
        );
    };

    renderTitle = (MODE) => {
        return MODE === MODES.ATTACHMENTS
            ? this.renderAttachmentsList()
            : this.renderSimpleTitle(MODE);
    };

    renderSimpleTitle = (MODE) => {
        const {
            localeDefaultState,
            localeHoverState,
            localeRejectDropState,
            localeBusyState,
        } = this.props;
        const titles = {
            [MODES.DEFAULT]: localeDefaultState.titleText,
            [MODES.HOVER]: localeHoverState.titleText,
            [MODES.REJECTED]: localeRejectDropState.titleText,
            [MODES.BUSY]: localeBusyState.titleText,
        };

        return (
            titles[MODE] && (
                <div className={`${this.baseCls}__title-container`}>
                    <div className={`${this.baseCls}__title-container-inner`}>
                        <p className={`${this.baseCls}__title`}>
                            {titles[MODE]}
                        </p>
                    </div>
                </div>
            )
        );
    };

    renderAttachmentsList = () => {
        const { attachments } = this.props;

        return (
            <ul className={`${this.baseCls}__attachments-list`}>
                {attachments.map((file) => (
                    <li
                        key={file.name}
                        className={`${this.baseCls}__attachments-list-item`}
                    >
                        {this.renderAttachment(file)}
                    </li>
                ))}
            </ul>
        );
    };

    renderAttachment = (file) => {
        const { localeShowAttachmentsState, isDisabled } = this.props;
        const { removeAttachmentARIALabel } = localeShowAttachmentsState;
        const { name } = file;

        return (
            <span className={`${this.baseCls}__attachments-list-item-inner`}>
                <span className={`${this.baseCls}__attachment-file-name`}>
                    {name}
                </span>
                <Button
                    aria-label={`${removeAttachmentARIALabel || ''} ${name}`}
                    contextCls={`${this.baseCls}__attachment-remove-btn`}
                    renderIcon={this.renderRemoveAttachmentIcon}
                    isDisabled={isDisabled}
                    data={{ file }}
                    onClick={this.handleRemove}
                />
            </span>
        );
    };

    renderRemoveAttachmentIcon = () => {
        return <BankaiX />;
    };

    renderMsg = (MODE) => {
        switch (MODE) {
            case MODES.ATTACHMENTS:
                return this.renderAttachmentsStateMessage();
            case MODES.DEFAULT:
                return this.renderDefaultStateMessage();
            default:
                return this.renderSimpleMessage(MODE);
        }
    };

    renderDefaultStateMessage = () => {
        const { localeDefaultState, isCompact } = this.props;
        const { msgText, btnText } = localeDefaultState;

        return (
            <p className={`${this.baseCls}__msg ${this.baseCls}__msg--default`}>
                {msgText && (
                    <span className={`${this.baseCls}__msg-text`}>
                        {msgText}
                    </span>
                )}
                {isCompact && msgText && btnText && ' '}
                {btnText && this.renderBrowseBtn(btnText, isCompact)}
            </p>
        );
    };

    renderAttachmentsStateMessage = () => {
        const { localeShowAttachmentsState, attachments } = this.props;
        const {
            msgBeforeBrowseText,
            msgAfterBrowseText,
            browseLinkText,
        } = localeShowAttachmentsState;
        const shouldRenderRemoveAll = attachments.length > 1;

        return (
            <p className={`${this.baseCls}__msg`}>
                {msgBeforeBrowseText && (
                    <span className={`${this.baseCls}__msg-text`}>
                        {msgBeforeBrowseText}
                    </span>
                )}
                {browseLinkText && this.renderBrowseBtn(browseLinkText, true)}
                {!!msgAfterBrowseText && (
                    <span className={`${this.baseCls}__msg-text`}>
                        {msgAfterBrowseText}
                    </span>
                )}
                {shouldRenderRemoveAll && this.renderRemoveAllBtn()}
            </p>
        );
    };

    renderSimpleMessage = (MODE) => {
        const {
            localeHoverState,
            localeRejectDropState,
            localeBusyState,
        } = this.props;
        const messages = {
            [MODES.HOVER]: localeHoverState.msgText,
            [MODES.REJECTED]: localeRejectDropState.msgText,
            [MODES.BUSY]: localeBusyState.msgText,
        };

        return (
            <p className={`${this.baseCls}__msg`}>
                <span className={`${this.baseCls}__msg-text`}>
                    {messages[MODE]}
                </span>
            </p>
        );
    };

    renderRemoveAllBtn = () => {
        const {
            localeShowAttachmentsState,
            isDisabled,
            onRemoveAll,
        } = this.props;
        const { removeAllLinkText } = localeShowAttachmentsState;

        return isDisabled ? (
            this.renderMockBtn(
                removeAllLinkText,
                true,
                `${this.baseCls}__remove-all-action`,
            )
        ) : (
            <Button
                contextCls={`${this.baseCls}__remove-all-action`}
                variant={BTN_VARIANTS.LINK}
                isDisabled={isDisabled}
                text={removeAllLinkText}
                onClick={onRemoveAll}
            />
        );
    };

    renderBrowseBtn = (btnText, isLink) => {
        const {
            inputProps,
            isDisabled,
            canUploadMultiple,
            allowedTypes,
        } = this.props;

        return (
            <span className={`${this.baseCls}__browse-btn-container`}>
                <input
                    {...inputProps}
                    className={`${this.baseCls}__browse-input`}
                    type="file"
                    accept={getAcceptedFileExtensions(allowedTypes)}
                    disabled={isDisabled}
                    multiple={canUploadMultiple}
                    onChange={this.handleBrowse}
                />
                {this.renderMockBtn(
                    btnText,
                    isLink,
                    `${this.baseCls}__browse-btn`,
                )}
            </span>
        );
    };

    renderMockBtn = (btnText, isLink, btnCls) => {
        const { isDisabled } = this.props;
        const bankaiBtnCls = 'bankai-button';
        const btnModCls = {
            [`${bankaiBtnCls}--link`]: isLink,
            [`${bankaiBtnCls}--secondary`]: !isLink,
            [`${bankaiBtnCls}--disabled`]: isDisabled,
        };

        return (
            <span className={cx(bankaiBtnCls, btnModCls, btnCls)}>
                <span className={`${bankaiBtnCls}__content-container`}>
                    <span className={`${bankaiBtnCls}__text-container`}>
                        <span className={`${bankaiBtnCls}__text`}>
                            {btnText}
                        </span>
                    </span>
                </span>
            </span>
        );
    };

    handleDrop = (item, monitor) => {
        const { canUploadMultiple } = this.props;

        if (monitor) {
            const { files } = monitor.getItem();
            const attachments = canUploadMultiple ? files : [files[0]];
            this.handleAdd(attachments);
        }
    };

    handleBrowse = (e) => {
        const { target } = e;
        const { files } = target;
        const attachments = files ? Array.from(files) : [];

        if (attachments && attachments.length) {
            this.handleAdd(attachments);
        }
    };

    handleAdd = (attachments) => {
        const { onAdd, allowedTypes } = this.props;
        const hasValidFileTypes = getHasValidFileTypes(
            attachments,
            allowedTypes,
        );

        if (hasValidFileTypes) {
            onAdd(attachments);
        } else {
            this.setState({ isRejected: true }, () => {
                setTimeout(() => {
                    this.setState({ isRejected: false });
                }, 3000);
            });
        }
    };

    handleRemove = (params) => {
        const { onRemove } = this.props;

        onRemove(params);
    };

    getFileMIMETypes = (fileItem) => {
        if (!fileItem) {
            return [];
        }

        const { files, items } = fileItem;

        if (files && files.length > 0) {
            return files.map((f) => f.type);
        }

        if (items && items.length > 0) {
            return Array.from(items).map((i) => i.type);
        }

        return [];
    };

    getInnerModCls = (MODE) => {
        return {
            [`${this.baseCls}--attachment`]: MODE === MODES.ATTACHMENTS,
            [`${this.baseCls}--default`]: MODE === MODES.DEFAULT,
            [`${this.baseCls}--hover`]: MODE === MODES.HOVER,
            [`${this.baseCls}--rejected`]: MODE === MODES.REJECTED,
            [`${this.baseCls}--busy`]: MODE === MODES.BUSY,
        };
    };

    getModCls = () => {
        const { isCompact, isDisabled, isBusy } = this.props;

        return {
            [`${this.baseCls}--compact`]: isCompact,
            [`${this.baseCls}--disabled`]: isDisabled || isBusy,
        };
    };

    baseCls = 'bankai-dnd-file-uploader';
}

export default DnDFileUploader;
