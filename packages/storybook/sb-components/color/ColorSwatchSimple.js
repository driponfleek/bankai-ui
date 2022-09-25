import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import {
    BankaiDeviceDesktop,
    BankaiDeviceSmartphone,
} from '@epr0t0type/bankai-ui-icons';
import TokenName from '../content/TokenName';
import { PLATFORM } from '../../const/platformConst';

// Styles
import './styles/color-swatch-simple.scss';

class ColorSwatchSimple extends PureComponent {
    static propTypes = {
        colorDescription: PropTypes.string,
        colorName: PropTypes.string,
        colorValue: PropTypes.string,
        contextCls: PropTypes.string,
        platform: PropTypes.string,
        tokenName: PropTypes.string,
    };

    render() {
        const {
            contextCls,
            colorDescription,
            colorName,
            colorValue,
            tokenName,
        } = this.props;
        const style = { backgroundColor: colorValue };
        const hasPlatform = this.getHasPlatform();
        const modCls = this.getModCls(hasPlatform);

        return (
            <div className={cx(this.baseCls, modCls, contextCls)}>
                <div className={`${this.baseCls}__swatch-container`}>
                    <div className={`${this.baseCls}__swatch`} style={style} />
                </div>
                <div className={`${this.baseCls}__details-container`}>
                    {colorName && (
                        <p className={`${this.baseCls}__name-container`}>
                            <strong className={`${this.baseCls}__name`}>
                                {colorName}
                            </strong>
                            {hasPlatform && this.renderIcon()}
                        </p>
                    )}
                    {tokenName && (
                        <p className={`${this.baseCls}__desc`}>
                            <TokenName tokenName={tokenName} />
                        </p>
                    )}
                    {colorDescription && (
                        <p className={`${this.baseCls}__desc`}>
                            {colorDescription}
                        </p>
                    )}
                </div>
            </div>
        );
    }

    renderIcon = () => {
        const { platform } = this.props;
        const isMobile = platform === PLATFORM.MOBILE;
        const Icon = isMobile ? BankaiDeviceSmartphone : BankaiDeviceDesktop;
        const title = isMobile ? 'Mobile Only' : 'Web Only';

        return (
            <span className={`${this.baseCls}__platform-icon-container`}>
                <Icon
                    contextCls={`${this.baseCls}__platform-icon`}
                    title={title}
                />
            </span>
        );
    };

    getHasPlatform = () => {
        const { platform } = this.props;

        if (
            !platform ||
            (platform !== PLATFORM.MOBILE && platform !== PLATFORM.WEB)
        ) {
            return false;
        }

        return true;
    };

    getModCls = (hasPlatform) => {
        return {
            [`${this.baseCls}--has-platform`]: hasPlatform,
        };
    };

    baseCls = 'bankai-sb-color-swatch-simple';
}

export default ColorSwatchSimple;
