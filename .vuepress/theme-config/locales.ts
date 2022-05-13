import { zhNavbarConfig } from './navBar'
import { zhSidebarConfig } from './sideBar'

export const zhLocales = {
    lang: 'zh-CN',
    logo: 'logo.jpeg',
    logoDark: 'logo.jpeg',
    navbar: zhNavbarConfig,
    sidebar: zhSidebarConfig,

    outlookLocales: {
        /**主题色*/
        themeColor: '',
        /**夜间模式*/
        darkmode: '',
        /**全屏文字*/
        fullscreen: '',
    },

    blogLocales: {
        /** 文章文字 */
        article: '文章',
        /** 文章列表文字 */
        articleList: '文章列表',
        /** 分类文字 */
        category: '分类',
        /** 标签文字 */
        tag: '标签',
        /** 时间轴文字 */
        timeline: '时间线',
        /** 时间轴标题文字 */
        timelineTitle: '时间线标题',
        /** 全部文字 */
        all: '全部',
        /** 个人介绍 */
        intro: '个人介绍',
        /** 搜藏文字 */
        star: '收藏',
        /** 幻灯片 */
        slides: '幻灯片',
        /** 加密 */
        encrypt: '㊙️',
    },

    paginationLocales: {
        /**上一页文字 */
        prev: '上一页',
        /**下一页文字*/
        next: '下一页',
        /**跳转提示文字*/
        navigate: '导航',
        /**跳转按钮文字*/
        action: '导航',
        /**页码错误文字，其中 `$page` 会自动替换为当前的总页数*/
        errorText: '哎呦，不对哦',
    },

    /**
     * Encrypt
     */
    encryptLocales: {
        /**
         * Encrypt title
         */
        title: '㊙️',
        placeholder: '秘密',
        remember: '记住',
        /**
         * Passwrod error hint
         */
        errorHint: '哎呦，🙅',
    },

    navbarLocales: {
        /**
         * Navbar language selection config
         *
         * Text of the language selection dropdown
         */
        selectLangText: '',

        /**
         * Navbar language selection config
         *
         * Aria label of of the language selection dropdown
         */
        selectLangAriaLabel: '',

        /**
         * Navbar language selection config
         *
         * Language name of current locale
         *
         * Displayed inside the language selection dropdown
         */
        langName: '',
    },

    /**
     * Page locate config
     */
    metaLocales: {
        /**作者文字*/
        author: '作者',
        /**写作日期文字*/
        date: '日期',
        /**标记原创的文字*/
        origin: '原创',
        /**访问量文字*/
        views: '访问量',
        /**标签文字*/
        tag: '标签',
        /**分类文字*/
        category: '分类',
        /**期望阅读时间文字*/
        readingTime: '阅读时间',
        /**文章字数*/
        words: '字数',
        /**此页内容*/
        toc: '目录',
        /**Page nav - previous link*/
        prev: '上一页',
        /**Page nav - next link*/
        next: '下一页',
        /**
         * Page meta - last updated config
         *
         * The text to replace the default 'Last Updated'
         */
        lastUpdated: '最近更新',

        /**
         * Page meta - contributors config
         *
         * The text to replace the default 'Contributors'
         */
        contributors: '最近更新',

        /**
         * Page meta - contributors config
         *
         * The text to replace the default 'Edit this page'
         */
        editLink: '编辑',
    },

    routeLocales: {
        /**
         * 404 page msgs
         */
        '404msg': [],
        /**
         * Back to homepage
         */
        home: '首页',
        /**
         * Back to last page
         */
        back: '返回',
        /**
         * sr-only message in `<ExternalLinkIcon>`
         */
        openInNewWindow: '新页面打开',
    },
}