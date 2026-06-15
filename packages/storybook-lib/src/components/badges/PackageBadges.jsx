import cx from 'classnames';

const style = 'style=flat';

/**
 * @param {Object} props
 * @param {string} props.altText - Alt text for the version badge image
 * @param {string} [props.contextCls] - Additional CSS class name(s) to apply to the root element
 * @param {string} [props.version] - Package version string used to generate the badge
 */
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

export default PackageBadges;
