import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Button, LinkButton } from '@epr0t0type/bankai-ui-buttons';
import {
    BankaiBan,
    BankaiCloudUpload,
    BankaiSpinner,
    BankaiX,
} from '@epr0t0type/bankai-ui-icons';

// Utils
import { getAcceptedFileExtensions } from './utils/dndFileUploaderUtils';

// Constants
import { DND_FILE_UPLOADER_MODES as MODES } from './const/dndFileUploaderConst';

// Styles
import './styles/dnd-file-uploader.scss';

const { ATTACHMENTS, BUSY, DEFAULT, HOVER, REJECTED } = MODES;

class DnDFileUploaderUI extends Component {
    static defaultProps = {
        allowedTypes: [],
        localeDefaultState: {},
        localeHoverState: {},
        localeRejectDropState: {},
        localeShowAttachmentsState: {},
        localeBusyState: {},
        attachments: [],
        canDrop: true,
        canUploadMultiple: false,
        isBusy: false,
        isCompact: false,
        isDisabled: false,
        isOver: false,
        shouldShowAttachments: true,
        onAdd: () => Promise.resolve(),
        onRemove: () => Promise.resolve(),
        onRemoveAll: () => Promise.resolve(),
    };

    static propTypes = {
        contextCls: PropTypes.string,
        rejectError: PropTypes.string,
        canUploadMultiple: PropTypes.bool,
        canDrop: PropTypes.bool,
        isBusy: PropTypes.bool,
        isCompact: PropTypes.bool,
        isDisabled: PropTypes.bool,
        isOver: PropTypes.bool,
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

    render() {
        const { contextCls } = this.props;
        const MODE = this.getMode();
        const modCls = this.getModCls();
        const innerModCls = this.getInnerModCls(MODE);

        return (
            <div className={cx(this.baseCls, modCls, contextCls)}>
                <div className={cx(`${this.baseCls}__inner`, innerModCls)}>
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
            </div>
        );
    }

    renderIcon = (MODE) => {
        const { renderBusyIcon, renderUploadIcon, renderRejectedIcon } =
            this.props;
        const iconCls = `${this.baseCls}__icon`;
        let iconRenderer = renderUploadIcon || this.renderUploadIcon;

        if (MODE === MODES.BUSY) {
            iconRenderer = renderBusyIcon || this.renderBusyIcon;
        }

        if (MODE === MODES.REJECTED) {
            iconRenderer = renderRejectedIcon || this.renderRejectedIcon;
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
        return <BankaiSpinner contextCls={iconCls} />;
    };

    renderRejectedIcon = (iconCls) => {
        return <BankaiBan contextCls={iconCls} />;
    };

    renderUploadIcon = (iconCls) => {
        return <BankaiCloudUpload contextCls={iconCls} />;
    };

    renderTitle = (MODE) => {
        return MODE === ATTACHMENTS
            ? this.renderAttachmentsList()
            : this.renderSimpleTitle(MODE);
    };

    renderSimpleTitle = (MODE) => {
        const { localeDefaultState, localeHoverState, localeBusyState } =
            this.props;
        const localeRejectDropState = this.getLocaleRejectState();
        const titles = {
            [DEFAULT]: localeDefaultState.titleText,
            [HOVER]: localeHoverState.titleText,
            [REJECTED]: localeRejectDropState.titleText,
            [BUSY]: localeBusyState.titleText,
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
            case ATTACHMENTS:
                return this.renderAttachmentsStateMessage();
            case DEFAULT:
                return this.renderDefaultStateMessage();
            default:
                return this.renderSimpleMessage(MODE);
        }
    };

    renderSimpleMessage = (MODE) => {
        const { localeHoverState, localeBusyState } = this.props;
        const localeRejectDropState = this.getLocaleRejectState();
        const messages = {
            [HOVER]: localeHoverState.msgText,
            [REJECTED]: localeRejectDropState.msgText,
            [BUSY]: localeBusyState.msgText,
        };

        return (
            <p className={`${this.baseCls}__msg`}>
                <span className={`${this.baseCls}__msg-text`}>
                    {messages[MODE]}
                </span>
            </p>
        );
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
        const { msgBeforeBrowseText, msgAfterBrowseText, browseLinkText } =
            localeShowAttachmentsState;
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

    renderRemoveAllBtn = () => {
        const { localeShowAttachmentsState, isDisabled, onRemoveAll } =
            this.props;
        const { removeAllLinkText } = localeShowAttachmentsState;

        return isDisabled ? (
            this.renderMockBtn(
                removeAllLinkText,
                true,
                `${this.baseCls}__remove-all-action`,
            )
        ) : (
            <LinkButton
                contextCls={`${this.baseCls}__remove-all-action`}
                text={removeAllLinkText}
                onClick={onRemoveAll}
            />
        );
    };

    renderBrowseBtn = (btnText, isLink) => {
        const { inputProps, isDisabled, canUploadMultiple, allowedTypes } =
            this.props;

        return (
            <span className={`${this.baseCls}__browse-btn-container`}>
                <input
                    {...inputProps}
                    aria-label={btnText}
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
        const bankaiBtnCls = isLink ? 'bankai-link-button' : 'bankai-button';
        const btnModCls = {
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

    handleBrowse = (e) => {
        const { onAdd } = this.props;
        const { target } = e;
        const { files } = target;
        const attachments = files ? Array.from(files) : [];

        if (attachments && attachments.length) {
            onAdd(attachments);
        }
    };

    handleRemove = (params) => {
        const { onRemove } = this.props;

        onRemove(params);
    };

    getMode = () => {
        const {
            isBusy,
            isCompact,
            isOver,
            rejectError,
            shouldShowAttachments,
        } = this.props;
        const hasAttachments = this.getHasAttachments();

        switch (true) {
            case isBusy:
                return BUSY;
            case !!rejectError:
                return REJECTED;
            case isOver:
                return HOVER;
            case shouldShowAttachments && !isCompact && hasAttachments:
                return ATTACHMENTS;
            default:
                return DEFAULT;
        }
    };

    getHasAttachments = () => {
        const { attachments } = this.props;

        return attachments.length > 0;
    };

    getLocaleRejectState = () => {
        const { localeRejectDropState, rejectError } = this.props;

        return localeRejectDropState[rejectError] || {};
    };

    getInnerModCls = (MODE) => {
        return {
            [`${this.baseCls}--attachment`]: MODE === ATTACHMENTS,
            [`${this.baseCls}--default`]: MODE === DEFAULT,
            [`${this.baseCls}--hover`]: MODE === HOVER,
            [`${this.baseCls}--rejected`]: MODE === REJECTED,
            [`${this.baseCls}--busy`]: MODE === BUSY,
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

export default DnDFileUploaderUI;
