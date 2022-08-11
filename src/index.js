import React from 'react'
import ReactDOM from 'react-dom/client'
import Footer from './components/footer'
import Header from './components/header'
import List from './components/list'
import './tailwind.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
  <div className="flex flex-col items-center w-screen h-screen ">
    <Header />
    <List />
    <Footer />
  </div>
  </React.StrictMode>
)