import "highlight.js/styles/base16/tomorrow-night.min.css";
import "reveal.js/dist/reveal.css";

import "@site/src/css/reveal.scss";

import Footer from "@site/src/components/plugins/footer";
import Katex from "@site/src/components/plugins/katex";
import Link from "@site/src/components/plugins/link";
import Mermaid from "@site/src/components/plugins/mermaid";
import React, { createRef } from "react";
import Markdown from "reveal.js/plugin/markdown/markdown";

export default class Reaveal extends React.Component<{
  name: string;
  full?: boolean;
  page?: boolean;
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
          width: 1440,
          height: 900,
          plugins: [Markdown, highlight.default, Footer, Katex, Link, Mermaid],
          autoAnimateDuration: 0.25,
          autoAnimateUnmatched: false,
          controlsLayout: "edges",
          embedded: !this.props.full,
          fragments: !this.props.page,
          hash: true,
          pdfMaxPagesPerSlide: 1,
          pdfSeparateFragments: false,
          scrollActivationWidth: null,
          slideNumber: "c/t",
          transition: "fade",
          transitionSpeed: "fast",
          mermaid: {
            sequence: {
              mirrorActors: false,
              showSequenceNumbers: true,
            },
            theme: "neutral",
            themeVariables: {
              fontFamily: "unset",
            },
            timeline: {
              disableMulticolor: true,
            },
          },
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
          <kbd>F</kbd> pour passer en plein écran ou <kbd>O</kbd> pour afficher
          la vue d'ensemble.
          <br />
          Versions{" "}
          <a href={`/slides?name=${this.props.name}&page`} target="_blank">
            sans animation
          </a>
          ,{" "}
          <a href={`/slides?name=${this.props.name}`} target="_blank">
            plein écran
          </a>
          ,{" "}
          <a href={`/slides?name=${this.props.name}&print-pdf`} target="_blank">
            imprimable
          </a>
          .
        </div>
      );
    }
  }
}
