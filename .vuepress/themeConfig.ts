import { hopeTheme } from 'vuepress-theme-hope'
import { zhNavbarConfig } from './navBar';
import { zhSidebarConfig } from './sideBar';

export const temeeConfig = hopeTheme({
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
  })

