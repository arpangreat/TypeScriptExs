import React, { useState } from "react";
import { fetchQuizQuestions} from './API';

// Componenets
import QuestionCard from './components/QuestionCard';

// Types
import { QuestionState, Difficulty }  from './API';

const TOTAL_QUESTIONS = 10;

function App() {
    const [loading, setLoading] = useState(false);
    const [questions, setQuestions] = useState<QuestionState[]>([]);
    const [number, setNumber] = useState(0);
    const [userAnswers, setUserAnswer] = useState([]);
    const [score, setScore] = useState(0);
    const [gameOver, setGameOver] = useState(true);

    console.log(fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.EASY));

    const startTrivia = async () => {

        }

    const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {

        }

    const nextQuestion = () => {

        }
    return (
    <div className="App">
    <h1>REACT Quiz</h1>
    <button className="start" onClick={startTrivia}>
        Start
    </button>

    <p className="score">Score:</p>
    <p>Loading Questions ...</p>
    //{/* </QuestionCard
    //     questoinNr={number + 1}
    //     totalQuestions={TOTAL_QUESTIONS}
    //     question={questions[number].questions}
    //     answer={questions[number].answers}
    //     userAnswer={userAnswers ? userAnswers[number] : undefined}
    //     callback={checkAnswer}
    //
    // /> */}
    <button className="next" onClick={nextQuestion}>
        Next Question
    </button>
    </div>);
}

export default App;
