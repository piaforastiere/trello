import React from 'react'
import Head from 'next/head'

import "../public/index.scss"

import { Nav } from '../components'

const Home = () => {

  return(
    <>
    <Head>
      <meta charset="utf-8" />
      <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      <meta
        name="description"
        content="Web site created using create-react-app"
      />
      <link rel="apple-touch-icon" href="logo192.png" />

      <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" />
      <link href="https://fonts.googleapis.com/css?family=Raleway:400,900|Roboto:300,400,700&display=swap" rel="stylesheet" />
      <title>MERNTasks</title>
    </Head>

    <Nav />

    </>
  )
}

export default Home
