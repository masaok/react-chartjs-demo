import { Routes, Route, Navigate, BrowserRouter as Router } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'

import PieSimple from 'pages/PieSimple'
import PieInGrid from 'pages/PieInGrid'
import PieInGridFlex from 'pages/PieInGridFlex'
import DesktopGridContainer from 'containers/DesktopGridContainer'
import AgencyContainer from 'containers/AgencyContainer'
import AgencyDashboard from 'pages/AgencyDashboard'
import Fiddle from 'pages/Fiddle'
import FiddleJSS from 'pages/FiddleJSS'
import FiddleReact from 'pages/FiddleReact'
import GridAutoFitMinMax from 'grid/GridAutoFitMinMax'

const useStyles = makeStyles(
  theme => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      flex: 1,
      minHeight: '100vh',
      minWidth: '100vw',
      backgroundColor: '#EEE', // this works
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
          <Route path="/fiddle" element={<Fiddle />} />
          <Route path="/fiddle-jss" element={<FiddleJSS />} />
          <Route path="/fiddle-react" element={<FiddleReact />} />

          {/* CSS Grid Examples */}
          <Route path="/autofit" element={<GridAutoFitMinMax />} />

          {/* Full Example - does not shrink  */}
          <Route path="/desktop" element={<DesktopGridContainer />}>
            <Route path="fiddle-jss" element={<FiddleJSS />} />
            <Route path="fiddle-react" element={<FiddleReact />} />
            <Route path="agency">
              <Route element={<AgencyContainer />}>
                <Route path="dashboard" element={<AgencyDashboard />} />
                <Route path="fiddle-react" element={<FiddleReact />} />
              </Route>
            </Route>
          </Route>

          {/* No Agency Container - does not shrink */}
          <Route path="/desktop" element={<DesktopGridContainer />}>
            <Route path="dashboard" element={<AgencyDashboard />} />
          </Route>

          {/* Dashboard Only - does not shrink */}
          <Route path="/dashboard" element={<AgencyDashboard />} />
        </Routes>
      </Router>
    </main>
  )
}

export default App
