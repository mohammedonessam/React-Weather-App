import React, { useEffect, useState } from 'react';


const Weather = (props) => {

    const [timeState, setTimeState] = useState(new Date());
    useEffect(() => {
           setInterval(() => setTimeState(new Date()), 1000);
    }, [timeState]);


    return ( 
        <React.Fragment>
            <div className="weather">
            {props.city&&props.country?
            <div>
                <div className='city'>City:     {props.city}</div>
                <div className='country'>Country:       {props.country}</div>
                <div className='temp'> Temperature:     {props.temperature} &deg;C</div>
                <div className='desc'>Description:      {props.description}</div>
                <div className='date'>Date:     {props.date}</div>
                {/* <div className="time">Time:     {props.state.time}</div> */}
                    <div className='clock'>
                     {timeState.toLocaleString('en-US', {
                        hour: 'numeric',
                        minute: 'numeric',
                        hour12: true,
                        second:"numeric",
                        milliSecond:'numeric'
                    })}

            </div>
            </div>
            : <div className='error'> {props.error?props.error:`enter the city`} </div>    
        }
        </div>
            
        </React.Fragment>
     );
}
 
export default Weather;