import React from 'react';
import Today from './components/Today';
import DateRange from './components/DateRange';
import DataResults from './components/DataResults';
import DataChart from './components/DataChart';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.handleDateChange = this.handleDateChange.bind(this);
  }

  handleDateChange(data) {
    console.log(data);
  }

  render() {
    return (
      <div className="App">
        <Today />
        <DateRange onSelectDate={this.handleDateChange} />
        <DataResults />
        <DataChart />
      </div>
    );
  }
}

export default App;
