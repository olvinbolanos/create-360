import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './Login'
import Home from './Home'
import FourZeroFour from './404'

const my404 = () => {
  return (
    <div>
      <FourZeroFour />
    </div>
  )
}

function App() {
  return (
    <main>
      <Switch>
        <Route exact path="/home" render={() => <Login />} />
        <Route exact path="/" component={Home} />
        <Route component={my404} />
      </Switch>
    </main>
  );
}

export default App;
