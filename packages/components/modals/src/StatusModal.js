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
        isMounted: false,
    };

    static propTypes = {
        dialogContextCls: PropTypes.string,
        statusText: PropTypes.string.isRequired,
        underlayContextCls: PropTypes.string,
        isMounted: PropTypes.bool,
        renderIcon: PropTypes.func,
    };

    render() {
        const {
            dialogContextCls,
            statusText,
            underlayContextCls,
            isMounted,
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
                underlayContextCls={cx(
                    `${this.baseCls}__underlay`,
                    underlayContextCls,
                )}
                isMounted={isMounted}
                shoudExitOnEscapePress={false}
                shouldExitOnUnderlayClick={false}
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
