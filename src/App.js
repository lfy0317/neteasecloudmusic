import React from 'react';
import './assets/css/default/App.css';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import router from './router'

function App() {
  return (
    <div className="App">
      <Router>
          {
            router.map(v=>(
              <Route path={v.to} component={v.component} exact={v.exact} key={v.name}></Route>
            ))
          }
      </Router>
    </div>
  );
}

export default App;