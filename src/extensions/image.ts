import type { ImageOptions as TiptapImageOptions } from '@tiptap/extension-image'
import type { Display, ImageAttrsOptions, ImageTab, ImageTabKey } from './components/image/types'
import type { DisabledCheckOptions, GeneralOptions } from '@/type'

import { Image as TiptapImage } from '@tiptap/extension-image'
import { mergeAttributes, VueNodeViewRenderer } from '@tiptap/vue-3'
import { IMAGE_SIZE } from '@/constants/define'
import { ImageActionButton } from './components/ActionButton'

import ImageDialog from './components/image/ImageDialog.vue'
import ImageView from './components/image/ImageView.vue'

export { default as ImageProperties } from './components/image/ImageProperties.vue'

/**
 * Represents the type for the upload function, which takes a File parameter and returns a Promise of type string.
 */
type Upload = (file: File) => Promise<string>

/**
 * Represents the interface for image options, extending TiptapImageOptions and GeneralOptions.
 */
export interface ImageOptions extends TiptapImageOptions, GeneralOptions<ImageOptions>, DisabledCheckOptions {
  /** Function for uploading images */
  upload?: Upload
  /** image default width */
  width?: string | number
  /** image default display */
  display: Display
  /** List of image tabs */
  imageTabs: ImageTab[]
  /** List of hidden image tab keys */
  hiddenTabs: ImageTabKey[]
  /** Component for the image dialog */
  dialogComponent: any
  /** Label for image */
  label?: string
  /** If label of image is disabled. */
  labelDisabled?: boolean
}

/**
 * Represents the interface for options to set image attributes, extending ImageAttrsOptions and including the src property.
 */
interface SetImageAttrsOptions extends ImageAttrsOptions {
  /** The source URL of the image. */
  src: string
}

declare module '@tiptap/core' {
  interface Commands<ReturnType> {
    imageResize: {
      /**
       * Add an image
       */
      setImage: (options: Partial<SetImageAttrsOptions>) => ReturnType
      /**
       * Update an image
       */
      updateImage: (options: Partial<SetImageAttrsOptions>) => ReturnType
    }
  }
}

export const Image = /* @__PURE__*/ TiptapImage.extend<ImageOptions>({
  parseHTML() {
    const imgSelector = this.options.allowBase64 ? 'img[src]' : 'img[src]:not([src^="data:"])'
    return [
      {
        tag: imgSelector,
        getAttrs(node) {
          if (node.parentElement?.tagName === 'FIGURE') {
            const figure = node.parentElement as HTMLElement
            const captionElement = figure.querySelector('FIGCAPTION')
            if (captionElement) {
              node.setAttribute('data-label', ((captionElement as HTMLElement).textContent || '') as string)
              figure.removeChild(captionElement)
            }
          }
          return null
        }
      }
    ]
  },

  renderHTML({ HTMLAttributes, node }) {
    const attrs = mergeAttributes(this.options.HTMLAttributes, HTMLAttributes)
    if (node.attrs.labelDisabled || !node.attrs.label) {
      return ['img', attrs]
    }
    return ['figure', {}, ['img', attrs], ['figcaption', {}, node.attrs.label]]
  },

  addAttributes() {
    return {
      ...this.parent?.(),
      src: {
        default: null
      },
      alt: {
        default: null
      },
      lockAspectRatio: {
        default: true
      },
      width: {
        default: this.options.width
      },
      height: {
        default: null
      },
      display: {
        default: this.options.display,
        renderHTML: ({ display }) => {
          if (!display) {
            return {}
          }

          return {
            'data-display': display
          }
        },
        parseHTML: element => {
          const display = element.getAttribute('data-display')
          return display || 'inline'
        }
      },
      label: {
        default: this.options.label,
        renderHTML: () => {
          // if has label render as FIGCAPTION
          return {}
        },
        parseHTML: element => element.getAttribute('data-label') || ''
      },
      labelDisabled: {
        default: this.options.labelDisabled,
        renderHTML: ({ labelDisabled }) => {
          if (!labelDisabled) {
            return {}
          }

          return {
            'data-label-disabled': labelDisabled
          }
        },
        parseHTML: element =>
          element.getAttribute('data-label-disabled') === 'true' || false
      }
    }
  },
  addNodeView() {
    return VueNodeViewRenderer(ImageView as any)
  },
  addCommands() {
    return {
      ...this.parent?.(),
      updateImage:
        options =>
        ({ commands }) => {
          return commands.updateAttributes(this.name, options)
        }
    }
  },
  addOptions() {
    return {
      ...this.parent?.() as TiptapImageOptions,
      upload: undefined,
      width: IMAGE_SIZE['size-large'],
      display: 'inline',
      imageTabs: [],
      hiddenTabs: [],
      inline: true,
      dialogComponent: () => ImageDialog,
      button: ({ editor, extension, t }) => {
        const { upload, imageTabs, hiddenTabs, dialogComponent } = extension.options

        return {
          component: ImageActionButton,
          componentProps: {
            isDisabled: extension.options.isDisabled,
            editor,
            t,
            upload,
            imageTabs,
            hiddenTabs
          },
          componentSlots: {
            dialog: dialogComponent()
          }
        }
      }
    }
  }
})
