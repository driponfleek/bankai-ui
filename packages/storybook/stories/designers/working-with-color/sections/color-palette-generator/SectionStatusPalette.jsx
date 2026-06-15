import {
    StorySection,
    SectionTitle,
    genSBBaseCls,
} from '@driponfleek/bankai-lib-storybook';
import StatusColorPaletteListItem from '../../components/StatusColorPaletteListItem';
import ColorTokenTileList from '../../../../../sb-components/lists/ColorTokenTileList';

// Styles
import './styles/section-palette.scss';

/**
 * @param {Object} props
 * @param {Array<Object>} [props.data] - Array of status color data objects to render as swatches
 */
const SectionStatusPalette = (props) => {
    const { data = [] } = props;
    const baseCls = genSBBaseCls('section-color-palette');

    return (
        <StorySection contextCls={baseCls}>
            <SectionTitle>Status And Informative</SectionTitle>
            <ColorTokenTileList
                renderListItem={StatusColorPaletteListItem}
                data={data}
            />
        </StorySection>
    );
};

export default SectionStatusPalette;
