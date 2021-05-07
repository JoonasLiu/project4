
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import {Home} from './components/Home'
import {AddHenkilo} from './components/AddHenkilo'
import {EditHenkilo} from './components/EditHenkilo'
import {GlobalProvider} from './context/GlobalState'

import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    <div style={{maxWidth: "30rem", margin: "4rem auto"}}>
      <GlobalProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/add" component={AddHenkilo} />
            <Route path="/edit/:id" component={EditHenkilo} />
          </Switch>
        </Router>
      </GlobalProvider>
      
    </div>
  )
}



export default App
