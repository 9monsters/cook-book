import { sidebar } from 'vuepress-theme-hope';

export const zhSidebarConfig = sidebar({
  '/zh': [
    '',
    {
      text: '指南',
      icon: 'creative',
      prefix: 'guide/',
      children: [
        'get-started/',
        'interface/',
        'layout/',
        'markdown/',
        'feature/',
        'blog/',
        'advanced/',
      ],
    },
    {
      text: '教程',
      icon: 'guide',
      prefix: 'cookbook/',
      children: ['tutorial/', 'markdown/', 'vuepress/', 'advanced/'],
    },
    'changelog',
    'contribution',
  ],

  '/zh/about/': 'structure',

});