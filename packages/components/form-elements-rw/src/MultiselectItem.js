import PropTypes from 'prop-types';
import cx from 'classnames';

// Utils
import searchTextParserUtil from './utils/searchTextParserUtil';

// Styles
import './styles/multiselect-item.scss';

const MultiselectItem = (props) => {
    const { item } = props;
    const { searchTerm, description } = item;
    const baseCls = 'bankai-multiselect-option-content';

    if (!description) {
        return <span className={baseCls} />;
    }

    const { boldText, endText, startText } = searchTextParserUtil(
        description,
        searchTerm,
    );

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

MultiselectItem.defaultProps = {
    item: {},
};

MultiselectItem.propTypes = {
    item: PropTypes.object,
};

export default MultiselectItem;
