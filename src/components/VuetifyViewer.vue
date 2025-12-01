<script setup lang="ts">
import type { AnyExtension, JSONContent } from '@tiptap/core'
import type { IWhiteList } from 'xss'
import { generateHTML } from '@tiptap/html'
import { computed, ref, unref, watchEffect } from 'vue'
import { useTheme } from 'vuetify'

import Xss from 'xss'
import xssRules from '@/constants/xss-rules'
import { useContext, useMarkdownTheme } from '@/hooks'
import { isBoolean, isString } from '@/utils/utils'

interface Props {
  value?: string | JSONContent
  dark?: boolean
  dense?: boolean
  markdownTheme?: string | false
  xss?: boolean | string[]
  xssOptions?: IWhiteList
  extensions?: AnyExtension[]
}

const props = withDefaults(defineProps<Props>(), {
  value: '',
  dark: undefined,
  dense: false,
  markdownTheme: undefined,
  xss: true,
  xssOptions: () => xssRules,
  extensions: () => []
})

const { state } = useContext()
const theme = useTheme()
const { markdownThemeStyle } = useMarkdownTheme(computed(() => props.markdownTheme))

const ext = computed<AnyExtension[]>(() => [...state.extensions, ...props.extensions])

const isDark = computed<boolean>(() => {
  if (isBoolean(props.dark)) return props.dark
  if (isBoolean(theme.current.value.dark)) return theme.current.value.dark
  return false
})

const viewerClass = computed(() => ({
  __dark: unref(isDark),
  dense: props.dense,
  view: true,
  ...unref(markdownThemeStyle)
}))

const htmlValue = computed<string>(() => {
  if (isString(props.value)) return props.value
  return generateHTML(props.value, unref(ext))
})

const cleanValue = computed(() => {
  let value = unref(htmlValue)

  if (props.xss === false) {
    return value
  }

  value = value
    .replace('https://youtu.be/', 'https://www.youtube.com/watch?v=')
    .replace('watch?v=', 'embed/')
    .replace('https://vimeo.com/', 'https://player.vimeo.com/video/')

  const whiteList = props.xssOptions

  return Xss(value, { whiteList, css: false })
})

const contentEl = ref<HTMLElement>()

function onResize() {
  contentEl.value?.querySelectorAll('img').forEach((el) => {
    if (el.nextElementSibling?.classList.contains('image-figure_caption')) {
      (el.nextElementSibling as HTMLElement).style.width = `${el.offsetWidth}px`
    }
  })
}

const resizeOb: ResizeObserver = new ResizeObserver(() => onResize())

watchEffect(effect => {
  if (contentEl.value) {
    unref(resizeOb).observe(contentEl.value)
  }

  effect(() => {
    unref(resizeOb).disconnect()
  })
})
</script>

<template>
  <div class="vuetify-pro-tiptap-editor__content" :class="viewerClass" :style="{ width: '100%' }">
    <slot name="before"></slot>
    <!-- eslint-disable-next-line vue/no-v-html -->
    <div ref="contentEl" class="content" v-html="cleanValue"></div>
    <slot name="after"></slot>
  </div>
</template>
