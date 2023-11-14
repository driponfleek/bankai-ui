import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { tinycolor2 as tinyColor } from '@driponfleek/bankai-lib-color-utils';
import { ListItem } from '@driponfleek/bankai-ui-lists';
import { Button } from '@driponfleek/bankai-ui-buttons';
import { BankaiCheck, BankaiCopy } from '@driponfleek/bankai-ui-icons';
import {
    genSBBaseCls,
    copyTextToClipboard,
} from '@driponfleek/bankai-lib-storybook';

// Styles
import './styles/color-design-token-list-item.scss';

const ColorDesignTokenListItem = (props) => {
    const { token, color } = props;
    const [copiedValue, setCopiedValue] = useState(undefined);
    const baseCls = genSBBaseCls('color-design-token-list-item');
    const colorData = tinyColor(color);
    const alpha = colorData.getAlpha();
    const hex = `#${colorData.toHex()}`;
    const hasTransparency = alpha < 1;
    const isTransparent = alpha === 0;
    const Icon = !copiedValue ? BankaiCopy : BankaiCheck;
    const modCls = {
        [`${baseCls}__copy-btn--copied`]: !!copiedValue,
    };
    let meta = hasTransparency ? `${hex}, ${alpha * 100}% opacity` : hex;
    meta = isTransparent ? 'transparent' : meta;
    const handleClickTimeout = useRef(undefined);
    const handleClick = () => {
        setCopiedValue(isTransparent ? 'transparent' : hex);
    };
    // TODO: This is so bad, functional components suck. Need to find a way to do this without
    // violating every best practice in programming.
    useEffect(() => {
        clearTimeout(handleClickTimeout.current);

        if (copiedValue) {
            copyTextToClipboard(copiedValue);
            handleClickTimeout.current = setTimeout(() => {
                setCopiedValue(undefined);
            }, 1500);
        }

        return () => {
            clearTimeout(handleClickTimeout.current);
        };
    }, [copiedValue]);

    const renderAfter = () => (
        <Button
            aria-label={`Click to copy the value of ${token}`}
            contextCls={cx(`${baseCls}__copy-btn`, modCls)}
            onClick={handleClick}
            renderIcon={Icon}
        />
    );

    return (
        <ListItem
            contextCls={baseCls}
            text={token}
            meta={meta}
            renderAfter={renderAfter}
        />
    );
};

ColorDesignTokenListItem.propTypes = {
    // meta: PropTypes.string,
    token: PropTypes.string,
    color: PropTypes.string,
};

export default ColorDesignTokenListItem;
