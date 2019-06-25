import React from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

class DateRange extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
      endDate: new Date()
    };
    this.handleChangeStart = this.handleChangeStart.bind(this);
    this.handleChangeEnd = this.handleChangeEnd.bind(this);
    this.selectedDates = this.selectedDates.bind(this);
  }

  handleChangeStart(date) {
    this.setState({
      startDate: date
    });
  }

  handleChangeEnd(date) {
    this.setState({
      endDate: date
    });
  }

  selectedDates() {
    this.props.onSelectDate(this.state);
  }

  render() {
    return (
      <div className="date-range-container">
        <h4>Búsqueda por rango de fechas:</h4>
        <DatePicker
          dateFormat="yyyy/MM/dd"
          selected={this.state.startDate}
          selectsStart
          startDate={this.state.startDate}
          endDate={this.state.endDate}
          onChange={this.handleChangeStart}
        />
        <DatePicker
          dateFormat="yyyy/MM/dd"
          selected={this.state.endDate}
          selectsEnd
          startDate={this.state.startDate}
          endDate={this.state.endDate}
          onChange={this.handleChangeEnd}
          minDate={this.state.startDate}
        />
        <input type="button" onClick={this.selectedDates} value="Consultar"/>
      </div>
    );
  }
}

export default DateRange;