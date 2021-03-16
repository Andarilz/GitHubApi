import './App.css';
import React from 'react'
import {Navbar} from './components/Navbar/Navbar'
import {Home} from "./pages/Home"
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {About} from "./pages/About";
import {Profile} from "./pages/Profile";
import {Alert} from "./components/Alert/Alert";
import {MyAlertState} from "./context/alert/alertState";
import {GitHubState} from "./context/gitHub/gitHubState";

function App() {
  return (
     <GitHubState>
          <MyAlertState>
              <BrowserRouter>
                  <Navbar />
                <div className="container pt-4">
                    <Alert/>
                    <Switch>
                        <Route path='/' component={Home} exact />
                        <Route path='/about' component={About} />
                        <Route path='/profile/:name' component={Profile} />
                    </Switch>
                </div>
              </BrowserRouter>
          </MyAlertState>
     </GitHubState>
  );
}

export default App;
