const { themes: prismThemes } = require('prism-react-renderer');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Blog của Tiến Thành',
  tagline: 'Chia sẻ hành trình học An toàn thông tin 🔐',
  url: 'https://tienthanh23072007-stack.github.io',
  baseUrl: '/my-docusaurus/',

  organizationName: 'tienthanh23072007-stack', // GitHub username
  projectName: 'my-docusaurus', // Repo name
  deploymentBranch: 'gh-pages',
  favicon: 'img/favicon.ico',

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
          blogTitle: 'Bài viết',
          blogDescription: 'Nơi chia sẻ kiến thức và quá trình học tập'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'Tiến Thành',
      logo: {
        alt: 'Logo Blog Tiến Thành',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Tài liệu học tập',
        },
        { to: '/blog', label: 'Bài viết', position: 'left' },
        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub cá nhân',
          position: 'right',
        },
      ],
    },

    footer: {
      style: 'dark',
      links: [
        {
          title: 'Học tập',
          items: [
            {
              label: 'Tài liệu ATTT',
              to: '/docs/intro',
            },
            {
              label: 'Blog',
              to: '/blog',
            },
          ],
        },
        {
          title: 'Liên kết',
          items: [
            {
              label: 'GitHub',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'X',
              href: 'https://x.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

module.exports = config;