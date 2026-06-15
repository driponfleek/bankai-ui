import { Children, useState, useEffect, useRef } from 'react';
import cx from 'classnames';
import IconListItem from './IconListItem';
import { copyTextToClipboard } from '../../../utils/clipboardUtils';

// Utils
import { genSBBaseCls } from '../../../utils/storiesConfigUtils';

// Styles
import './styles/icons-list.scss';

/**
 * @param {Object} props
 * @param {string} [props.contextCls] - Additional CSS class name(s) to apply to the root element
 * @param {Array} [props.icons] - Array of icon data objects passed to IconListItem
 * @param {Object} [props.locale] - Localization strings passed to each IconListItem
 */
const IconsList = (props) => {
    const { contextCls, icons = [], locale = {} } = props;
    const [copiedIconName, setCopiedIconName] = useState(undefined);
    const baseCls = genSBBaseCls('icons-list');
    const handleClickTimeout = useRef(undefined);
    const handleClick = (name) => {
        setCopiedIconName(name);
    };
    // TODO: This is so bad, functional components suck. Need to find a way to do this without
    // violating every best practice in programming.
    // TODO: Need to memoize this properly
    const childItems = Children.toArray(
        icons.map((item) => (
            <IconListItem
                {...item}
                locale={locale}
                hasCopiedToClipboard={item.name === copiedIconName}
                onClick={handleClick}
            />
        )),
    );
    // TODO: This is so bad, functional components suck. Need to find a way to do this without
    // violating every best practice in programming.
    useEffect(() => {
        clearTimeout(handleClickTimeout.current);

        if (copiedIconName) {
            copyTextToClipboard(copiedIconName);
            handleClickTimeout.current = setTimeout(() => {
                setCopiedIconName(undefined);
            }, 1500);
        }

        return () => {
            clearTimeout(handleClickTimeout.current);
        };
    }, [copiedIconName]);

    return <div className={cx(baseCls, contextCls)}>{childItems}</div>;
};

export default IconsList;
