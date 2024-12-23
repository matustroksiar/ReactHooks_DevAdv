import "highlight.js/styles/github.css"; // Import the highlight.js theme for syntax highlighting
import { CodePreviewWithComponent } from "../../Shared/CodePreviewWithComponent";
import { UseStateComponent2 } from "../../Hooks/UseStateComponents/UseStateComponent2";
import useStateComponent2Code from '../../Hooks/UseStateComponents/UseStateComponent2.tsx?raw';

export const UseStateDemo2 = () => {
  return (
    <CodePreviewWithComponent
      codeSnippet={useStateComponent2Code}
      renderedComponent={<UseStateComponent2 />}
    />
  );
};
