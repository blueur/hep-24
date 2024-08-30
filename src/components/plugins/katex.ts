import katex from "katex";
import { Api } from "reveal.js";

export default () => ({
  id: "katex",
  init: (reveal: Api) => {
    const revealOptions = reveal.getConfig().katex;

    (reveal.getSlidesElement()?.querySelectorAll("code.katex") ?? []).forEach(
      (element: Element) => {
        const div = document.createElement("span");
        element.classList.remove("katex", "hljs", "language-apache");
        if (element.classList.length > 0) {
          div.classList.add(...Array.from(element.classList));
        }
        const pre = element.parentElement;
        pre?.parentNode?.replaceChild(div, pre);

        katex.render(element.textContent ?? "", div, {
          output: "mathml",
          throwOnError: false,
          ...revealOptions,
        });
      },
    );
  },
});
