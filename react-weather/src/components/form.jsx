import React from 'react';

const Form = (props) => {
    return ( 
        <React.Fragment>
            <form onSubmit={props.GetWeather} className="col-4">
                <div >
                    <input name='city' type="text" className="form-control" placeholder="City..." aria-label="City"/>
                </div>
                <div >
                    <input name='country' type="text" className="form-control" placeholder="Country..." aria-label="Country"/>
                </div>
                    <button className='btnweth' >Get Weather</button>
            </form>
        </React.Fragment>
     );
}
 
export default Form;