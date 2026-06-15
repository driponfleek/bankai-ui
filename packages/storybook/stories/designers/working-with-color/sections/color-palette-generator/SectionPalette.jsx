import {
    StorySection,
    SectionTitle,
    genSBBaseCls,
} from '@driponfleek/bankai-lib-storybook';
import HarmonyColorPaletteListItem from '../../components/HarmonyColorPaletteListItem';
import ColorTokenTileList from '../../../../../sb-components/lists/ColorTokenTileList';

// Styles
import './styles/section-palette.scss';

/**
 * @param {Object} props
 * @param {Array<Object>} [props.listData] - Array of color data objects to render as harmony color swatches
 */
const SectionPalette = (props) => {
    const { listData = [] } = props;
    const baseCls = genSBBaseCls('section-color-palette');

    return (
        <StorySection contextCls={baseCls}>
            <SectionTitle>Harmony Colors</SectionTitle>
            <ColorTokenTileList
                data={listData}
                renderListItem={HarmonyColorPaletteListItem}
            />
        </StorySection>
    );
};

export default SectionPalette;
