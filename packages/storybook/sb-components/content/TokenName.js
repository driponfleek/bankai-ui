// ========================================================
// This is to provide syntax to allow for controlling
// where line breaks happen in the token name.
// ========================================================
import PropTypes from 'prop-types';
import cx from 'classnames';
import { getThemeAPIKeyFromName } from '@epr0t0type/bankai-lib-theme-utils';

// Styles
import './styles/token-name.scss';

const TokenName = (props) => {
    const { contextCls, tokenName } = props;
    const baseCls = 'bankai-sb-design-token-name';
    const tokenKey = getThemeAPIKeyFromName(tokenName);
    const tokenKeySplit = tokenKey.split('.');
    const result = [];

    for (let i = 0; i < tokenKeySplit.length; i += 1) {
        const isFirstSegment = i === 0;
        const tokenKeySegment = isFirstSegment
            ? tokenKeySplit[i]
            : `.${tokenKeySplit[i]}`;

        result.push(<span key={`key-segement-${i}`}>{tokenKeySegment}</span>);

        if (i !== tokenKeySplit.length - 1) {
            result.push(<wbr key={`key-wbr-${i}`} />);
        }
    }

    return <span className={cx(baseCls, contextCls)}>{result}</span>;
};

TokenName.propTypes = {
    contextCls: PropTypes.string,
    tokenName: PropTypes.string,
};

export default TokenName;
