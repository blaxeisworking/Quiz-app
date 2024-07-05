import React, { createContext, useState, useEffect, useCallback } from 'react';
import axios from 'axios';

export const GameContext = createContext();

const GameProvider = ({ children }) => {
  const [questions, setQuestions] = useState([]);
  const [score, setScore] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(null);

  const resetGame = useCallback(() => {
    setScore(0);
    setCurrentQuestionIndex(0);
    setGameOver(false);
  }, []);

  useEffect(() => {
    if (category) {
      const fetchQuestions = async () => {
        try {
          let categoryParam = '';
          switch (category) {
            case 'coding':
              categoryParam = '18'; 
              break;
            case 'general':
              categoryParam = '9';
              break;
            case 'science':
              categoryParam = '17'; 
              break;
            case 'aptitude':
              categoryParam = '19';
              break;
            default:
              categoryParam = '9'; 
          }
          const response = await axios.get(`https://opentdb.com/api.php?amount=10&category=${categoryParam}&type=multiple`);
          setQuestions(response.data.results);
          setLoading(false);
          resetGame();
        } catch (error) {
          console.error('Error fetching questions:', error);
        }
      };

      fetchQuestions();
    }
  }, [category, resetGame]);

  return (
    <GameContext.Provider
      value={{
        questions,
        score,
        setScore,
        currentQuestionIndex,
        setCurrentQuestionIndex,
        gameOver,
        setGameOver,
        loading,
        setLoading,
        category,
        setCategory,
        resetGame,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default GameProvider;
