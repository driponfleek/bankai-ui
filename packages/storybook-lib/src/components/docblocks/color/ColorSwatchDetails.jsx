import PropTypes from 'prop-types';
import cx from 'classnames';
import { Paragraph } from '@driponfleek/bankai-ui-typography';
import ColorSwatchMetaList from './ColorSwatchMetaList';

// Constants
import { COLOR_BASE_CLS } from './const/colorBaseClsConst';

// Styles
import './styles/color-swatch-details.scss';

const ColorSwatchDetails = (props) => {
    const { contextCls, mainContent, metaList } = props;
    const baseCls = `${COLOR_BASE_CLS}__details`;
    const hasMeta = metaList.length > 0;

    return (
        <div className={cx(baseCls, contextCls)}>
            {mainContent && (
                <Paragraph contextCls={`${baseCls}-main`}>
                    {mainContent}
                </Paragraph>
            )}
            {hasMeta && <ColorSwatchMetaList metaList={metaList} />}
        </div>
    );
};

ColorSwatchDetails.defaultProps = {
    metaList: [],
};

ColorSwatchDetails.propTypes = {
    contextCls: PropTypes.string,
    mainContent: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    metaList: PropTypes.arrayOf(
        PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    ),
};

export default ColorSwatchDetails;
