import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { chromajs, getSanitizedHex } from '@driponfleek/bankai-lib-color-utils';
import {
    ColorSwatchSimple,
    genSBBaseCls,
    copyTextToClipboard,
} from '@driponfleek/bankai-lib-storybook';
import { ListItem } from '@driponfleek/bankai-ui-lists';
import { Button } from '@driponfleek/bankai-ui-buttons';
import { BankaiCheck, BankaiCopy } from '@driponfleek/bankai-ui-icons';

// Styles
import './styles/color-design-token-list-item.scss';

const ColorDesignTokenListItem = (props) => {
    const { token, color, shouldShowMeta = true } = props;
    const [copiedValue, setCopiedValue] = useState(undefined);
    const baseCls = genSBBaseCls('color-design-token-list-item');
    const sanatizedColor =
        !color || color.includes('#') ? getSanitizedHex(color) : color;
    const chromaColorData = chromajs(sanatizedColor);
    const alpha = chromaColorData.alpha();
    const hex = chromaColorData.hex('rgb'); // Required to prevent hex containing alpha value
    const hasTransparency = alpha < 1;
    const isTransparent = alpha === 0;
    const Icon = !copiedValue ? BankaiCopy : BankaiCheck;
    const modCls = {
        [`${baseCls}__copy-btn--copied`]: !!copiedValue,
    };
    let meta;

    if (shouldShowMeta) {
        meta = hasTransparency ? `${hex}, ${alpha * 100}% opacity` : hex;
        meta = isTransparent ? 'transparent' : meta;
    }

    const handleClickTimeout = useRef(undefined);
    const handleClick = () => {
        setCopiedValue(isTransparent ? 'transparent' : hex);
    };
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

    const renderBefore = () => (
        <ColorSwatchSimple
            contextCls={`${baseCls}__swatch`}
            color={color}
            alpha={alpha}
            isTransparent={isTransparent}
        />
    );

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
            renderBefore={renderBefore}
        />
    );
};

ColorDesignTokenListItem.propTypes = {
    token: PropTypes.string,
    color: PropTypes.string,
    shouldShowMeta: PropTypes.bool,
};

export default ColorDesignTokenListItem;
