import React from 'react';
import axios from 'axios';
import DataChart from './DataChart';

class DataResults extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedRangeArray: [],
      startDate: new Date(),
      endDate: new Date()
    };
  }

  creatingEndpoint(dates) {
    const startYear = dates.startDate.slice(0,4);
    const startMonth = dates.startDate.slice(5,7);
    const startDay = dates.startDate.slice(8);
    const endYear = dates.endDate.slice(0,4);
    const endMonth = dates.endDate.slice(5,7);
    const endDay = dates.endDate.slice(8);
    const url = `https://api.sbif.cl/api-sbifv3/recursos_api/dolar/periodo/${startYear}/${startMonth}/dias_i/${startDay}/${endYear}/${endMonth}/dias_f/${endDay}?apikey=9c84db4d447c80c74961a72245371245cb7ac15f&formato=json`;
    return url;
  }

  async componentWillReceiveProps(nextProps) {
    try {
      const dates = nextProps.dates;
      let url = await this.creatingEndpoint(dates);
      let response = await axios.get(url);
      response = response.data.Dolares;
      if (response !== this.state.selectedRangeArray) {
        this.setState({
          selectedRangeArray: response
        });
      }
    } catch (error) {
      console.log(error);
    }
  }

  // datesToShow() {
  //   const options = {
  //     weekday: "long", year: "numeric", month: "long", day: "numeric"
  //   };
  //   let starterDate = this.props.dates.startDate.toLocaleDateString("es-ES", options);
  //   let endingDate = this.props.dates.endDate.toLocaleDateString("es-ES", options);
  //   return <h3>Entre el {starterDate} y el {endingDate}</h3>
  // }

  // getMinY() {
  //   return data.reduce((min, p) => p.y < min ? p.y : min, data[0].y);
  // }

  render() {
    let dolarDataArray = this.state.selectedRangeArray;
    let dolarValues = dolarDataArray.map(data => data.Valor);
    let minDolar = dolarValues.reduce((min, v) => v < min ? v : min, dolarValues[0]);
    let maxDolar = dolarValues.reduce((max, v) => v > max ? v : max, dolarValues[0]);
    
    let dolarNumbers = dolarValues.map(value => parseFloat(value.replace(/,/, '.')));
    let sumDolar = dolarNumbers.reduce((sum, v) => sum + v, 0);
    let averageDolar = sumDolar / dolarNumbers.length;

    return (
      <div className="data-results-container">
        <h3>Rango de fechas a consultar:</h3>
        {/* <h3>Entre el {starterDate} y el {endingDate}</h3> */}
        <h5>Valor promedio para el período: USD$ {averageDolar.toFixed(2)}</h5>
        <h5>Valor máximo alcanzado: USD$ {maxDolar}</h5>
        <h5>Valor mínimo alcanzado: USD$ {minDolar}</h5>
        <DataChart data={dolarNumbers}/>
      </div>
    );
  }
}

export default DataResults;