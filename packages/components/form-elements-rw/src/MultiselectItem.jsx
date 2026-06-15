import cx from 'classnames';

// Styles
import './styles/multiselect-item.scss';

/**
 * @param {Object} [props.item] - Item data object containing `description` (display text) and `searchTerm` (for highlight matching)
 */
const MultiselectItem = (props) => {
    const { item = {} } = props;
    const { searchTerm, description } = item;
    const baseCls = 'bankai-multiselect-option-content';

    if (!description) {
        return <span className={baseCls} />;
    }

    const descLowerCase = description.toLowerCase();
    const searchTermLowerCase = searchTerm
        ? searchTerm.toLowerCase()
        : undefined;
    const idxOfSearchTerm = descLowerCase.indexOf(searchTermLowerCase);
    const searchTermLen = searchTerm ? searchTerm.length : 0;
    const descriptionLen = description.length;
    let boldText;
    let startText;
    let endText;

    if (idxOfSearchTerm > -1) {
        startText = description.substring(0, idxOfSearchTerm);
        boldText = description.substring(
            idxOfSearchTerm,
            idxOfSearchTerm + searchTermLen,
        );

        if (idxOfSearchTerm + searchTermLen < descriptionLen) {
            endText = description.substring(
                idxOfSearchTerm + searchTermLen,
                descriptionLen,
            );
        }
    } else {
        startText = description;
    }

    return (
        <span className={baseCls}>
            {startText && (
                <span
                    className={cx(
                        `${baseCls}__text`,
                        `${baseCls}__text--start`,
                    )}
                >
                    {startText}
                </span>
            )}
            {boldText && (
                <span
                    className={cx(`${baseCls}__text`, `${baseCls}__text--bold`)}
                >
                    {boldText}
                </span>
            )}
            {endText && (
                <span
                    className={cx(`${baseCls}__text`, `${baseCls}__text--end`)}
                >
                    {endText}
                </span>
            )}
        </span>
    );
};

export default MultiselectItem;
