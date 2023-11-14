import PropTypes from 'prop-types';
import cx from 'classnames';

const style = 'style=flat';

const PackageBadges = (props) => {
    const { altText, contextCls, version } = props;
    const baseCls = 'bankai-sb-package-badges';

    return (
        <div className={cx(baseCls, contextCls)}>
            {version && (
                <img
                    src={`https://img.shields.io/badge/version-${version}-blue?${style}`}
                    alt={altText}
                />
            )}
        </div>
    );
};

PackageBadges.propTypes = {
    altText: PropTypes.string.isRequired,
    contextCls: PropTypes.string,
    version: PropTypes.string,
};

export default PackageBadges;
