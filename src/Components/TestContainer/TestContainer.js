import React from 'react'
import './TestContainer.css'
import TryAgain from '../TryAgain/TryAgain'
import TypingChallengeContainer from '../TypingChallangeContainer/TypingChallangeContainer'

const TestContainer = ({
  selectedParagraph,
  words,
  characters,
  wpm,
  timeRemaining,
  timerStarted,
  testInfo,
  onInputChange,
  startAgain,
}) => {
  return (
    <div className='test-container'>
      {timeRemaining > 0 ? (
        <div data-aos='fade-up' className='typing-challange-container'>
          <TypingChallengeContainer
            timeRemaining={timeRemaining}
            timerStarted={timerStarted}
            words={words}
            characters={characters}
            wpm={wpm}
            selectedParagraph={selectedParagraph}
            testInfo={testInfo}
            onInputChange={onInputChange}
            startAgain={startAgain}
          />
        </div>
      ) : (
        <div className='try-again-container'>
          <TryAgain
            words={words}
            characters={characters}
            wpm={wpm}
            startAgain={startAgain}
          />
        </div>
      )}
    </div>
  )
}

export default TestContainer
