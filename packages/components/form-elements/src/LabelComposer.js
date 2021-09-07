import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { v4 as uuidv4 } from 'uuid';

const withLabel = (Comp) =>
    class FormLabel extends PureComponent {
        static defaultProps = {
            isDisabled: false,
            isReadOnly: true,
            isStacked: true,
            shouldRenderAfterComp: false,
        };

        static propTypes = {
            contextCls: PropTypes.string,
            id: PropTypes.string,
            labelText: PropTypes.string.isRequired,
            labelSubText: PropTypes.string,
            isDisabled: PropTypes.bool,
            isReadOnly: PropTypes.bool,
            isStacked: PropTypes.bool,
            shouldRenderAfterComp: PropTypes.bool,
            renderCustomLabel: PropTypes.func,
        };

        render() {
            const { contextCls, id } = this.props;
            const hasLabelContent = this.getHasLabelContent();
            const shouldRenderAfterComp = this.getShouldRenderAfterComp();
            const modCls = this.getModCls();

            return (
                <label
                    className={cx(this.baseCls, modCls, contextCls)}
                    htmlFor={id || this.id}
                >
                    {hasLabelContent &&
                        !shouldRenderAfterComp &&
                        this.renderLabel()}
                    {!!Comp && this.renderComp()}
                    {hasLabelContent &&
                        shouldRenderAfterComp &&
                        this.renderLabel()}
                </label>
            );
        }

        renderComp() {
            const props = this.getProps();

            return <Comp {...props} />;
        }

        renderLabel() {
            const { renderCustomLabel } = this.props;

            return (
                <span className={`${this.baseCls}__container`}>
                    {renderCustomLabel
                        ? this.renderCustomLabel()
                        : this.renderDefaultLabel()}
                </span>
            );
        }

        renderDefaultLabel() {
            const { labelText, labelSubText } = this.props;

            return (
                <Fragment>
                    <span className={`${this.baseCls}__text`}>{labelText}</span>
                    {labelSubText && (
                        <span className={`${this.baseCls}__sub-text`}>
                            {labelSubText}
                        </span>
                    )}
                </Fragment>
            );
        }

        renderCustomLabel() {
            const {
                contextCls,
                id,
                isStacked,
                shouldRenderAfterComp,
                renderCustomLabel,
                ...rest
            } = this.props;

            return renderCustomLabel({ ...rest });
        }

        getCompProps() {
            const {
                contextCls,
                id,
                labelText,
                labelSubText,
                isDisabled,
                isReadOnly,
                isStacked,
                shouldRenderAfterComp,
                renderCustomLabel,
                ...rest
            } = this.props;

            return {
                ...rest,
                id: id || this.id,
            };
        }

        getHasLabelContent() {
            const { labelText, renderCustomLabel } = this.props;

            return !!labelText || !!renderCustomLabel;
        }

        getShouldRenderAfterComp() {
            const { isStacked, shouldRenderAfterComp } = this.props;

            return !isStacked && shouldRenderAfterComp;
        }

        getModCls() {
            const {
                isDisabled,
                isReadOnly,
                isStacked,
                shouldRenderAfterComp,
            } = this.props;

            return {
                [`${this.baseCls}--is-disabled`]: isDisabled,
                [`${this.baseCls}--is-after`]: shouldRenderAfterComp,
                [`${this.baseCls}--is-stacked`]: isStacked,
                [`${this.baseCls}--is-read-only`]: isReadOnly,
            };
        }

        baseCls = 'bankai-form-label-composer';

        id = `bankai-form-el-${uuidv4()}`;
    };

const LabelComposer = withLabel;

export default LabelComposer;
