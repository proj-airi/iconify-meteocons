<a name="readme-top"></a>

<div align="center">

<h1><a href="https://bas.dev/work/meteocons">Meteocons</a> ported into <a href="https://iconify.design/">Iconfiy</a></h1>

Nice looking animated flatten design SVG icons and Icon Collection. See them all on one page at [lobehub.com/icons](https://lobehub.com/icons).<br/>
Contributions, corrections & requests can be made on their [GitHub repository](https://github.com/basmilius/weather-icons).

This enables you to use Meteocons in UnoCSS or any Iconify compatible scenario.

</div>

> [!NOTE]
>
> This project is part of (and also associate to) the [Project AIRI](https://github.com/moeru-ai/airi), we aim to build a LLM-driven VTuber like [Neuro-sama](https://www.youtube.com/@Neurosama) (subscribe if you didn't!) if you are interested in, please do give it a try on [live demo](https://airi.moeru.ai).

## Installation

Pick the package manager of your choice:

```shell
ni @proj-airi/iconify-meteocons -D # from @antfu/ni, can be installed via `npm i -g @antfu/ni`
pnpm i @proj-airi/iconify-meteocons @iconify/utils -D
yarn i @proj-airi/iconify-meteocons @iconify/utils -D
npm i @proj-airi/iconify-meteocons @iconify/utils -D
```

### UnoCSS usage

```typescript
import { createExternalPackageIconLoader } from '@iconify/utils/lib/loader/external-pkg'
import { presetIcons } from 'unocss'

export default defineConfig({
  presets: [
    // Other presets
    presetIcons({
      scale: 1.2,
      collections: {
        ...createExternalPackageIconLoader('@proj-airi/iconify-meteocons'),
      },
    }),
  ],
})
```
