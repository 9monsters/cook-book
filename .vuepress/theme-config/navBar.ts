import { HopeThemeNavbarConfig, navbar } from 'vuepress-theme-hope';

export const zhNavbarConfig: HopeThemeNavbarConfig = navbar([
  {
    text: "家常菜",
    link: "/simple",
    icon: "creative",
    activeMatch: "^/zh/about/$",
  },
  {
    text: "收藏",
    link: "/star",
    icon: "creative",
    activeMatch: "^/zh/about/$",
  },
  {
    text: "分类",
    icon: "info",
    link: "/",
    children: [
      {
        text: "归档",
        link: "/article",
        icon: "creative",
        activeMatch: "^/zh/about/$",
      },
      {
        text: "分类",
        link: "/category",
        icon: "creative",
        activeMatch: "^/zh/about/$",
      },
    
      {
        text: "标签",
        link: "/tag",
        icon: "creative",
        activeMatch: "^/zh/about/$",
      },
    
      {
        text: "时间线",
        link: "/timeline",
        icon: "creative",
        activeMatch: "^/zh/about/$",
      },
    ]
  },

 
  {
    text: "关于",
    link: "/about/README.md",
    icon: "creative",
    activeMatch: "^/zh/about/$",
  },
]);

