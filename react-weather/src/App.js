
import React, { Component} from 'react';
import './App.css';
import Weather from './components/weather';
import Form from './components/form';
class App extends Component {

    state = { 
      data:{
        city:'',
        country:'',
        temperature:'',
        description:'',
        date:'',
        time:'',
        error:''

      }
    } 
          
// Create a new date & time instance dynamically with JS
 d = new Date();
 newDate = `${this.d.getMonth()+1}.${this.d.getDate()}.${this.d.getFullYear()}`;
//  newDate = new Date()
 
 currentTime=`${this.d.getHours()-12} : ${this.d.getMinutes()} : ${this.d.getSeconds()}`
          
          

  GetWeather =async (e)=>{
      e.preventDefault();
      // call api key
      const apikey = '9f7726934be7d979b2ed7e83c4bcea64';
      const City=e.target.city.value
      const Country=e.target.country.value
      const TheUrl = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${City},${Country}&appid=${apikey}&units=metric`)
      const data= await TheUrl.json();
      if (City && Country) {
        this.setState({
          data:{
            city:data.name,
            country:data.sys.country,
            temperature:Math.round(data.main.temp),
            description:data.weather[0].description,
            date:this.newDate,
            time:this.currentTime
          }
        })
      } else {
        this.setState({
          data:{
            error:data.message
          }
        })
      }
      console.log(data.message);
  }
  render() { 
  return (
    <React.Fragment>
      <div className='App'>
      <div>
      <i className="mainIcon fa-solid fa-snowflake"></i>
      <i className="sconIcon fa-solid fa-temperature-high p-2"/>
      </div>
      <h1 className='header'>React Weather App</h1>
      <Form GetWeather={this.GetWeather}/>
      <Weather 
          data={this.state.data}
          city={this.state.data.city}
          country={this.state.data.country}
          temperature={this.state.data.temperature}
          description={this.state.data.description}
          date={this.state.data.date}
          City={this.GetWeather.City}
          Country={this.GetWeather.Country}
          currentTime={this.currentTime}
          error={this.state.data.error}/>
      </div>
    </React.Fragment>
  );
}}

export default App;
