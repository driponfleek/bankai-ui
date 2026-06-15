import cx from 'classnames';
import { Heading } from '@driponfleek/bankai-ui-typography';

/**
 * @param {Object} props
 * @param {string} [props.baseCls] - Base CSS class name passed from the parent Modal component
 * @param {string} [props.contextCls] - Additional CSS class name(s) to apply to the heading container
 * @param {string} [props.subTitle] - Secondary heading text rendered below the title
 * @param {string} [props.title] - Primary heading text
 * @param {string} [props.titleId] - ID attribute applied to the title element for ARIA linking
 * @param {number} [props.headingLvl] - Heading level for the title element
 * @param {Function} [props.renderModalHeading] - Custom render function that replaces the default heading layout
 */
const ModalHeading = (props) => {
    const {
        baseCls,
        contextCls,
        titleId,
        subTitle,
        title,
        headingLvl,
        renderModalHeading,
    } = props;

    return (
        <div className={cx(`${baseCls}__heading-container`, contextCls)}>
            {renderModalHeading &&
                renderModalHeading({ contextCls: `${baseCls}__title` })}
            {!renderModalHeading && (
                <>
                    {title && (
                        <Heading
                            contextCls={`${baseCls}__title`}
                            id={titleId}
                            headingLvl={headingLvl}
                        >
                            {title}
                        </Heading>
                    )}
                    {subTitle && (
                        <p className={`${baseCls}__sub-title`}>{subTitle}</p>
                    )}
                </>
            )}
        </div>
    );
};

export default ModalHeading;
