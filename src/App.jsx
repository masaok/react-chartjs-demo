import { Routes, Route, Navigate, BrowserRouter as Router } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'

import PieSimple from 'pages/PieSimple'
import PieInGrid from 'pages/PieInGrid'
import PieInGridFlex from 'pages/PieInGridFlex'
import DesktopGridContainer from 'containers/DesktopGridContainer'
import AgencyContainer from 'containers/AgencyContainer'
import AgencyDashboard from 'pages/AgencyDashboard'

const useStyles = makeStyles(
  theme => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      flex: 1,
      minHeight: '100vh',
      minWidth: '100vw',
      backgroundColor: 'blue', // this works
    },
  }),
  { name: 'App' }
)

const App = props => {
  const classes = useStyles(props)
  return (
    <main className={classes.root}>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/pie-simple" />} />
          <Route path="/pie-simple" element={<PieSimple />} />
          <Route path="/pie-grid" element={<PieInGrid />} />
          <Route path="/pie-grid-flex" element={<PieInGridFlex />} />

          {/* Full Example (not working) */}
          <Route path="/desktop" element={<DesktopGridContainer />}>
            <Route path="agency">
              <Route element={<AgencyContainer />}>
                <Route path="dashboard" element={<AgencyDashboard />} />
              </Route>
            </Route>
          </Route>

          {/* No Agency Container */}
          <Route path="/desktop" element={<DesktopGridContainer />}>
            <Route path="dashboard" element={<AgencyDashboard />} />
          </Route>

          {/* Dashboard Only */}
          <Route path="/dashboard" element={<AgencyDashboard />} />
        </Routes>
      </Router>
    </main>
  )
}

export default App
