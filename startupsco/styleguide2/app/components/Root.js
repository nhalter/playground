// Root.js
import React from 'react'
import Head from './Head'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'

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
          <script src="public/js/main.js"></script>
          <script src="https://cdn.jsdelivr.net/scrollreveal.js/3.3.1/scrollreveal.min.js"></script>
          <script src="public/js/wave.js"></script>
          <script src="public/js/cbpFWTabs.js"></script>
          <script src="public/js/tabs.js"></script>
        </body>
      </html>
    )
  }
}

export default Root
