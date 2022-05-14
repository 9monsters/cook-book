import { Page } from "vuepress";
import { HopeThemePluginsOptions } from "vuepress-theme-hope";

export const pluginsConfig: HopeThemePluginsOptions = {
  blog: {
    autoExcerpt: true,
    filter: (page) => Boolean(page.filePathRelative) && !page.frontmatter.home,
    article: '/article/',
    category: '/category/',
    categoryItem: '/category/:name/',
    tag: '/tag/',
    tagItem: '/tag/:name/',
    encrypted: '/encrypt/',
    slides: '/slides/',
    star: '/star/',
    timeline: '/timeline/'
  },
  copyright: {
    hostname: 'cookbook.alili.fun',
    author: (page) => 'wangjia',
    license: 'MIT',
    triggerWords: 3,
    global: true,
    disableCopy: false,
    disableSelection: false,
    // locales: {}
  },
  feed: {
    atom: true,
    json: true,
    rss: true,
    // image: true,
    // icon: true,
    count: 1000,
    customElements: ["ExternalLinkIcon"],
    filter: ({ frontmatter, filePathRelative }: Page): boolean =>
      !(
        frontmatter.home ||
        !filePathRelative ||
        frontmatter.article === false ||
        frontmatter.feed === false
      ),
    // sort: 
    // channel: 
    atomOutputFilename: 'atom.xml',
    jsonOutputFilename: 'feed.json',
    rssOutputFilename: 'rss.xml',
    // getter:,
    // locales

  },
  mdEnhance: {
    enableAll: true
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
  pwa: {
    showInstall: true,
    manifest: {

    },
    favicon: '/favicon.ico',
    themeColor: '#46bd87',
    cachePic: true,
    cacheHTML: false,
    maxSize: 2048,
    maxPicSize: 1024,
    update: 'availble',
    // hintComponent: 'SWHintPopup',
    // updateComponent: 'SWUpdatePopup',
    apple: {},
    msTile: {},
    appendBase: false,
    // generateSwConfig: {}
  },
  git: {
    createdTime: true,
    updatedTime: true,
    contributors: true
  },
  nprogress: true,
  prismjs: true,
  photoSwipe: {},
  readingTime: {
    wordPerMinute: 300,
    // locales: {}
  },

  seo: {

  },
  sitemap: {

  }

}