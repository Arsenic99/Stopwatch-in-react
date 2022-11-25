import './App.css';
import AppTitle from './AppTitle/AppTitle';
import AppClock from './AppClock/AppClock';
import AppButton from './AppButton/AppButton';
import { useState } from 'react';

function App() {
  const [started, setStarted] = useState(false);
  const [name, setName] = useState("Start");
  const [resetBtn, setResetBtn] = useState(false);
  const start = () => {
    setStarted(prev => !prev);
    if (!started) {
      setResetBtn(false);
    }

    if (!started) {
      setName("Stop");
      setResetBtn(false);
    }
    else {
      setName("Start");
    }
  }
  const reset = () => {
    setResetBtn(true);
    setStarted(false);
    setName("Start");
  }

  return (
    <div className="App">
      <AppTitle />
      <AppClock status={started} again={reset} resetStatus={resetBtn} />
      <AppButton addClass={start} title={name} />
    </div>
  );
}

export default App;
