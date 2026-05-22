import {
  coldarkDark,
  dracula,
  oneDark,
  vscDarkPlus,
} from "react-syntax-highlighter/dist/cjs/styles/prism";

export const codeHighlightThemes = [
  {
    id: "coldark",
    label: "Coldark",
    style: coldarkDark,
    background: "#111827",
  },
  {
    id: "one-dark",
    label: "One Dark",
    style: oneDark,
    background: "hsl(220, 13%, 18%)",
  },
  {
    id: "vsc-dark",
    label: "VS Code",
    style: vscDarkPlus,
    background: "#1e1e1e",
  },
  {
    id: "dracula",
    label: "Dracula",
    style: dracula,
    background: "#282a36",
  },
] as const;

export type CodeHighlightThemeId = (typeof codeHighlightThemes)[number]["id"];

export const defaultCodeHighlightThemeId: CodeHighlightThemeId = "coldark";
