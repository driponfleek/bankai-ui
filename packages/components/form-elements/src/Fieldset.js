import PropTypes from 'prop-types';
import cx from 'classnames';

// Styles
import './styles/fieldset.scss';

const Fieldset = (props) => {
    const {
        contextCls,
        formId: form,
        name,
        isDisabled: disabled,
        shouldIndentContent,
        legendProps,
        legend,
        children,
        ...rest
    } = props;
    const baseCls = 'bankai-fieldset';
    const fieldsetProps = {
        ...(form && { form }),
        ...(name && { name }),
        disabled,
        ...rest,
    };
    const modCls = {
        [`${baseCls}--should-indent-content`]: shouldIndentContent,
    };

    return (
        <fieldset
            className={cx(baseCls, modCls, contextCls)}
            {...fieldsetProps}
        >
            <legend {...legendProps} className={`${baseCls}__legend`}>
                {legend}
            </legend>
            <div className={`${baseCls}__content-container`}>{children}</div>
        </fieldset>
    );
};

Fieldset.defaultProps = {
    isDisabled: false,
    shouldIndentContent: true,
};

Fieldset.propTypes = {
    contextCls: PropTypes.string,
    formId: PropTypes.string,
    name: PropTypes.string,
    isDisabled: PropTypes.bool,
    shouldIndentContent: PropTypes.bool,
    legendProps: PropTypes.object,
    legend: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
        .isRequired,
};

export default Fieldset;
