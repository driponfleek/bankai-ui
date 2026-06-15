import ColorDesignTokenListItem from '../../../../sb-components/lists/ColorDesignTokenListItem';

/**
 * @param {Object} props
 * @param {string} [props.color] - Color hex value used as both the token name and swatch color
 */
const HarmonyColorPaletteListItem = (props) => {
    const { color } = props ?? {};

    return (
        <ColorDesignTokenListItem
            token={color}
            color={color}
            shouldShowMeta={false}
        />
    );
};

export default HarmonyColorPaletteListItem;
