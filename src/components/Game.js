import React, { useContext } from 'react';
import { GameContext } from '../context/GameContext';
import Question from './Question';
import Result from './Result';

const Game = () => {
  const {
    questions,
    currentQuestionIndex,
    setCurrentQuestionIndex,
    score,
    setScore,
    gameOver,
    setGameOver,
    loading,
    setCategory
  } = useContext(GameContext);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    nextQuestion();
  };

  const nextQuestion = () => {
    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      setGameOver(true);
    }
  };

  const handleTimeUp = () => {
    nextQuestion();
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setGameOver(false);
  };

  const handleReload = () => {
    setCategory(null);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <p className="text-xl">Loading questions...</p>
      </div>
    );
  }

  if (gameOver) {
    return <Result onRestart={handleRestart} onReload={handleReload} />;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-400 via-pink-500 to-red-500">
      {questions.length > 0 && (
        <>
          <div className="mb-4 text-lg text-white font-bold">
            Question {currentQuestionIndex + 1} of {questions.length}
          </div>
          <Question
            question={questions[currentQuestionIndex]}
            handleAnswer={handleAnswer}
            onTimeUp={handleTimeUp}
          />
        </>
      )}
    </div>
  );
};

export default Game;