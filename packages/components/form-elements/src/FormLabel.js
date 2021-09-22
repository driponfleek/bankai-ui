import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

// Styles
import './styles/form-label.scss';

class FormLabel extends PureComponent {
    static defaultProps = {};

    static propTypes = {
        contextCls: PropTypes.string,
        htmlFor: PropTypes.string,
        labelText: PropTypes.string.isRequired,
        renderCustomLabel: PropTypes.func,
    };

    render() {
        const { contextCls, htmlFor, labelText, ...rest } = this.props;

        return (
            <label
                {...rest}
                className={cx(this.baseCls, contextCls)}
                htmlFor={htmlFor || this.htmlFor}
            >
                {this.renderLabel()}
            </label>
        );
    }

    renderLabel() {
        const { renderCustomLabel } = this.props;

        return renderCustomLabel
            ? this.renderCustomLabel()
            : this.renderDefaultLabel();
    }

    renderDefaultLabel() {
        const { labelText } = this.props;

        return <span className={`${this.baseCls}__text`}>{labelText}</span>;
    }

    renderCustomLabel() {
        const { contextCls, renderCustomLabel, ...rest } = this.props;

        return renderCustomLabel({ ...rest });
    }

    getHasLabelContent() {
        const { labelText, renderCustomLabel } = this.props;

        return !!labelText || !!renderCustomLabel;
    }

    baseCls = 'bankai-form-label';
}

export default FormLabel;
