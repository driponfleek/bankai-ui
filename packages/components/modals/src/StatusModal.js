import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import {
    LoadingState,
    LoadingBars,
    LOADING_BARS_VARIANTS,
} from '@epr0t0type/bankai-ui-loading';
import ARIAModal from './ARIAModal';

// Styles
import './styles/status-modal.scss';

class StatusModal extends PureComponent {
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

    render() {
        const {
            dialogContextCls,
            overlayContextCls,
            statusText,
            isOpen,
            renderIcon,
            ...rest
        } = this.props;
        const iconRenderer = renderIcon || this.renderIcon;

        return (
            <ARIAModal
                {...rest}
                ariaLabel={statusText}
                dialogContextCls={cx(
                    `${this.baseCls}__dialog`,
                    dialogContextCls,
                )}
                overlayContextCls={cx(
                    `${this.baseCls}__overlay`,
                    overlayContextCls,
                )}
                isOpen={isOpen}
                shouldCloseOnEsc={false}
                shouldCloseOnOverlayClick={false}
            >
                <LoadingState
                    contextCls={this.baseCls}
                    title={statusText}
                    renderIcon={iconRenderer}
                />
            </ARIAModal>
        );
    }

    renderIcon = (iconCls) => {
        const { FREQUENCY } = LOADING_BARS_VARIANTS;

        return <LoadingBars contextCls={iconCls} variant={FREQUENCY} />;
    };

    baseCls = 'bankai-status-modal';
}

export default StatusModal;
