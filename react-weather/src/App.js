
import React, { Component} from 'react';
import './App.css';
import Weather from './components/weather';
import Form from './components/form';
class App extends Component {

    state = { 
      city:'',
      country:'',
      temperature:'',
      description:'',
      date:'',
      time:''
    } 
          
// Create a new date & time instance dynamically with JS
 d = new Date();
 newDate = `${this.d.getMonth()+1}.${this.d.getDate()}.${this.d.getFullYear()}`;
//  newDate = new Date()
 componentDidMount(){
   setInterval(() => {
     this.setState({time:this.currentTime})
   }, 0);
   return this.state.time
 }
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
          city:data.name,
          country:data.sys.country,
          temperature:Math.round(data.main.temp),
          description:data.weather[0].description,
          date:this.newDate,
          time:this.currentTime
        })
      } else {
        return data.massege
      }
      console.log(data);
  }
  render() { 
  return (
    <React.Fragment>
      <div className='App'>
      <div>
      <i className="mainIcon fa-solid fa-snowflake"></i>
      <i className="fa-solid fa-temperature-high p-2"/>
      </div>
      <h1 className='header'>React Weather App</h1>
      <Form GetWeather={this.GetWeather}/>
      <Weather 
          state={this.state}
          city={this.state.city}
          country={this.state.country}
          temperature={this.state.temperature}
          description={this.state.description}
          date={this.state.date}
          City={this.GetWeather.City}
          Country={this.GetWeather.Country}
          currentTime={this.currentTime}/>
      </div>
    </React.Fragment>
  );
}}

export default App;
