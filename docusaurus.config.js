const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(
  module.exports = {
    title: "Zero2Hero",
    tagline:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    url: "https://zero2hero.sliitfoss.org/",
    baseUrl: "/zero2hero/",
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",
    favicon: "img/favicon.png",
    organizationName: "SLIIT FOSS", // Usually your GitHub org/user name.
    projectName: "Zero2Hero", // Usually your repo name.

    presets: [
      [
        "@docusaurus/preset-classic",
        /** @type {import('@docusaurus/preset-classic').Options} */
        ({
          docs: {
            sidebarPath: require.resolve("./sidebars.js"),
            editUrl:
              "https://github.com/sliit-foss/zero2hero/edit/master/",
          },
          blog: {
            showReadingTime: true,
            editUrl:
              "https://github.com/sliit-foss/zero2hero/edit/master/blog/",
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
          title: "Zero2Hero",
          logo: {
            alt: "Zero2Hero Logo",
            src: "img/logoNoText.png",
          },
          items: [
            {
              type: "doc",
              docId: "intro",
              position: "left",
              label: "Docs",
            },
            { to: "https://sliitfoss.org/blog", label: "Blog", position: "left" },
            {
              href: "https://github.com/sliit-foss",
              label: "GitHub",
              position: "right",
            },
            {          
              type: 'search',
              position: 'right',
            },
          ],
        },
        footer: {
          style: "dark",
          links: [
            {
              title: "Docs",
              items: [
                {
                  label: "Tutorial",
                  to: "/docs/intro",
                },
              ],
            },
            {
              title: "Community",
              items: [
                {
                  label: "Facebook",
                  href: "https://www.facebook.com/sliitfoss",
                },
                {
                  label: "LinkedIn",
                  href: "https://www.linkedin.com/company/sliit-foss-community/",
                },
                {
                  label: "Twitter",
                  href: "https://twitter.com/fosssliit",
                },
              ],
            },
            {
              title: "More",
              items: [
                {
                  label: "Blog",
                  to: "https://sliitfoss.org/blog",
                },
                {
                  label: "GitHub",
                  href: "https://github.com/sliit-foss",
                },
              ],
            },
          ],
          logo: {
            alt: "SLIIT FOSS Logo",
            src: "https://raw.githubusercontent.com/sliit-foss/sliitfoss/master/src/assets/img/logo-light.webp",
            href: "https://sliitfoss.org",
          },
          copyright: `Copyright © ${new Date().getFullYear()} <a href="https://sliitfoss.org">SLIIT FOSS</a>. Built with ❤ in Sri Lanka.`,
        },
        prism: {
          theme: lightCodeTheme,
          darkTheme: darkCodeTheme,
        },
      }),
  }
);
