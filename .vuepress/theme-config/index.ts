import { hopeTheme } from 'vuepress-theme-hope'
import { zhLocales } from './locales'
import { pluginsConfig } from './plugins'

export const temeeConfig = hopeTheme({
  hostname: 'https://cookbook.alili.fun',
  author: 'wangjia',
  
  locales: {
    '/': zhLocales,
    // '/en/': enLocales
  },

  // 导航栏
  // navbar: zhNavbarConfig,
  navbarIcon: true,

  repo: 'NineSwordsMonster/cook-book',
  repoDisplay: true,
  repoLabel: 'GitHub',

  navbarAutoHide: 'mobile',
  hideSiteNameonMobile: true,

  // 侧边栏
  // sidebar: zhSidebarConfig,
  sidebarIcon: true,
  headerDepth: 2,

  // 路径导航
  breadcrumb: true,
  breadcrumbIcon: true,

  // 标题
  titleIcon: true,
  pageInfo: ['Author', 'Original', 'Date', 'Category', 'Tag', 'ReadingTime', 'Word', 'PageView'],

  // Meta
  lastUpdated: true,
  contributors: true,
  editLink: true,
  // editLinkPattern: ''
  docsRepo: 'repo',
  docsBranch: 'main',
  docsDir: '',

  // 页脚
  footer: 'MIT Licensed | Copyright © 2022-present wangjia', 
  copyright: 'WANGJIA',
  displayFooter: true,
  
  // 杂项
  home: '/',
  toc: true,

  pure: false,
  iconPrefix: 'icon-',
  darkmode: 'auto-switch',
  themeColor: { 
    blue: '#2196f3', 
    red: '#f26d6d', 
    green: '#3eaf7c', 
    orange: '#fb9b5f'
  },
  fullscreen: true,
  backToTop: true,
  mobileBreakPoint: 720,
  plugins: pluginsConfig
})

