module.exports = {
  title: "Reggie's blog",
  tagline: 'The tagline of my site',
  url: 'https://reggiedev.tech/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Reginald-L', 
  projectName: 'Reggie-blog',
  themeConfig: {
    navbar: {
      title: 'Reggie',
      logo: {
        alt: 'My Site Logo',
        src: 'img/favicon.ico',
      },
      items: [
        {to: 'blog', label: '📝Blog', position: 'left'},
        // {to: 'resume', label: 'Resume', position: 'right'},
        {
          href: 'https://github.com/Reginald-L',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      // style: "dark",
      copyright: `Copyright © ${new Date().getFullYear()} Reggie.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        blog: {
            path: './blog',
            routeBasePath: '/',
            blogSidebarCount: 10,
            postsPerPage: 1,
        },
        theme: {
            customCss: require.resolve('./src/css/custom.css'),
            // customCss: require.resolve('./src/js/love.js'),
        },
      },
    ],
  ],
};
