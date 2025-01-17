import "reveal.js/dist/reveal.css";

import "@site/src/css/highlight.scss";
import "@site/src/css/reveal.scss";

import Footer from "@site/src/components/plugins/footer";
import Katex from "@site/src/components/plugins/katex";
import Kroki from "@site/src/components/plugins/kroki";
import Link from "@site/src/components/plugins/link";
import Mermaid from "@site/src/components/plugins/mermaid";
import Toc from "@site/src/components/plugins/toc";
import { PropsWithChildren, useEffect, useRef } from "react";
import Reveal from "reveal.js";
import Markdown from "reveal.js/plugin/markdown/markdown";

/**
 * https://revealjs.com/react/
 */
export default function Reaveal(
  props: PropsWithChildren<{
    name: string;
    full?: boolean;
    page?: boolean;
  }>,
) {
  const deckDivRef = useRef<HTMLDivElement>();
  const deckRef = useRef<Reveal.Api | null>(null);

  function resize() {
    if (props.full) {
      deckDivRef.current.style.height = `${window.innerHeight}px`;
    }
  }

  useEffect(() => {
    if (deckRef.current) {
      return;
    }

    Promise.all([
      import("reveal.js"),
      import("reveal.js/plugin/highlight/highlight"),
    ]).then(([reveal, highlight]) => {
      deckRef.current = new reveal.default(deckDivRef.current!, {
        width: 1440,
        height: 900,
        plugins: [
          Markdown,
          highlight.default,
          Footer,
          Katex,
          Kroki,
          Link,
          Mermaid,
          Toc,
        ],
        autoAnimateDuration: 0.25,
        autoAnimateUnmatched: false,
        controlsLayout: "edges",
        embedded: !props.full,
        fragments: !props.page,
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
      });
      deckRef.current.initialize();
    });

    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);

      try {
        if (deckRef.current) {
          deckRef.current.destroy();
          deckRef.current = null;
        }
      } catch (e) {
        console.warn("Reveal.js destroy call failed.");
      }
    };
  }, []);

  const revealDiv = (
    <div ref={deckDivRef} className="reveal">
      <div className="slides">
        <section data-auto-animate data-markdown={`/slide/${props.name}.md`} />
      </div>
    </div>
  );
  if (props.full) {
    return revealDiv;
  } else {
    return (
      <div>
        {revealDiv}
        <kbd>F</kbd> pour passer en plein écran ou <kbd>O</kbd> pour afficher la
        vue d'ensemble.
        <br />
        Versions{" "}
        <a href={`/slides?name=${props.name}&page`} target="_blank">
          sans animation
        </a>
        ,{" "}
        <a href={`/slides?name=${props.name}`} target="_blank">
          plein écran
        </a>
        ,{" "}
        <a href={`/slides?name=${props.name}&print-pdf`} target="_blank">
          imprimable
        </a>
        .
      </div>
    );
  }
}
