<script setup lang="ts">
import type { ImageForm } from './types'

import { computed } from 'vue'

import { getIcon } from '@/constants/icons'
import ImageProperties from './ImageProperties.vue'

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
  <VForm>
    <VTextField
      v-model="form.src"
      :label="t('editor.image.dialog.form.link')"
      autofocus
      :prepend-icon="getIcon('linkVariant')"
    />

    <ImageProperties v-model="form as ImageForm" :t="t" />
  </VForm>
</template>
