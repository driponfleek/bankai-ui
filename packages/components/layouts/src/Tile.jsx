import cx from 'classnames';
import TileHeading from './components/tile/TileHeading';

// Styles
import './styles/tile.scss';

/**
 * @param {Object} props
 * @param {string} [props.contextCls] - Additional CSS class name(s) to apply to the root element
 * @param {string|React.ReactElement} [props.headingContent] - Content rendered as the tile heading
 * @param {number} [props.headingLvl] - Heading level for the tile heading
 * @param {boolean} [props.shouldPadContent] - Whether to apply padding to the content area
 * @param {Function} [props.renderHeading] - Custom render function for the tile heading
 */
const Tile = (props) => {
    const {
        contextCls,
        headingContent,
        headingLvl = 2,
        shouldPadContent = true,
        renderHeading = TileHeading,
        children,
    } = props;
    const baseCls = 'bankai-tile';
    const modCls = {
        [`${baseCls}--pad-content`]: shouldPadContent,
    };

    return (
        <div className={cx(baseCls, modCls, contextCls)}>
            {headingContent &&
                renderHeading({ baseCls, headingContent, headingLvl })}
            {children && (
                <div className={`${baseCls}__content-container`}>
                    <div className={`${baseCls}__content-container-inner`}>
                        {children}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Tile;
