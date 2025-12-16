<a name="readme-top"></a>

<div>
  <img width="64" height="64" src="https://raw.githubusercontent.com/proj-airi/iconify-meteocons/refs/heads/main/docs/examples/overcast-day-hail-fill.svg" />
  <img width="64" height="64" src="https://raw.githubusercontent.com/proj-airi/iconify-meteocons/refs/heads/main/docs/examples/partly-cloudy-night-sleet-fill.svg" />
  <img width="64" height="64" src="https://raw.githubusercontent.com/proj-airi/iconify-meteocons/refs/heads/main/docs/examples/thunderstorms-day-extreme-rain-line.svg" />
  <img width="64" height="64" src="https://raw.githubusercontent.com/proj-airi/iconify-meteocons/refs/heads/main/docs/examples/uv-index-2-fill.svg" />
</div>

# [Meteocons](https://bas.dev/work/meteocons) ported into [Iconify](https://iconify.design/)

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![JSDocs][jsdocs-src]][jsdocs-href]
[![License][license-src]][license-href]

Nice looking animated flatten design SVG icons and Icon Collection. See them all on one page at [lobehub.com/icons](https://lobehub.com/icons).<br/>
Contributions, corrections & requests can be made on their [GitHub repository](https://github.com/basmilius/weather-icons).

This enables you to use Meteocons in UnoCSS or any Iconify compatible scenario.

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

Now you can use it with UnoCSS's `i-` syntax:

```html
<div class i-meteocons:overcast-day-haze-fill></div>
```

[npm-version-src]: https://img.shields.io/npm/v/@proj-airi/iconify-meteocons?style=flat&colorA=080f12&colorB=2a64be
[npm-version-href]: https://npmjs.com/package/@proj-airi/iconify-meteocons
[npm-downloads-src]: https://img.shields.io/npm/dm/@proj-airi/iconify-meteocons?style=flat&colorA=080f12&colorB=2a64be
[npm-downloads-href]: https://npmjs.com/package/@proj-airi/iconify-meteocons
[bundle-src]: https://img.shields.io/bundlephobia/minzip/@proj-airi/iconify-meteocons?style=flat&colorA=080f12&colorB=2a64be&label=minzip
[bundle-href]: https://bundlephobia.com/result?p=@proj-airi/iconify-meteocons
[license-src]: https://img.shields.io/github/license/proj-airi/iconify-meteocons.svg?style=flat&colorA=080f12&colorB=2a64be
[license-href]: https://github.com/proj-airi/iconify-meteocons/blob/main/LICENSE
[jsdocs-src]: https://img.shields.io/badge/jsdocs-reference-080f12?style=flat&colorA=080f12&colorB=2a64be
[jsdocs-href]: https://www.jsdocs.io/package/@proj-airi/iconify-meteocons
