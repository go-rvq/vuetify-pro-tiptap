<script lang="ts" setup>
import { CodeBlockMenuItem } from '@/extensions/components/MenuItem'
import ActionButton from '../src/index.vue'
import { extActionButtonProps } from '../src/props'

const props = defineProps(extActionButtonProps)
const item = CodeBlockMenuItem(props)
</script>

<template>
  <ActionButton
    :editor="props.editor"
    v-bind="{ ...item, tootip: item.title }"
  />
</template>
