import cx from 'classnames';

// Styles
import './styles/fieldset.scss';

/**
 * @param {Object} props
 * @param {string} [props.contextCls] - Additional CSS class name(s) to apply to the root element
 * @param {string} [props.formId] - Associates the fieldset with a form by ID
 * @param {string} [props.name] - Name attribute for the fieldset
 * @param {boolean} [props.isDisabled] - Whether the fieldset and all its controls are disabled
 * @param {boolean} [props.shouldIndentContent] - Whether to indent the fieldset content
 * @param {Object} [props.legendProps] - Additional props to spread onto the legend element
 * @param {string|React.ReactElement} props.legend - Content rendered inside the legend element
 */
const Fieldset = (props) => {
    const {
        contextCls,
        formId: form,
        name,
        isDisabled: disabled = false,
        shouldIndentContent = false,
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
        [`${baseCls}--indent`]: shouldIndentContent,
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

export default Fieldset;
