declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    useWindow: {
        type: BooleanConstructor;
        default: boolean;
    };
    editor: {
        readonly type: import('vue').PropType<import('@tiptap/vue-3').Editor>;
        readonly required: true;
    };
    t: {
        readonly type: import('vue').PropType<(path: string) => string>;
        readonly required: true;
    };
    isDisabled: {
        readonly type: import('vue').PropType<(editor: import('@tiptap/vue-3').Editor) => boolean>;
        readonly default: undefined;
    };
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    useWindow: {
        type: BooleanConstructor;
        default: boolean;
    };
    editor: {
        readonly type: import('vue').PropType<import('@tiptap/vue-3').Editor>;
        readonly required: true;
    };
    t: {
        readonly type: import('vue').PropType<(path: string) => string>;
        readonly required: true;
    };
    isDisabled: {
        readonly type: import('vue').PropType<(editor: import('@tiptap/vue-3').Editor) => boolean>;
        readonly default: undefined;
    };
}>> & Readonly<{}>, {
    isDisabled: (editor: import('@tiptap/vue-3').Editor) => boolean;
    useWindow: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
export default _default;
