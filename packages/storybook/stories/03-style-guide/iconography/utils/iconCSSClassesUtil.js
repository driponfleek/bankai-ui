import iconData from '../json/selection.json';

const { icons } = iconData;
const cssClsPrefix = 'bankai-icon';

export default icons
    .map((data) => {
        const { properties } = data;
        const { name } = properties;

        return `${cssClsPrefix}-${name}`;
    })
    .sort();
