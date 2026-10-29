import { yikoyu } from '@yikoyu/stylelint-config'

const config = yikoyu()

// scss/at-import-partial-extension is gone from stylelint-scss 7 (it is
// scss/load-partial-extension, which the config turns off too): named, even
// off, it is an unknown rule — an error on every file
delete config.rules['scss/at-import-partial-extension']

// the build (lib) is no source
config.ignoreFiles = [...(config.ignoreFiles || []), 'lib/**']

export default config
