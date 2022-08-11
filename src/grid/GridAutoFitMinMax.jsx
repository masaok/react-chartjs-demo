import { Chart, registerables } from 'chart.js'

import { makeStyles } from '@material-ui/core/styles'

Chart.register(...registerables)

const useStyles = makeStyles(
  theme => ({
    root: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(10rem, auto))',
    },

    item: {
      // display: 'flex',
      // flex: 1,
      backgroundColor: 'pink',
      margin: theme.spacing(1),
    },
  }),
  { name: 'GridAutoFitMinMax' }
)

const GridAutoFitMinMax = props => {
  const classes = useStyles(props)
  return (
    <div className={classes.root}>
      <div className={classes.item}>1</div>
      <div className={classes.item}>2</div>
      <div className={classes.item}>3</div>
      <div className={classes.item}>4</div>
      <div className={classes.item}>5</div>
    </div>
  )
}

export default GridAutoFitMinMax
