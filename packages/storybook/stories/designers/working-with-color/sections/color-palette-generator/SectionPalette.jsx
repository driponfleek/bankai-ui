import { List } from '@driponfleek/bankai-ui-lists';
import {
    StorySection,
    SectionTitle,
    genSBBaseCls,
} from '@driponfleek/bankai-lib-storybook';
import ColorDesignTokenListItem from '../../../../../sb-components/lists/ColorDesignTokenListItem';

// Styles
import './styles/section-palette.scss';

const SectionPalette = (props) => {
    const { listData = [] } = props;
    const baseCls = genSBBaseCls('section-color-palette');

    const renderListItem = (item) => {
        const { color } = item;

        return (
            <ColorDesignTokenListItem
                token={color}
                color={color}
                shouldShowMeta={false}
            />
        );
    };

    return (
        <StorySection contextCls={baseCls}>
            <SectionTitle>Harmony Colors</SectionTitle>
            <List renderListItem={renderListItem} data={listData} />
        </StorySection>
    );
};

export default SectionPalette;
