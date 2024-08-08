import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

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

  plugins: ["docusaurus-plugin-sass"],

  presets: [
    [
      "classic",
      {
        docs: {
          showLastUpdateTime: true,
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.scss",
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
        srcDark: "img/logo-dark.svg",
      },
      items: [
        {
          to: "/docs/cours",
          html: "<i class='ph ph-presentation'></i> Cours",
          position: "left",
        },
        {
          to: "/docs/labos",
          html: "<i class='ph ph-flask'></i> Laboratoires",
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
          href: "mailto:david.tang@etu.hepl.ch",
          position: "right",
          className: "ph ph-envelope-simple",
        },
      ],
    },
    footer: {
      copyright: `<p xmlns:cc="http://creativecommons.org/ns#" >This work © 2024 by <a rel="cc:attributionURL dct:creator" property="cc:attributionName" href="https://davidtang.ch" target="_blank">David Tang</a> is licensed under <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank" rel="license noopener noreferrer" style="display:inline-block;">CC BY-NC-SA 4.0<img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/cc.svg"><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/by.svg"><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/nc.svg"><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/sa.svg"></a></p>`,
    },
    prism: {
      theme: prismThemes.oneLight,
      darkTheme: prismThemes.oneDark,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
