import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { GameContext } from '../context/GameContext';

const Result = ({ onRestart, onReload }) => {
  const { score, questions, setCategory } = useContext(GameContext);
  const percentage = (score / questions.length) * 100;

  let message = '';
  if (percentage > 90) {
    message = 'Excellent!';
  } else if (percentage > 80) {
    message = 'Great Job!';
  } else if (percentage > 50) {
    message = 'Congratulations!';
  } else {
    message = 'Better Luck Next Time!';
  }

  const animationVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  };

  const handleReload = () => {
    setCategory(null);
    onReload();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={animationVariants}
        className="bg-white p-6 rounded-lg shadow-lg text-center space-y-4"
      >
        <h2 className="text-4xl mb-4">{message}</h2>
        <p className="text-2xl">Your Score: {score} / {questions.length}</p>
        <div className="flex justify-center space-x-4">
          <button
            onClick={onRestart}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          >
            Play Again
          </button>
          <button
            onClick={handleReload}
            className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
          >
            Return to Start
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Result;