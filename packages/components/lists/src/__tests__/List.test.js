/* eslint-disable no-console */
import React from 'react';
import { render, act } from '@epr0t0type/bankai-lib-react-unit-test-utils';
import List from '../List';

const originalConsoleError = console.error.bind(console.error);
const baseCls = 'bankai-list';

describe('<List />', () => {
    it('should render without crashing', () => {
        render(<List />);
    });

    it('should render an empty state when data is not passed', () => {
        act(() => {
            render(<List />);
        });
        const emptyStateDOMs = document.getElementsByClassName(
            `${baseCls}--empty-state`,
        );

        expect(emptyStateDOMs).toHaveLength(1);
    });

    it('should render a custom empty state when data is not passed and props.renderEmptyState is defined', () => {
        const testCls = 'custom-empty-state';
        act(() => {
            render(
                <List renderEmptyState={() => <div className={testCls} />} />,
            );
        });
        const emptyStateDOMs = document.getElementsByClassName(testCls);

        expect(emptyStateDOMs).toHaveLength(1);
    });

    it('should render a set the alternate color modifier class when props.shouldAlternateColors is true', () => {
        act(() => {
            render(<List shouldAlternateColors data={[{ id: '1' }]} />);
        });
        const listDOM = document.getElementsByClassName(baseCls)[0];

        expect(
            listDOM.classList.contains(`${baseCls}--alternate-item-bg-colors`),
        ).toBe(true);
    });

    it('should render the list items based on the data provided', () => {
        act(() => {
            render(
                <List
                    shouldAlternateColors
                    data={[{ id: '1' }, { id: '2' }, { id: '3' }]}
                />,
            );
        });
        const listItemDOMs =
            document.getElementsByClassName('bankai-list-item');

        expect(listItemDOMs).toHaveLength(3);
    });

    it('should render custom list items when props.renderListItem is defined based on the data provided', () => {
        const testCls = 'custom-li';
        act(() => {
            render(
                <List
                    shouldAlternateColors
                    data={[{ id: '1' }, { id: '2' }, { id: '3' }]}
                    renderListItem={() => <div className={testCls} />}
                />,
            );
        });
        const listItemDOMs = document.getElementsByClassName(testCls);

        expect(listItemDOMs).toHaveLength(3);
    });

    it('should render without crashing if props.data is corrupt', () => {
        console.error = jest.fn();
        render(
            <List
                shouldAlternateColors
                data={[undefined, undefined, undefined]}
            />,
        );
        console.error = originalConsoleError;
    });

    // it('should ', () => {});
});
