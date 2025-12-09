<script setup lang="ts">
import type { ActionMenuButtonItem } from './types'

import { computed } from 'vue'
import { getIcon } from '@/constants/icons'
import { ActionButton } from '../../ActionButton'
import { actionButtonMenuProps } from './props'

const props = defineProps({
  ...actionButtonMenuProps,
  showMenu: {
    type: Boolean,
    default: false
  }
})

const menu = defineModel<boolean>('showMenu')

const active = computed<ActionMenuButtonItem>(() => {
  const find = props.items.find(k => k.isActive())

  if (find && !find.default) {
    return {
      ...find,
      rawIcon: find.rawIcon,
      icon: find.icon ? find.icon : props.icon
    }
  }

  const item: ActionMenuButtonItem = {
    title: props.tooltip,
    icon: props.icon,
    isActive: () => false
  }

  return item
})

const slotProps = computed(() => ({
  active,
  items: props.items
}))
</script>

<template>
  <ActionButton
    :class="props.class"
    :style="props.style"
    :editor="editor"
    :icon="active.icon"
    :raw-icon="active.rawIcon"
    :tooltip="active.title"
    :disabled="disabled"
    :color="color"
    :is-active="active.isActive"
  >
    <VMenu v-model="menu" activator="parent">
      <VList density="compact" :max-height="maxHeight">
        <template v-for="(item, i) in items" :key="i">
          <VListItem :active="item.isActive()" :disabled="item.disabled" @click="item.action">
            <template #prepend>
              <VIcon v-if="item.rawIcon || item.icon" :icon="item.rawIcon ? item.rawIcon : getIcon(item.icon)" />
            </template>

            <VListItemTitle :style="item.style">{{ item.title }}</VListItemTitle>
          </VListItem>

          <VDivider v-if="item.divider" />
        </template>
      </VList>
    </VMenu>
    <slot name="btn-append" v-bind="slotProps"></slot>
  </ActionButton>
  <slot name="append" v-bind="slotProps"></slot>
</template>
