import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Header/Header'
import './index.css'
<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap')
</style>
import Main from './Main/Main'
import Footer from './Footer/Footer'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <Main/>
    <Footer/>
  </React.StrictMode>,
)
