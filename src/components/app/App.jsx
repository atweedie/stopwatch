import '../../styles/App.css';
import { TimerState } from '../../modules/timerStateContext';
import TimerDisplay from '../timerDisplay/TimerDisplay';
import { useState } from 'react';
import TimerToggleButton from '../timerToggleButton/TimerToggleButton';
import TimerResetButton from '../timerResetButton/TimerResetButton';

const App = () => {
    const [elapsedTime, setElapsedTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    return (
        <div className="App">
            <TimerState.Provider value={{elapsedTime, setElapsedTime, isRunning, setIsRunning}}>
                <TimerDisplay/>
                <TimerToggleButton/>
                <TimerResetButton/>
            </TimerState.Provider>
        </div>
    )
};

export default App;
