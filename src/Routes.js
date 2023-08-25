import { Routes as Switch, Route, BrowserRouter } from 'react-router-dom'
import { telaLogin } from 'views'

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" element={<telaLogin />} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
