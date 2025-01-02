import { List } from '@driponfleek/bankai-ui-lists';
import { IFLFormFieldComposer } from '@driponfleek/bankai-ui-form-elements';
import {
    Dropdown,
    NumberPicker,
} from '@driponfleek/bankai-ui-form-elements-rw';
import { DynamicFormRow } from '@driponfleek/bankai-ui-layouts';
import {
    StorySection,
    SectionTitle,
    genSBBaseCls,
} from '@driponfleek/bankai-lib-storybook';
import { COLOR_HARMONIES } from '@driponfleek/bankai-lib-color-utils';
import ColorDesignTokenListItem from '../../../../../sb-components/lists/ColorDesignTokenListItem';

// Styles
import './styles/section-palette.scss';

const DropdownField = IFLFormFieldComposer(Dropdown);
const NumberPickerField = IFLFormFieldComposer(NumberPicker);
const harmonyOps = Object.keys(COLOR_HARMONIES).map((harmony) => ({
    text: harmony,
    id: harmony,
}));
const SectionPalette = (props) => {
    const {
        harmony,
        title,
        numberOfColors = 1,
        data = [],
        onHarmonyChange = () => Promise.resolve(),
        onNumberOfColorsChange = () => Promise.resolve(),
    } = props;
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
            {title && <SectionTitle>{title}</SectionTitle>}
            <DynamicFormRow>
                <DropdownField
                    labelProps={{ content: 'Color Harmony' }}
                    data={harmonyOps}
                    dataKey="id"
                    textField="text"
                    value={harmony}
                    onChange={onHarmonyChange}
                    shouldDropUp
                    isLeftAlignedLabel
                />
                <NumberPickerField
                    labelProps={{ content: 'Number of Colors' }}
                    value={numberOfColors}
                    onChange={onNumberOfColorsChange}
                    min={1}
                    isLeftAlignedLabel
                />
            </DynamicFormRow>
            <List renderListItem={renderListItem} data={data} />
        </StorySection>
    );
};

export default SectionPalette;
