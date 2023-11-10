import GetDate from "../GetDate/index"
import classes from "./style.module.scss"
const DataFetcher = (props) => {
    const formatDate = (unixTimestamp) => {
        const date = new Date(unixTimestamp * 1000);
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        const formattedDateStr = `${hours}.${minutes}`;
        return (formattedDateStr)
    }
    return (
        <div className={classes.infoContainer}>
            <div className={classes.infoArea}>
                <GetDate />
                <div className={classes.location}> <div>{props.city},</div>
                    <div>{props.country}</div></div>
                {props.data.weather.map((item, index) => (
                    <div className={classes.infoLeft}>
                        <div className={classes.main} key={index} >
                            <img alt="icon" className='icon' src={"http://openweathermap.org/img/wn/" + item.icon + ".png"}></img>
                            <div className={classes.temp}>{Math.round(props.data.main.temp)}°C</div>
                        </div>
                        <div>{item.main}</div>
                    </div>
                ))}

                <div className={classes.informations}>
                    <div className={classes.information}> <div><div>Sunrise </div><div> {formatDate(props.data.sys.sunrise)}</div></div><img src='/images/sunrise.png'></img></div>
                    <div className={classes.information}> <div><div>Sunset</div><div> {formatDate(props.data.sys.sunset)}</div></div><img src='/images/sunset.png'></img></div>
                    <div className={classes.information}> <div><div>Feels Like </div><div> {Math.round(props.data.main.feels_like)}°C</div></div><svg height="32" viewBox="0 0 32 32" width="35" xmlns="http://www.w3.org/2000/svg"><path d="m26 30h-4a2.0059 2.0059 0 0 1 -2-2v-7a2.0059 2.0059 0 0 1 -2-2v-6a2.9465 2.9465 0 0 1 3-3h6a2.9465 2.9465 0 0 1 3 3v6a2.0059 2.0059 0 0 1 -2 2v7a2.0059 2.0059 0 0 1 -2 2zm-5-18a.9448.9448 0 0 0 -1 1v6h2v9h4v-9h2v-6a.9448.9448 0 0 0 -1-1z" /><path d="m24 9a4 4 0 1 1 4-4 4.0118 4.0118 0 0 1 -4 4zm0-6a2 2 0 1 0 2 2 2.0059 2.0059 0 0 0 -2-2z" /><path d="m10 20.1839v-8.1839h-2v8.1839a3 3 0 1 0 2 0z" /><path d="m9 30a6.9931 6.9931 0 0 1 -5-11.8892v-11.1108a5 5 0 0 1 10 0v11.1108a6.9931 6.9931 0 0 1 -5 11.8892zm0-26a3.0033 3.0033 0 0 0 -3 3v11.9834l-.332.2983a5 5 0 1 0 6.664 0l-.332-.2983v-11.9834a3.0033 3.0033 0 0 0 -3-3z" /><path d="m0 0h32v32h-32z" fill="none" /></svg></div>
                    <div className={classes.information}><div><div>Min </div> <div> {Math.round(props.data.main.temp_min)}°C</div></div><img src='/images/low-temp.png'></img></div>
                    <div className={classes.information}> <div><div>Max </div>   <div>{Math.round(props.data.main.temp_max)}°C</div></div><img src='/images/high-temp.png'></img></div>
                    <div className={classes.information}> <div><div>Humidity </div> <div>%{Math.round(props.data.main.humidity)}</div></div><img src='/images/humidity.png'></img></div>
                </div>
            </div ></div>
    )

};
export default DataFetcher