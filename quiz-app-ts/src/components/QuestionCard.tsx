import React from "react";

type Props = {

    question: string;
    answer: string[];
    callback: any;
    userAnswer: boolean;
    questoinNr: number;
    totalQuestions: number;

    }

const QuestionCard: React.FC<Props> = ({ question , answer , callback , userAnswer , questoinNr , totalQuestions }) => (
<div>
 <p className="number">
   Question: {questoinNr} / {totalQuestions}
 </p>
 <p dangerouslySetInnerHTML={{ __html: question}} />
 <div>
    {answer.map(answer => (
        <div>
            <button disabled={userAnswer}>
                <span dangerouslySetInnerHTML={{ __html: answer}} />
            </button>
        </div>
    ))}
 </div>
</div>
);

export default QuestionCard;
