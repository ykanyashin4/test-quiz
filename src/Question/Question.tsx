import React, { FC, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { incrementQuestionIndex, setUserAnswer } from '../App/slice';
import { IQuestion } from '../App/IQuestion';
import { ButtonPrimary, Headline3, SelectionGroup, Radio, Checkbox, MarginWrapper } from '@sbol/design-system';

interface QuestionProps {
  question: IQuestion;
  questionIndex: number;
  size: number;
  answers: Array<string>;
}

export const Question: FC<QuestionProps> = ({ question, questionIndex, size, answers }) => {
  const dispatch = useDispatch();
  const onNextButtonClicked = useCallback(() => dispatch(incrementQuestionIndex()), [dispatch]);
  const onAnswerClicked = useCallback((value: string) => dispatch(setUserAnswer(value)), [dispatch]);

  return (
    <MarginWrapper verticalMarginDirection='top' verticalMargin='inner' horizontalMarginDirection='left' horizontalMargin='inner' size='h1'>
      <Headline3 indent="inner">Вопрос {questionIndex + 1} из {size}. {question.category}</Headline3>
      <SelectionGroup title={question.question} size="md">
        {answers.map((item: string) =>
          question.type === 'multiple' ?
          <Checkbox
            key={item}
            value={question.correct_answer}
            size="md"
            onChange={() => onAnswerClicked(item)}
          >
          {item}
          </Checkbox>
          :
          <Radio
            key={item}
            name={question.question}
            value={question.correct_answer}
            size="md"
            onChange={(e) => onAnswerClicked(item)}
          >
          {item}
          </Radio>
        )}
      </SelectionGroup>
      <ButtonPrimary title="Далее" size="md" onClick={onNextButtonClicked}/>
    </MarginWrapper>
  );
};