import ColorDesignTokenListItem from '../../../../sb-components/lists/ColorDesignTokenListItem';

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
