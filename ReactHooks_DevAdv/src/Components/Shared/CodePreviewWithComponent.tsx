import { useEffect } from "react";
import hljs from "highlight.js";
import "highlight.js/styles/github.css"; // import the highlight.js theme
// import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'

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
      {/* <SyntaxHighlighter language="tsx" style={tomorrow}> {componentCode} </SyntaxHighlighter> */}
      {props.renderedComponent}
    </div>
  );
};
