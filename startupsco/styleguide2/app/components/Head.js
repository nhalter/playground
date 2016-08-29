// Head.js
import React from 'react'

const Head = ({ title }) => (
  <head>
    <meta charSet='utf-8' />
    <title>{title}</title>
    <link href='public/css/reset.css' rel='stylesheet' />
    <link href='public/css/style.css' rel='stylesheet' />
    <meta name='viewport' content='width=device-width, initial-scale=1' />
    <script src="public/js/modernizr.custom.js"></script>
    <script src="https://use.typekit.net/jnd3ufy.js"></script>
    <script src="public/js/tk.js"></script>
  </head>
)

export default Head
