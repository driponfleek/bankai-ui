import ColorDesignTokenListItem from '../../../../sb-components/lists/ColorDesignTokenListItem';

const DataVisPaletteListItem = (props) => {
    const { color, mainContent } = props ?? {};

    return <ColorDesignTokenListItem token={mainContent} color={color} />;
};

export default DataVisPaletteListItem;
