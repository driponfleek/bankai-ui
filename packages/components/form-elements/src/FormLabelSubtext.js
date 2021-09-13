import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

// Styles
import './styles/form-label-subtext.scss';

class FormLabelSubtext extends PureComponent {
    static defaultProps = {};

    static propTypes = {
        contextCls: PropTypes.string,
        id: PropTypes.string,
        subtext: PropTypes.string,
        renderCustomSubtext: PropTypes.func,
    };

    render() {
        const { renderCustomSubtext, ...rest } = this.props;

        return renderCustomSubtext
            ? renderCustomSubtext({ ...rest, baseCls: this.baseCls })
            : this.renderDefaultSubtext();
    }

    renderDefaultSubtext() {
        const { contextCls, id, subtext } = this.props;

        return (
            <p className={cx(this.baseCls, contextCls)} id={id}>
                {subtext}
            </p>
        );
    }

    baseCls = 'bankai-form-label-subtext';
}

export default FormLabelSubtext;
