import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import { fetchQuestionsThunk } from './thunks';
import { selectQuestions } from './selector';

function App() {

  const dispatch = useDispatch();
  const { questions } = useSelector(selectQuestions);

  console.log(questions);

  React.useEffect(() => {
    dispatch(fetchQuestionsThunk());
  }, [dispatch]); 

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
