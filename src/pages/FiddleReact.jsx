/**
 * This Github issue explains the problem:
 * https://github.com/chartjs/Chart.js/issues/4156#issuecomment-295180128
 *
 * This is a demo of the working JSFiddle, but in React component form.
 * Also, using the React library wrapper
 */
import { useEffect } from 'react'
import { Chart, registerables } from 'chart.js'

import { Line } from 'react-chartjs-2'

import { makeStyles } from '@material-ui/core/styles'

// "registerables" shorthand: https://stackoverflow.com/a/70593795
Chart.register(...registerables)

const useStyles = makeStyles(
  theme => ({
    root: {
      display: 'flex',
      flex: 1,
      // minWidth: 0,
    },

    grid: {
      border: '2px solid #8ff',
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      width: '100%',
    },

    gridGroup: {
      border: '2px solid #f8f',
      margin: 8,
      display: 'flex',
      flex: 1,
    },

    gridCell: {
      border: '2px solid #ff8',
      margin: 8,
      minWidth: 0,
      flex: 1,
    },
  }),
  { name: 'FiddleReact' }
)

const FiddleReact = props => {
  const classes = useStyles(props)

  const data = {
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
  }

  return (
    <div className={classes.grid}>
      <div className={classes.gridGroup}>
        <div className={classes.gridCell}>
          <Line data={data} />
        </div>
        <div className={classes.gridCell}>
          <Line data={data} />
        </div>
      </div>
      <div className={classes.gridGroup}>
        <div className={classes.gridCell}>
          <Line data={data} />
        </div>
        <div className={classes.gridCell}>
          <Line data={data} />
        </div>
      </div>
    </div>
  )
}

export default FiddleReact
