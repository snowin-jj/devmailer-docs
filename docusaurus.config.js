// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const { themes } = require("prism-react-renderer");
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "DevMailer | Docs",
  tagline: "Fastest way to send emails.",
  url: "https://docs-devmailer.netlify.app",
  baseUrl: "/",
  onBrokenLinks: "ignore",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "snowin-jj", // Usually your GitHub org/user name.
  projectName: "devmailer-docs", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/devsnowin/devmailer-docs/blob/main/",
        },
        blog: {
          showReadingTime: false,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "",
        logo: {
          alt: "Site Logo",
          src: "img/logo.png",
        },
        items: [
          {
            href: "https://github.com/snowin-jj",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "light",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Live Demo",
                to: "https://replit.com/@SnowinJ/devmailer-example?v=1",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Instagram",
                href: "https://www.instagram.com/snowin_jj/",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/snowin_jj",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/snowin-jj",
              },
              {
                label: "Feedback",
                href: "https://forms.gle/H58QrHFDcr2nLznt5",
              },
            ],
          },
        ],
        copyright: `DevMailer @ ${new Date().getFullYear()}. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["bash", "diff", "json"],
      },
    }),
};

module.exports = config;
