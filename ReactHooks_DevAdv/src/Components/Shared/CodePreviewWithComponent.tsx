import { useEffect } from "react";
import hljs from "highlight.js";
import "highlight.js/styles/github.css"; // import the highlight.js theme

interface CodePreviewWithComponentProps {
  renderedComponent: JSX.Element;
  codeSnippet: string;
}

export const CodePreviewWithComponent = (
  props: CodePreviewWithComponentProps
) => {
  useEffect(() => {
    hljs.highlightAll();
  }, []);

  return (
    <div>
      <pre>
        <code className="typescript">{props.codeSnippet}</code>
      </pre>
      {props.renderedComponent}
    </div>
  );
};
