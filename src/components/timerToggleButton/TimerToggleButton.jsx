import { useContext } from "react"
import { TimerStatus } from "../../modules/timerStatusContext"

const toggleTimer = (timerState, setTimerState) => {
    setTimerState({
        ...timerState,
        isRunning: !timerState.isRunning
    })
}

const TimerToggleButton = () => {
    const {timerState, setTimerState} = useContext(TimerStatus);

    return (
        <button onClick={() => toggleTimer(timerState, setTimerState)}>
            {timerState.isRunning ? 'Stop' : 'Start'}
        </button>
    )
}

export default TimerToggleButton