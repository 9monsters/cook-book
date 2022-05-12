import { defineUserConfig } from 'vuepress'
import { path } from '@vuepress/utils'

import { externalLinkIconPlugin } from '@vuepress/plugin-external-link-icon'
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics'
import { mediumZoomPlugin } from '@vuepress/plugin-medium-zoom'
import { nprogressPlugin } from '@vuepress/plugin-nprogress'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'

import { searchPlugin } from '@vuepress/plugin-search'

import { gitPlugin } from '@vuepress/plugin-git'
import { tocPlugin } from '@vuepress/plugin-toc'

import {temeeConfig} from './themeConfig'

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'CookBook',
  description: 'CookBook ✨',
  public: 'public',
  theme: temeeConfig,
  plugins: [
    externalLinkIconPlugin({
    }),
    googleAnalyticsPlugin({
      id: 'G-VB7J07W8SW'
    }),
    mediumZoomPlugin({
      selector: ':not(a) > img',
      delay: 350,
      zoomOptions: {

      }
    }),
    nprogressPlugin(),
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, './components'),
    }),
    searchPlugin({
      hotKeys:['s', '/'],
      maxSuggestions: 6,
      isSearchable: (page) => page.path !== '/',
    }),
    gitPlugin({
      createdTime: true,
      updatedTime: true,
      contributors: true
    }),
    tocPlugin({
      componentName: 'Toc',
      defaultPropsOptions: {},
    }),
  ]
})

