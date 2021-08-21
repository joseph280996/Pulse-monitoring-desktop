import * as React from 'react'
import { useHistory } from 'react-router-dom'
import useAuthState from '../../common/utils/hooks/useAuthState'
import FinishComponent from '../../components/pages/Finish'

const Finish: React.FC = () => {
  const { setAuth } = useAuthState()
  const history = useHistory()
  const onEndClick = () => {
    if (setAuth) setAuth((auth) => ({ ...auth, isSignedIn: false }))
    history.push('/')
  }
  return <FinishComponent onEndClick={onEndClick} />
}

export default Finish
