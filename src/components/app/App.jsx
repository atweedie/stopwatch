import '../../styles/App.css';
import { TimerStatus } from '../../modules/timerStatusContext';
import TimerDisplay from '../timerDisplay/TimerDisplay';
import { useState } from 'react';

const App = () => {

    const [timerState, setTimerState] = useState({
        elapsedTime: 0,
        isRunning: false
    });

    return (
        <div className="App">
            <TimerStatus.Provider value={{timerState, setTimerState}}>
                <TimerDisplay/>
            </TimerStatus.Provider>
        </div>
    )
};

export default App;
