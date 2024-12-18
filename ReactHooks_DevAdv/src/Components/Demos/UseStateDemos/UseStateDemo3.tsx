import "highlight.js/styles/github.css"; // Import the highlight.js theme for syntax highlighting
import { CodePreviewWithComponent } from "../../Shared/CodePreviewWithComponent";
import useStateComponent3Code from '../../Hooks/UseStateComponents/UseStateComponent3.tsx?raw';
import { UseStateComponent3 } from "../../Hooks/UseStateComponents/UseStateComponent3";

export const UseStateDemo3 = () => {
  return (
    <CodePreviewWithComponent
      codeSnippet={useStateComponent3Code}
      renderedComponent={<UseStateComponent3 />}
    />
  );
};
