import React from 'react'

import { Helmet } from 'react-helmet'

import './error404.css'

const Error404 = (props) => {
  return (
    <div className="error404-container">
      <Helmet>
        <title>Error404 - AeroxWebApp</title>
        <meta property="og:title" content="Error404 - AeroxWebApp" />
      </Helmet>
      <div className="error404-container1">
        <span className="error404-text">
          <span>Oops, that&apos;s an error..</span>
          <br></br>
          <span>ERROR 404</span>
          <br></br>
        </span>
      </div>
    </div>
  )
}

export default Error404
