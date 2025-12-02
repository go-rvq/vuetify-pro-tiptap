<script lang="ts" setup>
import { BlockquoteMenuItem } from '../../MenuItem/blockquote'
import ActionButton from '../src/index.vue'
import { extActionButtonProps } from '../src/props'

const props = defineProps(extActionButtonProps)
const item = BlockquoteMenuItem({
  editor: props.editor,
  t: props.t,
  isDisabled: props.isDisabled
})
</script>

<template>
  <ActionButton
    :editor="props.editor"
    v-bind="{ ...item, tootip: item.title }"
  />
</template>

<!-- <style lang="scss" scoped></style> -->
