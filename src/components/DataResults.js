import React from 'react';
import axios from 'axios';

class DataResults extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   startDate: new Date(),
    //   endDate: new Date()
    // };
  }

  componentDidUpdate() {
    const dates = this.props.dates;
    this.fetchingDolarRangeData(dates);
  }

  fetchingDolarRangeData(dates) {
    const startYear = dates.startDate.slice(0,4);
    const startMonth = dates.startDate.slice(5,7);
    const startDay = dates.startDate.slice(8);
    const endYear = dates.endDate.slice(0,4);
    const endMonth = dates.endDate.slice(5,7);
    const endDay = dates.endDate.slice(8);
    const url = `https://api.sbif.cl/api-sbifv3/recursos_api/dolar/periodo/${startYear}/${startMonth}/dias_i/${startDay}/${endYear}/${endMonth}/dias_f/${endDay}?apikey=9c84db4d447c80c74961a72245371245cb7ac15f&formato=json`;
    axios.get(url)
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.log(error);
    }); 
  }

  render() {
    return (
      <div className="data-results-container">
        <h3>Tu data bien valiosa</h3>
      </div>
    );
  }
}

export default DataResults;