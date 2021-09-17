import React from 'react'
import {Switch, Route } from 'react-router-dom'
import Header from './components/header/header.component'
import Footer from './components/footer/footer.component'
import Homepage from './pages/home/home.page'
import About from './pages/about/about.page'
import GetInvolved from './pages/getInvolved/getInvolved.page'
import ServiceLive from './pages/serviceLive/serviceLive'
import Contact from './pages/contact/contact.page'

import './App.css'

const App = () => {
  return (
    <div className="app">
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/about' component={About} />
        <Route path='/getInvolved' component={GetInvolved} />
        <Route path='/serviceLive' component={ServiceLive} />
        <Route path='/contact' component={Contact} />
      </Switch>
      <Footer />
    </div>
  )
}

export default App
