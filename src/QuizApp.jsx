import React, { useState } from 'react'

const QuizApp = () => {

    // useState hooks
    const [CurrentQuestion, setCurrentQuestion] = useState(0);
    const [ShowScore, setShowScore] = useState(false);
    const [Score, setScore] = useState(0);
    const [Questions] = useState([
        {
            questionText: "Which State is the Capital of India?",
            answers: [
                { answerText: "Delhi", isCorrect: "true" },
                { answerText: "Mumbai", isCorrect: "false" },
                { answerText: "Hyderabad", isCorrect: "false" },
                { answerText: "Punjab", isCorrect: "false" },
            ]
        },
        {
            questionText: "Which bird is the national bird of india?",
            answers: [
                { answerText: "Pigeon", isCorrect: "false" },
                { answerText: "Duck", isCorrect: "false" },
                { answerText: "Peacock", isCorrect: "true" },
                { answerText: "Crow", isCorrect: "false" },
            ]
        },
        {
            questionText: "Which Animal is the National Animal of india?",
            answers: [
                { answerText: "Lion", isCorrect: "false" },
                { answerText: "Tiger", isCorrect: "true" },
                { answerText: "Leopard", isCorrect: "false" },
                { answerText: "Panda", isCorrect: "false" },
            ]
        },
        {
            questionText: "What was the first name of India?",
            answers: [
                { answerText: "Indarprastha", isCorrect: "false" },
                { answerText: "Bharat", isCorrect: "false" },
                { answerText: "India", isCorrect: "false" },
                { answerText: "Hindustan", isCorrect: "true" },
            ]
        },
        {
            questionText: "Which was the first prime minister of India?",
            answers: [
                { answerText: "Jawaharlal Nehru", isCorrect: "true" },
                { answerText: "APJ Abdul Kalam", isCorrect: "false" },
                { answerText: "Narendra Modi", isCorrect: "false" },
                { answerText: "Rajiv Gandhi", isCorrect: "false" },
            ]
        },
    ]);

    // clickHandler
    const clickHandler = (clickedAnswer) => {
        const nextQuestion = CurrentQuestion + 1;

        setCurrentQuestion(nextQuestion);

        if (nextQuestion < Questions.length) {
            if (clickedAnswer === 'true') {
                setScore(Score + 1);
            } else {
                setScore(Score);
            }
        } else {
            if (clickedAnswer === 'true') {
                setScore(Score + 1);
            }
            setShowScore(true);
        }
    }

    // 
    return (
        <div className="quiz-section">
            <div className="quiz-card">
                {
                    ShowScore ?
                        <div className="text-center">
                            <h1>{`Your Score is ${Score}/${Questions.length}.`}</h1>
                            {Score === 0 && <h1>Better Luck Next Time!</h1>}
                            {Score > 0 && Score < Questions.length && <h1>Nice Try!</h1>}
                            {Score === Questions.length && <h1>Wow! You're a Genius.</h1>}
                        </div>
                        :
                        <>
                            <div className="question-wrapper">
                                <h1>{`Questions ${CurrentQuestion + 1}/${Questions.length}`}</h1>
                                <h2>Q.{CurrentQuestion + 1} {Questions[CurrentQuestion].questionText}</h2>
                            </div>
                            <div className="answer-wrapper">
                                {
                                    Questions[CurrentQuestion].answers.map((answer, index) => {
                                        const { answerText, isCorrect } = answer;
                                        return (
                                            <button onClick={() => clickHandler(isCorrect)} className="btn" key={index}>{answerText}</button>
                                        )
                                    })
                                }
                            </div>
                        </>
                }
            </div>
        </div>
    )
}

export default QuizApp
