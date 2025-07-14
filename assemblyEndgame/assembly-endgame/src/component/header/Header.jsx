import React, { useState } from "react";
import "./Header.css";
import Status from "../status/Status.jsx";
import Languages from "../langauge/Languages.jsx";
import { clsx } from "clsx";
import { languages } from "../langauge/languages.js";
import { getFarewellText, getRandomWord } from "./utils";
import ReactConfetti from "react-confetti";
const Header = () => {
  //state values
  const [currentWord, setCurrentWord] = useState(() => getRandomWord());
  const [guessedLetters, setGuessedLetters] = useState([]);
  console.log(guessedLetters);

  // Dervied values
  const numGuessesLeft = languages.length - 1;
  const wrongGuessCount = guessedLetters.filter(
    (letter) => !currentWord.includes(letter)
  ).length;
  console.log(wrongGuessCount);

  const isGameWon = currentWord
    .split("")
    .every((letter) => guessedLetters.includes(letter));
  console.log(isGameWon);

  const isGameLost = wrongGuessCount >= languages.length - 1;

  const isGameOver = isGameLost || isGameWon;

  const lastGuessedLetter = guessedLetters[guessedLetters.length - 1];
  const isLastGuessIncorrect =
    lastGuessedLetter && !currentWord.includes(lastGuessedLetter);
  console.log(isLastGuessIncorrect);
  //static values
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  //addguessedletter
  function addGuessedLetter(letter) {
    setGuessedLetters((prevLetters) =>
      prevLetters.includes(letter) ? prevLetters : [...prevLetters, letter]
    );

    //2nd method
    // setGuessedLetters((prevLetters) => {
    //   const lettersSet = new Set(prevLetters);
    //   lettersSet.add(letter);
    //   return Array.from(lettersSet);
    // });
  }

  //letterElement
  const letterElements = currentWord.split("").map((letter, index) => {
    const shouldRevealLetter = isGameLost || guessedLetters.includes(letter);
    const letterClassName = clsx(
      isGameLost && !guessedLetters.includes(letter) && "missed-letter"
    );
    return (
      <span key={index} className={letterClassName}>
        {shouldRevealLetter ? letter.toUpperCase() : ""}
      </span>
    );
  });

  //start new game logic
  function startNewGame() {
    console.log("Start a new game!");
    setCurrentWord(getRandomWord());
    setGuessedLetters([]);
  }

  //keyboard element
  const keyboardElements = alphabet.split("").map((letter) => {
    const isGuessed = guessedLetters.includes(letter);
    const isCorrect = isGuessed && currentWord.includes(letter);
    const isWrong = isGuessed && !currentWord.includes(letter);
    const className = clsx({
      correct: isCorrect,
      wrong: isWrong,
    });

    console.log(className);

    return (
      <button
        className={className}
        key={letter}
        disabled={isGameOver}
        aria-disabled={guessedLetters.includes(letter)}
        aria-label={`Letter ${letter}`}
        onClick={() => addGuessedLetter(letter)}
      >
        {letter.toUpperCase()}
      </button>
    );
  });

  //main component
  return (
    <>
      {isGameWon && <ReactConfetti recycle={false} numberOfPieces={1000} />}
      <header>
        <h1>Assembly: Endgame</h1>
        <p>
          Guess the word in under 8 attempts to keep the programming world safe
          from Assembly!
        </p>
      </header>
      <Status
        isGameOver={isGameOver}
        isGameWon={isGameWon}
        isGameLost={isGameLost}
        isLastGuessIncorrect={isLastGuessIncorrect}
        wrongGuessCount={wrongGuessCount}
      />
      <Languages wrongGuessCount={wrongGuessCount} />
      <section className="word">{letterElements}</section>
      <section className="sr-only" aria-live="polite" role="status">
        <p>
          {currentWord.includes(lastGuessedLetter)
            ? `Correct! The letter ${lastGuessedLetter} is in the word.`
            : `Sorry, the letter ${lastGuessedLetter} is not in the word.`}
          You have {numGuessesLeft} attempts left.
        </p>
        <p>
          Current word:{" "}
          {currentWord
            .split("")
            .map((letter) =>
              guessedLetters.includes(letter) ? letter + "." : "blank."
            )
            .join(" ")}
        </p>
      </section>
      <section className="keyboard">{keyboardElements}</section>
      {isGameOver && (
        <button className="new-game" onClick={startNewGame}>
          New Game
        </button>
      )}
    </>
  );
};

export default Header;
