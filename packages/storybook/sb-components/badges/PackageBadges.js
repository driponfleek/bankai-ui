import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import strings from '../../i18n/strings.json';

const { bankaiUI: locale } = strings;
const style = 'style=flat';

const PackageBadges = (props) => {
    const { version, contextCls } = props;
    const baseCls = 'bankai-sb-package-badges';

    return (
        <div className={cx(baseCls, contextCls)}>
            {version && (
                <img
                    src={`https://img.shields.io/badge/version-${version}-blue?${style}`}
                    alt={`${locale.shared.version} ${version}`}
                />
            )}
        </div>
    );
};

PackageBadges.propTypes = {
    contextCls: PropTypes.string,
    version: PropTypes.string,
};

export default PackageBadges;
