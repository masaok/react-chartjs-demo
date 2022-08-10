import clsx from 'clsx'

import { makeStyles } from '@material-ui/core/styles'
import PieSimple from './PieSimple'

const useStyles = makeStyles(
  theme => ({
    root: {
      display: 'grid',
      // minHeight: '100%',
      // minWidth: '100%',
      // https://stackoverflow.com/questions/45870323/does-css-grid-have-a-flex-grow-function
      gridTemplate: `
        "header" auto  /* height set by content */
        "content" 1fr
        / auto
      `,
      backgroundColor: '#DFD',
    },

    // Grid Panels
    gridPanel: {
      // padding: theme.spacing(1),
    },

    headerGridPanel: {
      gridArea: 'header',
      display: 'flex',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },

    contentGridPanel: {
      gridArea: 'content',
      display: 'flex',
      flex: 1,
      minWidth: 0,
    },

    chart: {
      display: 'flex',
      flex: 1,
      minWidth: 0,
    },
  }),
  { name: 'AgencyDashboard' }
)

const AgencyDashboard = props => {
  const classes = useStyles(props)

  return (
    <div className={classes.root}>
      <div className={clsx(classes.gridPanel, classes.headerGridPanel)}>
        AGENCY DASHBOARD HEADER
      </div>

      <div className={clsx(classes.gridPanel, classes.contentGridPanel)}>
        <div className={classes.chart}>
          <PieSimple />
        </div>
      </div>
    </div>
  )
}

export default AgencyDashboard
