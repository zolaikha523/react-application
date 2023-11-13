import './Chart.css';
import ChartBar from './ChartBar'
const Chart = (props)=> {
    const dataPointsValue = props.chartDataPoints.map((dataPoint)=> dataPoint.value);
    const totalMax = Math.max(...dataPointsValue);

    return(
        <div className='chart'>
           { props.chartDataPoints.map((datapoint)=>{
            console.log(datapoint);
             return <ChartBar key={datapoint.label} label={datapoint.label} value={datapoint.value} totalMax={totalMax}></ChartBar>
           })}
        </div>
    )
}
export default Chart;