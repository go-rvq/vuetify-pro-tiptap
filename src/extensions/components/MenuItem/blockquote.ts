import type { MenuItemBuilderParams } from '@/type'
import { ActionMenuButtonItem } from '@/extensions'

export const BlockquoteMenuItem = (params: MenuItemBuilderParams) => ({
  action: () => params.editor.chain().focus().toggleBlockquote().run(),
  isActive: () => params.editor.isActive('blockquote') || false,
  disabled: params.isDisabled?.(params.editor) || !params.editor.can().toggleCodeBlock(),
  title: params.t('editor.blockquote.tooltip'),
  icon: "blockquote"
}) as ActionMenuButtonItem
