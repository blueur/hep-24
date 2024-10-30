import { deflate } from "pako";
import { Api } from "reveal.js";

// https://docs.kroki.io/kroki/setup/encode-diagram/#javascript
function textEncode(str: string) {
  if (window.TextEncoder) {
    return new TextEncoder().encode(str);
  }
  const utf8 = unescape(encodeURIComponent(str));
  const result = new Uint8Array(utf8.length);
  for (let i = 0; i < utf8.length; i++) {
    result[i] = utf8.charCodeAt(i);
  }
  return result;
}

export default () => ({
  id: "kroki",
  init: (reveal: Api) => {
    const elements =
      reveal.getRevealElement()?.querySelectorAll(".reveal pre code.kroki") ??
      [];
    elements.forEach((element: Element) => {
      element.classList.remove("hljs", "kroki");

      const diagramSource = element.textContent;
      const result = btoa(
        String.fromCodePoint(
          ...deflate(textEncode(diagramSource), {
            level: 9,
          }),
        ),
      )
        .replace(/\+/g, "-")
        .replace(/\//g, "_");

      const diagram = element.classList[0];
      element.classList.remove(diagram);
      // https://docs.kroki.io/kroki/setup/diagram-options/
      let params = "";
      switch (diagram) {
        case "plantuml":
          params = "?theme=plain";
          break;
      }

      const img = document.createElement("img");
      img.src = `https://kroki.io/${diagram}/svg/${result}${params}`;
      img.classList.add(...Array.from(element.classList));

      const pre = element.parentElement;
      pre.parentNode.replaceChild(img, pre);
    });
  },
});
