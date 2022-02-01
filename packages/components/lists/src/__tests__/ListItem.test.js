import React from 'react';
import { render, act } from '@epr0t0type/bankai-lib-react-unit-test-utils';
import ListItem from '../ListItem';

const baseCls = 'bankai-list-item';
const text = 'List Item Text';
const meta =
    'Meta text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.';

describe('<ListItem />', () => {
    it('should render without crashing', () => {
        render(<ListItem />);
    });

    it('should not render any default UI and only render children when they are nested inside', () => {
        act(() => {
            render(
                <ListItem text={text} meta={meta}>
                    <div className="test" />
                </ListItem>,
            );
        });
        const defaultTextDOMs = document.getElementsByClassName(
            `${baseCls}__text`,
        );
        const defaultMetaDOMs = document.getElementsByClassName(
            `${baseCls}__meta`,
        );
        const childDOMs = document.getElementsByClassName('test');

        expect(defaultTextDOMs).toHaveLength(0);
        expect(defaultMetaDOMs).toHaveLength(0);
        expect(childDOMs).toHaveLength(1);
    });

    it('should not render text or meta elements if props.text and props.meta are not defined', () => {
        act(() => {
            render(<ListItem />);
        });
        const defaultTextDOMs = document.getElementsByClassName(
            `${baseCls}__text`,
        );
        const defaultMetaDOMs = document.getElementsByClassName(
            `${baseCls}__meta`,
        );

        expect(defaultTextDOMs).toHaveLength(0);
        expect(defaultMetaDOMs).toHaveLength(0);
    });

    it('should render text or meta elements if props.text and props.meta are defined', () => {
        act(() => {
            render(<ListItem text={text} meta={meta} />);
        });
        const defaultTextDOMs = document.getElementsByClassName(
            `${baseCls}__text`,
        );
        const defaultMetaDOMs = document.getElementsByClassName(
            `${baseCls}__meta`,
        );

        expect(defaultTextDOMs).toHaveLength(1);
        expect(defaultMetaDOMs).toHaveLength(1);
    });

    // it('should ', () => {});
});
