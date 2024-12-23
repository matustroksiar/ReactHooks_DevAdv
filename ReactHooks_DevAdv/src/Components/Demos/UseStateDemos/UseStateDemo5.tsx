import "highlight.js/styles/github.css"; // Import the highlight.js theme for syntax highlighting
import { CodePreviewWithComponent } from "../../Shared/CodePreviewWithComponent";
import useStateComponent5Code from '../../Hooks/UseStateComponents/UseStateComponent5.tsx?raw';
import { UseStateComponent5 } from "../../Hooks/UseStateComponents/UseStateComponent5";

export const UseStateDemo5 = () => {
  return (
    <CodePreviewWithComponent
      codeSnippet={useStateComponent5Code}
      renderedComponent={<UseStateComponent5/>}
    />
  );
};
