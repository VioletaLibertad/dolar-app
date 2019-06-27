import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

class DataChart extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let data = this.props.data;

    let dataWithNumbers = data.map(value => {
      return {
        Fecha: value.Fecha,
        Valor: parseFloat(value.Valor.replace(/,/, '.'))
      };
    });

    return (
      <div className="chart-container">
        <LineChart width={600} height={300} data={dataWithNumbers} margin={{top: 5, right: 30, left: 20, bottom: 5}}>
          <CartesianGrid strokeDasharray="3 3"/>
          <XAxis dataKey="Fecha"/>
          <YAxis minTickGap={0} domain={['dataMin - 50', 'dataMax + 50']}/>
          <Tooltip/>
          <Line type="monotone" dataKey="Valor" stroke="#82ca9d" activeDot={{r:8}} />
        </LineChart>
      </div>
    );
  }
}

export default DataChart;