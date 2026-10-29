import { FontSizeOptions } from '../../../font-size';
declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    readonly extension: {
        readonly type: import('vue').PropType<import('@tiptap/core').Extension<FontSizeOptions, any>>;
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
    readonly extension: {
        readonly type: import('vue').PropType<import('@tiptap/core').Extension<FontSizeOptions, any>>;
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
    readonly isDisabled: (editor: import('@tiptap/vue-3').Editor) => boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
export default _default;
