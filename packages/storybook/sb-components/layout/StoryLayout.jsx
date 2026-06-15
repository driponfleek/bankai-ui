import { StoryLayout as Layout } from '@driponfleek/bankai-lib-storybook';

// Utils
import { getLocale } from '../../utils/localeUtils';

/**
 * @param {Object} props
 * @param {string} [props.pkgVer] - Package version string; used to auto-generate pkgVerAltText
 */
const StoryLayout = (props) => {
    const { pkgVer } = props;
    const pkgVerAlt =
        pkgVer !== undefined
            ? `${getLocale('shared.version')} ${pkgVer}`
            : undefined;

    return <Layout {...props} pkgVerAltText={pkgVerAlt} />;
};

export default StoryLayout;
