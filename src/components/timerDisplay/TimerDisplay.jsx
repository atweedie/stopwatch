import { useEffect, useState } from "react";

const TimerDisplay = () => {
    const [elapsedTime, setElapsedTime] = useState(0);

    const date = new Date(elapsedTime);

    useEffect(() => {
        setTimeout(() => {
            setElapsedTime(elapsedTime + 10)
        }, 10);
    })

    return (
        <h1>
            {date.toISOString().substring(12,22)}
        </h1>
    )
}
    

export default TimerDisplay;