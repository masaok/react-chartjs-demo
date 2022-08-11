/**
 * RequesterDashboard-specific Grid Container
 */
import { Outlet } from 'react-router-dom'

import clsx from 'clsx'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(
  theme => ({
    root: {
      display: 'grid',
      minHeight: '100%', // Grid height should fill container
      minWidth: '100%', // Grid width should fill container
      // height: '100vh',
      // overflowY: 'scroll',

      gridTemplate: `
        "header" auto  /* height set by content */
        "content" 1fr
        / auto
      `,

      backgroundColor: 'purple',
    },

    // Grid Panels
    gridPanel: {
      // padding: theme.spacing(2),
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
      flexDirection: 'column',
      alignItems: 'center',
      // overflow: 'hidden',
      overflow: 'auto',
    },
  }),
  { name: 'AgencyContainer' }
)

const AgencyContainer = props => {
  const classes = useStyles(props)

  return (
    <div className={classes.root}>
      <div className={clsx(classes.gridPanel, classes.headerGridPanel)}>
        AGENCY CONTAINER HEADER
      </div>
      <div className={clsx(classes.gridPanel, classes.contentGridPanel)}>
        <Outlet />
      </div>
    </div>
  )
}

export default AgencyContainer
