import { useState, useEffect } from "react";

const GetDate = () => {
    const [currentDate, setCurrentDate] = useState('');
    const [currentTime, setCurrentTime] = useState('');
    useEffect(() => {
        const date = new Date();
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

        const formattedDate = `${days[date.getDay()]}, ${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        const formattedTime = `${hours}:${minutes}`;

        setCurrentDate(formattedDate);
        setCurrentTime(formattedTime);
    }, []);

    return (
        <div>
            <div>{currentDate}</div>
            <div>{currentTime}</div>
        </div>
    )
}
export default GetDate