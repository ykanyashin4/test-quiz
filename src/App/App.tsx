import React from 'react';
import './index.css'
import { Loading } from '../Loading/Loading';
import { Question } from '../Question/Question';
import { Results } from '../Results/Results';
import { useSelector, useDispatch } from 'react-redux';
import { fetchQuestionsThunk } from './thunks';
import { selectQuestions } from './selector';

function App() {
  const dispatch = useDispatch();
  const { questions } = useSelector(selectQuestions);

  React.useEffect(() => {
    dispatch(fetchQuestionsThunk());
  }, [dispatch]); 

  return (
    <div>
      {(questions.loading === 'idle' || questions.loading === 'loading') && <Loading />}
      {questions.loading === 'loaded' && 
        <Question
          question={questions.questions[questions.questionIndex]}
          questionIndex={questions.questionIndex}
          size={questions.questions.length}
          answers={questions.answers[questions.questionIndex]}
        />
      }
      {questions.loading === 'finished' && <Results questions={questions.questions} userAnswers={questions.userAnswers}/>}
    </div>
  );
}

export default App;
