import React from "react";
import { AnswerObject } from '../App'

type Props = {
    question: string;
    answers: string[];
    callback: any;
    userAnswer: AnswerObject | undefined;
    questoinNr: number;
    totalQuestions: number;
};

const QuestionCard: React.FC<Props> = ({
    question,
    answers,
    callback,
    userAnswer,
    questoinNr,
    totalQuestions,
}) => (
    <div>
        <p className="number">
            Question: {questoinNr} / {totalQuestions}
        </p>
        <p dangerouslySetInnerHTML={{ __html: question }} />
        <div>
            {answers.map((answer) => (
                <div>
                    <button disabled={userAnswer} onClick={callback}>
                        <span dangerouslySetInnerHTML={{ __html: answer }} />
                    </button>
                </div>
            ))}
        </div>
    </div>
);

export default QuestionCard;
