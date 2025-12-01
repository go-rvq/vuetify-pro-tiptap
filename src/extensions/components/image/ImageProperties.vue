<script setup lang="ts">
import type { ImageForm } from './types'

import { computed } from 'vue'

import { getIcon } from '@/constants/icons'

interface Props {
  modelValue?: ImageForm
  t: (path: string) => string
}

interface Emits {
  (event: 'update:modelValue', value: ImageForm): void
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: () => ({})
})

const emit = defineEmits<Emits>()

const form = computed({
  get: () => props.modelValue,
  set: val => emit('update:modelValue', val)
})
</script>

<template>
  <VTextField
    v-model="form.alt" :label="t('editor.image.dialog.form.alt')"
    :prepend-icon="getIcon('text')"
  />
  <VCheckbox
    v-model="form.lockAspectRatio" :label="t('editor.image.dialog.form.aspectRatio')"
    hide-details
  />
  <VCheckbox
    v-model="form.captionDisabled" :label="t('editor.image.dialog.form.captionDisabled')"
    hide-details
  />
</template>
