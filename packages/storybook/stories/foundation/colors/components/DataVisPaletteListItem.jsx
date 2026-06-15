import ColorDesignTokenListItem from '../../../../sb-components/lists/ColorDesignTokenListItem';

/**
 * @param {Object} props
 * @param {string} [props.color] - Color hex value used as the swatch background
 * @param {string} [props.mainContent] - Token name displayed as the swatch label
 */
const DataVisPaletteListItem = (props) => {
    const { color, mainContent } = props ?? {};

    return <ColorDesignTokenListItem token={mainContent} color={color} />;
};

export default DataVisPaletteListItem;
