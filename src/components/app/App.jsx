import '../../styles/App.css';
import { TimerStatus } from '../../modules/timerStatusContext';
import TimerDisplay from '../timerDisplay/TimerDisplay';
import { useState } from 'react';
import TimerToggleButton from '../timerToggleButton/TimerToggleButton';

const App = () => {

    const [timerState, setTimerState] = useState({
        elapsedTime: 0,
        isRunning: false
    });

    return (
        <div className="App">
            <TimerStatus.Provider value={{timerState, setTimerState}}>
                <TimerDisplay/>
                <TimerToggleButton/>
            </TimerStatus.Provider>
        </div>
    )
};

export default App;
