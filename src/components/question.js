
import React from 'react';

import './question.css';

export const Question = ({
  text,
  onNext,
  description
}) => {

  const [showDesc, setDesc] = React.useState(false);

  return (
    <div className='question'>

      { showDesc
        ? <div
            onClick={() => setDesc(false)}
            className='description'
          >
            <div className='shader' />
            <span>
              { description }
            </span>
          </div>

        : <div
            className='show-desc-button'
            onClick={() => setDesc(true)}
          >
            ?...
          </div>
      }

      <div className='text'>
        { text }
      </div>
  
      <div
        onClick={onNext}
        className='next'
      >
        Next Question
      </div>
      
    </div>
  );
};