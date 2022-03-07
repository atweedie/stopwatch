import { useContext, useEffect } from "react";
import { TimerStatus } from "../../modules/timerStatusContext";

const TimerDisplay = () => {
    const {timerState, setTimerState} = useContext(TimerStatus)

    const date = new Date(timerState.elapsedTime);

    useEffect(() => {
        if (timerState.isRunning) {
            setTimeout(() => {
                setTimerState({
                    elapsedTime: timerState.elapsedTime + 10,
                    isRunning: timerState.isRunning
                })
            }, 10);
        }
    })

    return (
        <h1>
            {date.toISOString().substring(12,22)}
        </h1>
    )
}
    

export default TimerDisplay;