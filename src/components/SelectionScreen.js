import React, { useContext } from 'react';
import { GameContext } from '../context/GameContext';
import { motion } from 'framer-motion';

const CategoryButton = ({ category, label, color, onClick }) => (
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className={`w-full p-4 text-white rounded-lg shadow-lg ${color} transition duration-300 transform hover:shadow-xl`}
    onClick={() => onClick(category)}
  >
    {label}
  </motion.button>
);

const SelectionScreen = () => {
  const { setCategory, setLoading } = useContext(GameContext);

  const handleCategorySelect = (category) => {
    setCategory(category);
    setLoading(true);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 via-pink-500 to-red-500">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg p-8 rounded-2xl shadow-2xl text-center space-y-6 max-w-md w-full"
      >
        <motion.h2 variants={itemVariants} className="text-3xl font-bold text-white mb-6">
          Select Your Challenge
        </motion.h2>
        <motion.div variants={itemVariants} className="space-y-4">
          <CategoryButton
            category="coding"
            label="Coding Game Questions"
            color="bg-gradient-to-r from-blue-500 to-indigo-600"
            onClick={handleCategorySelect}
          />
          <CategoryButton
            category="general"
            label="General Knowledge Questions"
            color="bg-gradient-to-r from-green-400 to-blue-500"
            onClick={handleCategorySelect}
          />
          <CategoryButton
            category="science"
            label="Scientific Questions"
            color="bg-gradient-to-r from-purple-400 to-indigo-500"
            onClick={handleCategorySelect}
          />
          <CategoryButton
            category="aptitude"
            label="Aptitude Based Questions"
            color="bg-gradient-to-r from-red-500 to-pink-500"
            onClick={handleCategorySelect}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SelectionScreen;