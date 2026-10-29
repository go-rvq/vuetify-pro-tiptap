import { Extension } from '@tiptap/core';
import { Level } from '@tiptap/extension-heading';
import { ActionMenuButtonItem } from '../src/types';
import { ItemsGetArgs } from '../../../block-type-selector';
declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    readonly items: {
        readonly type: import('vue').PropType<((args: ItemsGetArgs) => ActionMenuButtonItem[])>;
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
        readonly type: import('vue').PropType<Extension<any, any>>;
        readonly required: true;
    };
    readonly editor: {
        readonly type: import('vue').PropType<import('@tiptap/vue-3').Editor>;
        readonly required: true;
    };
    readonly t: {
        readonly type: import('vue').PropType<(path: string) => string>;
        readonly required: true;
    };
    readonly isDisabled: {
        readonly type: import('vue').PropType<(editor: import('@tiptap/vue-3').Editor) => boolean>;
        readonly default: undefined;
    };
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    readonly items: {
        readonly type: import('vue').PropType<((args: ItemsGetArgs) => ActionMenuButtonItem[])>;
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
        readonly type: import('vue').PropType<Extension<any, any>>;
        readonly required: true;
    };
    readonly editor: {
        readonly type: import('vue').PropType<import('@tiptap/vue-3').Editor>;
        readonly required: true;
    };
    readonly t: {
        readonly type: import('vue').PropType<(path: string) => string>;
        readonly required: true;
    };
    readonly isDisabled: {
        readonly type: import('vue').PropType<(editor: import('@tiptap/vue-3').Editor) => boolean>;
        readonly default: undefined;
    };
}>> & Readonly<{}>, {
    readonly items: (args: ItemsGetArgs) => ActionMenuButtonItem[];
    readonly headingLevels: Level[];
    readonly isDisabled: (editor: import('@tiptap/vue-3').Editor) => boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
export default _default;
