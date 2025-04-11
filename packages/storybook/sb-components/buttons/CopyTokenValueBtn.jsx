import { useState, useEffect, useRef } from 'react';
import cx from 'classnames';
import { Button } from '@driponfleek/bankai-ui-buttons';
import { BankaiCheck, BankaiCopy } from '@driponfleek/bankai-ui-icons';
import {
    genSBBaseCls,
    copyTextToClipboard,
} from '@driponfleek/bankai-lib-storybook';

// TODO: This needs to be in Storybook Lib so the swatch there can use it.
// I Should evaluate other components to see if they should be in the lib too.
const CopyTokenValueBtn = (props) => {
    const { contextCls, token, color, isTransparent = false } = props;
    const [copiedValue, setCopiedValue] = useState(undefined);
    const baseCls = genSBBaseCls('copy-token-value-btn');
    const Icon = !copiedValue ? BankaiCopy : BankaiCheck;
    const modCls = {
        [`${baseCls}__copy-btn--copied`]: !!copiedValue,
    };
    const handleClickTimeout = useRef(undefined);
    const handleClick = () => {
        setCopiedValue(isTransparent ? 'transparent' : color);
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

    return (
        <Button
            aria-label={`Click to copy the value of ${token}`}
            contextCls={cx(baseCls, contextCls, modCls)}
            onClick={handleClick}
            renderIcon={Icon}
        />
    );
};

export default CopyTokenValueBtn;
