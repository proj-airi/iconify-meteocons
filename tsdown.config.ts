import { copyFile, mkdir, readdir, rm, writeFile } from 'node:fs/promises'
import { join } from 'node:path'
import { cwd } from 'node:process'

import { importDirectory } from '@iconify/tools'
import { defineConfig } from 'tsdown'

import packageJSON from './package.json' with { type: 'json' }

function json(any: any) {
  return JSON.stringify(any, null, 2)
}

export default defineConfig({
  entry: ['./src/index.ts'],
  external: [
    './metadata.json',
    './icons.json',
    './chars.json',
    './info.json',
  ],
  sourcemap: false,
  dts: true,
  unused: true,
  fixedExtension: true,
  hooks: {
    'build:done': async () => {
      const iconsDirectory = join(cwd(), 'src', 'icons')
      const fillAnimatedDirectory = join(cwd(), 'src', 'meteocons', 'fill', 'animation-ready')
      const fillStaticDirectory = join(cwd(), 'src', 'meteocons', 'fill', 'export')
      const lineAnimatedDirectory = join(cwd(), 'src', 'meteocons', 'line', 'animation-ready')
      const lineStaticDirectory = join(cwd(), 'src', 'meteocons', 'line', 'export')

      const fillAnimatedFiles = await readdir(fillAnimatedDirectory)
      const lineAnimatedFiles = await readdir(lineAnimatedDirectory)
      const fillStaticFiles = await readdir(fillStaticDirectory)
      const lineStaticFiles = await readdir(lineStaticDirectory)

      await rm(iconsDirectory, { recursive: true, force: true })
      await mkdir(iconsDirectory, { recursive: true })

      const copyIcons = async (files: string[], style: 'fill' | 'line', variant: 'animated' | 'static', sourceDirectory: string) => {
        await Promise.all(
          files.filter(file => file.endsWith('.svg')).map(async (file) => {
            const originalName = file.replace(/\.svg$/u, '').replace(/^wi_/, '')
            const targetName = `${originalName}-${style}-${variant}.svg`

            await copyFile(join(sourceDirectory, file), join(iconsDirectory, targetName))
          }),
        )
      }

      await copyIcons(fillAnimatedFiles, 'fill', 'animated', fillAnimatedDirectory)
      await copyIcons(lineAnimatedFiles, 'line', 'animated', lineAnimatedDirectory)
      await copyIcons(fillStaticFiles, 'fill', 'static', fillStaticDirectory)
      await copyIcons(lineStaticFiles, 'line', 'static', lineStaticDirectory)

      const iconSetData = await importDirectory(join(cwd(), 'src', 'icons'), { prefix: 'meteocons', ignoreImportErrors: 'warn' })
      const iconJSONData = iconSetData.export()

      await writeFile(join('dist', 'metadata.json'), json({ categories: iconSetData.categories }), { encoding: 'utf8' })
      await writeFile(join('dist', 'icons.json'), json(iconJSONData), { encoding: 'utf8' })
      await writeFile(join('dist', 'chars.json'), json({}), { encoding: 'utf8' })
      await writeFile(join('dist', 'info.json'), json({
        prefix: 'meteocons',
        name: 'Meteocons',
        total: Object.keys(iconJSONData.icons).length,
        version: packageJSON.version,
        author: {
          name: packageJSON.author.name,
          url: packageJSON.author.url,
        },
        license: {
          title: 'MIT',
          spdx: 'MIT',
        },
        samples: [
          'partly-cloudy-day-rain-fill-animated',
          'wind-beaufort-4-fill-animated',
          'thunderstorms-night-fill-animated',
        ],
        height: 20,
        displayHeight: 20,
        category: 'Logos 20px',
        tags: [
          'Weather',
          'Animated',
        ],
        palette: false,
      }), { encoding: 'utf8' })
    },
  },
})
