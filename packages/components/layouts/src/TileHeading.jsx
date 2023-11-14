import PropTypes from 'prop-types';
import { Heading } from '@driponfleek/bankai-ui-typography';

const TileHeading = (props) => {
    const { baseCls, headingLvl, headingContent } = props;

    return (
        <div className={`${baseCls}__heading-container`}>
            <Heading headingLvl={headingLvl} contextCls={`${baseCls}__heading`}>
                {headingContent}
            </Heading>
        </div>
    );
};

TileHeading.propTypes = {
    baseCls: PropTypes.string,
    headingContent: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    headingLvl: PropTypes.number,
};

export default TileHeading;
