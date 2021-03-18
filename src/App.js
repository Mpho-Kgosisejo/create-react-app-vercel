import React from 'react';
import './App.css';

import {
  Question
} from './components/question';

import data from './data.json';

function App() {

  const [questions, setQuestions] = React.useState([]);
  const [randomNumber, setRandomNumber] = React.useState(-1);

  const onNext = () => {

    let randomNum = Math.floor(Math.random() * questions.length);

    if (randomNum === randomNumber) {

      randomNum = onNext();
    }

    setRandomNumber(randomNum);
    return randomNum;
  };

  React.useEffect(() => {

    if (Array.isArray(data.questions) && data.questions.length > 0) {

      setQuestions(data.questions);
    }

  }, []);

  const hasStarted = questions.length > 0 && randomNumber >= 0;
  
  return (
    <div className='app'>

      { hasStarted &&

        <Question
          onNext={onNext}
          text={questions[randomNumber].question}
          description={questions[randomNumber].description}
        />
      }

      { !hasStarted &&

        <div
          onClick={onNext}
          className='button-get-question'
        >

          <span>
            Get Question
          </span>

          <span className='sub-title'>
            Answer random questions, and give short insight.
          </span>

        </div>
      }

    </div>
  );
}

export default App;
