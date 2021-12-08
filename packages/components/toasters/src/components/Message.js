import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Heading } from '@epr0t0type/bankai-ui-typography';
import Icon from './Icon';

// Constants
import VARIANTS from '../const/variantsConst';
import baseCls from '../const/cssBaseClassConst';

const { DEFAULT } = VARIANTS;

class Message extends PureComponent {
    static defaultProps = {
        variant: DEFAULT,
        shouldShowIcon: true,
    };

    static propTypes = {
        message: PropTypes.string,
        title: PropTypes.string,
        variant: PropTypes.string,
        shouldShowIcon: PropTypes.bool,
        renderIcon: PropTypes.func,
    };

    render() {
        const { message, title, variant, shouldShowIcon, renderIcon } =
            this.props;

        return (
            <div className={`${baseCls}__content-container`}>
                <Icon
                    variant={variant}
                    shouldShowIcon={shouldShowIcon}
                    renderIcon={renderIcon}
                />
                <div className={`${baseCls}__msg-container`}>
                    <div className={`${baseCls}__msg-container-inner`}>
                        {title && (
                            <Heading contextCls={`${baseCls}__title`}>
                                {title}
                            </Heading>
                        )}
                        {message && (
                            <p className={`${baseCls}__msg`}>{message}</p>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

export default Message;
