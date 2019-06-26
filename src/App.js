import React from 'react';
import Today from './components/Today';
import DateRange from './components/DateRange';
import DataResults from './components/DataResults';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
      endDate: new Date()
    };

    this.handleDateChange = this.handleDateChange.bind(this);
  }

  handleDateChange(data) {
    console.log(data);
    const options = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit"
    };
    const startDate = data.startDate.toLocaleDateString("sq-SE", options);
    const endDate = data.endDate.toLocaleDateString("sq-AL", options);
    this.setState({
      startDate: startDate,
      endDate: endDate
    });
  }

  render() {
    return (
      <div className="App">
        <Today />
        <DateRange onSelectDate={this.handleDateChange} />
        <DataResults dates={this.state} />
      </div>
    );
  }
}

export default App;
