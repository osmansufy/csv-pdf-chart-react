import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
import { useSelector } from 'react-redux';

const Charts =()=>{ 
    const resultsData=useSelector(state=>state.fileResults.dataFromCsv)
    console.log(resultsData);
    return (
  <LineChart width={900} height={500} data={resultsData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
    <Line type="monotone" dataKey="X" stroke="#8884d8" />
    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
    <XAxis dataKey="KP" />
    <YAxis type="number" domain={['dataMin', 'dataMax']} />
  </LineChart>
)
    }

export default Charts