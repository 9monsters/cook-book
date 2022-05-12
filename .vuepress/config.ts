import { defineUserConfig } from 'vuepress'
import { path } from '@vuepress/utils'

import { backToTopPlugin } from '@vuepress/plugin-back-to-top'
import { containerPlugin } from '@vuepress/plugin-container'
import { externalLinkIconPlugin } from '@vuepress/plugin-external-link-icon'
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics'
import { mediumZoomPlugin } from '@vuepress/plugin-medium-zoom'
import { nprogressPlugin } from '@vuepress/plugin-nprogress'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'

import { searchPlugin } from '@vuepress/plugin-search'
import { pwaPlugin } from '@vuepress/plugin-pwa'
import { pwaPopupPlugin } from '@vuepress/plugin-pwa-popup'
import { shikiPlugin } from '@vuepress/plugin-shiki'

import { gitPlugin } from '@vuepress/plugin-git'
import { tocPlugin } from '@vuepress/plugin-toc'

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'CookBook',
  description: 'CookBook',
  public: path.resolve(__dirname, './public'),
  plugins: [
    backToTopPlugin(),
    containerPlugin({type: 'tip'}),
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
    pwaPlugin({
      serviceWorkerFilename: 'cookbook.service.worker.js'
    }),
    pwaPopupPlugin({}),
    shikiPlugin({}),
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

