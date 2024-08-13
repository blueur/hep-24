import "reveal.js/dist/reveal.css";
import "reveal.js/dist/theme/white.css";
import "reveal.js/plugin/highlight/monokai.css";

import React, { createRef } from "react";
import Markdown from "reveal.js/plugin/markdown/markdown";
import Mermaid from "./plugins/mermaid";

export default class Reaveal extends React.Component<{
  name: string;
  full?: boolean;
}> {
  constructor(props) {
    super(props);
    this.resize = this.resize.bind(this);
  }
  revealRef = createRef<HTMLDivElement>();
  resize() {
    if (this.props.full) {
      this.revealRef.current.style.height = `${window.innerHeight}px`;
    }
  }
  componentDidMount() {
    import("reveal.js").then((reveal) => {
      import("reveal.js/plugin/highlight/highlight").then((highlight) => {
        new reveal.default({
          width: 1280,
          height: 720,
          autoAnimateDuration: 0.25,
          embedded: !this.props.full,
          hash: true,
          pdfMaxPagesPerSlide: 1,
          pdfSeparateFragments: false,
          plugins: [Markdown, highlight.default, Mermaid],
          scrollActivationWidth: null,
          slideNumber: true,
          transition: "fade",
          transitionSpeed: "fast",
        }).initialize();
      });
    });
    window.addEventListener("resize", this.resize);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.resize);
  }
  render() {
    const reveal = (
      <div ref={this.revealRef} className="reveal">
        <div className="slides">
          <section
            data-auto-animate
            data-markdown={`/slide/${this.props.name}.md`}
          />
        </div>
      </div>
    );
    if (this.props.full) {
      return reveal;
    } else {
      return (
        <div>
          {reveal}
          Appuyer sur <kbd>F</kbd> pour passer en plein écran ou <kbd>O</kbd>{" "}
          pour afficher la vue d'ensemble.
          <br />
          Versions{" "}
          <a href={`/slides?name=${this.props.name}`} target="_blank">
            plein écran
          </a>{" "}
          et{" "}
          <a href={`/slides?name=${this.props.name}&print-pdf`} target="_blank">
            imprimable
          </a>
          .
        </div>
      );
    }
  }
}
