import React, { PureComponent } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import ColorResults from './ColorResults';
import ColorPickerWithCompatibilities from './ColorPickerWithCompatibilities';

// Styles
import './styles/color-picker-with-variants.scss';

class ColorPickerWithVariants extends PureComponent {
    static defaultProps = {
        baseColor: {},
        variants: [],
    };

    static propTypes = {
        contextCls: PropTypes.string,
        baseColor: PropTypes.shape({
            hex: PropTypes.string,
        }),
        variants: PropTypes.arrayOf(PropTypes.object),
        renderComp: PropTypes.func,
        renderSwatch: PropTypes.func,
        renderPicker: PropTypes.func,
    };

    render() {
        const { contextCls, renderPicker, ...rest } = this.props;
        const pickerRenderer = renderPicker || this.renderPicker;

        return (
            <ColorResults
                {...rest}
                contextCls={cx(this.baseCls, contextCls)}
                renderComp={pickerRenderer}
            />
        );
    }

    renderPicker = (props) => {
        return <ColorPickerWithCompatibilities {...props} />;
    };

    baseCls = 'bankai-sb-color-picker-with-variants';
}

export default ColorPickerWithVariants;
