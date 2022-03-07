import { useContext, useEffect } from "react";
import { TimerState } from "../../modules/timerStateContext";
import {TIMER_TICK_DURATION_IN_MS} from "../../constants";

const TimerDisplay = () => {
    const {elapsedTime, setElapsedTime, isRunning} = useContext(TimerState)

    const date = new Date(elapsedTime);

    useEffect(() => {
        if (isRunning) {
            setTimeout(() => {
                setElapsedTime(elapsedTime + TIMER_TICK_DURATION_IN_MS)
            }, TIMER_TICK_DURATION_IN_MS);
        }
    })

    return (
        <h1 id="stopwatch-elapsed">
            {date.toISOString().substring(12,22)}
        </h1>
    )
}
    

export default TimerDisplay;