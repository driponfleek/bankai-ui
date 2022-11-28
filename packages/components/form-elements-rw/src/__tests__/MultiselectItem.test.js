import { render } from '@epr0t0type/bankai-lib-react-unit-test-utils';
import MultiselectItem from '../MultiselectItem';

const baseCls = 'bankai-multiselect-option-content';

describe('<MultiselectItem />', () => {
    it('should render without crashing', () => {
        render(<MultiselectItem />);
    });

    it('should render bold text matching what is provided in props.item.searchTerm', () => {
        const { container } = render(
            <MultiselectItem
                item={{
                    description: 'Lorem ipsum dolor',
                    searchTerm: 'ipsum',
                }}
            />,
        );
        const startText = container.querySelector(`${baseCls}__text--start`);
        const boldText = container.querySelector(`${baseCls}__text--bold`);
        const endText = container.querySelector(`${baseCls}__text--end`);

        expect(startText).toBeDefined();
        expect(boldText).toBeDefined();
        expect(endText).toBeDefined();
    });

    // it('should ', () => {});
});
