import './ChartBar.css'
const ChartBar = (props) => {
  let chartFillInner = '0%';
  if (props.totalMax > 0){
    chartFillInner = Math.round((props.value/props.totalMax)*100) +'%';
    
  }
console.log(chartFillInner)
  return(
    <div className='chart-bar'>
        <div className='chart-bar__inner'>
            <div className='chart-bar__fill' style={{height:chartFillInner}}></div>
        </div>
        <div className='chart-bar__label'>{props.label}</div>
    </div>
  )
}
export default ChartBar;