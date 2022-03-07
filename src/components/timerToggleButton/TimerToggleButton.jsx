import { useContext } from "react"
import { TimerState } from "../../modules/timerStateContext"

const TimerToggleButton = () => {
    const {isRunning, setIsRunning} = useContext(TimerState);

    return (
        <button onClick={() => setIsRunning(!isRunning)}>
            {isRunning ? 'Stop' : 'Start'}
        </button>
    )
}

export default TimerToggleButton