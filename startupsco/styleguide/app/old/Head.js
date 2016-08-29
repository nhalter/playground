// Head.js
import React from 'react'

const Head = ({ title }) => (
  <head>
    <meta charSet='utf-8' />
    <title>{title}</title>
    <link href='css/reset.css' rel='stylesheet' />
    <link href='css/style.css' rel='stylesheet' />
    <meta name='viewport' content='width=device-width, initial-scale=1' />
    <script src="js/modernizr.custom.js"></script>
    <script src="https://use.typekit.net/jnd3ufy.js"></script>
  </head>
)

export default Head
