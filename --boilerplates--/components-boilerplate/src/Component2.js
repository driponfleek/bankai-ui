import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

// Styles
import './styles/component-2.scss';

class Component2 extends PureComponent {
    static defaultProps = {};

    static propTypes = {
        contextCls: PropTypes.string,
    };

    render() {
        const { contextCls } = this.props;

        return (
            <div className={cx(this.baseCls, contextCls)}>
                <p className={`${this.baseCls}__msg`}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                    fringilla nisi eu purus pulvinar, in laoreet lorem vehicula.
                    Mauris cursus nisi metus, a ornare arcu facilisis et. Nunc
                    ultrices ut erat eu gravida. Vivamus interdum, urna ac
                    mollis commodo, magna felis accumsan felis, et gravida
                    libero dolor quis quam. Pellentesque a dolor felis. Nulla
                    facilisi. Integer scelerisque orci ac tempus ullamcorper.
                    Vestibulum ante ipsum primis in faucibus orci luctus et
                    ultrices posuere cubilia Curae;
                </p>
            </div>
        );
    }

    baseCls = 'component-2';
}

export default Component2;
