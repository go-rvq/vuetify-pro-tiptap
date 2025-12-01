import type { Editor } from "@tiptap/vue-3"
import type { PropType, StyleValue } from "vue"
import type { IconsOptions } from "@/constants/icons"
import type { ButtonViewReturnComponentProps } from "@/type"

export type ClassValue = any

export const actionButtonProps = {
  editor: {
    type: Object as PropType<Editor>,
    required: true
  },
  icon: {
    type: String as PropType<keyof IconsOptions>,
    default: undefined
  },
  rawIcon: {
    type: String,
    default: undefined
  },
  tooltip: {
    type: String,
    default: ''
  },
  disabled: {
    type: Boolean,
    default: false
  },
  color: {
    type: String,
    default: undefined
  },
  action: {
    type: Function as PropType<ButtonViewReturnComponentProps['action']>,
    default: undefined
  },
  isActive: {
    type: Function as PropType<ButtonViewReturnComponentProps['isActive']>,
    default: undefined
  },
  class: [String, Array, Object] as PropType<ClassValue>,
  style: {
    type: [String, Array, Object] as PropType<StyleValue>,
    default: null
  }
} as const

export const extActionButtonProps = {
  editor: {
    type: Object as PropType<Editor>,
    required: true
  },
  t: {
    type: Function as PropType<(path: string) => string>,
    required: true
  },
  isDisabled: {
    type: Function as PropType<(editor: Editor) => boolean>,
    default: undefined
  }
} as const
