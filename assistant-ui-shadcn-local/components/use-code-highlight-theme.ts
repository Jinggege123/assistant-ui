"use client";

import { useEffect, useMemo, useState } from "react";

import {
  type CodeHighlightThemeId,
  codeHighlightThemes,
  defaultCodeHighlightThemeId,
} from "@/components/code-highlight-themes";

const storageKey = "assistant-ui-code-highlight-theme";
const changeEventName = "assistant-ui-code-highlight-theme-change";

const isCodeHighlightThemeId = (
  value: string | null,
): value is CodeHighlightThemeId => {
  return codeHighlightThemes.some((theme) => theme.id === value);
};

const getStoredThemeId = (): CodeHighlightThemeId => {
  if (typeof window === "undefined") return defaultCodeHighlightThemeId;

  const storedThemeId = window.localStorage.getItem(storageKey);
  return isCodeHighlightThemeId(storedThemeId)
    ? storedThemeId
    : defaultCodeHighlightThemeId;
};

export const useCodeHighlightTheme = () => {
  const [themeId, setThemeIdState] = useState<CodeHighlightThemeId>(
    defaultCodeHighlightThemeId,
  );

  useEffect(() => {
    setThemeIdState(getStoredThemeId());

    const syncTheme = () => {
      setThemeIdState(getStoredThemeId());
    };

    window.addEventListener(changeEventName, syncTheme);
    window.addEventListener("storage", syncTheme);

    return () => {
      window.removeEventListener(changeEventName, syncTheme);
      window.removeEventListener("storage", syncTheme);
    };
  }, []);

  const setThemeId = (nextThemeId: CodeHighlightThemeId) => {
    setThemeIdState(nextThemeId);

    if (typeof window === "undefined") return;

    window.localStorage.setItem(storageKey, nextThemeId);
    window.dispatchEvent(new Event(changeEventName));
  };

  const theme = useMemo(() => {
    return (
      codeHighlightThemes.find((candidate) => candidate.id === themeId) ??
      codeHighlightThemes[0]
    );
  }, [themeId]);

  return {
    theme,
    themeId,
    setThemeId,
  };
};
