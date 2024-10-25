import type * as Preset from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";
import { themes as prismThemes } from "prism-react-renderer";
import type { Options as SassOptions } from "sass";

const config: Config = {
  title: "BS21INF5",
  tagline: "Programmation Web et bases de données",
  favicon: "img/favicon.ico",

  url: "https://hep.davidtang.ch",
  baseUrl: "/",

  i18n: {
    defaultLocale: "fr",
    locales: ["fr"],
  },

  plugins: [
    [
      "docusaurus-plugin-sass",
      {
        sassOptions: {
          silenceDeprecations: ["legacy-js-api", "import"],
          quietDeps: true,
        } satisfies SassOptions<"sync">,
      },
    ],
    [
      "@docusaurus/plugin-pwa",
      {
        offlineModeActivationStrategies: ["always"],
        pwaHead: [
          {
            tagName: "link",
            rel: "icon",
            href: "/img/logo.svg",
          },
          {
            tagName: "link",
            rel: "manifest",
            href: "/manifest.json",
          },
          {
            tagName: "meta",
            name: "theme-color",
            content: "rgb(28, 126, 214)",
          },
        ],
      },
    ],
  ],
  markdown: {
    mermaid: true,
  },
  themes: ["@docusaurus/theme-mermaid"],

  presets: [
    [
      "classic",
      {
        docs: {
          showLastUpdateTime: true,
          sidebarCollapsed: false,
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.scss",
        },
        gtag: {
          trackingID: "G-JKD1JRMKPE",
          anonymizeIP: true,
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    navbar: {
      title: "BS21INF5",
      logo: {
        alt: "Logo",
        src: "img/logo.svg",
      },
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
      copyright: `<div xmlns:cc="http://creativecommons.org/ns#" xmlns:dct="http://purl.org/dc/terms/"><a property="dct:title" rel="cc:attributionURL" href="https://hep.davidtang.ch/" target="_blank">BS21INF5</a> © 2024 by <a rel="cc:attributionURL dct:creator" property="cc:attributionName" href="https://davidtang.ch" target="_blank">David Tang</a> is licensed under <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank" rel="license noopener noreferrer" style="display:inline-block;">CC BY-NC-SA 4.0<img style="height:16px!important;margin-left:2px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/cc.svg"><img style="height:16px!important;margin-left:2px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/by.svg"><img style="height:16px!important;margin-left:2px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/nc.svg"><img style="height:16px!important;margin-left:2px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/sa.svg"></a></div>`,
    },
    docs: {
      sidebar: {
        hideable: true,
      },
    },
    mermaid: {
      theme: { light: "neutral", dark: "dark" },
    },
    prism: {
      theme: prismThemes.oneLight,
      darkTheme: prismThemes.oneDark,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
