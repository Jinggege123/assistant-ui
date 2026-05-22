"use client";

import type { SyntaxHighlighterProps } from "@assistant-ui/react-markdown";
import type { FC } from "react";
import { PrismAsyncLight } from "react-syntax-highlighter";
import bash from "react-syntax-highlighter/dist/esm/languages/prism/bash";
import css from "react-syntax-highlighter/dist/esm/languages/prism/css";
import json from "react-syntax-highlighter/dist/esm/languages/prism/json";
import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx";
import markdown from "react-syntax-highlighter/dist/esm/languages/prism/markdown";
import python from "react-syntax-highlighter/dist/esm/languages/prism/python";
import tsx from "react-syntax-highlighter/dist/esm/languages/prism/tsx";
import typescript from "react-syntax-highlighter/dist/esm/languages/prism/typescript";
import yaml from "react-syntax-highlighter/dist/esm/languages/prism/yaml";
import { useCodeHighlightTheme } from "@/components/use-code-highlight-theme";

PrismAsyncLight.registerLanguage("bash", bash);
PrismAsyncLight.registerLanguage("sh", bash);
PrismAsyncLight.registerLanguage("shell", bash);
PrismAsyncLight.registerLanguage("css", css);
PrismAsyncLight.registerLanguage("json", json);
PrismAsyncLight.registerLanguage("js", jsx);
PrismAsyncLight.registerLanguage("javascript", jsx);
PrismAsyncLight.registerLanguage("jsx", jsx);
PrismAsyncLight.registerLanguage("md", markdown);
PrismAsyncLight.registerLanguage("markdown", markdown);
PrismAsyncLight.registerLanguage("py", python);
PrismAsyncLight.registerLanguage("python", python);
PrismAsyncLight.registerLanguage("ts", typescript);
PrismAsyncLight.registerLanguage("typescript", typescript);
PrismAsyncLight.registerLanguage("tsx", tsx);
PrismAsyncLight.registerLanguage("yaml", yaml);
PrismAsyncLight.registerLanguage("yml", yaml);

export const SyntaxHighlighter: FC<SyntaxHighlighterProps> = ({
  components: { Pre, Code },
  language,
  code,
}) => {
  const { theme } = useCodeHighlightTheme();

  return (
    <PrismAsyncLight
      key={theme.id}
      PreTag={Pre}
      CodeTag={Code}
      style={theme.style}
      customStyle={{
        margin: 0,
        width: "100%",
        background: theme.background,
        padding: "0.75rem",
      }}
      codeTagProps={{
        className: "text-xs leading-relaxed",
      }}
      language={language}
    >
      {code}
    </PrismAsyncLight>
  );
};
