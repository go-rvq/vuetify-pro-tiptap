import type { Extension } from "@tiptap/core"

import type { Level } from '@tiptap/extension-heading'
import type { PropType } from "vue"

import { actionButtonProps, extActionButtonProps } from '@/extensions/components/ActionButton'
import { omit } from '@/utils/utils'
import { ActionMenuButtonItem } from "./types"

export const actionButtonMenuProps = {
  ...omit(actionButtonProps, ['action', 'isActive']),
  maxHeight: {
    type: [String, Number],
    default: undefined
  },
  items: {
    type: Array as PropType<ActionMenuButtonItem[]>,
    default: () => []
  }
}

export const extActionButtonMenuProps = <T = any>() => ({
  ...extActionButtonProps,
  extension: {
    type: Object as PropType<Extension<T>>,
    required: true
  }
} as const)

export const extBlockTypeSelectorProps = {
  ...extActionButtonMenuProps(),
  items: { type: Object as PropType<ActionMenuButtonItem[]>, default: [] },
  headingLevels: { type: Array<Level>, default: undefined }
} as const
