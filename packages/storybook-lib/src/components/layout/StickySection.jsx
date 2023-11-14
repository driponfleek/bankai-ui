import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

// Styles
import './styles/sticky-section.scss';

class StickySection extends PureComponent {
    static defaultProps = {
        scrollingContainerCSSClass: 'bankai-sb-layout',
    };

    static propTypes = {
        contextCls: PropTypes.string,
        scrollingContainerCSSClass: PropTypes.string,
    };

    render() {
        const { contextCls, children } = this.props;

        return (
            <div
                className={cx(this.baseCls, contextCls)}
                ref={this.handleSetRef}
            >
                <div className={`${this.baseCls}__inner`}>{children}</div>
            </div>
        );
    }

    componentDidMount() {
        const scrollingContainerDOM = this.getScrollingContainerDOM();
        scrollingContainerDOM.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        const scrollingContainerDOM = this.getScrollingContainerDOM();
        scrollingContainerDOM.removeEventListener('scroll', this.handleScroll);
    }

    handleSetRef = (el) => {
        if (el) {
            this.containerDOM = el;
        }
    };

    handleScroll = () => {
        const reqAniFrame = this.getBrowserReqAniFrame();
        const scrollingContainerDOM = this.getScrollingContainerDOM();
        this.lastScrollY = scrollingContainerDOM.scrollTop;

        if (!this.isScrolling && this.containerDOM) {
            reqAniFrame(this.handleConfigModCls);
            this.isScrolling = true;
        }
    };

    handleConfigModCls = () => {
        const modCls = `${this.baseCls}--slim`;
        const scrollingContainerDOM = this.getScrollingContainerDOM();
        const { top: distanceFromTop, height } =
            this.containerDOM.getBoundingClientRect();

        if (this.lastScrollY === scrollingContainerDOM.scrollTop) {
            const isSlim = this.containerDOM.classList.contains(modCls);
            // const distanceFromTop =
            //     this.containerDOM.getBoundingClientRect().top;
            const shouldBeSlim = distanceFromTop <= 0;

            if (!isSlim && shouldBeSlim) {
                this.containerDOM.classList.add(modCls);
                this.containerDOM.style.minHeight = `${height}px`;
            } else if (isSlim && !shouldBeSlim) {
                this.containerDOM.classList.remove(modCls);
                this.containerDOM.style.minHeight = '';
            }
        }

        this.isScrolling = false;
    };

    getScrollingContainerDOM = () => {
        const { scrollingContainerCSSClass } = this.props;

        return document.getElementsByClassName(scrollingContainerCSSClass)[0];
    };

    getBrowserReqAniFrame = () => {
        return (
            window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            window.oRequestAnimationFrame
        );
    };

    baseCls = 'bankai-sb-sticky-section';
}

export default StickySection;
