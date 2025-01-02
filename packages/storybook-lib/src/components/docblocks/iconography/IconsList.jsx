import { Children, useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import IconListItem from './IconListItem';
import { copyTextToClipboard } from '../../../utils/clipboardUtils';

// Utils
import { genSBBaseCls } from '../../../utils/storiesConfigUtils';

// Styles
import './styles/icons-list.scss';

const IconsList = (props) => {
    const { contextCls, icons, locale } = props;
    const [copiedIconName, setCopiedIconName] = useState(undefined);
    const baseCls = genSBBaseCls('icons-list');
    const handleClickTimeout = useRef(undefined);
    const handleClick = (name) => {
        setCopiedIconName(name);
    };
    // TODO: This is so bad, functional components suck. Need to find a way to do this without
    // violating every best practice in programming.
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

IconsList.defaultProps = {
    icons: [],
    locale: {},
};

IconsList.propTypes = {
    contextCls: PropTypes.string,
    icons: PropTypes.array,
    locale: PropTypes.shape({
        copyText: PropTypes.string,
        copiedText: PropTypes.string,
    }),
};

export default IconsList;
