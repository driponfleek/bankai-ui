import PropTypes from 'prop-types';
import { Heading } from '@driponfleek/bankai-ui-typography';

const MainContent = (props) => {
    const { baseCls, title, msg, headingLvl } = props;

    return (
        <div className={`${baseCls}__text-container`}>
            {title && (
                <div className={`${baseCls}__title-container`}>
                    <Heading
                        contextCls={`${baseCls}__title`}
                        headingLvl={headingLvl}
                    >
                        {title}
                    </Heading>
                </div>
            )}
            {msg && (
                <div className={`${baseCls}__msg-container`}>
                    <div className={`${baseCls}__msg`}>{msg}</div>
                </div>
            )}
        </div>
    );
};

MainContent.propTypes = {
    baseCls: PropTypes.string,
    msg: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    headingLvl: PropTypes.number,
};

export default MainContent;
