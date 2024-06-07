import styles from './TestChart.module.css'
import { Line } from 'react-chartjs-2'
import { 
  Chart as ChartJS, 
  CategoryScale, 
  LinearScale, 
  PointElement, 
  LineElement,
  Tooltip,
  Title, 
  Legend
} from 'chart.js'
import { lineChartData } from './FAKEDATA'

ChartJS.register(
  CategoryScale, 
  LinearScale, 
  PointElement, 
  LineElement,
  Tooltip,
  Title, 
  Legend
)

const Chart = ({ weight }) => {

  let labels: string[] = []
  let data: number[] = []
  
  weight.map((value, key) => {
    labels.push(value.date)
    data.push(value.weight)
  })

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "left"
      },
      title: {
        display: true,
        text: "Weight"
      }
    }
  }

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: "lbs",
        data: data,
        borderColor: "rgb(58, 143, 234)"
      }
    ]
  }

  return (
    <div className={styles.container}>
      <Line options={options} data={chartData} />
    </div>
  )
}

export default Chart