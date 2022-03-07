import { useContext, useEffect } from "react";
import { TimerState } from "../../modules/timerStateContext";

const TimerDisplay = () => {
    const {elapsedTime, setElapsedTime, isRunning} = useContext(TimerState)

    const date = new Date(elapsedTime);

    useEffect(() => {
        if (isRunning) {
            setTimeout(() => {
                setElapsedTime(elapsedTime + 10)
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