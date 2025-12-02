<script lang="ts" setup>
import type { Extension } from '@tiptap/core'
import type { ActionMenuButtonItem } from '../src/types'
import type { BaseKitOptions } from '@/extensions/base-kit'

import { computed, ref } from 'vue'
import ActionMenuButton from '../src/index.vue'
import { extBlockTypeSelectorProps } from '../src/props'

const props = defineProps(extBlockTypeSelectorProps)

const { t, editor } = props

const items = computed<ActionMenuButtonItem[]>(() => {
  const { extensions = [] } = editor.extensionManager ?? []

  const blocksItems = props.items || []
  const baseKitExt = extensions.find(k => k.name === 'base-kit') as Extension<BaseKitOptions>

  const items: ActionMenuButtonItem[] = []

  if (baseKitExt && baseKitExt.options.paragraph !== false) {
    items.push({
      action: () => editor.chain().focus().setParagraph().run(),
      isActive: () => editor.isActive('paragraph') || false,
      disabled: !editor.can().setParagraph(),
      icon: 'p',
      title: t('editor.paragraph.tooltip'),
      divider: true
    })
  }

  const headingExtension = extensions.find(k => k.name === 'heading')
  if (headingExtension) {
    (props.headingLevels || []).forEach(level => {
      items.push({
        action: () => editor.chain().focus().toggleHeading({ level }).run(),
        isActive: () => editor.isActive('heading', { level }) || false,
        disabled: !editor.can().toggleHeading({ level }),
        icon: `h${level}`,
        title: t(`editor.heading.h${level}.tooltip`)
      })
    })
  }

  blocksItems.forEach(item => {
    items.push(item)
  })

  return items
})

const showMenu = ref(false)
</script>

<template>
  <ActionMenuButton
    v-model:show-menu="showMenu"
    :editor="editor"
    class="rounded-e-0"
    :items="items"
    :max-height="280"
    :disabled="props.isDisabled?.(editor) || items.filter(k => k.disabled).length === items.length"
    :tooltip="t('editor.heading.tooltip')"
    icon="heading"
  >
    <template #append="{ active }">
      <span class="active-title px-2 d-flex align-center rounded-e" style="cursor:pointer" @click="showMenu = !showMenu">{{ active.value.title }}</span>
    </template>
  </ActionMenuButton>
</template>

<style lang="scss" scoped>
.active-title {
  height: 26px;
  margin-left: -4px;
  font-size: 90%;
  background-color: white;
  border: 1px solid #aaa;
  border-left: 0;
}
</style>
