import cx from 'classnames';
import { Paragraph } from '@driponfleek/bankai-ui-typography';
import ColorSwatchMetaList from './ColorSwatchMetaList';

// Constants
import { COLOR_BASE_CLS } from './const/colorBaseClsConst';

// Styles
import './styles/color-swatch-details.scss';

/**
 * @param {Object} props
 * @param {string} [props.contextCls] - Additional CSS class name(s) to apply to the root element
 * @param {string|React.ReactElement} [props.mainContent] - Primary content to display
 * @param {Array<string|React.ReactElement>} [props.metaList] - Meta items displayed beneath the main content
 */
const ColorSwatchDetails = (props) => {
    const { contextCls, mainContent, metaList = [] } = props;
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

export default ColorSwatchDetails;
