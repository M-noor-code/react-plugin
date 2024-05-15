import React from 'react'

import NewSearch from './component/NewSearch'
import SlugSearch from './component/SlugSearch'
import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {
  return (
   <>

  <BrowserRouter>
   <Routes>
   <Route path="/" element={<NewSearch />}></Route>
   <Route path="/plugin/:slug" element={<SlugSearch />}></Route>
   </Routes>
  </BrowserRouter>
   </>
  )
}

export default App