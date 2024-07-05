import React from 'react';
import Timer from './Timer';

const Question = ({ question, handleAnswer, onTimeUp }) => {
  const { question: questionText, correct_answer, incorrect_answers } = question;
  const answers = [...incorrect_answers, correct_answer].sort(() => Math.random() - 0.5);

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg text-center space-y-4 max-w-xl w-full">
      <div className="flex justify-center mb-4">
        <Timer duration={30} onTimeUp={onTimeUp} />
      </div>
      <h2 className="text-2xl mb-4">{questionText}</h2>
      <div className="space-y-2">
        {answers.map((answer, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(answer === correct_answer)}
            className="block w-full p-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded hover:from-blue-600 hover:to-indigo-600 transition duration-300 transform hover:scale-105"
          >
            {answer}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;