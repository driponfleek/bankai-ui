import { Children } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { VARIANTS } from '@driponfleek/bankai-ui-callouts';
import { OmniList, OmniListItem } from '@driponfleek/bankai-ui-typography';
import BannerAffirmative from './BannerAffirmative';
import BannerDanger from './BannerDanger';

// Utils
import { genSBBaseCls } from '../../utils/storiesConfigUtils';

// Styles
import './styles/do-and-do-not-do-list.scss';

const { AFFIRMATIVE, DANGER } = VARIANTS;

const DoAndDoNotDoList = (props) => {
    const { contextCls, isAffirmative, title, list } = props;
    const baseCls = genSBBaseCls('do-and-do-not-do__list');
    // const Icon = isAffirmative ? BankaiCircleCheck : BankaiBan;
    const variant = isAffirmative ? AFFIRMATIVE : DANGER;
    const Banner = isAffirmative ? BannerAffirmative : BannerDanger;
    const hasListItems = list.length > 0;
    // TODO: This is so bad, functional components suck. Need to find a way to do this without
    // violating every best practice in programming.
    const bannerProps = {
        ...(title && { title }),
        ...(hasListItems && {
            msg: (
                <OmniList>
                    {Children.toArray(
                        list.map((item) => <OmniListItem>{item}</OmniListItem>),
                    )}
                </OmniList>
            ),
        }),
    };

    return (
        <Banner
            contextCls={cx(baseCls, contextCls)}
            {...bannerProps}
            variant={variant}
        />
    );
};

DoAndDoNotDoList.defaultProps = {
    list: [],
};

DoAndDoNotDoList.propTypes = {
    contextCls: PropTypes.string,
    title: PropTypes.string,
    isAffirmative: PropTypes.bool,
    list: PropTypes.arrayOf(
        PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    ),
};

export default DoAndDoNotDoList;
