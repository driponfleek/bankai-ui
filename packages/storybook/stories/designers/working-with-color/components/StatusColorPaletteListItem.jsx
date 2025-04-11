import ColorDesignTokenListItem from '../../../../sb-components/lists/ColorDesignTokenListItem';

const StatusColorPaletteListItem = (props) => {
    const { color, mainContent } = props ?? {};

    return <ColorDesignTokenListItem token={mainContent} color={color} />;
};

export default StatusColorPaletteListItem;
