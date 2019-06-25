import React from 'react';
import axios from 'axios';

class Today extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dolarToday: "",
      dateToday: ""
    };
  }

  async componentDidMount() {
    try {
      let response = await axios.get('https://api.sbif.cl/api-sbifv3/recursos_api/dolar?apikey=9c84db4d447c80c74961a72245371245cb7ac15f&formato=json');
      response = response.data.Dolares[0];
      this.setState({
        dolarToday: response.Valor,
        dateToday: response.Fecha
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <div className="today-container">
        <h1>Dolar-App</h1>
        <h3>Tu fuente de información confiable</h3>
        <h4>El valor del dólar para hoy {this.state.dateToday} es:</h4>
        <h4>{this.state.dolarToday}</h4>
      </div>
    );
  }
}

export default Today;