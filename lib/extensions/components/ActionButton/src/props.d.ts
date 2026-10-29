import { Editor } from '@tiptap/vue-3';
import { PropType, StyleValue } from 'vue';
import { IconsOptions } from '../../../../constants/icons';
import { ButtonViewReturnComponentProps } from '../../../../type';
export type ClassValue = any;
export declare const actionButtonProps: {
    readonly editor: {
        readonly type: PropType<Editor>;
        readonly required: true;
    };
    readonly icon: {
        readonly type: PropType<keyof IconsOptions>;
        readonly default: undefined;
    };
    readonly rawIcon: {
        readonly type: StringConstructor;
        readonly default: undefined;
    };
    readonly tooltip: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly disabled: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly color: {
        readonly type: StringConstructor;
        readonly default: undefined;
    };
    readonly action: {
        readonly type: PropType<ButtonViewReturnComponentProps["action"]>;
        readonly default: undefined;
    };
    readonly isActive: {
        readonly type: PropType<ButtonViewReturnComponentProps["isActive"]>;
        readonly default: undefined;
    };
    readonly class: PropType<ClassValue>;
    readonly style: {
        readonly type: PropType<StyleValue>;
        readonly default: null;
    };
};
export declare const extActionButtonProps: {
    readonly editor: {
        readonly type: PropType<Editor>;
        readonly required: true;
    };
    readonly t: {
        readonly type: PropType<(path: string) => string>;
        readonly required: true;
    };
    readonly isDisabled: {
        readonly type: PropType<(editor: Editor) => boolean>;
        readonly default: undefined;
    };
};
