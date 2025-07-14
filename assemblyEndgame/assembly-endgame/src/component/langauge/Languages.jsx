import React from "react";
import "./Languages.css";
import { languages } from "./languages";
import { clsx } from "clsx";
const Languages = (props) => {
  //language element
  const languageElements = languages.map((lang, index) => {
    const isLanguageLost = index < props.wrongGuessCount;
    const styles = {
      backgroundColor: lang.backgroundColor,
      color: lang.color,
    };
    const className = clsx("chip", isLanguageLost && "lost");
    return (
      <span className={className} style={styles} key={lang.name}>
        {lang.name}
      </span>
    );
  });

  return <section className="language-chips">{languageElements}</section>;
};

export default Languages;
