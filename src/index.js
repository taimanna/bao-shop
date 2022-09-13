import React from 'react'
import ReactDOM from 'react-dom/client'
import Footer from './components/footer'
import Header from './components/header'
import List from './components/list'
import './tailwind.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Header />
    <List />
    <Footer />
  </React.StrictMode>
)