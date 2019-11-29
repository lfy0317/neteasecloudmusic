import React from 'react';
import './assets/css/default/App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import router from './router';

function App() {
  return (
    <div className="App">
      <Router>
          <Switch>
          {
            router.map(v=>(
              <Route path={v.to} component={v.component} exact={v.exact} key={v.name}></Route>
            ))
          }
          </Switch>
      </Router>
    </div>
  );
}

export default App;