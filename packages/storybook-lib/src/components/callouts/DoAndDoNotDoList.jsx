import { Children } from 'react';
import cx from 'classnames';
import { OmniList, OmniListItem } from '@driponfleek/bankai-ui-typography';
import { BankaiCircleX } from '@driponfleek/bankai-ui-icons';
import BannerAffirmative from './BannerAffirmative';
import BannerDanger from './BannerDanger';

// Utils
import { genSBBaseCls } from '../../utils/storiesConfigUtils';

// Styles
import './styles/do-and-do-not-do-list.scss';

/**
 * @param {Object} props
 * @param {string} [props.contextCls] - Additional CSS class name(s) to apply to the root element
 * @param {string} [props.title] - Title rendered in the banner header
 * @param {boolean} [props.isAffirmative] - Renders an affirmative (green) banner; defaults to a danger (red) banner
 * @param {Array<string|React.ReactElement>} [props.list] - List items to display
 */
const DoAndDoNotDoList = (props) => {
    const { contextCls, isAffirmative, title, list = [] } = props;
    const baseCls = genSBBaseCls('do-and-do-not-do__list');
    const Banner = isAffirmative ? BannerAffirmative : BannerDanger;
    const hasListItems = list.length > 0;
    // TODO: This is so bad, functional components suck. Need to find a way to do this without
    // violating every best practice in programming.
    // TODO: Need to memoize this properly
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
        ...(!isAffirmative && { renderIcon: BankaiCircleX }),
    };

    return <Banner contextCls={cx(baseCls, contextCls)} {...bannerProps} />;
};

export default DoAndDoNotDoList;
