import type { Level } from '@tiptap/extension-heading'
import type { Editor } from '@tiptap/vue-3'
import type { ActionMenuButtonItem } from './components/ActionMenuButton'

import type { DisabledCheckOptions, GeneralOptions } from '@/type'
import { Extension } from '@tiptap/core'
import {  BlockTypeSelectorActionMenuButton } from './components/ActionMenuButton'

export interface ItemsGetArgs {
  editor: Editor
  t: (path: string) => string
}

export interface BlockTypeSelectorOptions extends GeneralOptions<BlockTypeSelectorOptions>, DisabledCheckOptions {
  items?: (args: ItemsGetArgs) => ActionMenuButtonItem[]
  headingLevels?: Level[]
}

export const BlockTypeSelector = Extension.create<BlockTypeSelectorOptions>({
  addOptions() {
    return {
      button: ({ editor, extension, t }) => {
        return {
          component: BlockTypeSelectorActionMenuButton,
          componentProps: {
            isDisabled: extension.options.isDisabled,
            headingLevels: extension.options.headingLevels,
            items: extension.options.items,
            editor,
            extension,
            t
          }
        }
      }
    }
  }
})
