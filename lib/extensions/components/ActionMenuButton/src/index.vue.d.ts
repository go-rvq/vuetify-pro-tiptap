import { ActionMenuButtonItem } from './types';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        'btn-append'?(_: {
            active: import('vue').ComputedRef<ActionMenuButtonItem>;
            items: ActionMenuButtonItem[];
        }): any;
        append?(_: {
            active: import('vue').ComputedRef<ActionMenuButtonItem>;
            items: ActionMenuButtonItem[];
        }): any;
    };
    refs: {};
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    showMenu: {
        type: BooleanConstructor;
        default: boolean;
    };
    maxHeight: {
        type: (NumberConstructor | StringConstructor)[];
        default: undefined;
    };
    items: {
        type: import('vue').PropType<ActionMenuButtonItem[]>;
        default: () => never[];
    };
    color: {
        readonly type: StringConstructor;
        readonly default: undefined;
    };
    icon: {
        readonly type: import('vue').PropType<keyof import('../../../../constants/icons').IconsOptions>;
        readonly default: undefined;
    };
    tooltip: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    editor: {
        readonly type: import('vue').PropType<import('@tiptap/vue-3').Editor>;
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
    class: import('vue').PropType<import('../../ActionButton/src/props').ClassValue>;
    style: {
        readonly type: import('vue').PropType<import('vue').StyleValue>;
        readonly default: null;
    };
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:showMenu": (value: boolean) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    showMenu: {
        type: BooleanConstructor;
        default: boolean;
    };
    maxHeight: {
        type: (NumberConstructor | StringConstructor)[];
        default: undefined;
    };
    items: {
        type: import('vue').PropType<ActionMenuButtonItem[]>;
        default: () => never[];
    };
    color: {
        readonly type: StringConstructor;
        readonly default: undefined;
    };
    icon: {
        readonly type: import('vue').PropType<keyof import('../../../../constants/icons').IconsOptions>;
        readonly default: undefined;
    };
    tooltip: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    editor: {
        readonly type: import('vue').PropType<import('@tiptap/vue-3').Editor>;
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
    class: import('vue').PropType<import('../../ActionButton/src/props').ClassValue>;
    style: {
        readonly type: import('vue').PropType<import('vue').StyleValue>;
        readonly default: null;
    };
}>> & Readonly<{
    "onUpdate:showMenu"?: ((value: boolean) => any) | undefined;
}>, {
    color: string;
    icon: keyof import('../../../../constants/icons').IconsOptions;
    tooltip: string;
    rawIcon: string;
    disabled: boolean;
    style: import('vue').StyleValue;
    showMenu: boolean;
    maxHeight: string | number;
    items: ActionMenuButtonItem[];
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
