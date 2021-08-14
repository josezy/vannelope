
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Landing } from './views/landing'
import { Navbar } from './views/navbar'

export const Routes = () => <>
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route path="/">
        <Landing />
      </Route>
    </Switch>
  </BrowserRouter>
</>
