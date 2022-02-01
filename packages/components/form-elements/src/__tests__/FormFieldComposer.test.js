import React from 'react';
import { render, act } from '@epr0t0type/bankai-lib-react-unit-test-utils';
import FormFieldComposer from '../FormFieldComposer';
import TextInput from '../TextInput';
import VARIANTS from '../const/formFieldComposerVariantsConst';

const { INLINE_LEFT, INLINE_RIGHT, STACKED, TOGGLE } = VARIANTS;
const ComposedComp = FormFieldComposer(TextInput);
const baseCls = 'bankai-form-field-composer';
const labelContainerCls = `${baseCls}__label-container`;
const controlHintContainerCls = `${baseCls}__control-hint-container`;
const controlContainerCls = `${baseCls}__control-container`;
const hintsContainerCls = `${baseCls}__hints-container`;
const hintsContainerModCls = `${baseCls}__hints-container--is-displaying-hint`;
const renderHint = () => <span />;
const labelProps = {
    labelText: 'I am a label',
};
const hintProps = {
    hintText: 'I am a hint',
};

describe('<FormFieldComposer />', () => {
    it('should render without crashing', () => {
        render(<ComposedComp />);
    });

    it('should render inline left DOM structure when props.variant is INLINE_LEFT', () => {
        act(() => {
            render(
                <ComposedComp
                    variant={INLINE_LEFT}
                    labelProps={labelProps}
                    hintProps={hintProps}
                />,
            );
        });
        const innerDOM = document.getElementsByClassName(
            `${baseCls}__inner`,
        )[0];
        const controlHintContainerDOM = document.getElementsByClassName(
            `${baseCls}__control-hint-container`,
        )[0];
        const innerFirstChildDOM = innerDOM.firstChild;
        const innerLastChildDOM = innerDOM.lastChild;
        const controlHintContainerFirstChildDOM =
            controlHintContainerDOM.firstChild;
        const controlHintContainerLastChildDOM =
            controlHintContainerDOM.lastChild;

        expect(innerFirstChildDOM.className).toBe(labelContainerCls);
        expect(innerLastChildDOM.className).toBe(controlHintContainerCls);
        expect(controlHintContainerFirstChildDOM.className).toBe(
            controlContainerCls,
        );
        expect(controlHintContainerLastChildDOM.className).toBe(
            `${hintsContainerCls} ${hintsContainerModCls}`,
        );
    });

    it('should render inline right DOM structure when props.variant is INLINE_RIGHT', () => {
        act(() => {
            render(
                <ComposedComp
                    variant={INLINE_RIGHT}
                    labelProps={labelProps}
                    hintProps={hintProps}
                />,
            );
        });
        const innerDOM = document.getElementsByClassName(
            `${baseCls}__inner`,
        )[0];
        const controlHintContainerDOM = document.getElementsByClassName(
            `${baseCls}__control-hint-container`,
        )[0];
        const innerFirstChildDOM = innerDOM.firstChild;
        const innerLastChildDOM = innerDOM.lastChild;
        const controlHintContainerFirstChildDOM =
            controlHintContainerDOM.firstChild;
        const controlHintContainerLastChildDOM =
            controlHintContainerDOM.lastChild;

        expect(innerFirstChildDOM.className).toBe(controlHintContainerCls);
        expect(innerLastChildDOM.className).toBe(labelContainerCls);
        expect(controlHintContainerFirstChildDOM.className).toBe(
            controlContainerCls,
        );
        expect(controlHintContainerLastChildDOM.className).toBe(
            `${hintsContainerCls} ${hintsContainerModCls}`,
        );
    });

    it('should render stacked DOM structure when props.variant is STACKED', () => {
        act(() => {
            render(
                <ComposedComp
                    variant={STACKED}
                    labelProps={labelProps}
                    hintProps={hintProps}
                />,
            );
        });
        const innerDOM = document.getElementsByClassName(
            `${baseCls}__inner`,
        )[0];
        const innerFirstChildDOM = innerDOM.firstChild;
        const innerSecondChildDOM = innerDOM.childNodes[1];
        const innerLastChildDOM = innerDOM.lastChild;

        expect(innerFirstChildDOM.className).toBe(labelContainerCls);
        expect(innerSecondChildDOM.className).toBe(controlContainerCls);
        expect(innerLastChildDOM.className).toBe(
            `${hintsContainerCls} ${hintsContainerModCls}`,
        );
    });

    it('should render toggle DOM structure when props.variant is TOGGLE', () => {
        act(() => {
            render(
                <ComposedComp
                    variant={TOGGLE}
                    labelProps={labelProps}
                    hintProps={hintProps}
                />,
            );
        });
        const innerDOM = document.getElementsByClassName(
            `${baseCls}__inner`,
        )[0];
        const controlHintContainerDOM = document.getElementsByClassName(
            `${baseCls}__control-hint-container`,
        )[0];
        const innerFirstChildDOM = innerDOM.firstChild;
        const innerLastChildDOM = innerDOM.lastChild;
        const controlHintContainerFirstChildDOM =
            controlHintContainerDOM.firstChild;
        const controlHintContainerLastChildDOM =
            controlHintContainerDOM.lastChild;

        expect(innerFirstChildDOM.className).toBe(controlHintContainerCls);
        expect(innerLastChildDOM.className).toBe(
            `${hintsContainerCls} ${hintsContainerModCls}`,
        );
        expect(controlHintContainerFirstChildDOM.className).toBe(
            controlContainerCls,
        );
        expect(controlHintContainerLastChildDOM.className).toBe(
            labelContainerCls,
        );
    });

    it('should render label subtext DOM when props.labelSubtextProps.subtext is defined', () => {
        act(() => {
            render(
                <ComposedComp
                    labelProps={labelProps}
                    labelSubtextProps={{ subtext: 'test' }}
                />,
            );
        });
        const subtextDOMs = document.getElementsByClassName(
            'bankai-form-label-subtext',
        );
        expect(subtextDOMs).toHaveLength(1);
    });

    it('should render custom label subtext DOM when props.labelSubtextProps.renderSubtext is defined', () => {
        act(() => {
            render(
                <ComposedComp
                    labelProps={labelProps}
                    labelSubtextProps={{
                        renderSubtext: () => (
                            <span className="custom-sub-text-text" />
                        ),
                    }}
                />,
            );
        });
        const subtextDOMs = document.getElementsByClassName(
            'custom-sub-text-text',
        );
        expect(subtextDOMs).toHaveLength(1);
    });

    it('should return the appropriate ARIA described-by ids when calling getCompARIADescByIds', () => {
        const testId = 'test-id-123';
        let compRef;
        const setRef = (el) => {
            compRef = el;
        };
        act(() => {
            render(
                <ComposedComp
                    labelProps={labelProps}
                    labelSubtextProps={{ subtext: 'test' }}
                    hintProps={hintProps}
                    id={testId}
                    ref={setRef}
                />,
            );
        });
        const expected = `${testId}-error ${testId}-hint ${testId}-subtext`;
        const result = compRef.getCompARIADescByIds();

        expect(result).toBe(expected);
    });

    it('should not return the hint ID when calling getCompARIADescByIds and props.shouldIncludeHint is false', () => {
        const testId = 'test-id-123';
        let compRef;
        const setRef = (el) => {
            compRef = el;
        };
        act(() => {
            render(
                <ComposedComp
                    labelProps={labelProps}
                    shouldIncludeHint={false}
                    id={testId}
                    ref={setRef}
                />,
            );
        });
        const expected = `${testId}-error`;
        const result = compRef.getCompARIADescByIds();

        expect(result).toBe(expected);
    });

    it('should not return the error ID when calling getCompARIADescByIds and props.shouldIncludeError is false', () => {
        const testId = 'test-id-123';
        let compRef;
        const setRef = (el) => {
            compRef = el;
        };
        act(() => {
            render(
                <ComposedComp
                    labelProps={labelProps}
                    shouldIncludeError={false}
                    id={testId}
                    ref={setRef}
                />,
            );
        });
        const expected = `${testId}-hint`;
        const result = compRef.getCompARIADescByIds();

        expect(result).toBe(expected);
    });

    it('should not return the subtext ID when calling getCompARIADescByIds and props.labelSubtextProps is not defined', () => {
        const testId = 'test-id-123';
        let compRef;
        const setRef = (el) => {
            compRef = el;
        };
        act(() => {
            render(
                <ComposedComp
                    labelProps={labelProps}
                    shouldIncludeError={false}
                    id={testId}
                    ref={setRef}
                />,
            );
        });
        const expected = `${testId}-hint`;
        const result = compRef.getCompARIADescByIds();

        expect(result).toBe(expected);
    });

    it('should not set "hintText" and "renderHint" props for hintProps when getHasError returns true', () => {
        const testId = 'test-id-123';
        let compRef;
        const setRef = (el) => {
            compRef = el;
        };
        act(() => {
            render(
                <ComposedComp
                    labelProps={labelProps}
                    labelSubtextProps={{ subtext: 'test' }}
                    hintProps={{ ...hintProps, renderHint }}
                    id={testId}
                    ref={setRef}
                    hasError
                />,
            );
        });
        const expected = {
            id: `${testId}-hint`,
        };
        const result = compRef.getHintExtantProps();

        expect(result).toEqual(expected);
    });

    it('should set "hintText" and "renderHint" props for hintProps when getHasError returns false', () => {
        const testId = 'test-id-123';
        let compRef;
        const setRef = (el) => {
            compRef = el;
        };
        act(() => {
            render(
                <ComposedComp
                    labelProps={labelProps}
                    labelSubtextProps={{ subtext: 'test' }}
                    hintProps={{ ...hintProps, renderHint }}
                    id={testId}
                    ref={setRef}
                />,
            );
        });
        const expected = {
            ...hintProps,
            renderHint,
            id: `${testId}-hint`,
        };
        const result = compRef.getHintExtantProps();

        expect(result).toEqual(expected);
    });

    it('should set the appropriate aria-describedby attribute value when props.shouldIncludeError is true, props.shouldIncludeHint is false and there is no label subtext', () => {
        const testId = 'test-id-123';
        act(() => {
            render(
                <ComposedComp
                    labelProps={labelProps}
                    hintProps={{ ...hintProps, renderHint }}
                    id={testId}
                    shouldIncludeHint={false}
                    isReadOnly
                />,
            );
        });
        const inputDOM =
            document.getElementsByClassName('bankai-text-input')[0];
        const inputIdAttr = inputDOM.getAttribute('id');
        const describedByAttr = inputDOM.getAttribute('aria-describedby');
        expect(inputIdAttr).toEqual(testId);
        expect(describedByAttr).toEqual(`${testId}-error`);
    });

    it('should set the appropriate aria-describedby attribute value when props.shouldIncludeError is false, props.shouldIncludeHint is true and there is no label subtext', () => {
        const testId = 'test-id-123';
        act(() => {
            render(
                <ComposedComp
                    labelProps={labelProps}
                    hintProps={{ ...hintProps, renderHint }}
                    id={testId}
                    shouldIncludeError={false}
                    isReadOnly
                />,
            );
        });
        const inputDOM =
            document.getElementsByClassName('bankai-text-input')[0];
        const inputIdAttr = inputDOM.getAttribute('id');
        const describedByAttr = inputDOM.getAttribute('aria-describedby');
        expect(inputIdAttr).toEqual(testId);
        expect(describedByAttr).toEqual(`${testId}-hint`);
    });

    it('should set the appropriate aria-describedby attribute value when props.shouldIncludeError is false, props.shouldIncludeHint is false and there is label subtext', () => {
        const testId = 'test-id-123';
        act(() => {
            render(
                <ComposedComp
                    labelProps={labelProps}
                    labelSubtextProps={{ subtext: 'test' }}
                    hintProps={{ ...hintProps, renderHint }}
                    id={testId}
                    shouldIncludeError={false}
                    shouldIncludeHint={false}
                    isReadOnly
                />,
            );
        });
        const inputDOM =
            document.getElementsByClassName('bankai-text-input')[0];
        const inputIdAttr = inputDOM.getAttribute('id');
        const describedByAttr = inputDOM.getAttribute('aria-describedby');
        expect(inputIdAttr).toEqual(testId);
        expect(describedByAttr).toEqual(`${testId}-subtext`);
    });

    // it('should ', () => {});
});
