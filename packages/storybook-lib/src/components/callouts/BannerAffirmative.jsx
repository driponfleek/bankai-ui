import PropTypes from 'prop-types';
import cx from 'classnames';
import { Banner, VARIANTS } from '@driponfleek/bankai-ui-callouts';
import { BankaiCircleCheck } from '@driponfleek/bankai-ui-icons';

// Utils
import { genSBBaseCls } from '../../utils/storiesConfigUtils';

const { AFFIRMATIVE: VARIANT } = VARIANTS;

const BannerAffirmative = (props) => {
    const { contextCls, ...rest } = props;
    const baseCls = genSBBaseCls('banner');

    return (
        <Banner
            {...rest}
            contextCls={cx(baseCls, contextCls)}
            renderIcon={BankaiCircleCheck}
            variant={VARIANT}
        />
    );
};

BannerAffirmative.propTypes = {
    contextCls: PropTypes.string,
};

export default BannerAffirmative;
