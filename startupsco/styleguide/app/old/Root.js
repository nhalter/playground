// Root.js
import { Router, Route, hashHistory } from 'react-router'
import React from 'react'
import Head from './Head'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import About from './About'

class Root extends React.Component {
  render () {
    return (
      <html>
        <Head title='Static React Demo' />
        <body id="top">
          <Header />
          <Main />
          <Footer />
          <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
          <script src="js/main.js"></script>
          <script src="https://cdn.jsdelivr.net/scrollreveal.js/3.3.1/scrollreveal.min.js"></script>
          <script src="js/cbpFWTabs.js"></script>
          <script src="js/tabs.js"></script>
          <script src="js/wave.js"></script>
        </body>
      </html>
    )
  }
}

export default Root
