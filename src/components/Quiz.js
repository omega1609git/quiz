import { useState } from "react";
import { Questions } from "./Questions";
import "../App.css";

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [correctAnswer, setCorrectAnseer] = useState(0);
  const [wrongAnswer, setWrongAnswer] = useState(0);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const handleOptionClick = (option, index) => {
    // console.log(option);
    setSelectedAnswer(option);
    setSelectedAnswerIndex(index);
  };

  const options = Questions.questions[currentQuestion].choices;

  const handleClickNext = () => {
    selectedAnswer === Questions.questions[currentQuestion].correctAnswer
      ? setCorrectAnseer(correctAnswer + 1)
      : setWrongAnswer(wrongAnswer + 1);
    setSelectedAnswerIndex(null);
    if (currentQuestion !== Questions.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setCurrentQuestion(0);
      setShowResult(true);
    }
  };

  return (
    <div className="quiz-container">
      {!showResult ? (
        <div>
          <h5>{Questions.topic} Quiz</h5>
          <h5>Total no. of Questions = {Questions.totalQuestions}</h5>
          <h5>{Questions.questions[currentQuestion].question}</h5>
          <ul>
            {options.map((answer, index) => (
              <li
                onClick={() => handleOptionClick(answer, index)}
                key={answer}
                className={
                  selectedAnswerIndex === index ? "selected-answer" : null
                }
              >
                {answer}
              </li>
            ))}
          </ul>
          <div className="flex-right">
            <button
              onClick={handleClickNext}
              disabled={selectedAnswerIndex === null}
            >
              {currentQuestion === Questions.questions.length - 1
                ? "Finish"
                : "Next"}
            </button>
          </div>
          {/* <h1>Toatl Correct:{correctAnswer}</h1>
          <h1>Total Incorrect: {wrongAnswer}</h1> */}
        </div>
      ) : (
        <div className="result">
          <h3>Result</h3>
          <p>
            Total Question: <span>{Questions.questions.length}</span>
          </p>
          <p>
            Total Score:
            <span>
              {" "}
              {correctAnswer * 5}/{Questions.questions.length * 5}
            </span>
          </p>
          <p>
            Correct Answers:<span> {correctAnswer}</span>
          </p>
          <p>
            Wrong Answers:<span> {wrongAnswer}</span>
          </p>
        </div>
      )}
    </div>
  );
}

export default Quiz;
