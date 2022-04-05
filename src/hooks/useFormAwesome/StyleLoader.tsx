import React from "react";

// Style code splitting via [https://stackoverflow.com/questions/46835825/conditional-css-in-create-react-app]
const Main = React.lazy(() => import("../../themes/main"));
const Alternative = React.lazy(() => import("../../themes/alternative"));

type ThemeOptions =
  | {
      theme?: never;
      accentColor: "string";
    }
  | {
      theme: "alternative";
      backgroundColor: "string";
      textColor: "string";
      accentColor: "string";
    };

const themes = {
  main: Main,
  alternative: Alternative,
};

const removeKey = (key: string, { [key]: _, ...rest }) => rest;

const StyleLoader: React.FC<{
  theme: ThemeOptions;
}> = ({ children, theme }) => {
  const themeList: (keyof typeof themes)[] = [
    "main",
    ...(theme.theme ? [theme.theme] : []),
  ];
  const cssVariables = removeKey("theme", theme);

  const style = Object.keys(cssVariables || {}).reduce(
    (prev, key) => ({ ...prev, [`--${key}`]: cssVariables[key] }),
    {}
  );

  return (
    <div
      className={[
        `fa-wrapper`,
        ...themeList.map((name) => `fa-theme-${name}`),
      ].join(" ")}
      style={style}
    >
      {children}
    </div>
  );
};

export default StyleLoader;
export type { ThemeOptions };
