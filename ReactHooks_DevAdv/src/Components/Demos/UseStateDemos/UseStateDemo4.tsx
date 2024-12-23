import "highlight.js/styles/github.css"; // Import the highlight.js theme for syntax highlighting
import "highlight.js/styles/github.css"; // Import the highlight.js theme for syntax highlighting
import { CodePreviewWithComponent } from "../../Shared/CodePreviewWithComponent";
import useStateComponent4Code from '../../Hooks/UseStateComponents/UseStateComponent4.tsx?raw';
import { UseStateComponent4 } from "../../Hooks/UseStateComponents/UseStateComponent4";

export const UseStateDemo4 = () => {
  return (
    <CodePreviewWithComponent
      codeSnippet={useStateComponent4Code}
      renderedComponent={<UseStateComponent4 />}
    />
  );
};
