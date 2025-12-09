<script lang="ts" setup>
import type { Extension } from '@tiptap/core'
import type { Level } from '@tiptap/extension-heading'
import type { ActionMenuButtonItem } from '../src/types'
import type { BaseKitOptions } from '@/extensions/base-kit'

import { computed, ref } from 'vue'
import { ItemsGetArgs } from '@/extensions/block-type-selector'
import ActionMenuButton from '../src/index.vue'
import { extBlockTypeSelectorProps } from '../src/props'

const props = defineProps(extBlockTypeSelectorProps)

const { editor } = props

const localItems = computed<ActionMenuButtonItem[]>(() => {
  const { t } = props
  const { extensions = [] } = editor.extensionManager ?? []

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
    (props.headingLevels || (headingExtension.options.levels as Level[])).forEach(level => {
      items.push({
        action: () => editor.chain().focus().toggleHeading({ level }).run(),
        isActive: () => editor.isActive('heading', { level }) || false,
        disabled: !editor.can().toggleHeading({ level }),
        icon: `h${level}`,
        title: t(`editor.heading.h${level}.tooltip`)
      })
    })
  }

  if (props.items) {
    (props.items as ((args: ItemsGetArgs) => ActionMenuButtonItem[]))({ editor, t }).forEach(item => {
      items.push(item)
    })
  }

  return items
})

const showMenu = ref(false)
</script>

<template>
  <span class="blocktype-selector">
    <ActionMenuButton
      v-model:show-menu="showMenu"
      :editor="editor"
      class="rounded-e-0 border"
      :items="localItems"
      :max-height="280"
      :disabled="props.isDisabled?.(editor) || localItems.filter(k => k.disabled).length === items.length"
      :tooltip="t('editor.heading.tooltip')"
      icon="heading"
    >
      <template #append="{ active }">
        <span
          class="active-title px-2 d-flex align-center rounded-e border border-s-0"
          @click="showMenu = !showMenu"
        >{{ active.value.title }}</span>
      </template>
    </ActionMenuButton>
  </span>
</template>
