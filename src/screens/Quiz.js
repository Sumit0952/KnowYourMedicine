import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert, StyleSheet } from 'react-native';

const Quiz = () => {
  // Array of health-related questions
  const questions = [
    {
      text: "What is used to treat Alzheimer's disease?",
      options: ["Aspirin", "Nemenda", "Insulin", "Metformin"],
      correctAnswer: "Nemenda",
    },
    {
      text: "Which drug is used to treat diabetes?",
      options: ["Metformin", "Lipitor", "Insulin", "Aspirin"],
      correctAnswer: "Insulin",
    },
    {
      text: "What vitamin is produced when exposed to sunlight?",
      options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
      correctAnswer: "Vitamin D",
    },
    {
      text: "What is the normal blood pressure range?",
      options: ["120/80 mmHg", "140/90 mmHg", "160/100 mmHg", "100/70 mmHg"],
      correctAnswer: "120/80 mmHg",
    },
    {
      text: "Which mineral is important for strong bones and teeth?",
      options: ["Iron", "Calcium", "Zinc", "Magnesium"],
      correctAnswer: "Calcium",
    },
    {
      text: "Which disease is caused by vitamin C deficiency?",
      options: ["Scurvy", "Rickets", "Pellagra", "Beriberi"],
      correctAnswer: "Scurvy",
    },
    {
      text: "Which nutrient is essential for oxygen transport in the blood?",
      options: ["Iron", "Vitamin K", "Calcium", "Zinc"],
      correctAnswer: "Iron",
    },
    {
      text: "Which hormone regulates blood sugar levels?",
      options: ["Insulin", "Adrenaline", "Thyroxine", "Cortisol"],
      correctAnswer: "Insulin",
    },
    {
      text: "What is the most common cause of heart attacks?",
      options: ["Obesity", "Atherosclerosis", "Smoking", "Stress"],
      correctAnswer: "Atherosclerosis",
    },
    {
      text: "What organ is primarily affected by hepatitis?",
      options: ["Liver", "Kidneys", "Heart", "Lungs"],
      correctAnswer: "Liver",
    },
  ];

  // State to track the current question and score
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswerPress = (selectedOption) => {
    const currentQuestion = questions[currentQuestionIndex];

    // Check if the answer is correct
    if (selectedOption === currentQuestion.correctAnswer) {
      Alert.alert("Correct!", "Good job! That's the right answer.");
      setScore(score + 1); // Increment score if correct
    } else {
      Alert.alert("Wrong!", `The correct answer was ${currentQuestion.correctAnswer}.`);
    }

    // Move to the next question or end the quiz
    const nextIndex = currentQuestionIndex + 1;
    if (nextIndex < questions.length) {
      setCurrentQuestionIndex(nextIndex);
    } else {
      Alert.alert("Quiz Completed", `You scored ${score + 1}/${questions.length}`);
      setCurrentQuestionIndex(0); // Reset quiz
      setScore(0); // Reset score
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.questionCount}>{currentQuestionIndex + 1}/{questions.length}</Text>
      <Text style={styles.questionText}>{questions[currentQuestionIndex].text}</Text>

      <View style={styles.optionsContainer}>
        {questions[currentQuestionIndex].options.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={styles.optionButton}
            onPress={() => handleAnswerPress(option)}
          >
            <Text style={styles.optionText}>{option}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  questionCount: {
    fontSize: 18,
    marginBottom: 20,
    color: '#000',
  },
  questionText: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 30,
    color: '#000',
  },
  optionsContainer: {
    width: '100%',
  },
  optionButton: {
    backgroundColor: '#800080',
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  optionText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default Quiz;
