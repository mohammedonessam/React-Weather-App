import React, { useEffect, useState } from 'react';


const Weather = (props) => {

    const [dateState, setDateState] = useState(new Date());
    useEffect(() => {
           setInterval(() => setDateState(new Date()), 1000);
    }, [dateState]);

    return ( 
        <React.Fragment>
            <div className="weather">
        <div className='city'>City:     {props.city}</div>
        <div className='country'>Country:       {props.country}</div>
        <div className='temp'> Temperature:     {props.temperature} &deg;C</div>
        <div className='desc'>Description:      {props.description}</div>
        <div className='date'>Date:     {props.date}</div>
        {/* <div className="time">Time:     {props.state.time}</div> */}
            <div className='clock'>
             {dateState.toLocaleString('en-UK', {
                hour: 'numeric',
                minute: 'numeric',
                hour12: true,
                second:"numeric",
                milliSecond:'numeric'
            })}
            </div>
            </div>
        </React.Fragment>
     );
}
 
export default Weather;