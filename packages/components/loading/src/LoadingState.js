import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Callout } from '@epr0t0type/bankai-ui-callouts';
import LoadingSpinners from './LoadingSpinners';

// Styles
import './styles/loading-state.scss';

class LoadingState extends PureComponent {
    static propTypes = {
        contextCls: PropTypes.string,
        title: PropTypes.string,
        msg: PropTypes.string,
        renderIcon: PropTypes.func,
    };

    render() {
        const { contextCls, renderIcon, ...rest } = this.props;
        const iconRenderer = renderIcon || this.renderIcon;

        return (
            <Callout
                {...rest}
                contextCls={cx(this.baseCls, contextCls)}
                renderIcon={iconRenderer}
            />
        );
    }

    renderIcon = (iconCls) => {
        return <LoadingSpinners contextCls={iconCls} />;
    };

    baseCls = 'bankai-loading-state';
}

export default LoadingState;
