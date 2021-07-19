import React, { FC } from 'react';
import { IQuestion } from '../App/IQuestion';
import { Headline4, Typography, MarginWrapper } from '@sbol/design-system';

interface ResultsProps {
  questions: Array<IQuestion>;
  userAnswers: Array<string>;
}

export const Results: FC<ResultsProps> = ({ questions, userAnswers }) => {
  const difficultyMap = { 'easy': 0, 'medium': 1, 'hard': 2 };

  return (
    <MarginWrapper verticalMarginDirection='top' verticalMargin='inner' horizontalMarginDirection='left' horizontalMargin='inner' size='h1'>
      {questions.slice().sort((a: IQuestion, b: IQuestion) => difficultyMap[a.difficulty] > difficultyMap[b.difficulty] ? 1 : -1).map((item: IQuestion) =>
        <div key={item.question}>
          <Headline4 indent="open">{item.difficulty}. {item.question}:</Headline4>
          <Typography size="md">Правильный ответ: {item.correct_answer}</Typography>
          <Typography size="md">
            Ваш ответ: {userAnswers[questions.findIndex((questionsItem: IQuestion) => item.correct_answer === questionsItem.correct_answer)]}
          </Typography>
        </div>
      )}
    </MarginWrapper>
  );
};