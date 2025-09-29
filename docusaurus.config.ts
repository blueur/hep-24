import type * as Preset from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";
import { themes as prismThemes } from "prism-react-renderer";
import { remarkKroki } from "remark-kroki";
import type { Options as SassOptions } from "sass";

const config: Config = {
  title: "BS21INF5",
  tagline: "Programmation Web et bases de données",
  favicon: "img/favicon.ico",

  url: "https://hep-24.davidtang.ch",
  baseUrl: "/",

  i18n: { defaultLocale: "fr", locales: ["fr"] },
  future: { v4: true },
  plugins: [
    [
      "docusaurus-plugin-sass",
      {
        sassOptions: {
          silenceDeprecations: ["import"],
          quietDeps: true,
        } satisfies SassOptions<"sync">,
      },
    ],
  ],
  markdown: { mermaid: true },
  presets: [
    [
      "classic",
      {
        docs: {
          showLastUpdateTime: true,
          sidebarCollapsed: false,
          remarkPlugins: [[remarkKroki, { server: "https://kroki.io" }]],
        },
        blog: false,
        theme: { customCss: "./src/css/custom.scss" },
        gtag: { trackingID: "G-JKD1JRMKPE", anonymizeIP: true },
      } satisfies Preset.Options,
    ],
  ],
  themes: ["@docusaurus/theme-mermaid"],
  themeConfig: {
    announcementBar: {
      content:
        "Vers la dernière version : <a href='https://hep.davidtang.ch'>hep.davidtang.ch</a>",
      isCloseable: false,
    },
    navbar: {
      title: "BS21INF5",
      logo: { alt: "Logo", src: "img/logo.svg" },
      items: [
        {
          to: "/docs/cours",
          html: "<i class='ph ph-presentation'></i> Cours",
          position: "left",
        },
        {
          to: "/docs/seminaire",
          html: "<i class='ph ph-flask'></i> Séminaire",
          position: "left",
        },
        {
          href: "https://github.com/blueur",
          position: "right",
          className: "ph ph-github-logo",
        },
        {
          href: "https://www.linkedin.com/in/davidtangch/",
          position: "right",
          className: "ph ph-linkedin-logo",
        },
        {
          href: "mailto:david.tang@hepl.ch",
          position: "right",
          className: "ph ph-envelope-simple",
        },
      ],
    },
    footer: {
      copyright: `<div xmlns:cc="http://creativecommons.org/ns#" xmlns:dct="http://purl.org/dc/terms/"><a property="dct:title" rel="cc:attributionURL" href="https://hep-24.davidtang.ch/" target="_blank">BS21INF5</a> © 2024-${new Date().getFullYear()} by <a rel="cc:attributionURL dct:creator" property="cc:attributionName" href="https://davidtang.ch" target="_blank">David Tang</a> is licensed under <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank" rel="license noopener noreferrer" style="display:inline-block;">CC BY-NC-SA 4.0</a></div>`,
    },
    docs: { sidebar: { hideable: true } },
    mermaid: { theme: { light: "neutral", dark: "dark" } },
    prism: { theme: prismThemes.oneLight, darkTheme: prismThemes.oneDark },
  } satisfies Preset.ThemeConfig,
};

export default config;
