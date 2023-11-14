import PropTypes from 'prop-types';
import { StoryLayout as Layout } from '@driponfleek/bankai-lib-storybook';

// Utils
import { getLocale } from '../../utils/localeUtils';

const StoryLayout = (props) => {
    const { pkgVer } = props;
    const pkgVerAlt =
        pkgVer !== undefined
            ? `${getLocale('shared.version')} ${pkgVer}`
            : undefined;

    return <Layout {...props} pkgVerAltText={pkgVerAlt} />;
};

StoryLayout.propTypes = {
    pkgVer: PropTypes.string,
};

export default StoryLayout;
