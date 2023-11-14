import { List } from '@driponfleek/bankai-ui-lists';
import {
    StorySection,
    SectionTitle,
    genSBBaseCls,
} from '@driponfleek/bankai-lib-storybook';
import ColorDesignTokenListItem from '../../../../../sb-components/lists/ColorDesignTokenListItem';

// Styles
import './styles/section-palette.scss';

const SectionStatusPalette = (props) => {
    const { data = [] } = props;
    const baseCls = genSBBaseCls('section-color-palette');

    const renderListItem = (item) => {
        const { color, mainContent } = item ?? {};

        return <ColorDesignTokenListItem token={mainContent} color={color} />;
    };

    return (
        <StorySection contextCls={baseCls}>
            <SectionTitle>Status Colors</SectionTitle>
            <List renderListItem={renderListItem} data={data} />
        </StorySection>
    );
};

export default SectionStatusPalette;
