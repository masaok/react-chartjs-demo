/**
 * This Github issue explains the problem:
 * https://github.com/chartjs/Chart.js/issues/4156#issuecomment-295180128
 *
 * This is a demo of the working JSFiddle, but in React component form.
 */
import { useEffect } from 'react'
import { Chart, registerables } from 'chart.js'

import { makeStyles } from '@material-ui/core/styles'

import './fiddle.css'

// "registerables" shorthand: https://stackoverflow.com/a/70593795
Chart.register(...registerables)

const useStyles = makeStyles(
  theme => ({
    root: {
      display: 'flex',
      flex: 1,
      // minWidth: 0,
    },
  }),
  { name: 'Fiddle' }
)

const Fiddle = props => {
  const classes = useStyles(props)
  console.log(classes)

  useEffect(() => {
    for (var i = 0; i < 4; ++i) {
      new Chart('chart-' + i, {
        type: 'line',
        data: {
          labels: [0, 1, 2, 3, 4],
          datasets: [
            {
              backgroundColor: 'rgba(0,0,0,0)',
              borderColor: '#5ac3d0',
              label: 'MILESTONE',
              data: [50, 53, 56, 59, 62],
            },
            {
              backgroundColor: 'rgba(255, 99, 132, 0.2)',
              borderColor: 'rgba(255,99,132,1)',
              label: 'UPDATES',
              data: [51, 52, 53, 54, 55],
            },
          ],
        },
      })
    }
  }, [])

  return (
    <div className="grid">
      <div className="grid-group">
        <div className="grid-cell">
          <canvas id="chart-0"></canvas>
        </div>
        <div className="grid-cell">
          <canvas id="chart-1"></canvas>
        </div>
      </div>
      <div className="grid-group">
        <div className="grid-cell">
          <canvas id="chart-2"></canvas>
        </div>
        <div className="grid-cell">
          <canvas id="chart-3"></canvas>
        </div>
      </div>
    </div>
  )
}

export default Fiddle
