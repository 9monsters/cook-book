import { HopeThemePluginsOptions } from "vuepress-theme-hope";

export const pluginsConfig: HopeThemePluginsOptions = {
    blog: {
      autoExcerpt: true
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
    seo: {
        
    },
    pwa: {
      showInstall: true,
      manifest: {

      },
      cachePic: true,
      maxPicSize: 1024,
      update: 'availble',
      // hintComponent: 'SWHintPopup',
      // updateComponent: 'SWUpdatePopup'
    }
  }