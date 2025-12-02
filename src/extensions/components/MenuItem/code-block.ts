import type { ActionMenuButtonItem } from '../ActionMenuButton/src/types'
import { MenuItemBuilderParams } from '@/type'

export const CodeBlockMenuItem = (params: MenuItemBuilderParams) => ({
  action: () => params.editor.chain().focus().toggleCodeBlock().run(),
  isActive: () => params.editor.isActive('codeBlock') || false,
  disabled: params.isDisabled?.(params.editor) || !params.editor.can().toggleCodeBlock(),
  title: params.t('editor.codeblock.tooltip'),
  icon: "codeBlock"
}) as ActionMenuButtonItem
