import { selectionJSON } from '@epr0t0type/bankai-ui-icons';

const { icons } = selectionJSON;
const cssClsPrefix = 'bankai-icon';

export default icons
    .map((data) => {
        const { properties } = data;
        const { name } = properties;

        return `${cssClsPrefix}-${name}`;
    })
    .sort();
