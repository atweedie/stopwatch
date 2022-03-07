import { useContext } from "react";
import { TimerState } from "../../modules/timerStateContext";
import {TIMER_TICK_DURATION_IN_MS} from "../../constants";

const TimerResetButton = () => {
    const {setElapsedTime, setIsRunning} = useContext(TimerState);

    const resetTimer = () => {
        setIsRunning(false);

        setTimeout(() => {setElapsedTime(0)}, TIMER_TICK_DURATION_IN_MS)
    }

    return (
        <button onClick={resetTimer}>
            Reset
        </button>
    )
}

export default TimerResetButton