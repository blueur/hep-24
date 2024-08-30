import { Api } from "reveal.js";

export default () => ({
  id: "footer",
  init: (reveal: Api) => {
    const div = document.createElement("div");
    div.classList.add("footer");
    div.innerHTML = "hep.davidtang.ch<br />CC BY-NC-SA 4.0";
    reveal.getSlidesElement().appendChild(div);
  },
});
