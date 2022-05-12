import { defineUserConfig } from 'vuepress'
import { path } from '@vuepress/utils'

import { hopeTheme } from 'vuepress-theme-hope'
import { zhNavbarConfig } from './navBar';
import { zhSidebarConfig } from './sideBar';

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
  description: 'CookBook ✨',
  public: 'public',
  theme: hopeTheme({
    repo: "NineSwordsMonster/cook-book",
    repoLabel: "GitHub",
    repoDisplay: true,
    nav: zhNavbarConfig,
    sidebar: zhSidebarConfig,
    locales: {
    },
    breadcrumb: true,
    displayFooter: true,
    footer: 'MIT Licensed | Copyright © 2022-present wangjia',
    copyright: 'WANGJIA',
    git: {
      timezone: "Asia/Shanghai",
    },
    mdEnhance: {
      enableAll: true,
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
    },
    plugins: {
      blog: {
        autoExcerpt: true
      },
      comment: {
        type: 'giscus',
        repo: 'NineSwordsMonster/cook-book',
        repoId: 'R_kgDOHUle5w',
        category: 'Announcements',
        categoryId: 'DIC_kwDOHUle584CPD56',
        mapping: 'og:title',
        reactionsEnabled: true,
        inputPosition: 'top'
      },
    }
  }),

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

