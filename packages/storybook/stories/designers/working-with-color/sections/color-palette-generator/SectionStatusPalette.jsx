import {
    StorySection,
    SectionTitle,
    genSBBaseCls,
} from '@driponfleek/bankai-lib-storybook';
import StatusColorPaletteListItem from '../../components/StatusColorPaletteListItem';
import ColorTokenTileList from '../../../../../sb-components/lists/ColorTokenTileList';

// Styles
import './styles/section-palette.scss';

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
