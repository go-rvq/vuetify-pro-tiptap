import { Extension } from '@tiptap/core';
import { Level } from '@tiptap/extension-heading';
import { PropType } from 'vue';
import { ItemsGetArgs } from '../../../block-type-selector';
import { ActionMenuButtonItem } from './types';
export declare const actionButtonMenuProps: {
    maxHeight: {
        type: (NumberConstructor | StringConstructor)[];
        default: undefined;
    };
    items: {
        type: PropType<ActionMenuButtonItem[]>;
        default: () => never[];
    };
    color: {
        readonly type: StringConstructor;
        readonly default: undefined;
    };
    icon: {
        readonly type: PropType<keyof import('../../../../constants/icons').IconsOptions>;
        readonly default: undefined;
    };
    tooltip: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    editor: {
        readonly type: PropType<import('@tiptap/vue-3').Editor>;
        readonly required: true;
    };
    rawIcon: {
        readonly type: StringConstructor;
        readonly default: undefined;
    };
    disabled: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    class: PropType<import('../../ActionButton/src/props').ClassValue>;
    style: {
        readonly type: PropType<import('vue').StyleValue>;
        readonly default: null;
    };
};
export declare const extActionButtonMenuProps: <T = any>() => {
    readonly extension: {
        readonly type: PropType<Extension<T>>;
        readonly required: true;
    };
    readonly editor: {
        readonly type: PropType<import('@tiptap/vue-3').Editor>;
        readonly required: true;
    };
    readonly t: {
        readonly type: PropType<(path: string) => string>;
        readonly required: true;
    };
    readonly isDisabled: {
        readonly type: PropType<(editor: import('@tiptap/vue-3').Editor) => boolean>;
        readonly default: undefined;
    };
};
export declare const extBlockTypeSelectorProps: {
    readonly items: {
        readonly type: PropType<((args: ItemsGetArgs) => ActionMenuButtonItem[])>;
        readonly default: readonly [];
    };
    readonly headingLevels: {
        readonly type: {
            (arrayLength: number): Level[];
            (...items: Level[]): Level[];
            new (arrayLength: number): Level[];
            new (...items: Level[]): Level[];
            isArray(arg: any): arg is any[];
            readonly prototype: any[];
            from<T>(arrayLike: ArrayLike<T>): T[];
            from<T, U>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
            from<T>(iterable: Iterable<T> | ArrayLike<T>): T[];
            from<T, U>(iterable: Iterable<T> | ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
            of<T>(...items: T[]): T[];
            fromAsync<T>(iterableOrArrayLike: AsyncIterable<T> | Iterable<T | PromiseLike<T>> | ArrayLike<T | PromiseLike<T>>): Promise<T[]>;
            fromAsync<T, U>(iterableOrArrayLike: AsyncIterable<T> | Iterable<T> | ArrayLike<T>, mapFn: (value: Awaited<T>) => U, thisArg?: any): Promise<Awaited<U>[]>;
            readonly [Symbol.species]: ArrayConstructor;
        };
        readonly default: undefined;
    };
    readonly extension: {
        readonly type: PropType<Extension<any, any>>;
        readonly required: true;
    };
    readonly editor: {
        readonly type: PropType<import('@tiptap/vue-3').Editor>;
        readonly required: true;
    };
    readonly t: {
        readonly type: PropType<(path: string) => string>;
        readonly required: true;
    };
    readonly isDisabled: {
        readonly type: PropType<(editor: import('@tiptap/vue-3').Editor) => boolean>;
        readonly default: undefined;
    };
};
