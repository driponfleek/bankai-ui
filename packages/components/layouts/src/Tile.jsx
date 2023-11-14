import PropTypes from 'prop-types';
import cx from 'classnames';
import TileHeading from './TileHeading';

// Styles
import './styles/tile.scss';

const Tile = (props) => {
    const {
        contextCls,
        headingContent,
        headingLvl,
        shouldPadContent,
        renderHeading,
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

Tile.defaultProps = {
    headingLvl: 2,
    shouldPadContent: true,
    renderHeading: TileHeading,
};

Tile.propTypes = {
    contextCls: PropTypes.string,
    headingContent: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    headingLvl: PropTypes.number,
    shouldPadContent: PropTypes.bool,
    renderHeading: PropTypes.func,
};

export default Tile;
