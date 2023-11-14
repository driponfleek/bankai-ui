import PropTypes from 'prop-types';
import cx from 'classnames';
import { Heading } from '@driponfleek/bankai-ui-typography';

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

ModalHeading.propTypes = {
    baseCls: PropTypes.string,
    contextCls: PropTypes.string,
    subTitle: PropTypes.string,
    title: PropTypes.string,
    titleId: PropTypes.string,
    headingLvl: PropTypes.number,
    renderModalHeading: PropTypes.func,
};

export default ModalHeading;
