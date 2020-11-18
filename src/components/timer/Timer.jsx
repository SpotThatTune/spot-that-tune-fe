import React, { useEffect, useState } from 'react';


const Timer = () => {
  const [timeLeft, setTimeLeft] = useState(10);
  //   const [multiplier, setMultiplier] = useState(5);
  const [gameStarted, setGameStarted] = useState(false);
  
  const handleTimerReset = () => {
    setGameStarted(false);
    setTimeLeft(30);
  };
  const handleTimerStop = () => {
    setGameStarted(false);
    
  };
  
  const handleTimerStart = () => {
    setGameStarted(true);
    setTimeLeft(timeLeft - 1);
  };

  useEffect(() => {
    if(timeLeft <= 0 || !gameStarted){
      return;
    }
    setTimeout(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);
  }, [timeLeft]);
  //   useEffect(() => counter(), [timeLeft]);
  return (
    <>
      <div>
        00:{timeLeft}
      </div>
      <button onClick={handleTimerStart}>Start</button>
      <button onClick={handleTimerReset}>Reset</button>
      <button onClick={handleTimerStop}>Stop</button>
    </>
    
  );
};

export default Timer;
