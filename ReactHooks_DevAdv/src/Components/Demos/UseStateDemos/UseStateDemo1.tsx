import "highlight.js/styles/github.css"; // Import the highlight.js theme for syntax highlighting
import { CodePreviewWithComponent } from "../../Shared/CodePreviewWithComponent";
import { UseStateComponent1 } from "../../Hooks/UseStateComponents/UseStateComponent1";
// import UseStateComponent1Text from '!raw-loader!../../Hooks/UseStateComponents/UseStateComponent1';
// import useStateComponent1Code from '../../Hooks/UseStateComponents/UseStateComponent1.tsx'

export const UseStateDemo1 = () => {
  return (
    <CodePreviewWithComponent
      codeSnippet={useStateComponent1Code}
      renderedComponent={<UseStateComponent1 />}
    />
  );
};
