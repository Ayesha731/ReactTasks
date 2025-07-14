import React from "react";
import "./status.css";
import ReactConfetti from "react-confetti";
import { clsx } from "clsx";
import { getFarewellText } from "../header/utils";
import { languages } from "../langauge/languages";
const Status = (props) => {
  const gamesStatusClass = clsx("game-status", {
    won: props.isGameWon,
    lost: props.isGameLost,
    farewell: !props.isGameOver && props.isLastGuessIncorrect,
  });

  function renderGameStatus() {
    if (!props.isGameOver && props.isLastGuessIncorrect) {
      return (
        <p className="farewell-message">
          {getFarewellText(languages[props.wrongGuessCount - 1].name)}
        </p>
      );
    }

    if (props.isGameWon) {
      return (
        <>
          <h2>You Win!</h2>
          <p>Well done!🥳🎊🎉</p>
        </>
      );
    }
    if (props.isGameLost) {
      return (
        <>
          <h2>Game Over!</h2>
          <p>You lose! Better start learning Assembly😩😖😭</p>
        </>
      );
    }
    return null;
  }
  return (
    <main aria-live="polite" role="status" className={gamesStatusClass}>
      {props.isGameWon && <ReactConfetti />}
      {/* {props.isGameOver ? (
        props.isGameWon ? (
          <>
            <h2>You Win!</h2>
            <p>Well done!🥳🎊🎉</p>
          </>
        ) : (
          <>
            <h2>Game Over!</h2>
            <p>You lose! Better start learning Assembly😩😖😭</p>
          </>
        )
      ) : null} */}
      {renderGameStatus()}
    </main>
  );
};

export default Status;
