import { Level } from '@tiptap/extension-heading';
import { Editor } from '@tiptap/vue-3';
import { ActionMenuButtonItem } from './components/ActionMenuButton';
import { DisabledCheckOptions, GeneralOptions } from '../type';
import { Extension } from '@tiptap/core';
export interface ItemsGetArgs {
    editor: Editor;
    t: (path: string) => string;
}
export interface BlockTypeSelectorOptions extends GeneralOptions<BlockTypeSelectorOptions>, DisabledCheckOptions {
    items?: (args: ItemsGetArgs) => ActionMenuButtonItem[];
    headingLevels?: Level[];
}
export declare const BlockTypeSelector: Extension<BlockTypeSelectorOptions, any>;
