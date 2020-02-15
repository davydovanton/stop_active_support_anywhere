module.exports = {
  title: '🛑 Stop ActiveSupport Anywhere',
  description: 'Collection of libraries you can use instead of ActiveSupport',
  themeConfig: {
    serviceWorker: {
      updatePopup: true,
    },
    sidebar: [
      ['/pages/intro', 'Intro'],
      '/pages/blog-posts',
      '/pages/todo',
      {
        title: 'Features',
        path: '/pages/features',
        collapsable: false
      }
    ],
    nav: [
    ],
    lastUpdated: 'Last Updated',
    repo: 'davydovanton/stop_active_support_anywhere',
    editLinks: true,
    editLinkText: 'Edit this page (help us to improve it!)',
  },
  markdown: {
    lineNumbers: true
  },
  plugins: [
    ['@vuepress/active-header-links', {
      sidebarLinkSelector: '.sidebar-link',
      headerAnchorSelector: '.header-anchor',
      headerTopOffset: 120
    }],
    ['@vuepress/back-to-top'],
    [ 'autometa', {
      site: {
        name   : 'Stop ActiveSupport Anywhere',
      },
      canonical_base: '',
    }]
  ]
}
