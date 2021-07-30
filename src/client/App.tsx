import * as React from 'react'
import { HashRouter as Router } from 'react-router-dom'
import ContextWrapper from './components/ContextWrapper'
import mainPages from './containers/pages/mainPages'
import Routes from './router'

export default function App(): React.ReactElement {
  return (
    <ContextWrapper>
      <Router>
        <Routes routes={mainPages} />
      </Router>
    </ContextWrapper>
  )
}
