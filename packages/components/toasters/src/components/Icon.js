import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
// import cx from 'classnames';
import {
    BankaiCheck,
    BankaiCircleInfo,
    BankaiTriangleAlert,
} from '@epr0t0type/bankai-ui-icons';

// Constants
import VARIANTS from '../const/variantsConst';
import baseCls from '../const/cssBaseClassConst';

const { DEFAULT, ERROR, INFO, SUCCESS, WARNING } = VARIANTS;

class Icon extends PureComponent {
    static defaultProps = {
        variant: DEFAULT,
        shouldShowIcon: true,
    };

    static propTypes = {
        variant: PropTypes.string,
        shouldShowIcon: PropTypes.bool,
        renderIcon: PropTypes.func,
    };

    render() {
        const { variant, renderIcon } = this.props;
        const shouldRenderIcon = this.getShouldRenderIcon();
        const iconRenderer = renderIcon || this.renderIcon;
        const iconCls = `${baseCls}__icon`;

        return (
            shouldRenderIcon && (
                <div className={`${baseCls}__icon-container`}>
                    <div className={`${baseCls}__icon-safe-space`}>
                        {iconRenderer(variant, iconCls)}
                    </div>
                </div>
            )
        );
    }

    renderIcon = (variant, iconCls) => {
        const IconComp = this.getIcon(variant);

        return IconComp && <IconComp contextCls={iconCls} />;
    };

    getShouldRenderIcon = () => {
        const { variant, shouldShowIcon, renderIcon } = this.props;

        if (!shouldShowIcon) {
            return false;
        }

        if (variant === DEFAULT && !renderIcon) {
            return false;
        }

        return true;
    };

    getIcon = (variant) => {
        let StatusIcon;

        switch (variant) {
            case ERROR:
            case WARNING:
                StatusIcon = BankaiTriangleAlert;
                break;
            case INFO:
                StatusIcon = BankaiCircleInfo;
                break;
            case SUCCESS:
                StatusIcon = BankaiCheck;
                break;
            default:
                break;
        }

        return StatusIcon;
    };
}

export default Icon;
