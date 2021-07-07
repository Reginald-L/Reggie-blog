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
        {to: '/', label: 'Blog', position: 'right'},
        {
          href: 'https://github.com/Reginald-L',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        blog: {
            path: './blog',
            routeBasePath: '/', 
        },
        theme: {
            customCss: require.resolve('./src/css/custom.css'),
            // customCss: require.resolve('./src/js/love.min.js'),
        },
      },
    ],
  ],
  // clientModules: [
  //   require.resolve('./src/js/love.min.js'),
  // ],
};
