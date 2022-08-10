import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'react-chartjs-2'
import { makeStyles } from '@material-ui/core/styles'

import clsx from 'clsx'

ChartJS.register(ArcElement, Tooltip, Legend)

const useStyles = makeStyles(
  theme => ({
    root: {
      display: 'grid',
      minHeight: '100vh',
      minWidth: '100vw', // fill viewport width

      gridTemplate: `
        "content" auto
        / auto
      `,

      backgroundColor: 'white',
    },

    // Grid Panels
    gridPanel: {},

    contentGridPanel: {
      gridArea: 'content',
      display: 'flex', // grid exterior, flex interior
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',

      minHeight: '100%',
      minWidth: '100%',
      // padding: theme.spacing(3), // padding will show container background color
      background: theme.palette.primary.gradient,
    },
  }),
  { name: 'PieInGrid' }
)

export const data = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
}

const PieInGrid = props => {
  const classes = useStyles(props)
  return (
    <div className={classes.root}>
      <div className={clsx(classes.gridPanel, classes.contentGridPanel)}>
        <Pie data={data} />
      </div>
    </div>
  )
}

export default PieInGrid
